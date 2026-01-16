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

## Future Changes

All future changes will be documented below with:
- Date
- Description of change
- Files modified
- Reason/issue addressed

---
