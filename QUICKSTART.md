# 🚀 Quick Start Guide

Get the Japan Trip React app running in 3 simple steps!

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 16 or higher).

Check your version:
```bash
node --version
npm --version
```

## Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React & React DOM
- React Router
- Vite
- Tailwind CSS
- And other development dependencies

### Step 2: Start Development Server
```bash
npm run dev
```

The app will start at `http://localhost:3000` and automatically open in your browser.

### Step 3: Start Exploring! 🎉

- Navigate through different pages using the top navigation
- Toggle between English and Chinese using the 🌐 button
- Try resizing your browser to see the responsive design
- Check the packing list and mark items as packed

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## First Time Setup Tips

1. **Image Assets**: The app references images in the `attractions/` folder. Make sure these images are in the `public/attractions/` directory for them to display correctly.

2. **Customize Content**: 
   - Edit dates in `src/components/Countdown.jsx` for your trip date
   - Modify schedule in `src/pages/Schedule.jsx`
   - Update hotel information in `src/pages/Hotels.jsx`

3. **Language**: The app starts in English. Click the 🌐 button to switch to Chinese. Your preference is saved in localStorage.

## Mobile Testing

To test mobile responsiveness:

1. **Browser DevTools**:
   - Chrome: Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
   - Click the device toolbar icon (📱) or press `Ctrl+Shift+M`
   - Select different device presets (iPhone, iPad, etc.)

2. **Actual Device Testing**:
   - On Windows, your computer and phone must be on the same network
   - Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
   - Access from phone: `http://YOUR_IP:3000`

## Troubleshooting

### Port 3000 Already in Use
If you see an error about port 3000 being in use:
```bash
# The server will automatically try port 3001, 3002, etc.
# Or you can manually specify a port:
npm run dev -- --port 3001
```

### Installation Issues
If `npm install` fails:
```bash
# Clear npm cache and try again
npm cache clean --force
npm install
```

### Build Issues
If build fails due to warnings:
```bash
# Warnings are okay, but if it fails, try:
npm run build -- --mode production
```

## Next Steps

Once the app is running:

1. ✅ Check all pages work (Home, Schedule, Attractions, Flights, Budget, Packing, Hotels)
2. ✅ Test language toggle
3. ✅ Test responsive design on different screen sizes
4. ✅ Verify countdown timer is working
5. ✅ Test packing checklist functionality

## Need Help?

- Check `README.md` for detailed documentation
- Review component files in `src/components/` and `src/pages/`
- Inspect browser console for any errors (`F12` → Console tab)

---

Happy coding! 🌸 Enjoy planning your Japan trip! 🇯🇵
