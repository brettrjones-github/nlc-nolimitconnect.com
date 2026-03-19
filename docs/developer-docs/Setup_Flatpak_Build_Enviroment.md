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


3. Install KDE Platform

    Select version 6.9 when prompted.

    ```bash
    flatpak install flathub org.kde.Platform
    ```


4. Install the KDE SDK:

    Select version 6.9 when prompted.

    ```bash
    flatpak install flathub org.kde.Sdk
    ```


    To list available versions:

    ```bash
    flatpak -vv remote-ls flathub
    ```

5. Clone the NoLimitConnect project:

    ```bash
    git clone https://gitlab.com/nolimitcode/nolimitconnect.git
    cd nolimitconnect
    ```


    ```
