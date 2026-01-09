#!/bin/bash

# Deployment script for linkup-event.com
# Run this script after uploading new code to rebuild and reload

set -e  # Exit on error

echo "🚀 Starting deployment for linkup-event.com..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Navigate to application directory
APP_DIR="/var/www/linkup-event.com"
cd "$APP_DIR"

echo -e "${BLUE}📦 Installing/updating dependencies...${NC}"
npm install --production=false

echo -e "${BLUE}🏗️ Building application...${NC}"
npm run build

# Verify build was successful
if [ ! -d "dist" ]; then
    echo -e "${YELLOW}❌ Build failed! dist directory not found.${NC}"
    exit 1
fi

echo -e "${BLUE}✅ Build successful!${NC}"

# Check if running as root or with sudo
if [ "$EUID" -eq 0 ]; then
    echo -e "${BLUE}🔄 Reloading Nginx...${NC}"
    systemctl reload nginx
else
    echo -e "${BLUE}🔄 Reloading Nginx (requires sudo)...${NC}"
    sudo systemctl reload nginx
fi

# Check Nginx status
if systemctl is-active --quiet nginx; then
    echo -e "${GREEN}✅ Nginx is running${NC}"
else
    echo -e "${YELLOW}⚠️  Nginx might not be running. Check with: sudo systemctl status nginx${NC}"
fi

echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo -e "${GREEN}Visit: https://linkup-event.com${NC}"
