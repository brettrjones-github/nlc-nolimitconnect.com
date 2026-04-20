(function () {

  var gitlabBase = 'https://gitlab.com/api/v4/projects/nolimitcode%2Fnolimitconnect/packages/generic/download-index/v1/';
  var platforms = [
    { keys: ['windows'], title: 'Windows', notes: 'NSIS installer for Windows x64.', icon: '/assets/icons/icon-windows.svg' },
    { keys: ['linux'], title: 'Linux', notes: 'Debian package for Linux x64.', icon: '/assets/icons/icon-tux.svg' },
    { keys: ['linux-arm64', 'linux-arm', 'linux-aarch64'], title: 'Linux (ARM64)', notes: 'Debian package for Linux ARM64, including Raspberry Pi and Orange Pi devices.', icon: '/assets/icons/icon-orange-pi.svg' },
    { keys: ['android-signed'], title: 'Android', notes: 'Signed APK intended for release distribution.', icon: '/assets/icons/icon-android.svg' },
    { keys: ['flatpak-x64', 'flatpak-amd64', 'flatpak'], title: 'Flatpak (x64)', notes: 'Flatpak bundle for Linux x64 desktops with Flatpak support.', icon: '/assets/icons/icon-ubuntu.svg' },
    { keys: ['flatpak-arm64', 'flatpak-arm', 'flatpak-aarch64'], title: 'Flatpak (ARM64)', notes: 'Flatpak bundle for Linux ARM64 desktops with Flatpak support.', icon: '/assets/icons/icon-raspberry-pi.svg' }
  ];

  function formatUtc(isoUtc) {
    if (!isoUtc) {
      return 'Unknown';
    }

    var date = new Date(isoUtc);
    if (Number.isNaN(date.getTime())) {
      return 'Unknown';
    }

    return date.toISOString().replace('T', ' ').replace('.000Z', ' UTC');
  }

  function createPlatformSection(platform, payload, errorMessage) {
    var section = document.createElement('section');
    section.className = 'download-card';

    var headingWrap = document.createElement('div');
    headingWrap.className = 'download-card-title';

    if (platform.icon) {
      var icon = document.createElement('img');
      icon.src = platform.icon;
      icon.alt = platform.title + ' icon';
      icon.className = 'download-card-icon';
      icon.onerror = function () {
        this.style.display = 'none';
      };
      headingWrap.appendChild(icon);
    }

    var heading = document.createElement('h2');
    heading.textContent = platform.title;
    headingWrap.appendChild(heading);
    section.appendChild(headingWrap);

    var list = document.createElement('ul');

    if (payload && payload.artifact && payload.sha256) {
      var packageItem = document.createElement('li');
      packageItem.appendChild(document.createTextNode('Latest package: '));
      var packageLink = document.createElement('a');
      packageLink.href = payload.artifact.url;
      packageLink.textContent = payload.artifact.name;
      packageItem.appendChild(packageLink);
      list.appendChild(packageItem);

      var hashItem = document.createElement('li');
      hashItem.appendChild(document.createTextNode('SHA-256: '));
      var hashLink = document.createElement('a');
      hashLink.href = payload.sha256.url;
      hashLink.textContent = payload.sha256.name;
      hashItem.appendChild(hashLink);
      list.appendChild(hashItem);

      var updatedItem = document.createElement('li');
      updatedItem.textContent = 'Last updated: ' + formatUtc(payload.publishedAtUtc);
      list.appendChild(updatedItem);

      var notesItem = document.createElement('li');
      notesItem.textContent = 'Notes: ' + (payload.notes || platform.notes);
      list.appendChild(notesItem);
    } else {
      var missingItem = document.createElement('li');
      missingItem.textContent = 'No deployed package yet.';
      list.appendChild(missingItem);

      var platformNotesItem = document.createElement('li');
      platformNotesItem.textContent = 'Notes: ' + platform.notes;
      list.appendChild(platformNotesItem);

      if (errorMessage) {
        var errItem = document.createElement('li');
        errItem.textContent = 'Metadata status: ' + errorMessage;
        list.appendChild(errItem);
      }
    }

    section.appendChild(list);
    return section;
  }

  function tryLoadPlatformByKeys(keys, index) {
    if (index >= keys.length) {
      throw new Error('HTTP 404');
    }

    var key = keys[index];
    var url = gitlabBase + encodeURIComponent(key) + '.json';

    return fetch(url, { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) {
          if (response.status === 404) {
            return tryLoadPlatformByKeys(keys, index + 1);
          }
          throw new Error('HTTP ' + response.status);
        }
        return response.json().then(function (json) {
          return {
            payload: json,
            resolvedKey: key
          };
        });
      })
      .catch(function (error) {
        if (index < keys.length - 1) {
          return tryLoadPlatformByKeys(keys, index + 1);
        }
        throw error;
      });
  }

  function loadPlatform(platform) {
    var keys = platform.keys || (platform.key ? [platform.key] : []);

    return tryLoadPlatformByKeys(keys, 0)
      .then(function (result) {
        return { platform: platform, payload: result.payload, error: null, resolvedKey: result.resolvedKey };
      })
      .catch(function (error) {
        return { platform: platform, payload: null, error: error.message, resolvedKey: null };
      });
  }

  function renderDownloads() {
    var mount = document.getElementById('dynamic-downloads');
    if (!mount) {
      return;
    }

    mount.textContent = 'Loading latest package metadata from GitLab...';

    Promise.all(platforms.map(loadPlatform)).then(function (results) {
      mount.innerHTML = '';
      mount.className = 'download-grid';

      results.forEach(function (result) {
        mount.appendChild(createPlatformSection(result.platform, result.payload, result.error));
      });
    });
  }

  if (typeof window.document$ !== 'undefined' && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(renderDownloads);
  } else {
    document.addEventListener('DOMContentLoaded', renderDownloads);
  }
})();
