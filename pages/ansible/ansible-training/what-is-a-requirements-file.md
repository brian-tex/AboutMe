---
layout: page
title: Requirements
subtitle: What is it?
readtime: true
---
# What is a requirements.yml?
The requirements.yml file should be placed in the Roles directory of a playbook and is comprised of links to pre-made roles needed for a playbook. Playbooks do not contain the roles listed in the requirements.yml in revision control. Instead, prior to running the playbook, we run a command (ansible-galaxy install -f -r roles/requirements.yml) that will pull all required roles down into the playbook's Roles directory. This allows roles to be used modularly across playbooks and gives you one central place to make modifications should a role require them.

If a playbook requires specific configuration in a role, you should do the following:
1. Remove the role from the requirements.yml.
2. Make a duplicate of the role and rename it so it's clear that it belongs to the specific playbook.
3. Store the custom role in the playbook's revision history.

### Example requirements.yml File
![Example Requirements yml](/assets/img/requirements.png)
