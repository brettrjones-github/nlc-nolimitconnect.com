(function () {

  var gitlabBase = 'https://gitlab.com/api/v4/projects/nolimitcode%2Fnolimitconnect/packages/generic/download-index/v1/';
  var platforms = [
    { key: 'windows', title: 'Windows', notes: 'NSIS installer for Windows x64.' },
    { key: 'linux', title: 'Linux', notes: 'Debian package for Linux x64.' },
    { key: 'android-signed', title: 'Android', notes: 'Signed APK intended for release distribution.' },
    { key: 'flatpak', title: 'Flatpak', notes: 'Flatpak bundle for Linux desktops with Flatpak support.' }
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

    var heading = document.createElement('h2');
    heading.textContent = platform.title;
    section.appendChild(heading);

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

  function loadPlatform(platform) {
    var url = gitlabBase + encodeURIComponent(platform.key) + '.json';
    return fetch(url, { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('HTTP ' + response.status);
        }
        return response.json();
      })
      .then(function (json) {
        return { platform: platform, payload: json, error: null };
      })
      .catch(function (error) {
        return { platform: platform, payload: null, error: error.message };
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
