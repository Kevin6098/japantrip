# ⚡ Quick Deploy Guide - linkup-event.com

Fast deployment checklist for Ubuntu + Nginx.

## 🚀 Quick Steps

### 1. Initial Server Setup (One-time)

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PM2 (optional)
sudo npm install -g pm2
```

### 2. Create App Directory

```bash
sudo mkdir -p /var/www/linkup-event.com
sudo chown -R $USER:$USER /var/www/linkup-event.com
cd /var/www/linkup-event.com
```

### 3. Upload Your Code

From your local machine:
```bash
rsync -avz --exclude 'node_modules' --exclude '.git' \
  ./ username@your-server-ip:/var/www/linkup-event.com/
```

### 4. Build the App

```bash
cd /var/www/linkup-event.com
npm install
npm run build
```

### 5. Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/linkup-event.com
```

Paste this config:
```nginx
server {
    listen 80;
    server_name linkup-event.com www.linkup-event.com;
    root /var/www/linkup-event.com/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/linkup-event.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 6. Setup SSL (HTTPS)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d linkup-event.com -d www.linkup-event.com
```

### 7. Configure Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 8. Configure DNS

At your domain registrar, add:
- **A Record**: `@` → `YOUR_SERVER_IP`
- **A Record**: `www` → `YOUR_SERVER_IP`

## 🔄 Future Updates

Use the deployment script:

```bash
cd /var/www/linkup-event.com
chmod +x deploy.sh
./deploy.sh
```

Or manually:
```bash
cd /var/www/linkup-event.com
npm install
npm run build
sudo systemctl reload nginx
```

## ✅ Verify

- [ ] http://linkup-event.com works
- [ ] https://linkup-event.com works
- [ ] All pages load
- [ ] Mobile responsive
- [ ] SSL certificate valid

## 🆘 Quick Fixes

**502 Error:**
```bash
sudo tail -f /var/log/nginx/error.log
```

**404 Error:**
```bash
ls -la /var/www/linkup-event.com/dist/
sudo nginx -t
```

**SSL Issues:**
```bash
sudo certbot renew
sudo systemctl reload nginx
```

---

**Full guide:** See `DEPLOY_UBUNTU_NGINX.md` for detailed instructions.
