---
layout: post
title: Create a Roles Directory
subtitle: for an Ansible Playbook
tags: [ansible, automation]
comments: true
readtime: true
---

This page lists the steps needed to create a roles directory for an Ansible Playbook.

---
### How to Create an ansible.cfg File
1. Sign into your GitHub account.
2. Open the GitHub organization that houses your Ansible Playbooks.
3. Click `Browse organization's repositories`.
4. Click the respository you want to modify.
5. Click `Add file` and select `Create new file`.
6. Name the new file `roles/README.md` (you can delete the `README.md` file soon).
7. Create a `requirements.yml` file in the `roles` directory of your playbook.
8. If your server needs specific configuration that would never be used on any other server [create an Ansible role](/pages/ansible/procedures/create-an-ansible-role) in the `roles` directory using the name of the playbook.
