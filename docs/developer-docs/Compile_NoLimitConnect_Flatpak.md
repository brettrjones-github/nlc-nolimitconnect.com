# Compile NoLimitConnect Using Flatpak

1. Checkout NoLimitConnect:
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git
cd nolimitapp

2. Allow flatpak submodules (required for GL/glu lib):
git submodule add -f https://github.com/flathub/shared-modules.git

3. Build and install:
flatpak-builder --user --install --force-clean build-dir com.nolimitconnect.NoLimitConnect.yml

4. Run:
flatpak run com.nolimitconnect.NoLimitConnect

5. List flatpak apps:
flatpak list --app

6. Show NLC info:
flatpak info --show-location com.nolimitconnect.NoLimitConnect

7. Uninstall:
flatpak uninstall --delete-data com.nolimitconnect.NoLimitConnect
