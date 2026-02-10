#!/bin/bash
# Deploy japantrip to VPS web root
# Run from project root: ~/projects/japantrip

set -e

WEB_ROOT="/var/www/linkup-event.com"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "==> Deploying from $PROJECT_DIR to $WEB_ROOT"

# Build the app (Vite/React)
echo "==> Building..."
cd "$PROJECT_DIR"
npm run build

# Clear web root and copy dist
echo "==> Copying dist..."
sudo rm -rf "$WEB_ROOT"/*
sudo cp -r dist/* "$WEB_ROOT/"

# Copy static HTML sections
echo "==> Copying attractions..."
sudo cp -r attractions "$WEB_ROOT/"
echo "==> Copying restaurants..."
sudo cp -r restaurants "$WEB_ROOT/"
echo "==> Copying schedule..."
sudo cp -r schedule "$WEB_ROOT/"

# Fix permissions
echo "==> Setting permissions..."
sudo chown -R www-data:www-data "$WEB_ROOT"
sudo chmod -R 755 "$WEB_ROOT"

# Reload nginx
echo "==> Reloading nginx..."
sudo systemctl reload nginx

echo "==> Deploy done."
