# Technical Interview Questions & Answers - TASK 4: Git & GitHub

---

### Q1: What is Git?
**Answer:**
Git is a distributed version control system (DVCS) that tracks changes in computer files, allowing multiple developers to collaborate on code simultaneously without overwriting each other's work.

---

### Q2: What is the difference between merge and rebase?
**Answer:**
- **`git merge`**: Combines changes from one branch into another by creating a new "merge commit". It preserves the exact linear and non-linear history of all branches.
- **`git rebase`**: Moves or applies your branch's commits on top of another branch, rewriting the commit history to create a clean, linear commit history.

---

### Q3: What is a pull request (PR)?
**Answer:**
A Pull Request (PR) is a feature on platforms like GitHub/GitLab that notifies team members that a developer has completed a feature branch. It allows team members to review code, discuss changes, run automated CI/CD checks, and approve merging the branch into a target branch (e.g., `dev` or `main`).

---

### Q4: How do you resolve merge conflicts?
**Answer:**
1. Git highlights conflicting lines in the affected files using markers (`<<<<<<<`, `=======`, `>>>>>>>`).
2. Open the file and manually decide which code to keep or combine.
3. Remove the conflict markers.
4. Save the file and run `git add <file>`.
5. Run `git commit -m "fix: resolve merge conflicts"` to complete the merge.

---

### Q5: What are Git tags?
**Answer:**
Git tags are reference pointers used to mark specific points in a repository's history as important, typically used to tag software release versions (e.g., `v1.0.0`, `v2.1.0`). Unlike branches, tags do not change as new commits are added.

---

### Q6: What is a Git workflow?
**Answer:**
A Git workflow is a recommended branching strategy that defines how developers create, manage, and merge branches during software development. Popular workflows include:
- **GitFlow**: Uses `main`, `dev`, `feature/*`, `release/*`, and `hotfix/*` branches.
- **GitHub Flow**: Simple feature branch strategy where code is merged directly from feature branches into `main` after review.

---

### Q7: Explain `git stash`.
**Answer:**
`git stash` temporarily stashes (saves) uncommitted local changes (both staged and unstaged) in a temporary workspace, leaving you with a clean working directory. You can switch branches or pull updates, then reapply your stashed changes later using `git stash pop`.

---

### Q8: What is the use of `.gitignore`?
**Answer:**
A `.gitignore` file is a text file that specifies intentionally untracked files and directories (such as `node_modules/`, build artifacts, temporary log files, and secret `.env` credentials) that Git should ignore and never commit or push to remote repositories.
