# Installing No Limit Connect on Linux

No Limit Connect is available via Flatpak:

1. Install Flatpak: [https://flathub.org/](https://flathub.org/)
2. Sign in using GitLab or other methods.
3. Checkout source if building locally:
```bash
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git

4. Allow Flatpak submodules:
git submodule add -f https://github.com/flathub/shared-modules.git

5. Build and install:
flatpak-builder --user --install --force-clean build-dir com.nolimitconnect.NoLimitConnect.yml

6. Run
flatpak run com.nolimitconnect.NoLimitConnect

7. Uninstall:
flatpak uninstall --delete-data com.nolimitconnect.NoLimitConnect
