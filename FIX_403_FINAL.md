# Final Fix for 403 Error on /attractions

## Problem
Even with `autoindex off;`, accessing `/attractions` or `/attractions/` directly returns 403 Forbidden.

## Root Cause
When a physical directory `/var/www/linkup-event.com/attractions/` exists, Nginx:
1. Tries to serve it as a directory
2. Since `autoindex off;` and no `index.html` in that directory, it returns 403
3. The `try_files` fallback doesn't work because Nginx already determined it's a directory

## Solution
Add an explicit location block that matches `/attractions` and `/attractions/` and forces it to serve `index.html` directly, bypassing the directory check.

## Updated Nginx Configuration

```nginx
# Disable directory listing globally
autoindex off;

# Serve actual image files in attractions folder
location ~ ^/attractions/.+\.(jpg|jpeg|png|gif|webp|svg|html)$ {
    try_files $uri =404;
    expires 1y;
    add_header Cache-Control "public, immutable";
    access_log off;
}

# Explicitly handle /attractions and /attractions/ - force to index.html for React Router
# This prevents 403 when the directory exists
location ~ ^/attractions/?$ {
    try_files /index.html =404;
}

# Handle React Router - fallback to index.html for all other routes
location / {
    try_files $uri $uri/ /index.html;
}
```

## Key Changes

1. **New location block**: `location ~ ^/attractions/?$`
   - Matches exactly `/attractions` or `/attractions/`
   - Uses `try_files /index.html =404;` to directly serve index.html
   - Bypasses directory checking entirely

2. **Order matters**: This block comes AFTER the image file regex but BEFORE the general `/` location block

## Apply on Server

1. **Update Nginx config:**
   ```bash
   sudo nano /etc/nginx/sites-available/linkup-event.com
   ```

2. **Add the explicit `/attractions` location block** (see above)

3. **Test configuration:**
   ```bash
   sudo nginx -t
   ```

4. **Reload Nginx:**
   ```bash
   sudo systemctl reload nginx
   ```

5. **Test:**
   - `https://linkup-event.com/attractions` → Should work
   - `https://linkup-event.com/attractions/` → Should work
   - `https://linkup-event.com/attractions/sensoji/kaminarimon-gate.jpg` → Should serve image

## Why This Works

- The regex `^/attractions/?$` matches exactly `/attractions` or `/attractions/`
- `try_files /index.html =404;` directly serves index.html without checking if it's a directory
- This bypasses the directory listing check that was causing the 403
- Image files still work because the image regex comes first and matches actual files
