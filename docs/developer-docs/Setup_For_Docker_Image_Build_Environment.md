# Setup Ubuntu Build Environment for Docker Builds (Android or Ubuntu Target Builds)

## Installing Docker

AI will provide better instructions if needed, but for quick reference:

```bash
sudo apt install docker.io
sudo usermod -aG docker ${USER}
reboot
```

Verify the installation:

```bash
docker run hello-world
```

---

## Build Your Own Docker Image (Android or Ubuntu Builds)

These instructions are for developers who want to create their own development image.

For convenience, a ready-made NLC development image is available:

```bash
docker pull brettrjonesdocker/nolimitappimage:nlcdevimage-1.0.8
```

Special thanks to **carlonluca** and the Docker images at:
[https://hub.docker.com/r/carlonluca/qt-dev](https://hub.docker.com/r/carlonluca/qt-dev)

### Base Image

Pull the base Qt dev image:

```bash
docker pull carlonluca/qt-dev:6.9.3
```

Tag it with your repo/tag:

```bash
docker tag carlonluca/qt-dev:6.9.3 brettrjonesdocker/nolimitappimage:nlcdevimage-1.0.8
```

Run the image interactively:

```bash
docker run -it brettrjonesdocker/nolimitappimage:nlcdevimage-1.0.8 bash
```

---

## Update the Docker Container OS

Inside the container:

```bash
apt update
apt upgrade
```

## Install Required NLC Build Libraries

Most are already installed:

```bash
apt-get install build-essential cmake g++ git libglu1-mesa-dev uuid-dev nasm
```

Do **not** exit the container.

---

## Push the New Container

Open another terminal:

```bash
docker ps -a
```

Log in to Docker Hub:

```bash
docker login -u <docker hub username>
# then enter your PAT or password
```

Push the image:

```bash
docker push brettrjonesdocker/nolimitappimage:nlcdevimage-1.0.8
```

Expected output example:

```
nlcdevimage-1.0.8: digest: sha256:8cac049d09a16c19387a1f25249a632060bf26deb8d2f59a3259fd81d01a78e8 size: 4518
```

---

## Test the Image

```bash
docker pull brettrjonesdocker/nolimitappimage:nlcdevimage-1.0.8

docker run -it brettrjonesdocker/nolimitappimage:nlcdevimage-1.0.8 bash
```
