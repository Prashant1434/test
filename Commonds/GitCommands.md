

## installation

```bash

# windows
# download gitbash from
# https://git-scm.com/downloads

# linux - debian based - Ubuntu
> sudo apt-get install git

# linux - red hat based - Centos / RH / Fedora
> sudo yum install git

# macOS
# by default available
# to update the git version use
# first install brew from Homebrew
> brew install git

```

```bash

# initializes a git repository
> git init

# set the global settings
> git config --global --list
> git config --global user.name ""
> git config --global user.email ""

# to verify the settings
> cat ~/.gitconfig

# get the status of all the files and directories within the working directory
> git status
> git status -s

# status options
# ??: this file is not yet added to the repository (untracked file)
# A : the file is now present in the staging area
#  M: the file is modified but it is not not yet staged (not yet added to the staging area)
# M : the file is modified and it is present in the staging area
# UU: the file has got conflicts


# add the file(s) in the staging area
> git add <file name>

# add all the updated file(s) or directories
> git add .

# commit all the changes present in the staging area
> git commit -m <commit message>

# get the logs of all commits
> git log

# get the difference between the contents of a file from working directory and last recorded version from repository
> git diff <file name>

# get the last (latest) version from repository and replace it with the working directory
> git checkout <file name>

# please please please do not execute this command if you are not sure what you are doing
# please execute this command on your own risk
# get all the changes out from stage area and move them to the working directory (changes will persist)
> git reset

# please please please do not execute this command if you are not sure what you are doing
# please execute this command on your own risk
# get all the changes out from stage area and discard them
> git reset --hard

```

## remote repo connection

- local repository
  - the one which resides on the users machine
- remote repository
  - the one which resides on the remote server (shared server) like GitHub or GitLab
  - also known as shared repository

```bash

# get the info of remote repository
> git remote -v

# link the remote repository with local one
# > git remote add <alias> <remote repository url>
> git remote add origin git@github.com:<username>/test-dac-repo.git

# share the changes from local to remote
# > git push <alias> <branch>
> git push origin main

# u: upstream
# once set, by default git will use the origin as alias and main as the branch
> git push -u origin main

# first time setup (get all the changes from server to local)
> git clone <url>

# get all the changes from server to local (all the times)
> git pull

```

## branching

```bash

# by default git always will create a new branch (along with the first commit) named main branch
# the main branch
# - should contain the latest code
# - should contain working code
# - should contain bug-free code
# - should contain crash-free code
# - should contain stable code

# current branch
# - which is used to create new versions
# - all the commits will go to this branch

# get the current branch
> git status

# get the list of branches
# the branch which has * in front of the name is the current branch
> git branch

# create a new branch
> git branch <branch name>

# checkout new branch
> git checkout <branch name>

# merge changes from other branch
# merges all the changes from other branch to the current branch
> git merge <other branch name>

# delete a branch
> git branch -d <branch name>

# get the logs in better way
> git log --oneline --graph --color

# create a new branch and checkout immediately
> git checkout -b <new branch name>

```

## merge conflict

- when two branches have added / updated the same file on the same line then the merge will generate a conflict
- a scenario where git does not understand how to merge the changes
- and gives the control in users hand
- the merge conflict(s) must be handled manually
