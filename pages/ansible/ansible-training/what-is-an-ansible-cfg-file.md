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
![ansible.cf Screenshot](/assets/img/ansible-cfg.png)
---
- For more information about ansible.cfg and how to use it, see [Configuring Ansible (Ansible Documentation)](https://docs.ansible.com/ansible/latest/installation_guide/intro_configuration.html)

