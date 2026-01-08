# Japan Trip 2026 - Multi-Page Website

A beautiful, animated multi-page website for planning a Japan trip in Spring 2026. Features bilingual support (English/Chinese), smooth animations, and a responsive design.

## 📁 File Structure

```
japantrip/
├── homepage.html          # Landing page with hero section and quick links
├── flights.html           # Flight information and schedules
├── schedule.html          # Daily itinerary with timeline
├── budget.html            # Daily budget breakdown table
├── hotel.html             # Hotel accommodation details
├── tourist-attraction.html # Attractions gallery with images
├── packing.html           # Packing checklist
├── styles.css             # Shared CSS with animations
├── script.js              # Shared JavaScript functionality
└── README.md             # This file
```

## 🎨 Features

### Animations & Transitions
- **Fade-in animations** for page elements
- **Slide-up effects** for cards and sections
- **Timeline animations** with staggered delays
- **Hover effects** on all interactive elements
- **Sakura petal animation** (cherry blossoms)
- **Smooth scroll** navigation
- **Parallax effects** on hero section
- **Ripple effects** on button clicks
- **Image zoom** on attraction cards

### Interactive Elements
- **Language toggle** (English/Chinese) with localStorage persistence
- **Checkbox tracking** for packing list
- **Hover effects** on timeline dots
- **Responsive navigation** with mobile menu
- **Active page highlighting** in navigation

### Design Features
- **Glass morphism** cards with backdrop blur
- **Gradient backgrounds** and smooth transitions
- **Custom scrollbar** styling
- **Responsive design** for mobile and desktop
- **Print-friendly** styles for PDF generation

## 🚀 Usage

1. Open `homepage.html` in a web browser
2. Navigate between pages using the top navigation
3. Toggle language using the 🌐 button
4. Use the packing checklist to track items
5. View attractions in the gallery page

## 📱 Pages Overview

### Homepage (`homepage.html`)
- Hero section with trip overview
- Quick link cards to all sections
- Navigation to all pages

### Flights (`flights.html`)
- Thai Airways and Cathay Pacific schedules
- Arrival and departure times
- Group information

### Schedule (`schedule.html`)
- 11-day detailed itinerary
- Timeline visualization
- Time badges and transit information
- Links to attractions

### Budget (`budget.html`)
- Daily budget breakdown
- Cost estimates in JPY and MYR
- Total preparation amount
- Color-coded special days

### Hotels (`hotel.html`)
- Tokyo hotel (Hotel Coco Grand)
- Osaka accommodation details
- Location information

### Attractions (`tourist-attraction.html`)
- Image gallery of must-see places
- Hover effects with image zoom
- Links to Google image search

### Packing (`packing.html`)
- Organized checklist by category
- Documents, Money & Tech, Clothing, Essentials
- Interactive checkboxes with progress tracking

## 🎯 Customization

### Adding New Pages
1. Create a new HTML file following the structure of existing pages
2. Include the navigation structure
3. Link to it in all navigation menus
4. Add active state class to current page

### Modifying Animations
Edit `styles.css` to adjust:
- Animation durations in `@keyframes`
- Transition timings
- Hover effects

### Changing Colors
The site uses Tailwind CSS classes. Modify colors in:
- Navigation: `border-pink-200`, `bg-pink-100`
- Cards: Various color schemes per section
- Timeline: Pink gradient

## 📦 Dependencies

- **Tailwind CSS** (via CDN)
- **Font Awesome** (via CDN)
- **Google Fonts** (Noto Sans JP, Zen Maru Gothic, Noto Sans SC)
- **html2pdf.js** (for PDF generation, loaded on homepage)

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Touch-friendly interactions

## 📝 Notes

- Language preference is saved in localStorage
- PDF generation requires html2pdf.js library
- Images use Unsplash CDN
- All external links open in new tabs

## 🎨 Color Scheme

- **Primary Pink**: `#f472b6`, `#fbcfe8`
- **Indigo**: For Tokyo sections
- **Orange**: For Osaka sections
- **Teal**: For Nara/Uji sections
- **Red**: For Kobe sections
- **Green**: For Kyoto sections
- **Sky**: For USJ sections

Enjoy your Japan trip planning! 🗾🌸

