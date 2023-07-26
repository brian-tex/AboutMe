---
layout: post
title: Ansible Glossary
subtitle: Common Ansible terms and definitions
tags: [ansible, glossary, automation]
comments: true
---
This glossary contains common words, services and terms often used in the System Administrator team. It explains them and links to further internal and external documentation either as inline or footnote hyperlinks.

---
#### **ansible.cfg File**
- An ansible.cfg file is a configuration file Ansible uses to define things like what inventory file to use, where vault password files are located, what plugins to use, where we store our roles folder and many other default settings.
- We place a custom ansible.cfg file in root directory of our playbooks that override Ansible’s default configuration settings. When placed in a playbook, Ansible will use these settings over default settings for that playbook only.
- This allows us to store custom configurations in playbooks so we don’t have to manually modify our default ansible.cfg file every time we run a playbook.

#### **Inventory**
- An Ansible inventory file consists of server IP or DNS addresses categorized by a group header. When a playbook is run against a group, the tasks will run iteratively against all servers in the group. You could create a group called LinuxServers and then run a playbook against the LinuxServers group.

#### **Module**
- TBD

#### **Playbook**
- "An Ansible® playbook is a blueprint of automation tasks—which are complex IT actions executed with limited or no human involvement. Ansible playbooks are executed on a set, group, or classification of hosts, which together make up an Ansible inventory.
- Ansible playbooks are essentially frameworks, which are prewritten code developers can use ad-hoc or as starting template. Ansible playbooks are regularly used to automate IT infrastructure (such as operating systems and Kubernetes platforms), networks, security systems, and developer personas (such as Git and Red Hat CodeReady Studio).
- Ansible playbooks help IT staff program applications, services, server nodes, or other devices without the manual overhead of creating everything from scratch. And Ansible playbooks—as well as the conditions, variables, and tasks within them—can be saved, shared, or reused indefinitely."[^1]

#### **Requirements File**
- "You can set up a requirements.yml file to install multiple collections in one command. This file is a YAML file...To install both roles and collections at the same time with one command, run the following: ```ansible-galaxy install -r requirements.yml```[^2]

#### **Roles**
- "Ansible roles allow you to develop reusable automation components by grouping and encapsulating related automation artifacts, like configuration files, templates, tasks, and handlers. Because roles isolate these components, it's easier to reuse them and share them with other people. You can also make your roles configurable by exposing variables that users can set when calling the role, allowing them to configure their system according to specific requirements."[^3]

#### **Task**
- Ansible tasks are specific pieces of code in a playbook or role that ensures a single configuration state. The following are example tasks that might exist in a role that adds System Administrators to a server:
    - Specific code that adds a user accounts to the server.
    - Specific code that creates the home folder for the users.
    - Specific code that gives the users sudo permissions.

#### **Vault** 
- Ansible vault allows you to store confidential variables in an encrypted file (e.g. user credentials) that can be used in a playbook. Files encrypted using Ansible vault are encrypted using SHA-256 and can be stored in revision control (e.g. GitHub).
- To use an Ansible vault encrypted file, you need to create a file in ~/.ansible/vault and paste the vault password in it. Then, you’ll need to reference the password file in the playbook’s ansible.cfg file. Ansible will use the provided password file to access the variables of the vaulted file without decrypting it. This keeps the file secure and safe to push back into revision control.

[^1]: [What is an Ansible playbook, Red Hat Ansible Website](https://www.redhat.com/en/topics/automation/what-is-an-ansible-playbook#:~:text=An%20Ansible%C2%AE%20playbook%20is,make%20up%20an%20Ansible%20inventory.)
[^2]: [Ansible Galaxy User Guide, Red Hat Ansible Website](https://docs.ansible.com/ansible/latest/galaxy/user_guide.html)
[^3]: [8 steps to developing an Ansible role in Linux, Red Hat Ansible Website](https://www.redhat.com/sysadmin/developing-ansible-role#:~:text=Ansible%20roles%20allow%20you%20to,share%20them%20with%20other%20people.)
