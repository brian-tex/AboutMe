---
layout: page
title: Ansible Tasks
subtitle: What are they?
readtime: true
---
# What are Tasks?
Ansible tasks are specific pieces of code in a playbook or role that ensures a single configuration state. The following are example tasks that might exist in a role that adds System Administrators to a server:
- Specific code that adds a user accounts to the server.
- Specific code that creates the home folder for the users.
- Specific code that gives the users sudo permissions.

### How it Looks:
```
- name: Add the user 'johnd' with a specific uid and a primary group of 'admin'
  ansible.builtin.user:
    name: johnd
    comment: John Doe
    uid: 1040
    group: admin
```
