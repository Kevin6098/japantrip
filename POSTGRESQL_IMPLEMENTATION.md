# PostgreSQL Implementation Summary

## ✅ What I've Created

### 1. **Database Setup Files**
- `DATABASE_SETUP.md` - Complete setup guide
- `database-schema.sql` - SQL schema file
- `QUICK_START.md` - Quick 5-step setup

### 2. **React Integration**
- `src/services/budgetService.js` - Service layer for API calls
- `src/pages/BudgetSplitter.jsx` - Updated component with database support

### 3. **Configuration**
- Environment variable support (`.env` file)

---

## 🏗️ Architecture

```
┌─────────────┐
│  React App  │ (Frontend)
└──────┬──────┘
       │ HTTP Requests
       ↓
┌─────────────┐
│   Nginx     │ (Reverse Proxy)
└──────┬──────┘
       │ /api/*
       ↓
┌─────────────┐
│  PostgREST  │ (REST API - Port 3001)
└──────┬──────┘
       │ SQL
       ↓
┌─────────────┐
│ PostgreSQL  │ (Database)
└─────────────┘
```

**No Node.js backend needed!** PostgREST auto-generates REST API from your PostgreSQL schema.

---

## 📋 How It Works

### PostgREST Auto-Generates REST API

From your PostgreSQL tables, PostgREST automatically creates:

- `GET /api/members` - List all members
- `POST /api/members` - Create member
- `DELETE /api/members?id=eq.{id}` - Delete member
- `GET /api/expenses` - List all expenses
- `POST /api/expenses` - Create expense
- `PATCH /api/expenses?id=eq.{id}` - Update expense
- `DELETE /api/expenses?id=eq.{id}` - Delete expense

### React Calls API Directly

```javascript
// Example: Get all members
const members = await budgetService.getMembers()
// Makes: GET /api/members

// Example: Add expense
await budgetService.addExpense({
  date: '2026-03-20',
  category: 'Meal',
  amount: 4800,
  // ...
})
// Makes: POST /api/expenses
```

---

## 🔄 Migration Path

The code supports **both modes**:

1. **LocalStorage Mode** (default)
   - Set `VITE_USE_DATABASE=false` in `.env`
   - Works offline, no database needed

2. **Database Mode**
   - Set `VITE_USE_DATABASE=true` in `.env`
   - Data synced to PostgreSQL
   - Works across devices

**You can switch anytime!** The code automatically detects which mode to use.

---

## 🚀 Deployment Steps

### On Your VPS:

1. **Install PostgreSQL**
   ```bash
   sudo apt install postgresql -y
   ```

2. **Create Database** (see `QUICK_START.md`)

3. **Install PostgREST** (single binary, no dependencies)

4. **Configure Nginx** to proxy `/api/*` to PostgREST

5. **Set Environment Variable** in React:
   ```bash
   VITE_USE_DATABASE=true
   VITE_API_URL=/api
   ```

6. **Rebuild & Deploy**
   ```bash
   npm run build
   ./deploy.sh
   ```

---

## 🔒 Security Considerations

### Option 1: IP Whitelist (Recommended)
Restrict API access in Nginx:
```nginx
location /api/ {
    allow 127.0.0.1;
    allow YOUR_IP;
    deny all;
    # ...
}
```

### Option 2: API Key
Add authentication layer (can be added later)

### Option 3: Row Level Security
Enable in PostgreSQL for fine-grained access control

---

## 📊 Database Schema

### `members` table
- `id` (UUID) - Primary key
- `name` (TEXT) - Member name
- `created_at` (TIMESTAMP) - Auto timestamp

### `expenses` table
- `id` (UUID) - Primary key
- `date` (DATE) - Expense date
- `category` (TEXT) - Meal, Transport, etc.
- `currency` (TEXT) - JPY, MYR, etc.
- `description` (TEXT) - Optional description
- `amount` (DECIMAL) - Expense amount
- `paid_by` (UUID) - Foreign key to members
- `split_with` (UUID[]) - Array of member IDs
- `splits` (JSONB) - Split amounts per member
- `created_at`, `updated_at` (TIMESTAMP) - Auto timestamps

---

## 🧪 Testing

### Test PostgREST API:
```bash
# Get members
curl http://localhost:3001/members

# Add member
curl -X POST http://localhost:3001/members \
  -H "Content-Type: application/json" \
  -d '{"name": "Test User"}'

# Get expenses
curl http://localhost:3001/expenses
```

### Test from React:
1. Open browser console
2. Check Network tab
3. Add a member/expense
4. See API calls to `/api/members` or `/api/expenses`

---

## 🐛 Troubleshooting

### PostgREST not starting?
```bash
sudo journalctl -u postgrest -f
```

### Can't connect to database?
```bash
sudo -u postgres psql -d japantrip_budget -U budget_user
```

### API returns 404?
- Check PostgREST is running: `sudo systemctl status postgrest`
- Check Nginx config: `sudo nginx -t`
- Check firewall: `sudo ufw status`

### React can't connect?
- Check browser console for errors
- Verify `VITE_API_URL` in `.env`
- Check Network tab in DevTools

---

## 📝 Next Steps

1. **Follow `QUICK_START.md`** to set up on your VPS
2. **Test locally** first (use `http://localhost:3001` for API)
3. **Enable database mode** by setting `VITE_USE_DATABASE=true`
4. **Deploy** and test on production

---

## 💡 Benefits

✅ **No Node.js backend** - PostgREST handles everything  
✅ **Auto-generated API** - No manual endpoint creation  
✅ **Real PostgreSQL** - Full SQL power  
✅ **Runs on your VPS** - Full control  
✅ **Backward compatible** - Can still use localStorage  
✅ **Easy to maintain** - Single binary for API  

---

## 📚 Resources

- [PostgREST Documentation](https://postgrest.org/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Nginx Reverse Proxy Guide](https://nginx.org/en/docs/http/ngx_http_proxy_module.html)

---

**Questions?** Check the setup guides or test the API endpoints directly!
