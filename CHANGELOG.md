# Changelog

This file documents all changes made to the Japan Trip 2026 project.

---


## Future Changes

All future changes will be documented below with:
- Date
- Description of change
- Files modified
- Reason/issue addressed

---

## 2026-01-17: Updated March 24 Schedule and Added Osaka Attractions

### Description
Updated the March 24 (Day 7) Osaka schedule with new itinerary order and added two new attraction pages: Namba Yasaka Shrine and Kuromon Ichiba Market.

### Changes Made

#### March 24 Schedule Update
- **Reordered itinerary** for Day 7 (March 24) in Osaka:
  - 09:00 - Osaka Castle (arrive at 9am)
  - 11:00 - Namba Yasaka Shrine
  - 12:00 - Kuromon Market (lunch)
  - 14:00 - Tsutenkaku
  - 15:30 - Shinsaibashi
  - 17:30 - Dotonbori
  - 20:00 - Dinner in Dotonbori
- Updated travel times and Google Maps links for all transitions

#### New Attraction: Namba Yasaka Shrine
- **Created** `attractions/namba-yasaka-shrine/namba-yasaka-shrine.html`
- **Added** to Osaka section in `tourist-attraction.html` dashboard
- **Features:**
  - Image carousel with 5 images from external URLs
  - Bilingual content (English/Chinese)
  - About section, Highlights, Travel Tips, Location & Access
  - Google Maps link
- **Images used:**
  - `https://pic.k-cdn.media/2024/10/ortbQdhu-20240920-namba-yasaka-main.jpg`
  - `https://static.japan-food.guide/.../eye_catch_29284747_s__1_.jpg`
  - `https://www.howto-osaka.com/en/wp/wp-content/uploads/2023/09/yasaka-4.jpg`
  - `https://photos.smugmug.com/Osaka/.../Minami_TSD_NambaYasakaShrine4-L.jpg`
  - `https://osaka.b-cdn.net/wp-content/uploads/2025/11/IMG_9460-1024x683.jpg`

#### New Attraction: Kuromon Ichiba Market
- **Created** `attractions/kuromon-market/kuromon-market.html`
- **Added** to Osaka section in `tourist-attraction.html` dashboard
- **Features:**
  - Image carousel with 6 images from external URLs
  - Bilingual content (English/Chinese)
  - About section describing "Osaka's Kitchen"
  - Highlights, Travel Tips, Location & Access
  - Google Maps link
- **Images used:**
  - `https://article-image.travel.navitime.jp/.../NTJtrv1084-en_kuromon_market_0.jpg`
  - `https://onb-cdn.b-cdn.net/.../121-Kuromon-Ichiba-Market-Osaka1.jpg`
  - `https://www.japan-guide.com/g19/4031_11.jpg`
  - `https://www.datocms-assets.com/.../kuromon-ichiba.webp`
  - `https://a.travel-assets.com/.../91692-Kuromon-Ichiba.jpg`
  - `https://cdn.globaleur.com/.../gV7SkceMeG_ori.jpg`

#### Files Modified
- `schedule/day7.html` - Updated March 24 itinerary with new order
- `schedule.html` - Updated Day 7 dashboard summary
- `tourist-attraction.html` - Added Namba Yasaka Shrine and Kuromon Market cards to Osaka section

#### Files Created
- `attractions/namba-yasaka-shrine/namba-yasaka-shrine.html`
- `attractions/kuromon-market/kuromon-market.html`

### Benefits
- ✅ Updated schedule reflects actual planned itinerary for March 24
- ✅ New attraction pages provide detailed information about Osaka destinations
- ✅ Images are loaded directly from external URLs (no local storage needed)
- ✅ Both attractions are now accessible from the tourist attractions dashboard

### Notes
- All images for both new attractions are served from external URLs
- Both attractions are located in Osaka and use the Osaka color scheme (orange)
- Kuromon Market is noted as a great lunch destination (as per the updated schedule)

---
