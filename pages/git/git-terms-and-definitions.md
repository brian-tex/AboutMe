layout: page
title: Terms & Definitions
subtitle: Git terms and definitions
tags: [ansible, glossary, automation]
comments: true
readtime: true
---
This glossary contains common words, services and terms often used with Git. It explains them and links to further internal and external documentation either as inline or footnote hyperlinks.

---
#### **Git**
* "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows."[^1]

#### **Git .gitignore File**
* "When making commits to any Git repository, you’ll choose the files you want to stage and then you’ll commit them...But you might not want to commit every single one of your files—there are files that never need to get committed. This is where the .gitignore file is useful: it tells Git exactly which files to ignore and never track."[^2]

#### **Git Branch**
* "Branching is a feature available in most modern version control systems. Branching in other VCS's can be an expensive operation in both time and disk space. In Git, branches are a part of your everyday development process. Git branches are effectively a pointer to a snapshot of your changes. When you want to add a new feature or fix a bug—no matter how big or how small—you spawn a new branch to encapsulate your changes. This makes it harder for unstable code to get merged into the main code base, and it gives you the chance to clean up your future's history before merging it into the main branch."[^3]
* For more information, see the [GitHub](https://confluence.biola.edu/display/ithd/GitHub+-+Service+Catalog+Entry) or [GitLab Service Catalog entries](https://confluence.biola.edu/display/ithd/GitLab+-+Service+Catalog+Entry).

#### **Git Clone**
* "**git clone** is a Git command line utility which is used to target an existing repository and create a clone, or copy of the target repository."[^4]
* For more information, see the [GitHub](https://confluence.biola.edu/display/ithd/GitHub+-+Service+Catalog+Entry) or [GitLab Service Catalog entries](https://confluence.biola.edu/display/ithd/GitLab+-+Service+Catalog+Entry).

#### **Git Commit**
* "The git commit command captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as “safe” versions of a project—Git will never change them unless you explicitly ask it to. Prior to the execution of git commit, The git add command is used to promote or 'stage' changes to the project that will be stored in a commit. These two commands git commit and git add are two of the most frequently used."[^5]
* For more information, see the [GitHub](https://confluence.biola.edu/display/ithd/GitHub+-+Service+Catalog+Entry) or [GitLab Service Catalog entries](https://confluence.biola.edu/display/ithd/GitLab+-+Service+Catalog+Entry).

#### **Git Fork**
* "The Forking Workflow is fundamentally different than other popular Git workflows. Instead of using a single server-side repository to act as the “central” codebase, it gives every developer their own server-side repository. This means that each contributor has not one, but two Git repositories: a private local one and a public server-side one. The Forking Workflow is most often seen in public open source projects.

* The main advantage of the Forking Workflow is that contributions can be integrated without the need for everybody to push to a single central repository. Developers push to their own server-side repositories, and only the project maintainer can push to the official repository. This allows the maintainer to accept commits from any developer without giving them write access to the official codebase.
* The Forking Workflow typically follows a branching model based on the Gitflow Workflow. This means that complete feature branches will be purposed for merge into the original project maintainer's repository. The result is a distributed workflow that provides a flexible way for large, organic teams (including untrusted third-parties) to collaborate securely. This also makes it an ideal workflow for open source projects."[^6]
* For more information, see the [GitHub](https://confluence.biola.edu/display/ithd/GitHub+-+Service+Catalog+Entry) or [GitLab Service Catalog entries](https://confluence.biola.edu/display/ithd/GitLab+-+Service+Catalog+Entry).

#### **Git Merge**
* "Merging is Git's way of putting a forked history back together again. The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch.
* Note that all of the commands presented below merge into the current branch. The current branch will be updated to reflect the merge, but the target branch will be completely unaffected. Again, this means that git merge is often used in conjunction with git checkout for selecting the current branch and git branch -d for deleting the obsolete target branch."[^7]
* For more information, see the [GitHub](https://confluence.biola.edu/display/ithd/GitHub+-+Service+Catalog+Entry) or [GitLab Service Catalog entries](https://confluence.biola.edu/display/ithd/GitLab+-+Service+Catalog+Entry).

#### **Git Pull**
* "The git pull command is used to fetch and download content from a remote repository and immediately update the local repository to match that content. Merging remote upstream changes into your local repository is a common task in Git-based collaboration work flows. The git pull command is actually a combination of two other commands, git fetch followed by git merge. In the first stage of operation git pull will execute a git fetch scoped to the local branch that HEAD is pointed at. Once the content is downloaded, git pull will enter a merge workflow. A new merge commit will be-created and HEAD updated to point at the new commit."[^8]
* For more information, see the [GitHub](https://confluence.biola.edu/display/ithd/GitHub+-+Service+Catalog+Entry) or [GitLab Service Catalog entries](https://confluence.biola.edu/display/ithd/GitLab+-+Service+Catalog+Entry).

#### **Git Push**
* "The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo. It's the counterpart to git fetch, but whereas fetching imports commits to local branches, pushing exports commits to remote branches. Remote branches are configured using the git remote command. Pushing has the potential to overwrite changes, caution should be taken when pushing. These issues are discussed below."[^9]
* For more information, see the [GitHub](https://confluence.biola.edu/display/ithd/GitHub+-+Service+Catalog+Entry) or [GitLab Service Catalog entries](https://confluence.biola.edu/display/ithd/GitLab+-+Service+Catalog+Entry).

---
[^1]: [Git Main Webpage](https://git-scm.com/)
