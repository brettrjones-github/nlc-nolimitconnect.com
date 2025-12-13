# Setup Linux Build Environment for NoLimitConnect

## Prerequisite tools
```bash
sudo apt install g++ nasm uuid-dev libglu1-mesa-dev git build-essential
```

### 🛠 Qt Setup and Recommended Version

You can download and install the Qt SDK from:

➡️ **<https://www.qt.io/download>**

*Note:*  
The **Community Edition** may be less visible on the site and could require navigating through several pages to locate it.

Preferred Qt version: 6.9.3 (6.7.3 for Raspberry Pi only if QCreator has errors when ran)

## Troubleshot Qt Installation Issues
- If Qt Error Missing X11 headers: 
```bash
sudo apt install libxext-dev libxfixes-dev libx11-dev
```
- If Qt platform plugin errors:
```bash 
sudo apt install libxcb-*
```
