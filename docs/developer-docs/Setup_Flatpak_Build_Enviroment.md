# Setup Flatpak Build Environment

    # FlatPak 6.7 works but 6.9 fails
    
    # with Raspberry Pi 5:
    # bwrap: execvp appstream-compose: No such file or directory
    
    # with Ubuntu 24.04:
    # /usr/lib/gcc/x86_64-unknown-linux-gnu/14.3.0/../../../../x86_64-unknown-linux-gnu/bin/ld: cannot find -lGLU: No such file or directory
    # even though modules has
    # - shared-modules/glu/glu-9.json

    # So build with 6.7 for now

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


3. Install KDE Platform

    Select version 6.7 when prompted.

    ```bash
    flatpak install flathub org.kde.Platform
    ```


4. Install the KDE SDK:

    Select version 6.7 when prompted.

    ```bash
    flatpak install flathub org.kde.Sdk
    ```


    To list available versions:

    ```bash
    flatpak -vv remote-ls flathub
    ```

5. Clone the NoLimitConnect project:

    ```bash
    git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git
    cd nolimitapp
    ```

6. Enable Flatpak Submodules (Required for GL/glu)

    Add the shared modules:
    ```bash
    git submodule add https://github.com/flathub/shared-modules.git -f
    ```
