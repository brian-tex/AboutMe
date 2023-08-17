---
layout: page
title: Terms & Definitions
subtitle: Docker Compose terms and definitions
tags: [docker, compose, glossary]
comments: true
readtime: true
---
This glossary contains common words, services and terms often used with Docker Compose. It explains them and links to further internal and external documentation either as inline or footnote hyperlinks.

---
#### **Container**
- A container is a running instance of an image.
- When a service is deployed, Docker Compose creates a container for the service and starts the container.
- Containers can be managed using the docker command-line tool.

#### **docker-compose.yml**
- The docker-compose.yml file is a configuration file that defines the services that will be deployed using Docker Compose.
- The file is written in YAML format and consists of a series of key-value pairs.
- The version key specifies the version of the Docker Compose file.
- The services section defines the services that will be deployed.
- Each service is defined by a set of key-value pairs.
- Some common keys include image, container_name, ports, and volumes.

#### **Image**
- An image is a pre-built Docker container that can be used to create a service.
- Images are stored in Docker repositories and can be downloaded using the docker pull command.
- When a service is defined in the docker-compose.yml file, the image key specifies the name of the image that will be used to create the service.

#### **Network**
- A network is a logical grouping of containers.
- Networks can be used to allow containers to communicate with each other.
- When a service is defined in the docker-compose.yml file, the networks key specifies the networks that the service will be connected to.

#### **Service**
- A service is a unit of work that can be deployed using Docker Compose.
- A service is defined in the docker-compose.yml file.
- Each service has a unique name and a set of configuration options.
- When a service is deployed, Docker Compose creates a container for the service and starts the container.

#### **Volume**
- A volume is a shared directory that can be mounted into a container.
- Volumes are used to store data that needs to be persisted across container restarts.
- When a service is defined in the docker-compose.yml file, the volumes key specifies the volumes that will be mounted into the service.
