---
layout: post
title: Create a Provisioning Directory
subtitle: for an Ansible Playbook
tags: [ansible, automation]
comments: true
readtime: true
---

This page lists the steps needed to create a provisoining directory for an Ansible Playbook. This directory will consist of what could be considered a mini-playbook. Whenever the server needs to be created or recreated you can run the default.yml file inside this provisioning directory and the server will be created.

---
### How to Create a Provisioning Directory
1. Sign into your GitHub account.
2. Open the GitHub organization that houses your Ansible Playbooks.
3. Click `Browse organization's repositories`.
4. Click the respository you want to modify.
5. Click `Add file` and select `Create new file`.
6. Name the new file `provisioning/README.md` (you'll be able to delete this README.md file later).
7. Create the following in the provisioning directory:
    - An inventory file with your hypervisor's DNS name as the target server.
    - A role directory with a role called `<yourPlaybookName>-provisioning` that contains the tasks needed for creating your server.
    - [An ansible.cfg file](/pages/ansible/procedures/create-an-ansible-cfg-file).
    - A `default.yml` file that targets the server group name in the provisioning directory's `inventory` file and runs the `<yourPlaybookName>-provisioning` role.
