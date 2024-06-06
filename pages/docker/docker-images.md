---
layout: page
title: What is it?
subtitle: What is Docker?
readtime: true
---
A Docker image is a read-only template that contains the instructions and software components needed to run an application in a container. A container is a running instance of an image that can be isolated and portable. You can create, share, and use Docker images with the Docker platform.

This page compares public Docker Images to custom made Docker images and the benefits and drawbacks of each.

### Docker Hub Container Images
- Docker Hub Container Images vs Custom Docker Container Images Docker Hub is a repository of container images that are built by service providers and the Docker community. These images can be used to deploy various services without much development effort, and they are often maintained by the image owners for version upgrades and security patching. However, using public images also means that you have less control over how the image was created, what packages are included, and how the container is configured and managed.

### Custom Docker Container Images
- Creating your own custom Docker images gives you full control over the image from start to finish. You can start with a scratch base image or a trusted base image, configure the container the way you want, and then build the container into an image. The drawbacks of custom images are that they require more development time and knowledge of image creation best practices.

### A Middle Ground
1. Build an idempotent script that applies common best practices.
2. Download the public container image you want to use.
3. Run a vulnerability check against the image to identify vulnerable packages.
4. Create a container using the public image.
5. Connect to the container and patch any vulnerabilities and apply your best practices script.
6. Build the container as a custom image and save it to Docker Hub.

## Image Creation Using a Dockerfile
1. Create an empty directory for your custom image.
2. Move into the new directory.
3. Locate the Dockerfile that you want to use (or create one if needed) and move it into the new directory.
4. Move all the directories, scripts, files, etc. that are needed by the Dockerfile (if applicable) into the new directory.
5. Get your Docker Hub username.
6. Choose a name and a tag for your image. The tag is usually a number that starts from 01 and increases with each build.
7. Run the following command: `docker build <filePathToYourNewDirectory> -t <yourDockerHubUsername>/<yourDesiredImageName>:<tag>`
    - For example, if you want to create an image named nextcloud with tag 01 from the directory /home/johnnyb/nextcloudDirectory, you can run `docker build /home/johnnyb/nextcloudDirectory -t johnb1/nextcloud:01`
8. List all the Docker images on your computer by running `docker images`
9. Locate your newly created image and note the container image id associated with it.
10. TBD (The next steps will show you how to push your new image build to your Docker Hub).

## Image Creation Using a Docker Container
- tbd
---
- For more information, see the [docker glossary](https://github.com/biola/sysadmin-docs/blob/master/services/docker/Reference/Docker%20Glossay.md).

#### Helpful Article(s)
- [How to Fortify Your Docker Containers: A Guide to Advanced Security Practices](https://blog.coderco.io/p/how-to-fortify-your-docker-containers?r=2bjtip&utm_source=tldrwebdev)
