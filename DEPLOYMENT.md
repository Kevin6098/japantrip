# 🚀 Deployment Guide

This guide covers deploying your Japan Trip React app to various hosting platforms.

## Build the App

First, create a production build:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Deployment Options

### 1. Vercel (Recommended - Easiest)

[Vercel](https://vercel.com) offers the simplest deployment for React apps.

#### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Done!** Your app will be live in ~1 minute.

#### Using Vercel CLI:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 2. Netlify

[Netlify](https://netlify.com) is another great option with continuous deployment.

#### Steps:
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

#### Using Netlify CLI:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### 3. GitHub Pages

Deploy directly from your GitHub repository.

#### Steps:
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Add this line
  server: {
    port: 3000,
    open: true
  }
})
```

3. Add deployment scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`

Your site will be at: `https://your-username.github.io/your-repo-name/`

### 4. Cloudflare Pages

[Cloudflare Pages](https://pages.cloudflare.com) offers fast global CDN.

#### Steps:
1. Push code to GitHub
2. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project"
4. Connect to GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

### 5. Firebase Hosting

[Firebase](https://firebase.google.com) by Google, great for adding backend features later.

#### Steps:
1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Configure:
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub actions: Optional

4. Build and deploy:
```bash
npm run build
firebase deploy
```

### 6. Self-Hosting (VPS/Server)

If you have your own server:

#### Using Nginx:
1. Build the app:
```bash
npm run build
```

2. Copy `dist/` folder to server:
```bash
scp -r dist/* user@your-server:/var/www/japan-trip/
```

3. Configure Nginx:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/japan-trip;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. Restart Nginx:
```bash
sudo systemctl restart nginx
```

## Environment Variables

If you need environment variables (API keys, etc.):

### Create `.env` file:
```
VITE_API_KEY=your_api_key_here
VITE_APP_NAME=Japan Trip 2026
```

### Use in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

### Platform-specific:

**Vercel/Netlify**: Add environment variables in project settings dashboard

**GitHub Pages**: Use GitHub Secrets in Actions

**Firebase**: Use Firebase environment configuration

## Post-Deployment Checklist

After deploying, verify:

- ✅ All pages load correctly
- ✅ Navigation works (no 404s on refresh)
- ✅ Images load properly
- ✅ Responsive design works on mobile
- ✅ Language toggle functions
- ✅ Countdown timer updates
- ✅ All external links work
- ✅ HTTPS is enabled

## Custom Domain

Most platforms support custom domains:

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown

### Netlify:
1. Go to Domain Settings → Add custom domain
2. Follow DNS configuration instructions

### GitHub Pages:
1. Add `CNAME` file to `public/` folder with your domain
2. Update DNS with GitHub IPs

## Performance Optimization

After deployment, check performance:

1. **Google PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
2. **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
3. **Lighthouse** (Chrome DevTools)

Tips for better performance:
- Images should be optimized (WebP format)
- Enable caching headers
- Use CDN for static assets
- Consider lazy loading for images

## Continuous Deployment

Set up automatic deployments:

### GitHub Actions Example (for Vercel):
```yaml
name: Deploy
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Troubleshooting

### 404 on Page Refresh
- Ensure your hosting supports SPA routing
- Add redirect rules (most platforms auto-detect)

### Images Not Loading
- Check image paths (should be relative to `public/`)
- Verify `base` URL in `vite.config.js`

### Slow Loading
- Check bundle size: `npm run build` shows size
- Consider code splitting if needed
- Optimize images

---

Choose the platform that best fits your needs. Vercel and Netlify are recommended for beginners due to their simplicity and automatic configuration! 🚀
