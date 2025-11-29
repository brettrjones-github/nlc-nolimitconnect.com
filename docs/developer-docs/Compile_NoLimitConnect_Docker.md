# Compile NoLimitConnect Using Docker

## Notes
- Qt 6.9.3 tag: nlcdevimage-1.0.8
- Substitute tag/version as needed

## Steps
1. Run docker image:
docker run -it brettrjonesdocker/nolimitappimage:nlcdevimage-1.0.8 bash

2. Create build folder:
mkdir -p ~/builds/nolimitconnectapps/nolimitapp/build/nlc_build

3. Checkout source code:
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git
cd nolimitapp

4. Configure build (Linux):
cmake -S ../.. -B . -DCMAKE_BUILD_TYPE=Release -DTARGET_OS_LINUX=true -DQT_VERSION=6_9_3

5. Configure build (Android aarch64):
cmake -S ../.. -B . -DCMAKE_BUILD_TYPE=Release -DTARGET_OS_ANDROID=true -DQT_VERSION=6_9_3 -DARM64=true

6. Configure build (Android arm7a):
cmake -S ../.. -B . -DCMAKE_BUILD_TYPE=Release -DTARGET_OS_ANDROID=true -DQT_VERSION=6_9_3 -DARM32=true

7. Build:
make -j$(nproc)
