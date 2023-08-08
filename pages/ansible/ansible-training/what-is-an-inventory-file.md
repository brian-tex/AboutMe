---
layout: page
title: Ansible Inventory File
subtitle: What is it?
readtime: true
---
# What is an Inventory File?
An Ansible inventory file consists of server IP or DNS addresses categorized by a group header. When a playbook is run against a group, the tasks will run iteratively against all servers in the group. You could create a group called **LinuxServers** and then run a playbook against the **LinuxServers** group.

### Ansible Inventory Tutorial
[![Ansible Inventory Tutorial](https://i3.ytimg.com/vi/0MT9WvX_j4Y/maxresdefault.jpg)](https://www.youtube.com/watch?v=0MT9WvX_j4Y&ab_channel=RogerPerkin%2F%2FNetworkAutomationConsultant)[^1]
- Click the image above to watch the video.

**Note:** We don't typically store our main Ansible directory in /etc/ as shown in this video.

---
[Previous Page](https://github.com/biola/sysadmin-docs/blob/master/sysadmin%20training/10.%20Ansible/01.%20Ansible%20Overview.md) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [Next Page](https://github.com/biola/sysadmin-docs/blob/master/sysadmin%20training/10.%20Ansible/03.%20What%20is%20a%20Playbook.md)
[^1]:[Ansible Inventory Tutorial // Learn how to setup the Ansible Inventory File and change it's location](https://www.youtube.com/watch?v=0MT9WvX_j4Y&ab_channel=RogerPerkin%2F%2FNetworkAutomationConsultant)
