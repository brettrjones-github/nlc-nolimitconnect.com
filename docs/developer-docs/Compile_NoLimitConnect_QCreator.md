# Compile NoLimitConnect Using Qt Creator

## Compile in Qt Creator
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git
Open nolimitapp/CMakeList.txt in Qt Creator
Configure and Compile

## Compile from command line in Linux
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git
mkdir -p nolimitapp/build/nlc_build
cd nolimitapp/build/nlc_build
rm -rf *

### Linux build
cmake -S ../.. -B . -DCMAKE_BUILD_TYPE=Release -DTARGET_OS_LINUX=true -DQT_VERSION=6_9_3

### Android aarch64
cmake -S ../.. -B . -DCMAKE_BUILD_TYPE=Release -DTARGET_OS_ANDROID=true -DQT_VERSION=6_9_3 -DARM64=true

### Android arm7
cmake -S ../.. -B . -DCMAKE_BUILD_TYPE=Release -DTARGET_OS_ANDROID=true -DQT_VERSION=6_9_3 -DARM32=true

### Compile
make -j$(nproc)
