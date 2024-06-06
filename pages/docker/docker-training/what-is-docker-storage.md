---
layout: page
title: Docker Storage
subtitle: What is it?
readtime: true
---
# What is Docker Storage?
Docker containers, just like other virtual machines, have storage that includes everything needed for a Linux or Windows environment to operate. The default storage for a container is temporary, which means any data stored will be lost if the container is stopped. This is useful for containers that don’t change data during deployment or for short-term development tasks.

If you want the data to stay even after container restarts or redeploys, you can mount local or network storage directly into the container. This mounted storage can be a whole directory or a specific file. After mounting, the directory or file will appear in the container at the file path you specified. Any data written to this directory or file will also show up on the storage source.

Containers with persistent data can be completely destroyed and redeployed instantly, as long as the necessary data has been saved. One advantage of using remotely mounted storage is that the container can be deployed on multiple hosts and work the same way since they’re using the same data. This allows multiple containers to run at the same time (if supported) or lets the containers be easily moved from one host to another while achieving the same result.
