git
===

### 拉分支
```
  步骤：
    1.从远程版本库的某一个主分支oldBranch，拉出一个新的分支newBranch
      git branch newBranch origin/oldBranch
    2.提交到新的分支
      git push origin newBranch
    3.从主分支拉取更新
      git pull
    4.提交到主分支
      git push origin newBranch:oldBranch
    5.删除本地分支和远程分支
      git branch -D newBranch
      git push origin :newBranch
```