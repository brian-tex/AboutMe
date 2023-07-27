# Introduction
This page lists the steps needed to create a new Ansible playbook in a GitHub.

---
### How to Create a New Ansible Playbook
1. Sign into your GitHub account.
2. Open the GitHub organization that houses your Ansible Playbooks.
3. Click `Browser organization's repositories`.
4. Click `New repository`.
5. Name the repository after server the playbook will configure.
6. Check the `Add a README file`.
7. Click `Create repository`.
8. Open your new repository.
9. Edit the README.md using Ansible Playbook README.md best practices.
    - file to include a description of the service as well as an overview of what the playbook will do
    - An overview could look like a numbered list containing the names of each role it will run.
10. Create a `.gitignore` file.
11. Create an `ansible.cfg` file.
12. Create a `default.yml` file.
13. Create an `inventory` directory.
13. Create a `provisioning` directory.
14. Create a `roles` directory.
15. If any of the services need specific information about the server they're deploying on to be properly configured, create a `host_vars` directory.
