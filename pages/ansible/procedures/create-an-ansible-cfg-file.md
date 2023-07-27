---
layout: post
title: Create an ansible.cfg
subtitle: For an Ansible Playbook
tags: [ansible, automation]
comments: true
readtime: true
---

This page lists the steps needed to create an ansible.cfg file for an Ansible Playbook. This file will allow you to configure how the playbook will run.

---
### How to Create an ansible.cfg File
1. Sign into your GitHub account.
2. Open the GitHub organization that houses your Ansible Playbooks.
3. Click `Browse organization's repositories`.
4. Click the respository you want to modify.
5. Click `Add file` and select `Create new file`.
6. Name the new file `ansible.cfg`.
7. Enter the following in the ansiblge.cfg file:
    ```
    [defaults]
    inventory = inventory/inventory
    retry_files_enabled = false
    roles_path = roles
    vault_password_file = ~/.ansible/vault/<server_name>
    ansible_python_interpreter=/usr/bin/python3
    stdout_callback = yaml
    ```
