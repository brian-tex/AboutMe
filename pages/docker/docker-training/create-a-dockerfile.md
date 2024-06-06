---
layout: page
title: Dockerfile
subtitle: How do you create one?
readtime: true
---
### What is a Dockerfile?
A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. It supports a set of commands that are used to add files, set environment variables, and configure the startup command for an image, among other things. This allows the Docker image creation process to be automated and repeatable, ensuring consistent environments.

### Example Dockerfile
```
# Use an existing docker image as a base
FROM <base_image>:<tag>

# Set the working directory in the container
WORKDIR /<app_directory>

# Expose ports
EXPOSE <port1>
EXPOSE <port2>

# Set environment variables
ENV <ENV_VAR> <value>

# Use another image for building the application
FROM <build_image>:<tag> AS build
WORKDIR /src
COPY ["<project_file>", "."]
RUN <build_command> "./<project_file>"
COPY . .
WORKDIR "/src/."
RUN <build_command> "<project_file>" -o /app/build

# Publish the build
FROM build AS publish
RUN <publish_command> "<project_file>" -o /app/publish

# Final stage
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["<entrypoint_command>", "<entrypoint_argument>"]
```
For more information on how to create a Dockerfile, see [Writing a Dockerfile, docs.docker.com](https://docs.docker.com/guides/docker-concepts/building-images/writing-a-dockerfile/)
