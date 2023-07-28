---
layout: post
title: Shell Script Terms & Definitions
subtitle: #
tags: [shell, script, glossary, automation]
comments: true
readtime: true
---
This glossary contains common words, services and terms associated with shell scripts. It explains them and links to further internal and external documentation either as inline or footnote hyperlinks.

---
#### **ansible.cfg**
- An ansible.cfg file is a configuration file Ansible uses to define things like what inventory file to use, where vault password files are located, what plugins to use, where we store our roles folder and many other default settings.
- We place a custom ansible.cfg file in root directory of our playbooks that override Ansible’s default configuration settings. When placed in a playbook, Ansible will use these settings over default settings for that playbook only.
- This allows us to store custom configurations in playbooks so we don’t have to manually modify our default ansible.cfg file every time we run a playbook.

---
