# Qt Android Kit Setup

This guide explains how to install and configure the **Qt Android Kit** required to build **NoLimitConnect** for Android.

---

## 1. Launch the Qt Maintenance Tool

Open the **Qt Maintenance Tool** from your Qt installation directory:

* **Windows:** `C:\Qt\MaintenanceTool.exe`
* **Linux/macOS:** `~/Qt/MaintenanceTool`

Choose:

```
Add or Remove Components
```

---

## 2. Select Your Qt Version

Expand the version you are using (recommended: **Qt 6.9.3 or newer**):

```
Qt → Qt 6.9.3
```

---

## 3. Enable Android Components

Select the following items:

* **Android**

  * Android (core)
  * Android Debugging Tools
  * Sources
  * **Qt 6.x for Android ARMv7**
  * **Qt 6.x for Android ARM64-v8a**
  * *(Optional)* Qt 6.x for Android x86_64 (for emulator testing)

---

## 4. Install Required Android Toolchain

Still inside the Maintenance Tool, scroll down and enable:

* Android ARMv7
* Android ARM64-v8a
* Android x86_64 *(optional)*
* **Android SDK**
* **Android NDK**
* **Android Build Tools**
* **OpenJDK 17** *(if not already installed)*

Qt will automatically match compatible SDK/NDK versions.

Click **Next → Update**.

---

## 5. Verify Android Kits in Qt Creator

Open Qt Creator:

```
Qt Creator → Projects → Kits
```

You should see:

* **Qt 6.x for Android (arm64-v8a)**
* **Qt 6.x for Android (armv7)**
* *(Optional)* Qt 6.x for Android (x86_64)

If no kits are present:

```
Qt Creator → Preferences → Devices → Android → Auto-detect
```

Qt Creator should fill paths for:

* JAVA_HOME
* ANDROID_HOME
* ANDROID_NDK_ROOT

---

## 6. Required External Tools

Ensure the following are installed and configured:

| Tool               | Recommended Version | Notes                       |
| ------------------ | ------------------- | --------------------------- |
| **Java (OpenJDK)** | **17**              | Required for Android builds |
| **Android SDK**    | Provided by Qt      | Auto-configured             |
| **Android NDK**    | Qt-matched version  | Auto-configured             |
| **Gradle**         | Auto-managed by Qt  | No install needed           |

You should see green checkmarks under:

```
Qt Creator → Preferences → Devices → Android
```

---

## 7. Test Your Android Build Environment

Verify adb connectivity:

```bash
adb devices
```

A connected device should appear.

Then test in Qt Creator:

1. Create a new **Qt Quick Application**.
2. Select the **Android arm64-v8a** kit.
3. Build & deploy to a device or emulator.

---

## Your Qt Android Kit Is Ready

Your system is now prepared to build NoLimitConnect for Android using Qt.
