# Changelog

This file documents all changes made to the Japan Trip 2026 project.

---

## [2024-12-XX] - Added Food & Restaurants Dashboard

### Changes
Created a comprehensive food and restaurants dashboard featuring all dining experiences from the itinerary:

**New Food Dashboard Features**:
- **Location-Based Organization**: Restaurants organized by city (Tokyo, Osaka, Kobe, Kyoto, Uji)
- **Restaurant Cards**: Visual cards with images, location badges, price ranges, and meal types
- **Individual Restaurant Pages**: Detailed pages for each restaurant with:
  - About section with restaurant description
  - Highlights of what makes each place special
  - Tips for visiting (reservations, duration, access)
  - Location & access information with Google Maps links
- **Location-Based Styling**: Each restaurant page uses location-specific color schemes matching the attractions pages
- **Image Carousels**: Restaurant pages with multiple images now feature carousel galleries with navigation arrows, indicators, auto-play, and touch/swipe support

**Restaurants Included**:
  - **Tokyo (5 restaurants)**:
    - Ginza Kanimitsu - Premium crab restaurant (¥4,600-¥11,000) ✨ *With image carousel*
    - Nakamura Tokichi Ginza - Matcha parfait & tea time ✨ *With image carousel*
    - Asakusa - Monja Yaki & Okonomiyaki
    - Ichiran Ramen - Famous tonkotsu ramen ✨ *With image carousel*
    - Tsukada Shabu Shabu - Graduation celebration dinner (Shibuya) ✨ *With image carousel*
    - *Note: Tsukiji Outer Market moved to Attractions section*
- **Osaka (2 restaurants)**:
  - Dotonbori Dinner - Reunion dinner & local cuisine
  - Kushikatsu (Shinsekai) - Osaka's famous deep-fried skewers
- **Kobe (2 restaurants)**:
  - Lunch at Mosaic - Waterfront dining complex
  - Kobe Beef or Izakaya - World-famous beef or traditional pub
- **Kyoto (1 restaurant)**:
  - Lunch (Ninenzaka & Sannenzaka) - Traditional Kyoto cuisine
- **Uji (1 restaurant)**:
  - Nakamura Tokichi Honten - Historic matcha sweets & early lunch

**Restaurant Folder Organization**:
- **Ginza Kanimitsu** (`restaurants/ginza-kanimitsu/`):
  - Organized into dedicated folder with 5 images:
    - `crab-whole-dish.jpg` - Main whole crab dish
    - `restaurant-interior.jpg` - Restaurant interior
    - `crab-rice-pot.jpg` - Crab rice pot dish
    - `multi-course-meal.jpg` - Multi-course meal presentation
    - `meal-set-tray.jpg` - Meal set tray
  - Updated HTML with image carousel
  - Updated dashboard to use first carousel image as preview
  
- **Nakamura Tokichi Ginza** (`restaurants/nakamura-tokichi-ginza/`):
  - Organized into dedicated folder with 3 images:
    - `matcha-parfait.jpg` - Famous matcha parfait
    - `matcha-dessert-set.jpg` - Matcha dessert set
    - `matcha-meal-set.jpg` - Matcha meal set
  - Updated HTML with image carousel
  - Updated dashboard to use first carousel image as preview

- **Ichiran Ramen** (`restaurants/ichiran-ramen/`):
  - Organized into dedicated folder with 3 images:
    - `restaurant-interior.jpg` - Ichiran restaurant interior with vending machines
    - `restaurant-dining-area.jpg` - Dining area with private booths and seating
    - `ramen-bowl-closeup.jpg` - Close-up of Ichiran tonkotsu ramen bowl
  - Updated HTML with image carousel
  - Updated dashboard to use first carousel image as preview

- **Tsukada Shabu Shabu** (`restaurants/tsukada-shabu/`):
  - Organized into dedicated folder with 4 images:
    - `restaurant-interior.jpg` - Restaurant interior with city view
    - `shabu-dining-counter.jpg` - Shabu shabu dining counter
    - `shabu-meal-setup.jpg` - Shabu shabu meal setup
    - `shabu-meal-closeup.jpg` - Close-up of shabu shabu meal
  - Updated HTML with image carousel
  - Updated dashboard to use first carousel image as preview

**Carousel Features**:
- Navigation arrows (previous/next)
- Indicator dots for direct slide access
- Auto-play every 5 seconds
- Pause on hover
- Touch/swipe support for mobile devices
- Smooth transitions between images
- Consistent styling across all restaurant pages

**Navigation Updates**:
- Added "Food" link to desktop navigation menu on all main pages
- Added "Food" link to mobile menu with utensils icon on all main pages
- Added "Food & Restaurants" quick link card on homepage dashboard
- Active state styling when on food dashboard page

**Styling & Design**:
- Matched attractions dashboard design language
- Location-based color schemes (Tokyo: indigo, Osaka: orange, Kobe: red, Kyoto: green, Uji: teal)
- Responsive design for mobile and desktop
- Bilingual support (English/Chinese) for all content
- Consistent navigation and back buttons

**JavaScript Updates**:
- Added carousel initialization code to `script.js`:
  - Automatic detection of all carousels on page
  - Navigation button handlers
  - Indicator click handlers
  - Auto-play with pause on hover
  - Touch/swipe gesture support for mobile

### Files Created
- `food.html` - Main food & restaurants dashboard page
- `restaurants/` - Directory containing all individual restaurant pages:
  - `ginza-kanimitsu/` - Folder with HTML and images:
    - `ginza-kanimitsu.html`
    - `crab-whole-dish.jpg`
    - `restaurant-interior.jpg`
    - `crab-rice-pot.jpg`
    - `multi-course-meal.jpg`
    - `meal-set-tray.jpg`
  - `nakamura-tokichi-ginza/` - Folder with HTML and images:
    - `nakamura-tokichi-ginza.html`
    - `matcha-parfait.jpg`
    - `matcha-dessert-set.jpg`
    - `matcha-meal-set.jpg`
  - `asakusa-monja.html`
  - `ichiran-ramen/` - Folder with HTML and images:
    - `ichiran-ramen.html`
    - `restaurant-interior.jpg`
    - `restaurant-dining-area.jpg`
    - `ramen-bowl-closeup.jpg`
  - `tsukada-shabu/` - Folder with HTML and images:
    - `tsukada-shabu.html`
    - `restaurant-interior.jpg`
    - `shabu-dining-counter.jpg`
    - `shabu-meal-setup.jpg`
    - `shabu-meal-closeup.jpg`
  - `dotonbori-dinner.html`
  - `kushikatsu-shinsekai.html`
  - `mosaic-lunch.html`
  - `kobe-beef.html`
  - `kyoto-lunch.html`
  - `nakamura-tokichi-uji.html`
- `generate_restaurant_pages.py` - Python script to generate restaurant pages from template

### Files Modified
- `homepage.html` - Added food navigation link and quick link card
- `flights.html` - Added food navigation link (desktop & mobile)
- `budget.html` - Added food navigation link (desktop & mobile)
- `packing.html` - Added food navigation link (desktop & mobile)
- `hotel.html` - Added food navigation link (desktop & mobile)
- `schedule.html` - Added food navigation link (desktop & mobile)
- `tourist-attraction.html` - Added food navigation link (desktop & mobile)
- `food.html` - Updated restaurant links to new folder structure, updated preview images
- `script.js` - Added carousel initialization and functionality code

### Notes
- All restaurant information extracted from the itinerary schedule
- Restaurant pages follow the same structure as attraction pages for consistency
- Google Maps links included for easy navigation
- Price ranges and hours included where available from itinerary
- Images organized into dedicated folders for better file management
- Carousel functionality uses same code pattern as attraction pages for consistency
- All image paths updated to relative paths from new folder structure

---

## [2024-12-XX] - Moved Tsukiji Market to Attractions

### Changes
Moved Tsukiji Outer Market from Food & Restaurants section to Attractions section:

**Reason for Change**:
- Tsukiji Outer Market is primarily a tourist attraction and cultural destination
- More aligned with attractions than restaurants (it's a market to explore, not a specific restaurant)
- Better fits the attractions dashboard structure

**Tsukiji Market Organization** (`attractions/tsukiji-market/`):
- Organized into dedicated folder with 5 images:
  - `market-overview.jpg` - Overall market view
  - `market-street.jpg` - Market street scene
  - `market-vendors.jpg` - Vendors and market activity
  - `fish-stall.jpg` - Fresh fish stall with seafood display
  - `market-interior.jpg` - Interior market view
- Updated HTML with image carousel (5 images)
- Converted from restaurant page format to attraction page format:
  - Changed "What to Try" section to "Highlights" section
  - Changed "Tips" section to "Travel Tips" section
  - Updated price badge from "¥500-¥2,000" to "Free Entry" (market entry is free, items are purchased)
  - Updated navigation links from food.html to tourist-attraction.html
  - Updated all paths from `../` to `../../`

**Dashboard Updates**:
- Removed Tsukiji Market card from `food.html` dashboard
- Added Tsukiji Market card to `tourist-attraction.html` dashboard in Tokyo section
- Updated preview image to use `market-overview.jpg` from carousel

### Files Created
- `attractions/tsukiji-market/` - Folder with HTML and images:
  - `tsukiji-market.html`
  - `market-overview.jpg`
  - `market-street.jpg`
  - `market-vendors.jpg`
  - `fish-stall.jpg`
  - `market-interior.jpg`

### Files Modified
- `attractions/tsukiji-market/tsukiji-market.html` - Moved from restaurants/, updated structure, added carousel, updated paths
- `food.html` - Removed Tsukiji Market card from dashboard
- `tourist-attraction.html` - Added Tsukiji Market card to Tokyo section

### Files Moved
- `restaurants/tsukiji-market.html` → `attractions/tsukiji-market/tsukiji-market.html`

### Notes
- Tsukiji Market is now properly categorized as an attraction rather than a restaurant
- All 5 images added to carousel for better visual representation
- Market entry is free (visitors pay for items they purchase)
- Maintains same content but with attraction page structure and styling

---

## [2024-12-XX] - Added Pain Maison to Schedule and Food Dashboard

### Changes
Added Pain Maison (塩パン屋) bakery to the itinerary on March 19 (Day 2), scheduled after Tsukiji Market and before Ginza.

**Pain Maison Organization** (`restaurants/pain-maison/`):
- Created dedicated folder with 4 images:
  - `bakery-sign.jpg` - Bakery exterior with sign and queue
  - `bread-individual.jpg` - Individual salt bread roll
  - `bread-display.jpg` - Multiple bread rolls in bag
  - `bread-basket.jpg` - Large basket filled with bread rolls
- Updated HTML with image carousel (4 images)
- Created restaurant page following same structure as other restaurant pages

**Schedule Updates**:
- Added Pain Maison stop at 11:30 on March 19 (Day 2)
- Positioned after Tsukiji Market (9:00-11:30) and before travel to Ginza (11:50)
- Duration: ~15-20 minutes for purchase
- Updated travel time from Pain Maison to Ginza Station (10-15 mins walk)
- Updated summary in schedule dashboard to include Pain Maison

**Dashboard Updates**:
- Added Pain Maison card to `food.html` dashboard in Tokyo section
- Positioned as first restaurant in Tokyo section
- Updated preview image to use `bakery-sign.jpg` from carousel

### Files Created
- `restaurants/pain-maison/` - Folder with HTML and images:
  - `pain-maison.html`
  - `bakery-sign.jpg`
  - `bread-individual.jpg`
  - `bread-display.jpg`
  - `bread-basket.jpg`

### Files Modified
- `schedule/day2.html` - Added Pain Maison stop at 11:30 after Tsukiji Market, updated travel to Ginza time to 11:50
- `schedule.html` - Updated Day 2 summary and detailed schedule to include Pain Maison
- `food.html` - Added Pain Maison card to Tokyo section

### Notes
- Pain Maison is a famous salt bread bakery in Tokyo, known for its original 塩パン (salt bread)
- Popular bakery with possible wait times, especially during peak hours
- Purchase limits apply: Max 20 salt bread, max 15 melon bread, max 2 sandwiches per person
- Pricing: Salt bread ¥120, Melon bread ¥190
- Convenient stop between Tsukiji Market and Ginza, accessible by walking
- All images organized into dedicated folder with descriptive names
- Carousel implemented with 4 images for better visual representation

## [2024-12-XX] - Updated March 21 Schedule and Added Afuri Yurakucho

### Changes
Updated March 21 (Day 4) schedule to start the day at Afuri Yurakucho at 11am, then take the 1pm Shinkansen to Shin-Osaka, and check in to Osaka Airbnb. Added Afuri Yurakucho restaurant page with organized images.

**Afuri Yurakucho Organization** (`restaurants/afuri-yurakucho/`):
- Created dedicated folder with 6 images:
  - `restaurant-exterior.jpg` - Modern restaurant exterior with neon signs
  - `ramen-bowl-closeup.jpg` - Close-up of signature yuzu ramen bowl
  - `meal-spread.jpg` - Diverse Japanese meal spread
  - `ramen-bowls-table.jpg` - Multiple ramen bowls on table
  - `ramen-dipping-style.jpg` - Tsukemen (dipping ramen) style
  - `spicy-ramen-bowl.jpg` - Spicy ramen bowl with toppings
- Updated HTML with image carousel (6 images)
- Created restaurant page following same structure as other restaurant pages

**Schedule Updates (March 21 - Day 4)**:
- Start day at 10:30 - Travel to Afuri Yurakucho (~45-50 mins from Airbnb)
- 11:00 - Afuri Yurakucho (Lunch) - Duration: ~1 hour
- 12:00 - Travel to Tokyo Station (5-10 mins walk from Yurakucho)
- 13:00 - Shinkansen to Shin-Osaka - Added ticket price: ¥13,870
- 15:30 - Arrive at Shin-Osaka Station
- 16:00 - Check-in Osaka Airbnb (JR Momodani Station)
- Updated all timing and travel details to reflect new itinerary

**Dashboard Updates**:
- Added Afuri Yurakucho card to `food.html` dashboard in Tokyo section
- Updated preview image to use `restaurant-exterior.jpg` from carousel

### Files Created
- `restaurants/afuri-yurakucho/` - Folder with HTML and images:
  - `afuri-yurakucho.html`
  - `restaurant-exterior.jpg`
  - `ramen-bowl-closeup.jpg`
  - `meal-spread.jpg`
  - `ramen-bowls-table.jpg`
  - `ramen-dipping-style.jpg`
  - `spicy-ramen-bowl.jpg`

### Files Modified
- `schedule/day4.html` - Updated schedule to start at Afuri Yurakucho at 11am, Shinkansen at 1pm, added ticket price ¥13,870
- `schedule.html` - Updated Day 4 summary and detailed schedule to reflect new itinerary
- `food.html` - Added Afuri Yurakucho card to Tokyo section

### Notes
- Afuri (阿夫利) is a famous ramen restaurant in Tokyo, known for its unique yuzu-flavored ramen
- Yurakucho location is conveniently located near Tokyo Station, perfect stop before Shinkansen departure
- Signature yuzu ramen offers a refreshing citrus flavor unlike traditional ramen
- Pricing: ¥900-¥1,500 per bowl depending on toppings and options
- Shinkansen ticket price (¥13,870) added to schedule for budget planning
- All images organized into dedicated folder with descriptive names
- Carousel implemented with 6 images for comprehensive visual representation
- Schedule optimized for efficient travel from Tokyo to Osaka with lunch stop

## [2024-12-XX] - Updated March 22 Kobe Schedule with Google Maps Routes

### Changes
Updated March 22 (Day 5) Kobe Day Trip schedule with detailed Google Maps routes and comprehensive travel times including train, walk, and ropeway timings.

**Schedule Updates (March 22 - Day 5)**:
- **09:30** - Depart from Airbnb → JR Osaka Loop Line (~15 mins train) → JR Kobe Line (~15 mins train) → Walk 10 mins to Meriken Park
- **10:30** - Meriken Park & Harborland (Duration: ~1.5 hours)
- **12:00** - Kobe Steak Nick (Lunch) - Walk 10-15 mins from Meriken Park (Duration: ~1-1.5 hours)
- **13:30** - Travel to Rokkosan Pasture - Detailed breakdown:
  - Walk 5-10 mins to Sannomiya Station
  - Train to Rokko Station (~20 mins train)
  - Walk to Rokko Cable Car station (~5 mins walk)
  - Rokko Cable Car to Rokko-sancho (~10 mins ropeway)
  - Bus or walk to Pasture (~10-15 mins)
- **14:30** - Rokkosan Pasture (Duration: ~2 hours)
- **16:30** - Descend from Rokkosan Pasture - Detailed breakdown:
  - Walk or bus to Rokko-sancho (~10-15 mins)
  - Rokko Cable Car to Rokko Cable station (~10 mins ropeway)
  - Train to Sannomiya Station (~20 mins train)
  - Walk 5-10 mins to Gashoken
- **17:30** - Gashoken (Dinner) - Duration: ~1 hour
- **18:30** - Travel to Kobe Port Tower - Walk 10-15 mins from Gashoken
- **18:45** - Kobe Port Tower (Night View) - Duration: ~1 hour
- **20:00** - Return to Airbnb - Walk 10 mins to Sannomiya → JR Kobe Line (~15 mins train) → JR Osaka Loop Line (~15 mins train) → Walk 2 mins

**Google Maps Integration**:
- Added Google Maps links for all route segments
- Links include detailed walking directions and transit information
- All transitions between locations include map links

### Files Modified
- `schedule/day5.html` - Updated entire Day 5 itinerary with detailed travel times and Google Maps links
- `schedule.html` - Updated Day 5 detailed schedule section with new routes and timings

### Notes
- All travel times now include specific breakdowns: train time, walk time, and ropeway time
- Rokkosan Pasture ropeway timing specifically detailed (~10 mins ropeway)
- Google Maps links added for all route segments for easy navigation
- Schedule optimized with accurate travel times based on Google Maps routes

---

## [2024-12-XX] - Added Kobe Steak Nick and Gashoken Restaurant Pages

### Changes
Created dedicated restaurant pages for Kobe Steak Nick and Gashoken (賀正軒) Sannomiya, organizing images into folders with carousels and updating all links.

**Kobe Steak Nick Organization** (`restaurants/kobe-steak-nick/`):
- Created dedicated folder with 5 images:
  - `restaurant-exterior.jpg` - Restaurant exterior with MEAT SHOP sign
  - `restaurant-interior.jpg` - Modern restaurant interior with wooden tables
  - `steak-slices-closeup.jpg` - Close-up of premium Kobe beef slices
  - `meal-set.jpg` - Complete Kobe steak meal set
  - `meal-presentation.jpg` - Meal presentation with accompaniments
- Updated HTML with image carousel (5 images)
- Created restaurant page with detailed information about Kobe beef

**Gashoken Organization** (`restaurants/gashoken/`):
- Created dedicated folder with 7 images:
  - `restaurant-exterior-night.png` - Restaurant exterior at night
  - `menu-display.jpg` - Menu display with food models
  - `ramen-varieties-promo.jpg` - Ramen varieties promotional image
  - `tonkotsu-ramen-bowl.jpg` - Signature tonkotsu ramen bowl
  - `basil-cheese-ramen.jpg` - Unique basil cheese ramen
  - `spicy-ramen-bowl.jpg` - Spicy ramen bowl
  - `black-tonkotsu-ramen.jpg` - Black tonkotsu ramen with squid ink
- Updated HTML with image carousel (7 images)
- Created restaurant page with information about unique ramen varieties

**Schedule Updates**:
- Updated March 22 (Day 5) schedule to link to new restaurant pages
- Kobe Steak Nick: Lunch at 12:00 (¥6,000-¥7,000 per person)
- Gashoken: Dinner at 17:30 (¥1,100-¥1,880 per bowl)

**Dashboard Updates**:
- Replaced "Kobe Beef or Izakaya" card with "Kobe Steak Nick (青斜塔)" card in `food.html`
- Replaced "Lunch at Mosaic" card with "Gashoken (賀正軒) Sannomiya" card in `food.html`
- Updated preview images to use carousel images

**Price Updates**:
- Kobe Steak Nick: Updated from ¥8,000-¥20,000 to ¥6,000-¥7,000 (lunch menu pricing)

### Files Created
- `restaurants/kobe-steak-nick/` - Folder with HTML and images:
  - `kobe-steak-nick.html`
  - `restaurant-exterior.jpg`
  - `restaurant-interior.jpg`
  - `steak-slices-closeup.jpg`
  - `meal-set.jpg`
  - `meal-presentation.jpg`
- `restaurants/gashoken/` - Folder with HTML and images:
  - `gashoken.html`
  - `restaurant-exterior-night.png`
  - `menu-display.jpg`
  - `ramen-varieties-promo.jpg`
  - `tonkotsu-ramen-bowl.jpg`
  - `basil-cheese-ramen.jpg`
  - `spicy-ramen-bowl.jpg`
  - `black-tonkotsu-ramen.jpg`

### Files Modified
- `restaurants/kobe-steak-nick/kobe-steak-nick.html` - Created new restaurant page with carousel
- `restaurants/gashoken/gashoken.html` - Created new restaurant page with carousel
- `schedule/day5.html` - Updated links to Kobe Steak Nick and Gashoken, updated prices
- `schedule.html` - Updated links to Kobe Steak Nick and Gashoken, updated prices
- `food.html` - Replaced restaurant cards with new Kobe Steak Nick and Gashoken cards

### Files Moved
- `restaurants/mosaic-lunch.html` → `restaurants/kobe-steak-nick/kobe-steak-nick.html` (converted to Kobe Steak Nick)

### Notes
- Kobe Steak Nick (KOBE STEAK 青斜塔 by 精肉店Nick) is a premium meat shop and restaurant specializing in authentic Kobe beef
- Lunch menu pricing: ¥6,000-¥7,000 per person
- Gashoken (賀正軒) Sannomiya is a famous tonkotsu ramen restaurant with unique fusion varieties including Basil Cheese Ramen and Black Tonkotsu
- All images organized into dedicated folders with descriptive names
- Carousel implemented on both restaurant pages for comprehensive visual representation
- Google Maps links included for both restaurants
- All price badges updated across schedule and dashboard pages

## Future Changes

All future changes will be documented below with:
- Date
- Description of change
- Files modified
- Reason/issue addressed

---
