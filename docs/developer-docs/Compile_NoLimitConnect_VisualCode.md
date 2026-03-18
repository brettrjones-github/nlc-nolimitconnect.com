# Windows Compile NoLimitConnect in Visual Studio Code

## Checkout code
`git clone https://gitlab.com/nolimitconnectapps/nolimitconnect.git`

## Open in Visual Studio Code
1. Open the cloned `nolimitconnect` folder in Visual Studio Code.
2. Ensure the workspace `.vscode/tasks.json` and `.vscode/launch.json` files are present.

## Configure and build
Use Visual Studio Code Tasks (`Terminal -> Run Task`) and run:
1. `Configure Windows Debug` (or `Configure Windows Release`)
2. `Build Windows Debug` (or `Build Windows Release`)

## Run and debug
- Run task: `Run Windows Debug` or `Run Windows Release`
- Debug profile: `Windows Debug nolimitconnect` or `Windows Release nolimitconnect`

## Notes
- Visual Studio 2026 IDE build support has been dropped.
- Windows builds still require MSVC C++ Build Tools because the project uses an MSVC toolchain.
- The helper script `.vscode/cmake-with-msvc-env.ps1` initializes the MSVC environment before running CMake.
