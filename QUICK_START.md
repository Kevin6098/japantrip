# Quick Start Guide - PostgreSQL Budget Splitter

## 🚀 Setup in 5 Steps

### Step 1: Install PostgreSQL on VPS
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib -y
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Step 2: Create Database
```bash
sudo -u postgres psql
```

In PostgreSQL prompt:
```sql
CREATE DATABASE japantrip_budget;
CREATE USER budget_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE japantrip_budget TO budget_user;
\q
```

### Step 3: Create Tables
```bash
sudo -u postgres psql -d japantrip_budget -f database-schema.sql
```

### Step 4: Install PostgREST
```bash
cd /tmp
wget https://github.com/PostgREST/postgrest/releases/latest/download/postgrest-v12.0.2-linux-x64.tar.xz
tar -xJf postgrest-v12.0.2-linux-x64.tar.xz
sudo mv postgrest /usr/local/bin/
sudo chmod +x /usr/local/bin/postgrest
```

### Step 5: Configure PostgREST
```bash
sudo mkdir -p /etc/postgrest
sudo nano /etc/postgrest/config.conf
```

Add:
```ini
db-uri = "postgres://budget_user:your_secure_password@localhost:5432/japantrip_budget"
db-schema = "public"
db-anon-role = "budget_user"
db-pool = 10
server-host = "127.0.0.1"
server-port = 3001
```

Create systemd service:
```bash
sudo nano /etc/systemd/system/postgrest.service
```

Add:
```ini
[Unit]
Description=PostgREST API Server
After=postgresql.service

[Service]
ExecStart=/usr/local/bin/postgrest /etc/postgrest/config.conf
Restart=always
RestartSec=10
User=postgres
Group=postgres

[Install]
WantedBy=multi-user.target
```

Start PostgREST:
```bash
sudo systemctl daemon-reload
sudo systemctl start postgrest
sudo systemctl enable postgrest
sudo systemctl status postgrest
```

### Step 6: Configure Nginx
Add to your Nginx config (`/etc/nginx/sites-available/linkup-event.com`):
```nginx
location /api/ {
    proxy_pass http://127.0.0.1:3001/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

Reload Nginx:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Step 7: Enable Database Mode in React
```bash
# In your project root
cp .env.example .env
nano .env
```

Set:
```
VITE_USE_DATABASE=true
VITE_API_URL=/api
```

Rebuild and deploy:
```bash
npm run build
./deploy.sh
```

## ✅ Test It

```bash
# Test API
curl http://localhost:3001/members
curl https://yourdomain.com/api/members
```

Should return `[]` (empty array).

## 🎉 Done!

Your React app now uses PostgreSQL! Data persists across devices and sessions.
