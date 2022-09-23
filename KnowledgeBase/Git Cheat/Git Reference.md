Some Git Commands
-We add upstream as remote to push or pull changes from the upstream repo.
-We create a fork of the upstream to our account and create new branch for each feature
-We also can pull upstream main to get the latest commits
-Create pull request from github from the forked repo
```
git show-ref
git stash 
git stash pop 0
git add .
git reset .
git restore --staged .
git commit -m "..."
git push origin -d feature (Delete feature branch in origin)
git remote -v
git remote add orgin https://github.com/.../repo.git
git remote add upstream https://github.com/.../repo.git
git reset fc83ffb5856ce8ec7f5818e98c4013931d7d5794
git branch feature
git branch -r/-a (View branches)
git checkout feature
git merge feature 
git pull upstream main (pull upstream main to current local branch)
git fetch --all --prune (Get all the commits even the deleted ones)
git reset --hard upstream/main (now there are equal to the upstream/main branch, use --soft to keep all the changes) 
git rebase -i fc83ffb5856ce8ec7f5818e98c4013931d7d5794 (the commit below the commits you want to squash and pick)
```
