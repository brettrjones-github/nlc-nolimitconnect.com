# Compile NoLimitConnect Using Flatpak

## Notes for Raspberry Pi 5:
## if you see the error
## bwrap: execvp appstream-compose: No such file or directory
## try
```bash
sudo apt update
sudo apt install appstream-generator
which appstream-compose
```
# if which appstream-compose is empty you may have to
```bash
sudo ln -s /usr/bin/appstreamcli /usr/local/bin/appstream-compose
which appstream-compose
```


1. Checkout NoLimitConnect:
```bash
git clone https://gitlab.com/nolimitcode/nolimitconnect.git
cd nolimitconnect
```

2. Build only (no install):
```bash
flatpak-builder --force-clean build-dir com.nolimitconnect.NoLimitConnect.yml
```

3. Install from the build directory:
```bash
flatpak-builder --user --install build-dir com.nolimitconnect.NoLimitConnect.yml
```

4. Optional - Create Installable Bundle:
```bash
flatpak-builder --force-clean --repo=flatpak-repo build-dir com.nolimitconnect.NoLimitConnect.yml
flatpak build-bundle flatpak-repo NoLimitConnect.flatpak com.nolimitconnect.NoLimitConnect
flatpak install --user NoLimitConnect.flatpak
```

5. Run:
```bash
flatpak run com.nolimitconnect.NoLimitConnect
```

6. List flatpak apps:
```bash
flatpak list --app
```

7. Show NLC info:
```bash
flatpak info --show-location com.nolimitconnect.NoLimitConnect
```

8. Uninstall:
```bash
flatpak uninstall --delete-data com.nolimitconnect.NoLimitConnect
```

9. Change FlatPak Version:

If you have selected the wrong Patform and SDK version you 
can install the correct version with

```bash
flatpak install flathub org.kde.Sdk//6.9
```
and

```bash
flatpak install flathub org.kde.Sdk//6.9
```