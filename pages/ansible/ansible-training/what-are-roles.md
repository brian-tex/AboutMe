---
layout: page
title: Ansible Roles
subtitle: What are they?
readtime: true
---
# What are Ansible Roles?
Ansible Roles are repos (separate from any playbook) that contain tasks needed to configure a specific service. These roles are modularized so that they can be created and managed in one place and be used in countless playbooks.
### Getting Started with Ansible: Roles
[![Getting Started with Ansible: Roles](https://i3.ytimg.com/vi/tq9sCeQNVYc/maxresdefault.jpg)](https://youtu.be/tq9sCeQNVYc)
- Click the image above to watch the video.

For example, you could create a role called “sysadminusers” that contains all the tasks for adding the System Administrator users to a server. Since the role is focused on the specific goal of adding System Administrators to a server, it can be used in any playbook where System Administrators should be added.
