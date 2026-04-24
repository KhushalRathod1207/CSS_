# GitHub Complete Guide 🚀

> Based on your project with branches: `main`, `DevKhushal`, `Yash`

---

## 1. Initial Setup & Push

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

---

## 2. Create a New Branch

```bash
# Create and switch to new branch
git checkout -b DevKhushal

# OR just create without switching
git branch DevKhushal
```

---

## 3. Change / Switch Branch

```bash
# Switch to existing branch
git checkout main
git checkout DevKhushal
git checkout Yash

# Modern way (Git 2.23+)
git switch main
git switch DevKhushal
```

---

## 4. Push on a Branch

```bash
# Switch to your branch first
git checkout DevKhushal

# Make changes, then stage and commit
git add .
git commit -m "Work on Update"

# Push branch to GitHub
git push origin DevKhushal
```

---

## 5. Merge Branch into Main

```bash
# Step 1: Switch to main
git checkout main

# Step 2: Merge your branch
git merge DevKhushal

# Step 3: Push merged main to GitHub
git push origin main
```

---

## 6. Pull on a Branch (Sync Changes)

```bash
# Pull latest changes on current branch
git pull origin main

# Pull on a specific branch
git checkout DevKhushal
git pull origin DevKhushal
```

---

## 7. Pull with Override (Force Sync)

> ⚠️ This will DISCARD your local changes and match GitHub exactly.

```bash
git fetch origin
git reset --hard origin/main
```

For a specific branch:
```bash
git checkout DevKhushal
git fetch origin
git reset --hard origin/DevKhushal
```

---

## 8. Change Sync (Fetch + Merge)

```bash
# Fetch all remote changes without merging
git fetch --all

# Then merge manually
git merge origin/main
```

---

## 9. Delete a Branch

```bash
# Delete local branch
git branch -d DevKhushal

# Delete remote branch on GitHub
git push origin --delete DevKhushal
```

---

## 10. Check Status & Logs

```bash
git status                  # See uncommitted changes
git log --oneline --graph   # See commit history like Git Graph
git branch -a               # List all branches (local + remote)
```

---

## Your Project Branch Flow (from Git Graph)

```
main (origin/HEAD)
 └── Merge remote-tracking branch 'origin/DevKhushal'  ← c37adc6
      ├── DevKhushal → "Work on Update"                 ← f24665d
      └── Yash       → "Work on create Html and Work file" ← 8579b1a
           └── Add files via upload                     ← 36a9b7c
                └── Initial commit                      ← f3ba892
```

---

## Quick Reference Cheat Sheet

| Action | Command |
|---|---|
| Create branch | `git checkout -b branch-name` |
| Switch branch | `git checkout branch-name` |
| Push branch | `git push origin branch-name` |
| Pull branch | `git pull origin branch-name` |
| Merge branch | `git merge branch-name` |
| Force sync | `git reset --hard origin/branch-name` |
| Delete branch | `git branch -d branch-name` |
| See all branches | `git branch -a` |
