---
layout: page
title: Creating Docker Images
subtitle: How do you do it?
readtime: true
---
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
