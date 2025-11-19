# Setup Ubuntu Build Environment for NoLimitConnect

## Prerequisite tools
sudo apt install g++ nasm uuid-dev libglu1-mesa-dev git build-essential libxcb-*

## Optional: Docker for builds
sudo apt install docker
sudo groupadd docker
sudo usermod -aG docker ${USER}
docker run hello-world

## Qt Installation
Download Qt Online Installer: https://www.qt.io/download  
Preferred Qt version: 6.6.3 (6.7.3 for Raspberry Pi only)

## Compile Environment Issues
- Missing X11 headers: sudo apt install libxext-dev libxfixes-dev libx11-dev
- Qt platform plugin errors: sudo apt install libxcb-*
