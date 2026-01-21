# Git Index Fix - "short read while indexing" Error

## Problem
GitHub Desktop shows error: `error: short read while indexing <file>`

This occurs when Git's index file (`.git/index`) becomes corrupted or when files are partially accessible (often due to cloud sync).

## Solution Applied ✅

The following steps were successfully applied to fix `/Users/kevinsoon/Documents/GitHub/event_org`:

### Step 1: Remove corrupted index
```bash
cd /path/to/repo
rm -f .git/index.lock
rm -f .git/index
```

### Step 2: Rebuild index
```bash
git reset
```

### Step 3: Force refresh and cleanup
```bash
git update-index --refresh
git gc --prune=now
git fsck --full
```

### Step 4: Verify
```bash
git status
```

## Quick Fix Script

If this happens again, run:
```bash
cd /path/to/repo
rm -f .git/index.lock .git/index
git reset
git update-index --refresh
git gc --prune=now
git status
```

## Prevention Tips

1. **Avoid cloud-synced folders**: Don't store Git repos in iCloud Drive, OneDrive, or Dropbox folders
2. **Use local storage**: Keep repos in `~/Documents/GitHub/` or `~/Projects/`
3. **Close GitHub Desktop** before running fix commands to avoid lock file conflicts

## Status

✅ **FIXED** - Repository at `/Users/kevinsoon/Documents/GitHub/event_org` is now working correctly.
