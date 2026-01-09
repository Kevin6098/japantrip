# 🌸 Japan Trip 2026 - React Website

A modern, responsive React application for planning and organizing a Japan trip. Features a beautiful design with cherry blossom animations, bilingual support (English/Chinese), and comprehensive trip information.

## ✨ Features

- **Modern React Architecture**: Built with React 18, Vite, and React Router
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Bilingual Support**: Toggle between English and Chinese with localStorage persistence
- **Beautiful UI**: 
  - Cherry blossom petal animations
  - Gradient backgrounds
  - Glass-morphism cards
  - Smooth transitions and hover effects
- **Comprehensive Pages**:
  - Home with countdown timer
  - Daily schedule with timeline
  - Tourist attractions gallery
  - Flight information
  - Budget breakdown
  - Interactive packing checklist
  - Hotel details

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Mobile Responsiveness Features

- **Adaptive Navigation**: Hamburger menu for mobile, full nav bar for desktop
- **Responsive Typography**: Font sizes adjust based on screen size
- **Touch-Optimized**: 
  - Large touch targets (minimum 44px)
  - Smooth animations optimized for mobile
  - Touch-friendly buttons and cards
- **Flexible Layouts**: 
  - Single column on mobile
  - Multi-column grids on larger screens
  - Responsive spacing and padding
- **Mobile-First Design**: Built from mobile up to desktop

## 🎨 Design Improvements

### Enhanced UI/UX
- **Modern Color Scheme**: Soft pinks, purples, and blues with proper contrast
- **Smooth Animations**: Fade-in, slide-up, and hover animations
- **Visual Hierarchy**: Clear section headers with icons
- **Interactive Elements**: 
  - Hover effects on all clickable items
  - Loading states
  - Smooth transitions
- **Accessibility**: 
  - Proper focus states
  - ARIA labels
  - Keyboard navigation

### Component-Based Architecture
- **Reusable Components**: 
  - `QuickLinkCard` for homepage links
  - `AttractionCard` for tourist spots
  - `Countdown` timer component
  - `Navigation` with mobile menu
  - `SakuraAnimation` for background effects
- **Context API**: Language switching with `LanguageContext`
- **React Router**: Smooth page transitions

### Responsive Features
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Flexible Grids**: CSS Grid with auto-fit columns
- **Dynamic Spacing**: Responsive padding and margins
- **Optimized Images**: Proper sizing for all screen sizes

## 🌐 Language Support

Toggle between English and Chinese using:
- Desktop: Button in top navigation
- Mobile: Globe icon button
- Language preference is saved to localStorage

## 📁 Project Structure

```
japan-trip-react/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Layout.jsx
│   │   ├── Navigation.jsx
│   │   ├── SakuraAnimation.jsx
│   │   ├── Countdown.jsx
│   │   ├── QuickLinkCard.jsx
│   │   └── AttractionCard.jsx
│   ├── context/            # React Context
│   │   └── LanguageContext.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Schedule.jsx
│   │   ├── Attractions.jsx
│   │   ├── Flights.jsx
│   │   ├── Budget.jsx
│   │   ├── Packing.jsx
│   │   └── Hotels.jsx
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/
│   └── attractions/        # Attraction images
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **React Router 6**: Client-side routing
- **Tailwind CSS 3**: Utility-first CSS framework
- **Font Awesome 6**: Icons
- **Google Fonts**: Noto Sans JP, Zen Maru Gothic, Noto Sans SC

## 🎯 Mobile Optimization Checklist

✅ Touch-friendly navigation (hamburger menu)
✅ Responsive font sizes (rem units)
✅ Flexible images (max-width: 100%)
✅ Optimized spacing for mobile
✅ Fast loading animations
✅ Proper viewport meta tag
✅ No horizontal scroll
✅ Large touch targets (44px+)
✅ Swipe-friendly cards
✅ Mobile-first CSS approach

## 📸 Pages Overview

1. **Home** (`/`): Hero section with countdown, quick links to all pages
2. **Schedule** (`/schedule`): 11-day itinerary with timeline visualization
3. **Attractions** (`/attractions`): Gallery of must-see places organized by city
4. **Flights** (`/flights`): Outbound and return flight information
5. **Budget** (`/budget`): Daily spending estimates and money-saving tips
6. **Packing** (`/packing`): Interactive checklist with progress tracker
7. **Hotels** (`/hotels`): Accommodation details for each location

## 🎨 Color Coding

- **Tokyo**: Indigo (Modern, Urban)
- **Kyoto**: Green (Traditional, Nature)
- **Nara**: Teal (Peaceful, Nature)
- **Osaka**: Orange (Energetic, Food)
- **Kobe**: Red (Port, Vibrant)

## 💡 Future Enhancements

- [ ] Add image lightbox for attraction photos
- [ ] Implement photo upload functionality
- [ ] Add weather forecast integration
- [ ] Create printable PDF export
- [ ] Add map integration (Google Maps API)
- [ ] Implement offline mode (PWA)
- [ ] Add expense tracker
- [ ] Create shareable trip itinerary

## 📝 License

This is a personal project for trip planning.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images
- Tailwind CSS for styling utilities

---

Made with ❤️ for an amazing Japan adventure 🇯🇵
