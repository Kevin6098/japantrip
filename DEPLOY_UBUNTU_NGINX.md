# 🚀 Deploy to Ubuntu Server with Nginx

Complete guide to deploy Japan Trip React app to Ubuntu server with Nginx, using domain **linkup-event.com**.

## 📋 Prerequisites

- Ubuntu 20.04+ server with root/sudo access
- Domain name: `linkup-event.com` (DNS configured)
- SSH access to your server
- Basic knowledge of Linux commands

## 🔧 Step 1: Server Setup

### Connect to Your Server

```bash
ssh root@your-server-ip
# or
ssh username@your-server-ip
```

### Update System Packages

```bash
sudo apt update
sudo apt upgrade -y
```

### Install Essential Tools

```bash
sudo apt install -y curl wget git build-essential
```

## 📦 Step 2: Install Node.js and npm

### Install Node.js 18.x (LTS)

```bash
# Add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js
sudo apt install -y nodejs

# Verify installation
node --version  # Should show v18.x.x
npm --version   # Should show 9.x.x
```

### Install PM2 (Process Manager)

```bash
sudo npm install -g pm2
```

PM2 will keep your app running even after server restarts.

## 🌐 Step 3: Install and Configure Nginx

### Install Nginx

```bash
sudo apt install -y nginx
```

### Start and Enable Nginx

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Check Nginx Status

```bash
sudo systemctl status nginx
```

## 📁 Step 4: Prepare Application Directory

### Create Application Directory

```bash
# Create directory for your app
sudo mkdir -p /var/www/linkup-event.com

# Set ownership (replace 'username' with your actual username)
sudo chown -R $USER:$USER /var/www/linkup-event.com

# Set permissions
sudo chmod -R 755 /var/www/linkup-event.com
```

### Clone or Upload Your Code

**Option A: If code is in Git repository**

```bash
cd /var/www/linkup-event.com
git clone https://github.com/your-username/your-repo.git .

# Or if you have a private repo:
git clone https://github.com/your-username/your-repo.git .
# Enter your credentials when prompted
```

**Option B: Upload files via SCP (from your local machine)**

```bash
# From your local machine (in the project directory)
scp -r * username@your-server-ip:/var/www/linkup-event.com/
```

**Option C: Use rsync (recommended for updates)**

```bash
# From your local machine
rsync -avz --exclude 'node_modules' --exclude '.git' \
  ./ username@your-server-ip:/var/www/linkup-event.com/
```

## 🏗️ Step 5: Build the React Application

### Navigate to Application Directory

```bash
cd /var/www/linkup-event.com
```

### Install Dependencies

```bash
npm install
```

### Build for Production

```bash
npm run build
```

This creates the `dist/` folder with optimized production files.

### Verify Build

```bash
ls -la dist/
# You should see: index.html, assets/, etc.
```

## ⚙️ Step 6: Configure Nginx

### Create Nginx Configuration File

```bash
sudo nano /etc/nginx/sites-available/linkup-event.com
```

### Add This Configuration

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name linkup-event.com www.linkup-event.com;

    root /var/www/linkup-event.com/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Main location block
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

### Save and Exit

- Press `Ctrl + X`
- Press `Y` to confirm
- Press `Enter` to save

### Enable the Site

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/linkup-event.com /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default
```

### Test Nginx Configuration

```bash
sudo nginx -t
```

You should see:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### Reload Nginx

```bash
sudo systemctl reload nginx
```

## 🔒 Step 7: Set Up SSL with Let's Encrypt (HTTPS)

### Install Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### Obtain SSL Certificate

```bash
sudo certbot --nginx -d linkup-event.com -d www.linkup-event.com
```

Follow the prompts:
- Enter your email address
- Agree to terms of service
- Choose whether to redirect HTTP to HTTPS (recommended: Yes)

### Auto-Renewal Setup

Certbot automatically sets up auto-renewal. Test it:

```bash
sudo certbot renew --dry-run
```

### Verify SSL

Visit `https://linkup-event.com` - you should see a secure connection.

## 🔥 Step 8: Configure Firewall

### Allow HTTP, HTTPS, and SSH

```bash
# Check if ufw is active
sudo ufw status

# Allow SSH (important - do this first!)
sudo ufw allow OpenSSH

# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

## 🌍 Step 9: Configure DNS

### DNS Records Required

In your domain registrar (GoDaddy, Namecheap, etc.), add these DNS records:

**A Record:**
```
Type: A
Name: @
Value: YOUR_SERVER_IP
TTL: 3600 (or default)
```

**A Record for www:**
```
Type: A
Name: www
Value: YOUR_SERVER_IP
TTL: 3600 (or default)
```

**Find Your Server IP:**
```bash
curl ifconfig.me
# or
hostname -I
```

### Verify DNS Propagation

```bash
# From your local machine
nslookup linkup-event.com
dig linkup-event.com
```

Wait 5-30 minutes for DNS to propagate.

## 🔄 Step 9: Set Up Auto-Deployment Script (Optional)

### Create Deployment Script

```bash
cd /var/www/linkup-event.com
nano deploy.sh
```

Add this content:

```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Navigate to app directory
cd /var/www/linkup-event.com

# Pull latest changes (if using git)
# git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the app
echo "🏗️ Building application..."
npm run build

# Copy build files to nginx directory (if needed)
# The dist folder is already in the right place

# Reload nginx
echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment complete!"
```

### Make Script Executable

```bash
chmod +x deploy.sh
```

### Run Deployment

```bash
./deploy.sh
```

## 📊 Step 10: Monitor and Maintain

### Check Nginx Logs

```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

### Check Application Status

```bash
# If using PM2
pm2 status
pm2 logs

# Check Nginx status
sudo systemctl status nginx
```

### Update Application

When you need to update:

```bash
cd /var/www/linkup-event.com

# Pull latest code (if using git)
git pull origin main

# Or upload new files via SCP/rsync

# Rebuild
npm install
npm run build

# Reload Nginx
sudo systemctl reload nginx
```

## 🛠️ Troubleshooting

### Issue: 502 Bad Gateway

**Solution:**
```bash
# Check if app is running
ps aux | grep node

# Check Nginx error logs
sudo tail -50 /var/log/nginx/error.log

# Verify file permissions
ls -la /var/www/linkup-event.com/dist/
```

### Issue: 404 Not Found

**Solution:**
```bash
# Verify Nginx configuration
sudo nginx -t

# Check if dist folder exists
ls -la /var/www/linkup-event.com/dist/

# Verify root path in Nginx config
sudo cat /etc/nginx/sites-available/linkup-event.com
```

### Issue: CSS/JS Not Loading

**Solution:**
```bash
# Check if assets folder exists
ls -la /var/www/linkup-event.com/dist/assets/

# Verify base path in vite.config.js
# Should be: base: '/'
```

### Issue: Domain Not Resolving

**Solution:**
```bash
# Check DNS
nslookup linkup-event.com

# Check if Nginx is listening
sudo netstat -tulpn | grep nginx

# Test with IP address directly
curl http://YOUR_SERVER_IP
```

### Issue: SSL Certificate Not Working

**Solution:**
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Check Nginx SSL configuration
sudo cat /etc/nginx/sites-available/linkup-event.com
```

## 🔐 Security Best Practices

### 1. Keep System Updated

```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Set Up Fail2Ban (Optional)

```bash
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 3. Regular Backups

```bash
# Create backup script
nano /var/www/backup.sh
```

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf /root/backups/linkup-event-$DATE.tar.gz /var/www/linkup-event.com
```

### 4. Monitor Disk Space

```bash
df -h
```

## 📝 Quick Reference Commands

```bash
# Restart Nginx
sudo systemctl restart nginx

# Reload Nginx (no downtime)
sudo systemctl reload nginx

# Check Nginx status
sudo systemctl status nginx

# Test Nginx config
sudo nginx -t

# View Nginx config
sudo cat /etc/nginx/sites-available/linkup-event.com

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log

# Rebuild app
cd /var/www/linkup-event.com && npm run build

# Check SSL certificate
sudo certbot certificates

# Renew SSL
sudo certbot renew
```

## ✅ Verification Checklist

After deployment, verify:

- [ ] Website loads at `http://linkup-event.com`
- [ ] HTTPS works at `https://linkup-event.com`
- [ ] All pages load correctly (Home, Schedule, Attractions, etc.)
- [ ] Navigation works (no 404s on refresh)
- [ ] Images load properly
- [ ] Mobile responsive design works
- [ ] Language toggle functions
- [ ] Countdown timer updates
- [ ] SSL certificate is valid (green lock icon)
- [ ] www subdomain redirects correctly
- [ ] Nginx auto-starts on server reboot

## 🎉 Success!

Your Japan Trip React app should now be live at **https://linkup-event.com**!

### Next Steps

1. **Monitor Performance**: Use tools like Google Analytics
2. **Set Up Monitoring**: Consider UptimeRobot or Pingdom
3. **Enable CDN**: Consider Cloudflare for better performance
4. **Backup Strategy**: Set up automated backups
5. **Update Process**: Document your update workflow

## 📞 Support

If you encounter issues:

1. Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`
2. Verify DNS: `nslookup linkup-event.com`
3. Test configuration: `sudo nginx -t`
4. Check file permissions: `ls -la /var/www/linkup-event.com/dist/`

---

**Your app is now live! 🚀**

Visit: **https://linkup-event.com**
