# Setup Windows Build Environment for NoLimitConnect

1. Install Visual Studio 2026 and C++ Build Tools
    - Install the C++ workload (MSVC x64/x86 build tools).
    - Note: Visual Studio 2026 .vcxproj support is dropped, but MSVC build tools are still required for Windows builds.

2. Install Visual Studio Code from Microsoft.

3. Install required Visual Studio Code extensions
    - CMake Tools
    - C/C++

4. Install NASM
    - Add `nasm.exe` to your `PATH`.

5. Install Qt and Qt SDK version 6.9.3
    - Use a Qt MSVC kit compatible with your installed MSVC build tools (for example `msvc2022_64`).
    - MinGW and WebAssembly is not needed

6. Adjust paths in CMakePresets.json to your installed directories

