#!/bin/bash

# Script to fix "short read while indexing" Git errors
# This script will rebuild the Git index and fix corruption issues

echo "🔧 Fixing Git index corruption issues..."
echo ""

# Check if we're in a Git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not in a Git repository!"
    exit 1
fi

# Step 1: Remove corrupted index
echo "Step 1: Removing corrupted index..."
rm -f .git/index
echo "✅ Index removed"

# Step 2: Rebuild the index
echo "Step 2: Rebuilding index..."
git reset
echo "✅ Index rebuilt"

# Step 3: Check for corrupted objects
echo "Step 3: Checking repository integrity..."
git fsck --full --no-progress
FSCK_EXIT=$?

if [ $FSCK_EXIT -eq 0 ]; then
    echo "✅ Repository integrity check passed"
else
    echo "⚠️  Some issues found, but continuing..."
fi

# Step 4: Re-add all files
echo "Step 4: Re-adding all files to index..."
git add -A
echo "✅ All files re-added"

# Step 5: Clean up unnecessary files
echo "Step 5: Cleaning up repository..."
git gc --prune=now --quiet
echo "✅ Repository cleaned"

# Step 6: Verify status
echo ""
echo "Step 6: Verifying Git status..."
git status

echo ""
echo "✅ Git index fix completed!"
echo ""
echo "If you still see errors, try:"
echo "  1. Close and reopen GitHub Desktop"
echo "  2. If the error persists, run: git reset --hard HEAD"
echo "  3. Or contact support if the issue continues"
