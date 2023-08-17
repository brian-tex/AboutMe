---
layout: page
title: How to Use It
subtitle: How to use Docker Compose
tags: [docker, compose, glossary]
comments: true
---
This page will show you how to follow industry best practices for using Docker Compose.

---
### How to Use Docker Compose
1. Create a new file called docker-compose.yml in a text editor.
2. Create the docker-compose content (you can see [this example docker compose file](/pages/docker-compose/how-to-use-docker-compose).
3. Save the file.
4. Open a terminal window and navigate to the directory where the docker-compose.yml file is located.
5. Run the following command to deploy the application: `docker-compose up -d`
6. This command will start the Nginx container in detached mode.

#### Other Helpful Commands
    - You can check the status of the container by running the following command: `docker-compose ps`
    - To stop the container, you can run the following command: `docker-compose down`
