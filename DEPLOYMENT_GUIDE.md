# Deployment Guide

## Quick Deployment

After building your React app, copy the files to `/var/www/linkup-event.com`:

### Option 1: Using the Deployment Script (Recommended)

```bash
cd /root/projects/japantrip
./deploy.sh
```

This script will:
1. Build the React app (`npm run build`)
2. Copy `dist/*` to `/var/www/linkup-event.com/`
3. Copy `attractions/` folder to `/var/www/linkup-event.com/attractions/`
4. Set correct permissions
5. Test and reload Nginx

### Option 2: Manual Deployment

```bash
# 1. Navigate to project directory
cd /root/projects/japantrip

# 2. Build the React app
npm run build

# 3. Copy dist contents to web root
sudo rm -rf /var/www/linkup-event.com/*
sudo cp -r dist/* /var/www/linkup-event.com/

# 4. Copy attractions folder with images
sudo mkdir -p /var/www/linkup-event.com/attractions
sudo cp -r attractions/* /var/www/linkup-event.com/attractions/

# 5. Set correct permissions
sudo chown -R www-data:www-data /var/www/linkup-event.com
sudo chmod -R 755 /var/www/linkup-event.com

# 6. Test and reload Nginx
sudo nginx -t
sudo systemctl reload nginx
```

## File Structure After Deployment

```
/var/www/linkup-event.com/
├── index.html
├── assets/
│   ├── index-*.js
│   ├── index-*.css
│   └── vendor-*.js
└── attractions/
    ├── sensoji/
    │   ├── kaminarimon-gate.jpg
    │   ├── nakamise-dori.jpg
    │   └── temple-complex.jpg
    ├── harajuku/
    │   ├── takeshita-street.jpg
    │   └── ...
    └── ... (other attraction folders)
```

## Important Notes

1. **Attractions Folder**: The `attractions/` folder must be copied separately because Vite doesn't automatically copy files from the project root to `dist/`. Only files in the `public/` folder are copied automatically.

2. **Permissions**: Always set ownership to `www-data:www-data` and permissions to `755` so Nginx can serve the files.

3. **Nginx Configuration**: Make sure your Nginx config at `/etc/nginx/sites-available/linkup-event.com` is correct and enabled.

## Troubleshooting

### Images not loading?
- Check that `attractions/` folder exists in `/var/www/linkup-event.com/`
- Verify file permissions: `ls -la /var/www/linkup-event.com/attractions/`
- Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`

### 404 errors on routes?
- Ensure Nginx has the React Router fallback configured
- Check that `index.html` is in the web root
- Clear browser cache

### Permission denied errors?
- Run: `sudo chown -R www-data:www-data /var/www/linkup-event.com`
- Run: `sudo chmod -R 755 /var/www/linkup-event.com`
