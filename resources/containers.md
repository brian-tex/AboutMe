---
layout: page
title: Containers
subtitle: From Docker to Kubernetes
tags: [Docker, Docker Compose, Kubernetes, AKS, RKE]
comments: true
---
Developing apps using containerization is like packing your application into a suitcase, along with everything it needs to run properly. This suitcase, or “container”, works the same way no matter where you open it.

Running an application using containerization is as straightforward as opening a suitcase. Just like how everything you need is packed inside a suitcase, a container holds all the necessary components for your application to run. This means, no matter where you ‘open’ or run your container, it will operate consistently.

To illustrate, consider you’re running multiple applications on your computer. One of these applications requires an older version of NGINX, while another requires a newer version. With containerization, each application operates within its own ‘suitcase’ or container, unaffected by the environment outside. So, the older version of NGINX inside one container won’t be affected by the newer version required by another application. This encapsulation ensures that each application runs in its ideal environment without conflicts.

As a developer, this means you’re not relying on the user to set up their computer perfectly for your app to work. You’re essentially giving them the perfect setup along with your app.

Containerization also lets you run multiple apps on the same computer, even if they would have clashed otherwise. Containers are more lightweight than virtual machines because they share the computer’s operating system, rather than needing one for each container. This means you can run more containers with less strain on your computer. Plus, if an app needs a different version of Linux than another on the same computer, it’s not a problem. Containerization really makes software delivery flexible and efficient.

---
#### Docker
- [What is Docker?](/pages/docker/what-is-docker)
- [How to Use It](/pages/docker/how-to-use-docker)
- [Docker Training](/pages/docker/docker-training)
- [Terms & Definitions](/pages/docker/docker-terms-and-definitions)
- Examples
    - [Docker Run](TBD)
    - [Roles](TBD)
 
#### Docker Compose
- [What is Docker Compose?](/pages/docker-compose/what-is-docker-compose)
- [How to Use It](/pages/docker-compose/how-to-use-docker-compose)
- [Docker Compose Training](/pages/docker-compose/docker-compose-training)
- [Terms & Definitions](/pages/docker-compose/docker-compose-terms-and-definitions)
- Examples
    - [Docker Compose](TBD)
 
#### Kubernetes
- [What is Kubernetes?](/pages/kubernetes/what-is-kubernetes)
- [How to Use It](/pages/kubernetes/how-to-use-kubernetes)
- [Kubernetes Training](/pages/kubernetes/kubernetes-training)
- [Terms & Definitions](/pages/kubernetes/kubernetes-terms-and-definitions)
- Examples
    - [Manifests](TBD)
    - [Helm](TBD)
