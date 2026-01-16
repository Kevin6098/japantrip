# VPS Setup Guide - PostgreSQL Budget Splitter

Since you already have PostgreSQL installed, follow these steps:

---

## Step 1: Create Database and User

Connect to PostgreSQL:
```bash
sudo -u postgres psql
```

In the PostgreSQL prompt, run:
```sql
-- Create database
CREATE DATABASE japantrip_budget;

-- Create user (choose a strong password!)
CREATE USER budget_user WITH PASSWORD 'your_secure_password_here';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE japantrip_budget TO budget_user;

-- Exit PostgreSQL
\q
```

**Important:** Replace `'your_secure_password_here'` with a strong password. Remember it - you'll need it for PostgREST config!

---

## Step 2: Create Tables

Upload the `database-schema.sql` file to your VPS, then run:

```bash
# Option A: If you have the file on VPS
sudo -u postgres psql -d japantrip_budget -f database-schema.sql

# Option B: Copy-paste the SQL directly
sudo -u postgres psql -d japantrip_budget
```

If using Option B, paste the entire contents of `database-schema.sql` and press Enter, then type `\q` to exit.

**Note:** The SQL file will create:
- `members` table
- `expenses` table
- Indexes for performance
- Auto-update trigger for `updated_at`

---

## Step 3: Verify Database Setup

Test that everything was created correctly:

```bash
sudo -u postgres psql -d japantrip_budget -c "\dt"
```

You should see:
```
          List of relations
 Schema |   Name    | Type  |    Owner     
--------+-----------+-------+-------------
 public | expenses  | table | postgres
 public | members   | table | postgres
```

Also verify the user can connect:
```bash
sudo -u postgres psql -d japantrip_budget -U budget_user -c "SELECT 1;"
```

---

## Step 4: Install PostgREST

Download and install PostgREST (the REST API layer):

```bash
cd /tmp

# Download latest PostgREST (check for latest version at https://github.com/PostgREST/postgrest/releases)
wget https://github.com/PostgREST/postgrest/releases/latest/download/postgrest-v12.0.2-linux-x64.tar.xz

# Extract
tar -xJf postgrest-v12.0.2-linux-x64.tar.xz

# Move to system path
sudo mv postgrest /usr/local/bin/

# Make executable
sudo chmod +x /usr/local/bin/postgrest

# Verify installation
postgrest --version
```

You should see the version number (e.g., `postgrest 12.0.2`).

---

## Step 5: Configure PostgREST

Create configuration directory and file:

```bash
sudo mkdir -p /etc/postgrest
sudo nano /etc/postgrest/config.conf
```

Add this configuration (replace the password with your actual password):

```ini
db-uri = "postgres://budget_user:your_secure_password_here@localhost:5432/japantrip_budget"
db-schema = "public"
db-anon-role = "budget_user"
db-pool = 10
server-host = "127.0.0.1"
server-port = 3001
```

**Important:** 
- Replace `your_secure_password_here` with the password you set in Step 1
- Save and exit (Ctrl+X, then Y, then Enter)

---

## Step 6: Create PostgREST Systemd Service

Create a systemd service so PostgREST starts automatically:

```bash
sudo nano /etc/systemd/system/postgrest.service
```

Add this content:

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

Save and exit, then:

```bash
# Reload systemd
sudo systemctl daemon-reload

# Start PostgREST
sudo systemctl start postgrest

# Enable to start on boot
sudo systemctl enable postgrest

# Check status
sudo systemctl status postgrest
```

You should see `Active: active (running)`. If there's an error, check the logs:
```bash
sudo journalctl -u postgrest -f
```

---

## Step 7: Test PostgREST API

Test that PostgREST is working:

```bash
# Test locally
curl http://localhost:3001/members
```

You should get: `[]` (empty array - that's correct, no members yet!)

If you get an error, check:
```bash
# Check PostgREST logs
sudo journalctl -u postgrest -n 50

# Check if port 3001 is listening
sudo netstat -tlnp | grep 3001
```

---

## Step 8: Configure Nginx

Add the API endpoint to your Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/linkup-event.com
```

Find your `server` block and add this `location` block inside it (before the closing `}`):

```nginx
    # PostgREST API endpoint
    location /api/ {
        proxy_pass http://127.0.0.1:3001/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # CORS headers (if needed for cross-origin requests)
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, PATCH, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type, Prefer' always;
        
        if ($request_method = 'OPTIONS') {
            return 204;
        }
    }
```

**Important:** Make sure this is inside your `server { ... }` block!

Test and reload Nginx:

```bash
# Test configuration
sudo nginx -t

# If test passes, reload
sudo systemctl reload nginx
```

---

## Step 9: Test API via Nginx

Test that the API is accessible through Nginx:

```bash
# Replace with your actual domain
curl https://linkup-event.com/api/members
```

You should get: `[]` (empty array)

If you get 502 Bad Gateway:
- Check PostgREST is running: `sudo systemctl status postgrest`
- Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`

---

## Step 10: Configure React App

On your local machine (or VPS if you develop there):

```bash
# Navigate to project directory
cd /root/projects/japantrip  # or wherever your project is

# Create .env file if it doesn't exist
nano .env
```

Add these lines:

```env
VITE_USE_DATABASE=true
VITE_API_URL=/api
```

Save and exit.

---

## Step 11: Build and Deploy

Build the React app:

```bash
npm run build
```

Deploy (using your existing deploy script):

```bash
./deploy.sh
```

Or manually:
```bash
sudo rm -rf /var/www/linkup-event.com/*
sudo cp -r dist/* /var/www/linkup-event.com/
sudo cp -r attractions/* /var/www/linkup-event.com/attractions/
sudo chown -R www-data:www-data /var/www/linkup-event.com
sudo chmod -R 755 /var/www/linkup-event.com
sudo systemctl reload nginx
```

---

## Step 12: Test Everything

1. **Open your website** in a browser
2. **Navigate to Budget Splitter** page
3. **Try adding a member** - it should save to database
4. **Check browser console** (F12) for any errors
5. **Check Network tab** - you should see API calls to `/api/members` and `/api/expenses`

---

## Troubleshooting

### PostgREST won't start?
```bash
# Check logs
sudo journalctl -u postgrest -n 50

# Common issues:
# - Wrong password in config.conf
# - Database doesn't exist
# - User doesn't have permissions
```

### Can't connect to database?
```bash
# Test connection manually
sudo -u postgres psql -d japantrip_budget -U budget_user

# If it asks for password, the user exists but password might be wrong
# Reset password:
sudo -u postgres psql -c "ALTER USER budget_user WITH PASSWORD 'new_password';"
# Then update /etc/postgrest/config.conf with new password
```

### API returns 404?
- Check Nginx config: `sudo nginx -t`
- Check PostgREST is running: `sudo systemctl status postgrest`
- Check firewall: `sudo ufw status`

### API returns 500?
- Check PostgREST logs: `sudo journalctl -u postgrest -f`
- Check database permissions
- Verify tables exist: `sudo -u postgres psql -d japantrip_budget -c "\dt"`

### React can't connect?
- Check browser console (F12) for errors
- Verify `VITE_USE_DATABASE=true` in `.env`
- Rebuild app: `npm run build`
- Check Network tab - are API calls being made?

---

## Security Recommendations

### 1. Restrict API Access (Optional but Recommended)

Edit Nginx config to only allow specific IPs:

```nginx
location /api/ {
    allow 127.0.0.1;        # Localhost
    allow YOUR_IP_ADDRESS;  # Your IP
    deny all;               # Block all others
    
    proxy_pass http://127.0.0.1:3001/;
    # ... rest of config
}
```

### 2. Use Strong Password

Make sure your database password is strong (mix of letters, numbers, symbols).

### 3. Keep PostgREST Updated

Check for updates periodically:
```bash
# Check current version
postgrest --version

# Download latest from: https://github.com/PostgREST/postgrest/releases
```

---

## Quick Reference Commands

```bash
# Check PostgREST status
sudo systemctl status postgrest

# Restart PostgREST
sudo systemctl restart postgrest

# View PostgREST logs
sudo journalctl -u postgrest -f

# Test API
curl http://localhost:3001/members
curl https://yourdomain.com/api/members

# Check database
sudo -u postgres psql -d japantrip_budget -c "SELECT COUNT(*) FROM members;"
sudo -u postgres psql -d japantrip_budget -c "SELECT COUNT(*) FROM expenses;"
```

---

## ✅ You're Done!

Your budget splitter now uses PostgreSQL! Data will persist across:
- Browser sessions
- Devices
- Browser cache clears

All data is stored in your PostgreSQL database on the VPS.
