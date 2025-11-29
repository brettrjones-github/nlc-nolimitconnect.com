# Setup Flatpak Build Environment

## Steps
1. Install Flatpak

Install Flatpak and add the Flathub repository:

```bash
sudo apt install flatpak
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
sudo reboot
```

2. Install Flatpak Builder

```bash
sudo apt install flatpak-builder
```


3. Install Required KDE Platform & SDK

Install the KDE Platform runtime:

```bash
flatpak install flathub org.kde.Platform
```


Select version 6.7 when prompted.
Install the KDE SDK:

```bash
flatpak install flathub org.kde.Sdk
```


Select version 6.7 when prompted.
To list available versions:

```bash
flatpak -vv remote-ls flathub
```


4. Enable Flatpak Submodules (Required for GL/glu)
Clone the NoLimitConnect project:

```bash
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git
cd nolimitapp
```


Add the shared modules:
```bash
git submodule add https://github.com/flathub/shared-modules.git -f
```
