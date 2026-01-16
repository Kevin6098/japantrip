# PostgreSQL + PostgREST Setup Guide

## Overview
This guide shows how to connect your React app to PostgreSQL using PostgREST (no Node.js backend needed).

## Architecture
```
React App → PostgREST (REST API) → PostgreSQL
```

---

## Step 1: Install PostgreSQL on VPS

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib -y

# Start PostgreSQL
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql

# In PostgreSQL prompt:
CREATE DATABASE japantrip_budget;
CREATE USER budget_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE japantrip_budget TO budget_user;
\q
```

---

## Step 2: Create Database Schema

```bash
# Connect to database
sudo -u postgres psql -d japantrip_budget

# Run this SQL:
```

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Members table
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Expenses table
CREATE TABLE expenses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  category TEXT NOT NULL,
  currency TEXT NOT NULL,
  description TEXT,
  amount DECIMAL(10,2) NOT NULL,
  paid_by UUID REFERENCES members(id) ON DELETE SET NULL,
  split_with UUID[] DEFAULT '{}',
  splits JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_expenses_date ON expenses(date);
CREATE INDEX idx_expenses_paid_by ON expenses(paid_by);
CREATE INDEX idx_expenses_category ON expenses(category);

-- Grant permissions to PostgREST user
GRANT USAGE ON SCHEMA public TO budget_user;
GRANT ALL ON members TO budget_user;
GRANT ALL ON expenses TO budget_user;
GRANT USAGE, SELECT ON SEQUENCE members_id_seq TO budget_user;
GRANT USAGE, SELECT ON SEQUENCE expenses_id_seq TO budget_user;

-- Enable Row Level Security (optional, for security)
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (adjust as needed)
CREATE POLICY "Allow all operations" ON members FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON expenses FOR ALL USING (true);
```

---

## Step 3: Install PostgREST on VPS

```bash
# Download PostgREST (latest version from https://github.com/PostgREST/postgrest/releases)
cd /tmp
wget https://github.com/PostgREST/postgrest/releases/latest/download/postgrest-v12.0.2-linux-x64.tar.xz
tar -xJf postgrest-v12.0.2-linux-x64.tar.xz
sudo mv postgrest /usr/local/bin/
sudo chmod +x /usr/local/bin/postgrest

# Verify installation
postgrest --version
```

---

## Step 4: Create PostgREST Configuration

```bash
# Create config directory
sudo mkdir -p /etc/postgrest
sudo nano /etc/postgrest/config.conf
```

Add this configuration:

```ini
db-uri = "postgres://budget_user:your_secure_password@localhost:5432/japantrip_budget"
db-schema = "public"
db-anon-role = "budget_user"
db-pool = 10
server-host = "127.0.0.1"
server-port = 3001
```

**Important:** Change `your_secure_password` to your actual password!

---

## Step 5: Create Systemd Service for PostgREST

```bash
sudo nano /etc/systemd/system/postgrest.service
```

Add this:

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

```bash
# Reload systemd and start PostgREST
sudo systemctl daemon-reload
sudo systemctl start postgrest
sudo systemctl enable postgrest

# Check status
sudo systemctl status postgrest

# Check if it's running
curl http://localhost:3001/members
```

---

## Step 6: Configure Nginx Reverse Proxy

```bash
sudo nano /etc/nginx/sites-available/linkup-event.com
```

Add this location block inside your server block:

```nginx
# PostgREST API endpoint
location /api/ {
    proxy_pass http://127.0.0.1:3001/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # CORS headers (if needed)
    add_header 'Access-Control-Allow-Origin' '*' always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
    add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type, Prefer' always;
    
    if ($request_method = 'OPTIONS') {
        return 204;
    }
}
```

```bash
# Test and reload Nginx
sudo nginx -t
sudo systemctl reload nginx
```

---

## Step 7: Test the API

```bash
# Test from VPS
curl http://localhost:3001/members

# Test from outside (should work via Nginx)
curl https://linkup-event.com/api/members
```

You should see an empty array `[]` if no members exist yet.

---

## Step 8: Security Considerations

### Option A: Basic Authentication (Simple)
Add to PostgREST config:
```ini
jwt-secret = "your-super-secret-jwt-key-min-32-chars"
```

### Option B: IP Whitelist (Recommended for VPS)
In Nginx, restrict API access:
```nginx
location /api/ {
    allow 127.0.0.1;  # Localhost
    allow YOUR_IP_ADDRESS;  # Your IP
    deny all;
    
    proxy_pass http://127.0.0.1:3001/;
    # ... rest of config
}
```

### Option C: API Key (Best for production)
Use Nginx auth_request or add API key validation.

---

## Troubleshooting

### PostgREST not starting?
```bash
# Check logs
sudo journalctl -u postgrest -f

# Check config syntax
postgrest /etc/postgrest/config.conf --help
```

### Can't connect to database?
```bash
# Test PostgreSQL connection
sudo -u postgres psql -d japantrip_budget -U budget_user

# Check PostgreSQL is running
sudo systemctl status postgresql
```

### API returns 404?
- Check PostgREST is running: `sudo systemctl status postgrest`
- Check Nginx config: `sudo nginx -t`
- Check firewall: `sudo ufw status`

---

## Next Steps

After setup, proceed to implement the React integration (see implementation files).
