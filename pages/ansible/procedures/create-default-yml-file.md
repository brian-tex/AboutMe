---
layout: post
title: Create a default.yml
subtitle: for an Ansible Playbook
tags: [ansible, automation]
comments: true
readtime: true
---

This page lists the steps needed to create an default.yml file for an Ansible Playbook. This is the file you'll run when running a playbook. It defines what servers the playbook will run against as well as what roles you wish to use.

---
### How to Create a default.yml File
1. Sign into your GitHub account.
2. Open the GitHub organization that houses your Ansible Playbooks.
3. Click `Browse organization's repositories`.
4. Click the respository you want to modify.
5. Click `Add file` and select `Create new file`.
6. Name the new file `default.yml`.
7. Enter the following in the default.yml file:
    ```
    - hosts: server_group_name
      roles:
        - first_role_name
        - first_role_name
        - first_role_name
    ```
**Note:** Add as many roles as you wish to the `roles:` section above.
