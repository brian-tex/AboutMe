---
layout: post
title: Create an Ansible Playbook
subtitle: #
tags: [ansible, automation]
comments: true
readtime: true
---

This page lists the steps needed to create an Ansible playbook in a GitHub.

---
### How to Create an Ansible Playbook
1. Sign into your GitHub account.
2. Open the GitHub organization that houses your Ansible Playbooks.
3. Click `Browse organization's repositories`.
4. Click `New repository`.
5. Name the repository after server the playbook will configure.
6. Check the `Add a README file`.
7. Click `Create repository`.
8. Open your new repository.
9. [Edit the README.md using Ansible Playbook README.md best practices](/pages/ansible/procedures/create-an-ansible-playbook-readme-file).
10. [Create a .gitignore file](/pages/ansible/procedures/create-an-ansible-playbook-gitignore-file).
11. [Create an ansible.cfg file](/pages/ansible/procedures/create-an-ansible-cfg-file).
12. [Create a default.yml file](/pages/ansible/procedures/create-default-yml-file).
13. [Create an inventory directory](/pages/ansible/procedures/create-an-inventory-directory).
13. [Create a provisioning directory](/pages/ansible/procedures/create-a-provisioning-directory).
14. Create a roles directory.
15. If any of the services need specific information about the server they're deploying on to be properly configured, create a `host_vars` directory.
    - If any of these variables should be encrypted, create a vault.yml file in a `group_vars` directory called `vault.yml` and encrypt it.
