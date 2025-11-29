# 📱 Building NoLimitConnect for Raspberry Pi

This page describes the two supported methods for compiling NoLimitConnect for Raspberry Pi:  
**(1) using Qt Creator** and **(2) using Flatpac**.

---

## 🚀 Option 1 — Build with Qt Creator (Recommended)


### 1. Clone the Repository

```bash
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git
```

### 2. Open the Project in Qt Creator

- Launch **Qt Creator**
- Select **Open Project**
- Open the file:  
  `nolimitapp/CMakeLists.txt`

---

### 3. Configure & Build

- Select your **Qt Kit**  
  *(e.g., Qt 6.9.x for Desktop)*
- Allow Qt Creator to configure the project
- Click **Build** to generate the exe

---

## 🐳 Option 2 — Build Using Flatpak

If you prefer you can compile NoLimitConnect using Flatpak.

### Flatpak Setup Guide
- [**Setup Flatpak**](Setup_Flatpak_Build_Enviroment.md)

### Flatpak Build Instructions
- [**Compile with Flatpak**](Compile_NoLimitConnect_Flatpak.md)