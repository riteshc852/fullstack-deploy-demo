# Full Stack Deployment Learning

This repository is set up for a simple full-stack app and VPS deployment. It explains what the project contains and how to host it on a Linux VPS using Docker and Docker Compose.

## Project structure

- `client/` — React frontend built with Vite.
- `server/` — Express backend that serves an API.
- `docker-compose.yml` — local development compose setup.

## VPS deployment overview

On a VPS, the goal is to run the frontend and backend in Docker containers and expose a single public HTTP port. This README focuses on a practical deployment approach for a small production-style setup.

## Requirements for VPS

- A Linux VPS (Ubuntu or Debian recommended).
- Docker installed.
- Docker Compose installed (or Docker Compose plugin available).
- Optional: a domain name and reverse proxy for TLS.

## Setup steps

1. SSH into the VPS.

2. Install Docker:

```bash
# Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update

# check if docker is installed 
docker --version # docker must return something
```
## Deploy the app

1. Clone the repository on the VPS:

```bash
git clone https://github.com/riteshc852/fullstack-deploy-demo
cd fullstack-deploy-demo
```

2. Build and start the application:

```bash
docker-compose up --build
```



## Application details

- The frontend is built by Vite and served from the `client` container.
- The backend is an Express server running in the `server` container.
- The current frontend calls the backend API on a configured address.

## Troubleshooting

- If the app doesn’t load, check the container status with `docker-compose ps`.
- If the API fails, inspect the server logs:

```bash
docker-compose logs -f server
```

- If the frontend fails, inspect the client logs:

```bash
docker-compose logs -f client
```


