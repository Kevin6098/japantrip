# Fix 403 Forbidden Error on /attractions/

## Problem
When accessing `https://linkup-event.com/attractions/` (with trailing slash), you get a 403 Forbidden error.

## Cause
Nginx is trying to serve `/attractions/` as a directory. Since the actual `/attractions/` folder exists (with images), Nginx attempts to list directory contents, which is forbidden by default.

## Solution

Update your Nginx configuration at `/etc/nginx/sites-available/linkup-event.com`:

**Key changes:**
1. Add `autoindex off;` to disable directory listing
2. Add a specific location block for image files in `/attractions/`
3. Ensure the general `/` location block falls back to `index.html`

```nginx
root /var/www/linkup-event.com;
index index.html;

# Disable directory listing globally
autoindex off;

# Serve actual image files in attractions folder
location ~ ^/attractions/.*\.(jpg|jpeg|png|gif|webp|svg|html)$ {
    try_files $uri =404;
    expires 1y;
    add_header Cache-Control "public, immutable";
    access_log off;
}

# Handle React Router - fallback to index.html for all routes
location / {
    # Try the URI as a file, then as a directory, then fallback to index.html
    try_files $uri $uri/ /index.html;
}
```

**Important:** The order of location blocks matters! More specific blocks (like the regex for images) should come before the general `/` block.

## Steps to Apply

1. **Update the Nginx config file:**
   ```bash
   sudo nano /etc/nginx/sites-available/linkup-event.com
   ```

2. **Replace the location blocks** with the configuration above (make sure the `/attractions/` block comes BEFORE the `/` block)

3. **Test the configuration:**
   ```bash
   sudo nginx -t
   ```

4. **Reload Nginx:**
   ```bash
   sudo systemctl reload nginx
   ```

## How It Works

- `/attractions/` location block: Matches actual files in the attractions folder (like `/attractions/sensoji/kaminarimon-gate.jpg`) and serves them directly
- `/` location block: For all other paths, tries to find the file/directory, and if not found, falls back to `index.html` for React Router to handle
- The order matters: More specific location blocks (like `/attractions/`) must come before the general `/` block

## Alternative: Access without trailing slash

You can also access the page as `/attractions` (without trailing slash) which should work with the current config, but it's better to fix the Nginx config to handle both cases.
