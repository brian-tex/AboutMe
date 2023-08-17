---
layout: page
title: Docker Compose Example
subtitle: #
tags: [docker,compose, automation]
comments: true
readtime: true
---
```
version: '3.8'

services:
  nginx:
    image: nginx:latest
    container_name: nginx
    volumes:
      - ./data:/usr/share/nginx/html
    ports:
      - 80:80
```
