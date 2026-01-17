#!/bin/bash

# Deployment script for Japan Trip React App
# Usage: ./deploy.sh

set -e  # Exit on error

PROJECT_DIR="/root/projects/japantrip"
WEB_ROOT="/var/www/linkup-event.com"

echo "🚀 Starting deployment..."

# Navigate to project directory
cd "$PROJECT_DIR" || exit 1

# Build the React app
echo "📦 Building React app..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed: dist folder not found"
    exit 1
fi

# Backup existing web root (optional)
echo "💾 Backing up existing files..."
if [ -d "$WEB_ROOT" ]; then
    sudo cp -r "$WEB_ROOT" "${WEB_ROOT}.backup.$(date +%Y%m%d_%H%M%S)" 2>/dev/null || true
fi

# Create web root directory if it doesn't exist
sudo mkdir -p "$WEB_ROOT"

# Copy dist contents to web root
echo "📂 Copying dist files to $WEB_ROOT..."
sudo rm -rf "$WEB_ROOT"/*
sudo cp -r dist/* "$WEB_ROOT/"

# Note: Images are now hosted on Cloudinary, so we don't need to copy
# the attractions/ or restaurants/ folders anymore
# If you still have old images on the server, you can remove them:
# sudo rm -rf "$WEB_ROOT/attractions" "$WEB_ROOT/restaurants"

# Set correct permissions
echo "🔐 Setting permissions..."
sudo chown -R www-data:www-data "$WEB_ROOT"
sudo chmod -R 755 "$WEB_ROOT"

# Test Nginx configuration
echo "🔍 Testing Nginx configuration..."
if sudo nginx -t; then
    echo "✅ Nginx configuration is valid"
    
    # Reload Nginx
    echo "🔄 Reloading Nginx..."
    sudo systemctl reload nginx
    
    echo "✅ Deployment completed successfully!"
    echo "🌐 Your site should now be live at https://linkup-event.com"
else
    echo "❌ Nginx configuration test failed!"
    exit 1
fi
