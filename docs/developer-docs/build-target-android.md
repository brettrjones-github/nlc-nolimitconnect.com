# 📱 Building NoLimitConnect for Android

This page describes the supported method for compiling NoLimitConnect for Android:  
**using Qt Creator**.

---

## 🚀 Option 1 — Build with Qt Creator (Recommended)

### 1. Ensure Qt Android Kits Are Installed
Before building, your Qt installation must include the Android toolchain (Android SDK, NDK, Java, and Qt Android kits).

📘 Setup Guide:  
 [**Setup Android Toolkit**](qt-android-kit-setup.md)

---

### 2. Clone the Repository

```bash
git clone https://gitlab.com/nolimitcode/nolimitconnect.git
---

### 3. Open the Project in Qt Creator

- Launch **Qt Creator**
- Select **Open Project**
- Open the file:  
  `nolimitconnect/CMakeLists.txt`

---

### 4. Configure & Build

- Select your **Android Qt Kit**  
  *(e.g., Qt 6.9.x for Android ARM64)*
- Allow Qt Creator to configure the project
- Click **Build** to generate the APK or AAB

---

### Android Issues
    Recommended Android settings for Qt 6.9.3:
    Disable QML debugging and profile (QML is not used in NLC)
    NDK KIT 25.1.8937393
    SDK PLATFORM 35
    ANDROID PLATFORM android-23
    Optional: set C compiler to ndk\25.1.8937393\toolchains\llvm\prebuilt\windows-x86_64\bin\aarch64-linux-android23-clang



