# Changelog

This file documents all changes made to the Japan Trip 2026 project.

---

## [2024-12-XX] - Updated Accommodations to Airbnb Listings

### Changes
- **Tokyo Accommodation**: Replaced Hotel Coco Grand with Airbnb listing
  - New: "Charming House Near Asakusa/SkyTree, Free Bicycle"
  - Location: Sumida-ku, Tokyo
  - Rating: 4.93/5 (383 reviews)
  - Features: Free bicycles, Wi-Fi, Netflix, 8-10min walk to Hikifune & Keisei Hikifune stations
  - Host: Eika (Superhost)
  - Dates: Mar 18-21, 2026

- **Osaka Accommodation**: Replaced Namba Area hotel with Airbnb listing
  - New: "172㎡ Entire House / JR Momodani 2mins walk"
  - Location: Ikuno Ward, Osaka
  - Rating: 4.78/5 (27 reviews)
  - Features: 2 mins walk from JR Momodani Station, Max 24 people, 3 bedrooms, 11 beds, 3 bathrooms
  - Host: Momo (Superhost)
  - Dates: Mar 21-28, 2026 (7 nights)

- **Flights Update**: Added note that departure/return is from Osaka Airbnb location (JR Momodani Station area)

### Files Modified
- `hotel.html` - Updated both Tokyo and Osaka accommodation sections with Airbnb details and links
- `flights.html` - Added departure location note for Osaka Airbnb

### Notes
- Both listings include direct Airbnb links for easy access
- Osaka stay extended to 7 nights (Mar 21-28) instead of previous Mar 21-27
- All departure and return flights now reference the Osaka Airbnb location

---

## [2024-12-XX] - Updated Schedule (March 22-26)

### Changes
Reorganized the itinerary starting from March 22:

- **22 March (Day 5)**: **Kobe Day Trip**
  - Meriken Park & Harborland, Rokkosan Pasture, Kobe Port Tower
  - Updated links to use local attraction pages

- **23 March (Day 6)**: **USJ (Universal Studios Japan)**
  - Full day at Universal Studios Japan
  - Entry ticket ~¥9,500, Express 7 ~¥18,000+

- **24 March (Day 7)**: **Osaka City Highlights**
  - Osaka Castle, Tsutenkaku, Namba Yasaka Shrine, Dotonbori, Shinsaibashi
  - Updated links to use local attraction pages where available

- **25 March (Day 8)**: **Kyoto (Efficient Route)**
  - Fushimi Inari Taisha, Kiyomizu-dera, Ninenzaka & Sannenzaka, Yasaka Shrine, Gion District, Kamogawa River
  - Updated links to use local attraction pages

- **26 March (Day 9)**: **Uji & Nara (Healing Route)**
  - Nakamura Tokichi Honten (Uji), Ujiagami Shrine, Nara Park, Todaiji Temple, Kasuga Taisha, Mt. Wakakusa
  - Updated links to use local attraction pages where available

### Files Modified
- `schedule.html` - Reorganized days 5-9 with new destinations and updated attraction links

### Notes
- All attraction links now point to local pages in the `attractions/` directory where available
- Color coding maintained: Kobe (Red), USJ (Sky Blue), Osaka (Orange), Kyoto (Emerald), Uji & Nara (Teal)
- Schedule maintains bilingual support (English/Chinese)

---

## [2024-12-XX] - Updated Itinerary Departure/Return Points

### Changes
Updated all itinerary entries to specify departure and return from the Osaka Airbnb location:

- **All Departures**: Changed to "Depart from Airbnb (JR Momodani Station)"
  - Previously: "Depart Osaka/Umeda", "Depart (Early!)", "Depart from Airbnb", "Depart Osaka"
  - Now consistently references the Airbnb and nearest station (JR Momodani Station, 2 mins walk)

- **All Returns**: Changed to "Return to Airbnb (JR Momodani Station)"
  - Previously: "Return to Osaka", "Return / Dinner"
  - Now consistently references returning to the Airbnb

- **Transit Badges**: Updated to include "From Momodani" where applicable
  - Example: "Train: JR from Momodani (~20m)" instead of just "Train: JR (~20m)"

### Files Modified
- `schedule.html` - Updated all departure and return points for days 5-9 (March 22-26)

### Notes
- All day trips now clearly start and end at the Airbnb location
- JR Momodani Station is consistently mentioned as the nearest station (2 mins walk from Airbnb)
- Bilingual support maintained (English/Chinese)
- Makes it easier to plan transportation and understand the base location

---

## [2024-12-XX] - Updated Arrival and Departure to Private Van Transportation

### Changes
Updated arrival and departure days to use private van transportation instead of train schedules:

- **Day 1 (March 18 - Arrival)**: 
  - Changed from "Train to Hotel (~60m)" to "Private Van to Tokyo Airbnb"
  - Added travel time: ~45-60 mins (HND → Sumida-ku)
  - Added arrival time at Tokyo Airbnb: 00:30
  - Accommodates both flight arrivals (CX at 21:15, TG at 22:30)

- **Day 4 (March 21 - Move to Osaka)**:
  - Added private van pickup for Group 3 arriving at KIX (17:50)
  - Private van to Osaka Airbnb: Depart 18:30, travel time ~50-60 mins
  - Updated check-in reference from "Namba Hotel" to "Osaka Airbnb (JR Momodani Station)"

- **Day 11 (March 28 - Departure)**:
  - Changed from "Travel to KIX: 10 mins" to detailed private van schedule
  - CX Group: Depart 06:30, travel time ~50-60 mins, Check-in 07:30
  - TG Group: Depart 07:30, travel time ~50-60 mins, Check-in 08:30
  - Added flight departure time: 11:00

### Files Modified
- `schedule.html` - Updated Day 1 (Arrival), Day 4 (Move to Osaka), and Day 11 (Fly Home) with private van transportation details

### Notes
- Private van transportation provides more convenience and flexibility for group travel
- Travel times account for traffic and airport procedures
- Separate departure times for CX and TG groups based on their check-in times
- All airport transfers now use private van service
- Bilingual support maintained (English/Chinese)

---

## [2024-12-XX] - Updated Tokyo Days to Start from Airbnb

### Changes
Updated Days 2 and 3 (March 19-20) to start from the Tokyo Airbnb location:

- **Day 2 (March 19 - Old Tokyo)**:
  - Changed from "Meet Lobby" to "Depart from Airbnb (Hikifune Station - 10 mins walk)"
  - Updated departure time to 09:00 (10 mins earlier to account for walk to station)
  - Updated transit badge to include walk to Hikifune Station
  - Updated attraction links to use local pages (Senso-ji, Ueno Park)
  - Added return to Airbnb at 20:30

- **Day 3 (March 20 - Graduation & Shibuya)**:
  - Added departure from Airbnb at 08:30 (Hikifune Station - 10 mins walk)
  - Updated transit badge to include walk to Hikifune Station
  - Updated attraction links to use local pages (Harajuku, Shibuya)
  - Added return to Airbnb at 21:30

### Files Modified
- `schedule.html` - Updated Day 2 and Day 3 with Airbnb departure/return points and updated attraction links

### Notes
- Tokyo Airbnb is 10 minutes walk from Hikifune Station (as per accommodation details)
- All Tokyo days now consistently start and end at the Airbnb
- Updated attraction links to use local pages where available
- Bilingual support maintained (English/Chinese)

---

## [2024-12-XX] - Added Google Maps Links and Detailed Transit Routes

### Changes
Enhanced the entire itinerary with comprehensive transit information and Google Maps links for all locations:

- **Google Maps Links**: Added clickable Google Maps links to every tourist attraction and location
  - Links open directly in Google Maps with directions
  - Format: `https://www.google.com/maps/dir/?api=1&destination=LOCATION`
  - Includes both origin-to-destination links for transit routes and direct location links

- **Detailed Transit Routes**: Expanded all transit badges with complete route information:
  - **Walking times** to/from stations (e.g., "Walk 10 mins to Hikifune Station")
  - **Train lines and transfers** (e.g., "Keisei Line to Oshiage → Hanzomon Line to Omotesando")
  - **Train travel times** (e.g., "~30 mins train")
  - **Total journey breakdowns** including all walking and transit segments

### Detailed Route Examples

**Day 2 (Tokyo)**:
- Airbnb → Senso-ji: Walk 10 mins to Hikifune Station → Tsukuba Express to Asakusa Station (~12 mins train) → Walk 5 mins
- Senso-ji → Ueno Park: Walk 5 mins to Asakusa Station → Ginza Line to Ueno Station (~5 mins train) → Walk 2 mins
- Ueno Park → Ginza: Walk 2 mins to Ueno Station → Ginza Line to Ginza Station (~15 mins train) → Walk 3 mins
- Ginza → Tsukishima: Walk 3 mins to Ginza Station → Yurakucho Line to Tsukishima Station (~10 mins train) → Walk 2 mins

**Day 5 (Kobe)**:
- Airbnb → Harborland: Walk 2 mins to Momodani Station → JR Osaka Loop Line to Osaka Station → JR Kobe Line to Sannomiya Station (~30 mins train) → Walk 10 mins
- Harborland → Mt. Rokko: Walk 5 mins to Sannomiya Station → Bus #16 to Rokko Cable Shita (~25 mins bus) → Cable Car to Rokko-sancho (~10 mins) → Walk 5 mins

**Day 8 (Kyoto)**:
- Airbnb → Fushimi Inari: Walk 2 mins to Momodani Station → JR Osaka Loop Line to Kyobashi → Keihan Line to Fushimi-Inari Station (~50 mins train) → Walk 5 mins
- Fushimi Inari → Kiyomizu-dera: Walk 5 mins to Fushimi-Inari Station → Keihan Line to Kiyomizu-Gojo Station (~15 mins train) → Walk 15 mins uphill
- All Kyoto locations connected by walking routes (Ninenzaka, Yasaka Shrine, Gion, Kamogawa River)

**Day 9 (Uji & Nara)**:
- Airbnb → Uji: Walk 2 mins to Momodani Station → JR Osaka Loop Line to Kyobashi → Keihan Line to Uji Station (~50 mins train) → Walk 3 mins
- Uji → Nara: Walk 5 mins to Uji Station → JR Nara Line to Nara Station (~30 mins train) → Walk 15 mins or Bus #2/70 to Nara Park (~5 mins bus)
- Nara locations connected by walking routes (Nara Park, Todaiji, Kasuga Taisha, Mt. Wakakusa)

### Files Modified
- `schedule.html` - Added Google Maps links and detailed transit routes to all days (Days 2-11)
  - All tourist attractions now have Google Maps links
  - All transit badges expanded with complete route details
  - Walking times, train lines, transfer points, and travel times specified

### Notes
- Google Maps links use the Directions API format for easy navigation
- Transit routes include all walking segments, train lines, and transfer stations
- Travel times are approximate and may vary based on actual conditions
- All links open in new tabs for convenience
- Bilingual support maintained (English/Chinese) for all new content
- Makes it much easier to navigate between locations and plan travel time

---

## [2024-12-XX] - Updated Tokyo Airbnb Listing

### Changes
Updated the Tokyo accommodation to a new Airbnb listing:

- **Previous Listing**: "Charming House Near Asakusa/SkyTree, Free Bicycle"
  - Location: Sumida-ku, Tokyo
  - 8-10min walk to Hikifune & Keisei Hikifune stations
  - Airbnb ID: 32620100

- **New Listing**: "Modern House in Katsushika"
  - Location: Katsushika-ku, Tokyo
  - 5 mins walk to nearest station
  - 6 mins to Tokyo Skytree, 10 mins to Asakusa
  - Sleeps up to 6
  - Amenities: WiFi, kitchen, private bathroom
  - Airbnb ID: 1582468829135768556
  - Dates: Mar 18-21, 2026

### Files Modified
- `hotel.html` - Updated Tokyo Airbnb section with new listing details and link

### Notes
- The new listing is in a different area (Katsushika-ku instead of Sumida-ku)
- Nearest station walk time reduced from 8-10 mins to 5 mins
- All Tokyo itinerary entries (Days 1-4) updated to reflect the new location

### Schedule Updates
- **Day 1 (Arrival)**: Updated location from "Sumida-ku" to "Katsushika-ku"
- **Day 2 (Old Tokyo)**: 
  - Updated departure from "Hikifune Station - 10 mins walk" to "Katsushika-ku - 5 mins walk to nearest station"
  - Updated transit route to use Keisei Line/Toei Asakusa Line instead of Tsukuba Express
  - Updated return route accordingly
- **Day 3 (Graduation & Shibuya)**:
  - Updated departure from "Hikifune Station - 10 mins walk" to "Katsushika-ku - 5 mins walk to nearest station"
  - Updated transit routes to reflect new location
  - Updated return route accordingly
- **Day 4 (Move to Osaka)**:
  - Updated departure route to reflect "Katsushika-ku - 5 mins walk to nearest station"
  - Transit time adjusted to ~40-45 mins total (from ~35 mins)

### Files Modified
- `hotel.html` - Updated Tokyo Airbnb section with new listing details and link
- `schedule.html` - Updated all Tokyo itinerary entries (Days 1-4) to reflect new Katsushika-ku location

---

## [2024-12-XX] - Updated Day 2 (March 19) - Tokyo City Tour

### Changes
Completely replaced Day 2 itinerary from "Old Tokyo" to "Tokyo City Tour" with new activities:

**Previous Day 2**: Old Tokyo (Senso-ji, Ueno Park, Ginza, Tsukishima Monja Street)

**New Day 2 (March 19 - Tokyo City Tour)**:
- **08:00**: Depart from Airbnb (Katsushika-ku)
- **08:30**: Pain Maison (Buy bread) - ~15-20 mins
- **09:00**: Asakusa (Senso-ji Temple) - ~2 hours (explore temple & Nakamise Street)
- **11:30**: Travel to Ginza
- **12:00**: Ginza - Lunch & Shopping - ~2 hours
- **14:00**: Nakamura Tokichi (Matcha Parfait) - Tea time - ~1 hour
- **15:30**: Travel to Tokyo Station
- **16:00**: Tokyo Station (Explore & Buy Souvenirs) - ~1.5 hours (before sunset)
- **17:30**: Travel to Asakusa for dinner
- **18:00**: Asakusa - Monja Yaki & Okonomiyaki (Dinner) - ~1.5 hours
- **19:30**: Return to Airbnb (Katsushika-ku)

### Transit Routes & Times Added
- All transit routes include walking times, train lines, and total travel times
- Google Maps links added to all locations
- Duration for each activity specified
- All routes optimized for efficient travel between locations

### Files Modified
- `schedule.html` - Completely replaced Day 4 itinerary with new Tokyo City Tour schedule

### Notes
- Day 2 changed from "Old Tokyo" to "Tokyo City Tour" (March 19)
- Day 4 (March 21) restored to original "Move to Osaka" schedule
- All activities include estimated duration times
- All transit routes include detailed walking times and train connections
- Google Maps links added for easy navigation
- Bilingual support maintained (English/Chinese)

---

## [2024-12-XX] - Updated Day 3 (March 20) - Harajuku & Shibuya

### Changes
Completely replaced Day 3 itinerary from "Graduation & Shibuya" (with Saitama graduation ceremony) to "Harajuku & Shibuya" with new activities:

**Previous Day 3**: Graduation Ceremony in Saitama, then celebration dinner in Shibuya

**New Day 3 (March 20 - Harajuku & Shibuya)**:
- **08:00**: Depart from Airbnb (Katsushika-ku)
- **09:00**: Meiji Jingu Shrine - ~1.5 hours (Visit main shrine, walk through forest path)
- **10:30**: Takeshita Street - ~45 mins (Explore shops, street food, crepes)
- **11:30**: Afuri (Lunch) - ~45 mins (Yuzu ramen in Harajuku, expect possible wait)
- **12:30**: Omotesando (Branded Shopping) - ~1.5-2 hours (Luxury brands, boutiques)
- **14:30**: Shibuya - Crossing & Hachiko Statue - ~1-1.5 hours
- **18:00**: Graduation Celebration Dinner - ~1.5-2 hours (Near Shibuya Station, Restaurant TBD)
- **20:30**: Return to Airbnb (Katsushika-ku)

### Transit Routes & Times Added
- All transit routes include walking times, train lines, and total travel times
- Google Maps links added to all locations
- Duration for each activity specified
- All routes optimized for efficient travel between locations

### Files Modified
- `schedule.html` - Completely replaced Day 3 itinerary with new Harajuku & Shibuya schedule

### Notes
- Day 3 changed from "Graduation & Shibuya" (with Saitama trip) to "Harajuku & Shibuya" (Tokyo only)
- Removed Saitama graduation ceremony from this day
- All activities include estimated duration times
- All transit routes include detailed walking times and train connections
- Google Maps links added for easy navigation
- Graduation dinner location TBD (to be decided)
- Bilingual support maintained (English/Chinese)

---

## [2024-12-XX] - Added Ginza Kanimitsu for Lunch on Day 2 (March 19)

### Changes
Updated Day 2 lunch location to specify Ginza Kanimitsu restaurant:

- **Previous**: Generic "Ginza - Lunch & Shopping" (~2 hours combined)
- **New**: 
  - **12:00**: Ginza Kanimitsu (Lunch) - ~1-1.5 hours
    - Crab restaurant in Ginza
    - Lunch sets from ¥4,600-¥11,000 (with service charge and tax)
    - Located at Ginza Crystal Building 4F, 4-2-12 Ginza, Chuo-ku, Tokyo
    - Website: https://ginza-kanimitsu.com/menu/lunch/
  - **13:30**: Ginza Shopping - ~30 mins (separated from lunch)

### Files Modified
- `schedule.html` - Updated Day 2 lunch entry with Ginza Kanimitsu details and separated shopping time

### Notes
- Restaurant link added to schedule
- Google Maps link added for navigation
- Lunch duration adjusted to 1-1.5 hours for proper dining experience
- Shopping time separated and reduced to 30 mins to accommodate lunch timing
- Bilingual support maintained (English/Chinese)

---

## [2024-12-XX] - Updated Day 2 & Day 3 Schedules

### Changes

**Day 2 (March 19) - Morning Update**:
- **Removed**: Pain Maison and Senso-ji Temple from morning
- **Added**: Tsukiji Outer Market in the morning
  - **09:00**: Tsukiji Outer Market - ~2.5 hours
    - Walk around market, try street food, fresh seafood, shops
    - Transit: Walk 5 mins → Train ~30-35 mins → Higashi-Ginza → Walk 5 mins
    - Google Maps link added
- **Updated**: Travel to Ginza now from Tsukiji Market (walk 10-15 mins)

**Day 3 (March 20) - Complete Restructure**:
- **Removed**: Meiji Jingu Shrine, Takeshita Street, Afuri, Omotesando shopping
- **New Schedule**:
  - **09:00**: Asakusa (Senso-ji Temple) - ~2 hours (Explore temple & Nakamise Street)
  - **11:30**: Ichiran Ramen (Lunch) - ~45 mins (Famous tonkotsu ramen in Asakusa)
  - **13:00**: Travel to Saitama for Graduation (~1h 20m train)
  - **14:30**: Nippon Institute of Technology (Graduation Ceremony) - ~2-3 hours
  - **17:30**: Travel to Shibuya (~1h 20m train)
  - **19:00**: Shibuya - Crossing & Hachiko Statue - ~30-45 mins
  - **20:00**: Graduation Celebration Dinner - ~1.5-2 hours (Near Shibuya Station, Restaurant TBD)
  - **22:00**: Return to Airbnb

### Files Modified
- `schedule.html` - Updated Day 2 morning and completely restructured Day 3

### Notes
- Day 2 now starts with Tsukiji Market experience instead of Asakusa
- Day 3 restructured to focus on graduation day activities
- All transit routes include detailed walking times and train connections
- Google Maps links added for all locations
- Ichiran Ramen location specified for Asakusa
- Graduation ceremony timing adjusted to afternoon
- Shibuya visit moved to evening after graduation
- Bilingual support maintained (English/Chinese)

---

## [2024-12-XX] - Updated Day 3 (March 20) Dinner to Tsukada Shabu Shabu

### Changes
Updated Day 3 dinner location from "TBD" to specific restaurant:

- **Previous**: Graduation Celebration Dinner (Restaurant TBD)
- **New**: Tsukada Shabu Shabu (Graduation Celebration Dinner)
  - Location: Shibuya Scramble Square 12F, 2-24-12 Shibuya, Shibuya-ku, Tokyo
  - Hours: 17:00-23:00 (Dinner)
  - Walk 3-5 mins from Shibuya Station
  - Duration: ~1.5-2 hours
  - Google Maps link added

### Files Modified
- `schedule.html` - Updated Day 3 dinner entry with Tsukada Shabu Shabu details

### Notes
- Restaurant name and location specified
- Google Maps link added for easy navigation
- Walking directions from Shibuya Station included
- Restaurant hours included (17:00-23:00)
- Bilingual support maintained (English/Chinese)

---

## [2024-12-XX] - Restructured Schedule into Dashboard with Expandable Details

### Changes
Completely restructured the schedule page into a dashboard view with day summaries and expandable detailed sections:

**New Structure**:
- **Schedule Dashboard**: Grid layout showing all 11 days as summary cards
  - Each card shows: Day number, date, title, and key highlights
  - Color-coded by location (Tokyo: Indigo, Osaka: Orange, Kobe: Red, USJ: Sky, Kyoto: Emerald, Uji & Nara: Teal)
  - "View Details" button with chevron icon on each card
  - Clickable cards that expand/collapse detailed timeline

- **Detailed Timeline Sections**: All day details wrapped in collapsible sections
  - Hidden by default (`.hidden` class)
  - Expandable when clicking on day cards
  - Smooth scroll animation when expanding
  - Chevron icon rotates to indicate state (down = collapsed, up = expanded)

**Dashboard Cards Created**:
- Day 1: Arrival (Indigo)
- Day 2: Tokyo City Tour (Indigo)
- Day 3: Graduation Day (Indigo)
- Day 4: Move to Osaka (Orange)
- Day 5: Kobe Day Trip (Red)
- Day 6: USJ (Sky)
- Day 7: Osaka City Highlights (Orange)
- Day 8: Kyoto (Emerald)
- Day 9: Uji & Nara (Teal)
- Day 10: Last Shopping (Orange)
- Day 11: Fly Home (Orange)

### Technical Implementation
- **JavaScript**: Added `toggleDayDetails(dayId)` function
  - Toggles visibility of detailed sections
  - Updates chevron icon state
  - Smooth scrolls to expanded section
  
- **CSS**: Added styles for dashboard cards and collapsible sections
  - `.day-card`: Hover effects and transitions
  - `.day-details`: Fade-in animation
  - `.day-details.hidden`: Hidden state

### Files Modified
- `schedule.html` - Restructured with dashboard grid and collapsible timeline sections
- `script.js` - Added `toggleDayDetails()` function
- `styles.css` - Added dashboard card and collapsible section styles

### Notes
- Dashboard provides quick overview of all days at a glance
- Detailed timeline sections remain accessible but hidden by default
- Clicking any day card expands its detailed schedule
- Smooth animations and transitions for better UX
- All existing functionality (transit routes, Google Maps links, etc.) preserved
- Bilingual support maintained (English/Chinese)
- Mobile responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)

---

## [2024-12-XX] - Fixed Schedule Dashboard "View Details" Toggle Functionality

### Issue
The "View Details" button on schedule dashboard cards was not showing the detailed timeline sections when clicked.

### Root Cause
- Tailwind CSS's `hidden` class was conflicting with custom CSS
- JavaScript was checking for `hidden` class but HTML was using `day-details-hidden`
- CSS specificity issues with Tailwind's utility classes

### Solution
1. **Changed CSS class name**: Replaced `hidden` with `day-details-hidden` to avoid Tailwind conflicts
   - Updated all 11 day details sections in HTML
   - Added `!important` to CSS rule for proper override

2. **Updated JavaScript**: Modified `toggleDayDetails()` function to:
   - Check for `day-details-hidden` class instead of `hidden`
   - Add/remove `day-details-hidden` class correctly
   - Added error logging for debugging

3. **Enhanced CSS**: 
   - Added `display: block` to `.day-details` base class
   - Used `.day-details.day-details-hidden` selector for specificity
   - Added `!important` to ensure override of Tailwind classes

### Files Modified
- `schedule.html` - Changed all `hidden` classes to `day-details-hidden` (11 instances)
- `script.js` - Updated `toggleDayDetails()` function to use correct class name
- `styles.css` - Added proper CSS rules with `!important` flag

### Testing
- All 11 day cards now properly expand/collapse when clicked
- Chevron icons rotate correctly (down = collapsed, up = expanded)
- Smooth scroll animation works when expanding
- No conflicts with Tailwind CSS utility classes

---

## [2024-12-XX] - Created Individual Day Schedule Pages

### Changes
Created dedicated HTML pages for each day of the itinerary, organized in a `schedule/` folder structure:

**New Structure**:
- **Individual Day Pages**: Created 11 separate HTML pages (day1.html through day11.html) in `schedule/` folder
  - Each page contains the full detailed schedule for that specific day
  - Color-coded headers matching location (Tokyo: Indigo, Osaka: Orange, Kobe: Red, USJ: Sky, Kyoto: Emerald, Uji & Nara: Teal)
  - Navigation links to previous/next day
  - Back to itinerary link in navigation and footer
  - Consistent styling with main schedule page

**Dashboard Updates**:
- Changed all dashboard cards from expandable sections to direct links
- Replaced `onclick="toggleDayDetails()"` with `<a href="schedule/dayX.html">`
- Changed chevron icons to arrow-right icons
- Cards now navigate directly to individual day pages

**Navigation Features**:
- Each day page has:
  - "Back to Itinerary" link in navigation bar
  - Previous/Next day navigation buttons at bottom
  - Day 1: Back to Itinerary + Next Day
  - Day 11: Previous Day + Back to Itinerary
  - Days 2-10: Previous Day + Next Day

**Technical Implementation**:
- Created Python script (`generate_day_pages.py`) to automatically extract and generate day pages from `schedule.html`
- Script extracts day content, fixes relative paths (attractions links), and generates complete HTML pages
- All day pages maintain bilingual support (English/Chinese)
- Location-based styling applied to each page

### Files Created
- `schedule/day1.html` through `schedule/day11.html` (11 files)
- `generate_day_pages.py` (utility script for generating pages)

### Files Modified
- `schedule.html` - Updated all 11 dashboard cards to link to individual day pages instead of using toggle functionality

### Notes
- Individual day pages provide better organization and easier navigation
- Each day can be bookmarked or shared directly
- Better mobile experience with dedicated pages
- All existing functionality preserved (Google Maps links, transit routes, etc.)
- Paths to attractions correctly updated to `../attractions/` for proper navigation

---

## [2024-12-XX] - Added Budget Splitter Tool

### Changes
Created a comprehensive budget splitter tool for tracking and splitting expenses among group members:

**New Budget Splitter Features**:
- **Member Management**: Add/remove members with automatic local storage
- **Expense Tracking**: Add expenses with date, category, currency, description, and amount
- **Multiple Currencies**: Support for JPY, MYR, USD, SGD
- **Split Modes**: 
  - Equal split (automatically divides amount among selected members)
  - Custom split (manually enter each member's share)
- **Per-Member Totals**: Automatic calculation of each member's total share across all expenses
- **Category Summaries**: Total spending by category (Meal, Transport, Tickets, Shopping, Hotel, Other)
- **CSV Export**: Export all expenses to CSV file for external analysis
- **Offline Functionality**: All data stored in browser localStorage, works completely offline

**Pre-filled Members**: 
- Automatically loads 10 members on first use:
  - Soon Zheng Dong, Soon Cheng Wai, Soon Xin Yi, See Siew Pheng, Ang Shin Nee, See Siew Tin, See Siew Kim, See Eng Kim, See Yi Joe, Koay Jun Ming

**Dashboard Integration**:
- Added featured card on homepage dashboard with special gradient design
- Prominent placement above other quick links
- Visual highlights: Auto Split, Multi-Currency, Offline, 10 Members
- Shimmer hover effects and animations
- "NEW" badge with pulse animation

**Navigation Updates**:
- Added "Split Expenses" link to desktop navigation menu
- Added "Split Expenses" link to mobile menu with calculator icon
- Active state styling when on budget splitter page

**Styling & Design**:
- Matched homepage design language (pink/emerald theme)
- Added navigation bar consistent with other pages
- Added sakura animation background
- Added back button to return to homepage dashboard
- Integrated Tailwind CSS for consistent styling
- Bilingual support (English/Chinese) for all UI elements
- Responsive design for mobile and desktop

**CSS Organization**:
- Created separate `budget-splitter.css` file for budget splitter specific styles
- All styles prefixed with `.budget-*` to avoid conflicts
- Maintains separation of concerns while matching site-wide design

### Files Created
- `japan_trip_budget.html` - Main budget splitter page with full functionality
- `budget-splitter.css` - Dedicated stylesheet for budget splitter components

### Files Modified
- `homepage.html` - Added featured budget splitter card and navigation links

### Notes
- Budget splitter uses localStorage key `jp_trip_budget_splitter_v1` for data persistence
- All calculations are client-side, no server required
- Data persists across browser sessions
- Reset functionality clears all data and restores default members
- CSV export includes all expense details and split information
- Future enhancement: "Who owes who" settlement calculation can be added if requested

---

## Future Changes

All future changes will be documented below with:
- Date
- Description of change
- Files modified
- Reason/issue addressed

---