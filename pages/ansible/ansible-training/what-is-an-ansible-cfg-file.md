---
layout: page
title: ansible.cfg
subtitle: What is it?
readtime: true
---
# What is the ansible.cfg File?
An ansible.cfg file is a configuration file Ansible uses to define things like what inventory file to use, where vault password files are located, what plugins to use, where we store our roles folder and many other default settings.

We place a custom ansible.cfg file in root directory of our playbooks that override Ansible’s default configuration settings. When placed in a playbook, Ansible will use these settings over default settings for that playbook only.

This allows us to store custom configurations in playbooks so we don’t have to manually modify our default ansible.cfg file every time we run a playbook.

### Example ansible.cfg:
![Example Ansible Config File](https://user-images.githubusercontent.com/27863783/187012677-39aa5de6-2178-4189-9ddc-bcf088979577.png)
---
[Previous Page](https://github.com/biola/sysadmin-docs/blob/master/sysadmin%20training/10.%20Ansible/03.%20What%20is%20a%20Playbook.md) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [Next Page](https://github.com/biola/sysadmin-docs/blob/master/sysadmin%20training/10.%20Ansible/05.%20What%20is%20Ansible%20Vault.md)

---
- For more information about ansible.cfg and how to use it, see [Configuring Ansible (Ansible Documentation)](https://docs.ansible.com/ansible/latest/installation_guide/intro_configuration.html)

