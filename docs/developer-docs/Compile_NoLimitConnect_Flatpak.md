# Compile NoLimitConnect Using Flatpak

1. Checkout NoLimitConnect:
```bash
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git
cd nolimitapp
```

2. Allow flatpak submodules (required for GL/glu lib):
```bash
git submodule add -f https://github.com/flathub/shared-modules.git
```

3. Build and install:
```bash
flatpak-builder --user --install --force-clean build-dir com.nolimitconnect.NoLimitConnect.yml
```

4. Run:
```bash
flatpak run com.nolimitconnect.NoLimitConnect
```

5. List flatpak apps:
```bash
flatpak list --app
```

6. Show NLC info:
```bash
flatpak info --show-location com.nolimitconnect.NoLimitConnect
```

7. Uninstall:
```bash
flatpak uninstall --delete-data com.nolimitconnect.NoLimitConnect
```
