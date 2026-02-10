# Fix Git push (ORIG_HEAD / timeout)

## What was wrong
- Git was failing with: `update_ref failed for ref 'ORIG_HEAD': Operation timed out`
- The `.git` folder was timing out on read/write (e.g. when committing).

## What we fixed
- **Removed** the stale `.git/ORIG_HEAD` file so that ref is no longer in a bad state.
- Your changes are **staged** and ready to commit.

## What you need to do

### 1. Commit and push from a normal terminal (not inside Cursor)
Open **Terminal.app** or **iTerm** (outside Cursor) and run:

```bash
cd /Users/kevinsoon/Documents/GitHub/japantrip

# Commit (your changes are already staged)
git commit -m "Carousel and restaurant nav: glass-style carousel buttons, mobile Prev/Next pills, new CarouselNav component"

# Update from GitHub first (you were 4 commits behind)
git pull --rebase origin main

# Push
git push origin main
```

If `git commit` still times out in that terminal, the `.git` folder may be on a synced or network drive (e.g. iCloud Drive, Dropbox). In that case:

- Move the repo to a **local folder** (e.g. `~/Projects/japantrip`) so `.git` is not inside a synced folder, then run the same commands there, or  
- Temporarily **pause sync** for the project folder, then run the commands above.

### 2. If you use iCloud / Dropbox / OneDrive
- Do **not** put the project (or at least not `.git`) inside a synced folder; sync can lock or delay files and cause “Operation timed out” for Git.

### 3. After a successful push
- You can close this file or delete `GIT_PUSH_STEPS.md` if you don’t need it anymore.
