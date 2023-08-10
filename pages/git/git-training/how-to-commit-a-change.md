---
layout: page
title: Commit
subtitle: How to commit a change.
readtime: true
---
# Committing a Change in Git
Making a commit is a lot like making multiple save points in a hard video game level. If you find you just aren't powerful enough to beat the boss at the end of the level, you can roll back your game to a previous save point where you can buy some extra health potions.

Similarly, making multiple commits when editing a repo allows you to glance through all the changes you've made and revert back to a previous state of the repo if needed. Good commits give you a granular view of the changes with the commit message of the editor letting you know what they were doing and why they made the change. 

### How to Commit a Change in a Browser
1. When you've finished editing your code, make a commit message describing specifically what you did.
1. Make sure the target branch is Main.
1. Click Commit changes.

### How to Commit a Change Locally on Your Computer
1. Save the changes to the file in your text editor and close the file.
1. Change the active directory to the parent directory of the repo.
1. Tell Git the files you wish to add to your commit: `git add <filePathOfParentFolderToCommit>`
1. From Terminal, run the following code and add a commit message describing specifically what you did:
    - `git commit -am`"`yourCommitMessage`"
3. Repeat steps 1-4 as many times as you want until you're done working on the code.
---
[Previous Page](https://github.com/biola/sysadmin-docs/blob/master/sysadmin%20training/04.%20GitHub%20&%20GitLab/03.%20How%20to%20Edit%20a%20Repo.md) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [Next Page](https://github.com/biola/sysadmin-docs/blob/master/sysadmin%20training/04.%20GitHub%20&%20GitLab/05.%20How%20to%20Push%20a%20Change.md)
