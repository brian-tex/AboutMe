---
layout: page
title: Ansible Vault
subtitle: What is it?
readtime: true
---
# What is Ansible Vault?
Ansible vault allows you to store confidential variables in an encrypted file (e.g. user credentials) that can be used in a playbook. Files encrypted using Ansible vault are encrypted using SHA-256 and can be stored in revision control (e.g. GitHub).

To use an Ansible vault encrypted file, you need to create a file in ~/.ansible/vault and paste the vault password in it. Then, you’ll need to reference the password file in the playbook’s ansible.cfg file. Ansible will use the provided password file to access the variables of the vaulted file without decrypting it. This keeps the file secure and safe to push back into revision control.

### Ansible Vault Tutorial
[![Ansible Vault Tutorial](https://i3.ytimg.com/vi/BBTadK3cAww/maxresdefault.jpg)](https://youtu.be/BBTadK3cAww)
- Click the image above to watch the video.

From the three examples Roger gives in his video for accessing data in a vaulted file, we use the third option. We will specify the path of the vault password file in your playbook's ansible.cfg file. Ansible will review the ansible.cfg file, when running the playbook, and will use the contents of the specified vault password file as the password to access the file you've vaulted.

---
