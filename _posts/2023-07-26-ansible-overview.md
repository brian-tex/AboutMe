---
layout: post
title: Ansible Overview
subtitle: Overview of Ansible and how it can be used
tags: [ansible, glossary, automation]
comments: true
---
"Ansible is an open source community project sponsored by Red Hat, it's the simplest way to automate IT. Ansible is the only automation language that can be used across entire IT teams from systems and network administrators to developers and managers."[^1]..."Ansible is a radically simple IT automation engine that automates cloud provisioning, configuration management, application deployment, intra-service orchestration, and many other IT needs."

### Why use Ansible over manual configuration?
- It offers centralized server configuration management.
- It minimizes the risk of human error when manually configuring a server.
- It prevents specific manual changes from being lost. When servers are only configured using Ansible, it is impossible to lose server configuration as the current state presently exists and previous changes will exist in revision history.
- If configuring a server was like building a sandcastle:
  - **Manual Configuration Mgmt. & Deployment:** Like drawing a 2D blueprint of a desired sandcastle and then trying to rebuild every nuance represented in the blueprint by hand with a shovel.
  - **Ansible Configuration Mgmt. and Deployment:** Like creating a 3D model of the sandcastle. It can be used for reference and then you can fill it with the sand and easily and quickly make the sandcastle (with all its nuance). The model shows you what the configuration and is also used to make the sandcastle.

### Why use Ansible over other solutions?
- It is based on YAML and it’s syntax is accessible to average humans (not an abstract programming language).
- It uses a push method of deployment instead of a pull method. Meaning, no clients are required on the endpoint computers. It only requires SSH be installed and configured.
- It is fairly platform agnostic.
- It is becoming the industry standard for managing and configuring servers and the services that run on them.

---
[^1]: [OVERVIEW - How Ansible Works](https://www.ansible.com/overview/how-ansible-works?hsLang=en-us)
