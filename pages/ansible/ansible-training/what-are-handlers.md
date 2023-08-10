---
layout: page
title: Ansible Handlers
subtitle: What are they?
readtime: true
---
# What are Handlers?
Ansible handlers are Ansible tasks that only run when called by another task.

Let's say you have a task that checks if a file wall rule is currently applied on a server, copies it to the server if not and then restart the firewall if it needed to be copied. To do this, you'll create a task that restarts the service in the handlers directory and then add a notify command to the original task in tasks/main.yml. If the file does exist, the task itself will not be executed and the handler task will not be triggered.

Handlers will also only execute one time at the end of the playbook no matter how many times they were triggered. They will execute in the order they’re listed in the handlers > main.yml file.

### Example Task with a Handler Trigger
```
- name: Allow ezproxy traffic through the firewall
  template:
    src: firewall.conf.j2
    dest: /etc/iptables.d/ezproxy.conf
  notify: Restart firewall
```
