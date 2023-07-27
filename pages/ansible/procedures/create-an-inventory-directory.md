---
layout: post
title: Create an Inventory Directory
subtitle: for an Ansible Playbook
tags: [ansible, automation]
comments: true
readtime: true
---

This page lists the steps needed to create an inventory directory for an Ansible Playbook. This file will consist of a server group name and the servers (underneat it) that the playbook should run against.

---
### How to Create an ansible.cfg File
1. Sign into your GitHub account.
2. Open the GitHub organization that houses your Ansible Playbooks.
3. Click `Browse organization's repositories`.
4. Click the respository you want to modify.
5. Click `Add file` and select `Create new file`.
6. Name the new file `inventory/inventory`.
7. Enter the following in the default.yml file:
    ```
    ---
    [<server_group_name>]
    <server_dns_name_1>
    <server_dns_name_2>
    <server_dns_name_3>
    ```
**Note:** Add as many servers as you wish under the server group name section.
