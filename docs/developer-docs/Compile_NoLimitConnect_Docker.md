# Compile NoLimitConnect Using Docker

## Notes
- Qt 6.9.3 tag: nlcdevimage-1.0.8
- Substitute tag/version as needed

## Steps
1. Run docker image:
```bash
docker run -it brettrjonesdocker/nolimitappimage:nlcdevimage-1.0.8 bash
```

2. Checkout source code:
```bash
git clone https://gitlab.com/nolimitconnectapps/nolimitapp.git
cd nolimitapp
```

3. Create build folder:
```bash
mkdir -p ~/builds/nolimitconnectapps/nolimitapp/build/nlc_build
cd nlc_build
```

4. Configure build (Ubuntu):
```bash
cmake -S ../.. -B . -DCMAKE_BUILD_TYPE=Release -DTARGET_OS_LINUX=true -DQT_VERSION=6_9_3
```

5. Or Configure build (Android aarch64):
```bash
cmake -S ../.. -B . -DCMAKE_BUILD_TYPE=Release -DTARGET_OS_ANDROID=true -DQT_VERSION=6_9_3 -DARM64=true
```

6. Or Configure build (Android arm7a):
```bash
cmake -S ../.. -B . -DCMAKE_BUILD_TYPE=Release -DTARGET_OS_ANDROID=true -DQT_VERSION=6_9_3 -DARM32=true
```

7. Build:
```bash
make -j$(nproc)
```
