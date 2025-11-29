# Setup Ubuntu Build Environment for NoLimitConnect

## Prerequisite tools
sudo apt install g++ nasm uuid-dev libglu1-mesa-dev git build-essential libxcb-*

## Qt Installation
Download Qt Online Installer: https://www.qt.io/download  
Preferred Qt version: 6.9.3 (6.7.3 for Raspberry Pi only if QCreator has errors when ran)

## Compile Environment Issues
- Missing X11 headers: sudo apt install libxext-dev libxfixes-dev libx11-dev
- Qt platform plugin errors: sudo apt install libxcb-*
