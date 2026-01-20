# Compile NoLimitConnect Using Flatpak

    # FlatPak 6.7 works but 6.9 fails
    
    # with Raspberry Pi 5:
    # bwrap: execvp appstream-compose: No such file or directory
    
    # with Ubuntu 24.04:
    # /usr/lib/gcc/x86_64-unknown-linux-gnu/14.3.0/../../../../x86_64-unknown-linux-gnu/bin/ld: cannot find -lGLU: No such file or directory
    # even though modules has
    # - shared-modules/glu/glu-9.json

    # So build with 6.7 for now


1. Checkout NoLimitConnect:
```bash
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git
cd nolimitapp
```

2. Allow flatpak submodules (required for GL/glu lib):
```bash
git submodule add -f https://github.com/flathub/shared-modules.git
```

3. Build only (no install):
```bash
flatpak-builder --force-clean build-dir com.nolimitconnect.NoLimitConnect.yml
```

4. Install from the build directory:
```bash
flatpak-builder --user --install build-dir com.nolimitconnect.NoLimitConnect.yml
```

5. Optional - Create Installable Bundle:
```bash
flatpak-builder --force-clean --repo=flatpak-repo build-dir com.nolimitconnect.NoLimitConnect.yml
flatpak build-bundle flatpak-repo NoLimitConnect.flatpak com.nolimitconnect.NoLimitConnect
flatpak install --user NoLimitConnect.flatpak
```

6. Run:
```bash
flatpak run com.nolimitconnect.NoLimitConnect
```

7. List flatpak apps:
```bash
flatpak list --app
```

8. Show NLC info:
```bash
flatpak info --show-location com.nolimitconnect.NoLimitConnect
```

9. Uninstall:
```bash
flatpak uninstall --delete-data com.nolimitconnect.NoLimitConnect
```

10. Change FlatPak Version:

If you have selected the wrong Patform and SDK version you 
can install the correct version with

```bash
flatpak install flathub org.kde.Sdk//6.7
```
and

```bash
flatpak install flathub org.kde.Sdk//6.7
```