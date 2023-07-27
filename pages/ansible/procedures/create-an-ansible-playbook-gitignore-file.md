---
layout: post
title: Create a .gitignore
subtitle: for an Ansible Playbook
tags: [ansible, automation]
comments: true
readtime: true
---

This page lists the steps needed to create a .gitignore file for an Ansible Playbook. This file will allow you to pull all the roles from your `requirements.yml` file into your playbook, modify the playbook and then push your playbook changes back to GitHub without also pushing the role directories you pulled down.

---
### How to Create an Ansible Playbook .gitignore File
1. Sign into your GitHub account.
2. Open the GitHub organization that houses your Ansible Playbooks.
3. Click `Browse organization's repositories`.
4. Click the respository you want to modify.
5. Click `Add file` and select `Create new file`.
6. Name the new file `.gitignore`.
7. Enter the following in the .gitignore file:
    ```
    roles/*
    !roles/requirements.yml
    !roles/<playbook_name>
    ```
