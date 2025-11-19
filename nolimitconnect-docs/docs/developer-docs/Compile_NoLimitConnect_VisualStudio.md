# Windows Compile NoLimitConnect in Visual Studio

## Checkout code
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git

## Compile in Visual Studio
Open nolimitapp/nolimitgui/build/VS2022/NoLimitConnectAll.sln
Right Click NoLimitConnect → Set As Startup Project
Compile

## Android Issues
- Debugging on Galaxy A8 or Galaxy Flip 5G may break Java assembly on touch
- Recommended Android Kit:
  - NDK KIT 23.1.7779620
  - SDK PLATFORM 33
  - ANDROID PLATFORM android-23
  - Optional: set C compiler to `ndk\23.1.7779620\toolchains\llvm\prebuilt\windows-x86_64\bin\aarch64-linux-android23-clang`
