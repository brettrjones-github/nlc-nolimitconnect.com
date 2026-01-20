# Developer Documentation Overview

Welcome to the NoLimitConnect Developer Documentation.

This section provides everything you need to build, compile, and contribute to the NoLimitConnect project across all supported platforms.

---

### 🛠 Qt Setup and Recommended Version

Qt provides the graphical UI framework used by **NoLimitConnect**.  
All build environments **except Docker and Flatpak** require a local Qt installation.

Although most Qt 6.x.x versions work, it is recommended to use:

- **Qt 6.9.3 or newer**, due to the fix for:  
  **QTBUG-137407** — <https://qt-project.atlassian.net/browse/QTBUG-137407>

---

### Java Requirement

For Android builds, the recommended Java version is:

- **Java 17**

---

### Qt Installation

You can download and install the Qt SDK from:

➡️ **<https://www.qt.io/download>**

*Note:*  
The **Community Edition** may be less visible on the site and could require navigating through several pages to locate it.

Preferred Qt version: 6.9.3 (6.7.3 for Raspberry Pi only if QCreator has errors when ran)

---

## Build Instructions by Target OS

### Android
<img src="../assets/icons/icon-android.svg" width="48"/>

[**Build for Android**](build-target-android.md)

---

### Raspberry Pi
<img src="../assets/icons/icon-raspberry-pi.svg" width="48"/>

[**Build for Raspberry Pi**](build-target-raspberry-pi.md)

---

### Linux
<img src="../assets/icons/icon-tux.svg" width="48"/>

[**Build for Linux**](build-target-linux.md)

---

### Windows
<img src="../assets/icons/icon-windows.svg" width="48"/>

[**Build for Windows**](build-target-windows.md)

---

## 🛠 Build Environments

- **Windows Build Environment**  
  Setup instructions for Visual Studio, SDKs, and the Windows-specific toolchain.
 [**Setup Windows**](Setup_Windows_Build_Environment.md)

- **Linux Build Environment**  
  Required libraries, dependencies, and system configuration.
 [**Setup Linux**](Setup_Linux_Build_Environment.md)

- **Docker Build Environment**  
  Build system isolation using containerized environments.
  [**Setup Docker**](Setup_For_Docker_Image_Build_Environment.md)

- **Flatpak Build Environment**  
  Setup uild system flatpak environments.
  [**Setup Flatpak**](Setup_Flatpak_Build_Enviroment.md)

---

## 🧱 Compilation Guides

- [**Compile with Visual Studio**](Compile_NoLimitConnect_VisualStudio.md)
- [**Compile with QCreator**](Compile_NoLimitConnect_QCreator.md)
- [**Compile with Docker**](Compile_NoLimitConnect_Docker.md)
- [**Compile with Flatpak**](Compile_NoLimitConnect_Flatpak.md)

Each guide includes step-by-step instructions for configuring your development environment and successfully building the project.

---

## Contributing

➡️ [**Contribute**](../contribute.md)

---

## Bug Tracker

➡️ **<https://gitlab.com/nolimitconnectapps/nolimitapp/issues>**
