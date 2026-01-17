# Changelog

This file documents all changes made to the Japan Trip 2026 project.

---

## 2026-01-17: Unified Navigation Links Across All Pages

### Description
Added the "Split Expenses" navigation link to all HTML pages to ensure consistent navigation and easy access to the budget splitter tool from every page on the site.

### Changes Made

#### Navigation Updates
- **Added "Split Expenses" link** to desktop navigation menus on all main pages
- **Added "Split Expenses" link** to mobile navigation menus on all main pages
- **Consistent placement** - Link appears after "Hotels" and before the language switcher button
- **Bilingual support** - Link displays "Split Expenses" in English and "费用分摊" in Chinese

#### Files Modified
- `flights.html` - Added Split Expenses link to desktop and mobile navigation
- `schedule.html` - Added Split Expenses link to desktop and mobile navigation
- `budget.html` - Added Split Expenses link to desktop and mobile navigation
- `packing.html` - Added Split Expenses link to desktop and mobile navigation
- `tourist-attraction.html` - Added Split Expenses link to desktop and mobile navigation
- `food.html` - Added Split Expenses link to desktop and mobile navigation
- `hotel.html` - Added Split Expenses link to desktop and mobile navigation

### Benefits
- ✅ Consistent navigation across all pages
- ✅ Easy access to budget splitter from any page
- ✅ Improved user experience with unified navigation structure
- ✅ Mobile-friendly navigation includes all links
- ✅ Bilingual navigation support maintained

### Notes
- All navigation menus now match the structure of `homepage.html`
- Split Expenses link points to `japan_trip_budget.html`
- Desktop navigation uses text link, mobile navigation uses icon + text format
- Link uses calculator icon (fa-calculator) in mobile menu for visual consistency

---

## 2026-01-17: Created Jumbo Fishing Boat Tsurikichi Osaka Shinsekai Restaurant Page

### Description
Created a complete restaurant page for Jumbo Fishing Boat Tsurikichi Osaka Shinsekai (ジャンボ釣船 つり吉 大阪新世界店), a unique interactive fishing izakaya where guests can catch their own fish and have it prepared fresh, with carousel images and full integration into the food dashboard and schedule pages.

### Changes Made

#### New Restaurant Page Created
- **Created folder structure**: `restaurants/tsurikichi-shinsekai/`
- **Created HTML page**: `tsurikichi-shinsekai.html` with full restaurant details
- **Added 9 image URLs** in carousel format matching other restaurant pages
- **Implemented carousel functionality** with navigation arrows and dot indicators

#### Image URLs Added
1. `https://tsuri-kichi.com/img/fishing/img_menu3.jpg`
2. `https://rimage.gnst.jp/rest/img/ck7vnzdm0000/s_0nhf.jpg?t=1730696406`
3. `https://tsuri-kichi.com/img/food_menu/img07.jpg`
4. `https://img.pretty-online.jp/wp-content/uploads/2020/04/11190833/ad5b80e260163d82f91773c1688c67a4.jpg.webp`
5. `https://tsuri-kichi.com/img/top/img_02.jpg`
6. `https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/193676/c0800177b7f3420b7e4478522068b3ab.jpg?token=4cc5210&api=v2`
7. `https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/106398/106398191.jpg?token=e0a87d6&api=v2`
8. `https://tsuri-kichi.com/img/access/img_namba.jpg`
9. `https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/150734/150734486.jpg?token=30117da&api=v2`

#### Files Created
- `restaurants/tsurikichi-shinsekai/tsurikichi-shinsekai.html` - Complete restaurant page with carousel, details, and bilingual content

#### Files Modified
- `src/data/restaurantsData.js` - Added `tsurikichi-shinsekai` entry with all 9 images and restaurant details
- `food.html` - Added restaurant card to Osaka section
- `schedule/day10.html` - Updated dinner link to point to new restaurant page instead of generic "Dinner in Shinsekai/Tsutenkaku area"
- `schedule.html` - Updated detailed schedule for Day 10 to include restaurant link
- `src/pages/Food.jsx` - Added `tsurikichi-shinsekai` to Osaka restaurants array

### Restaurant Details
- **Name**: Jumbo Fishing Boat Tsurikichi Osaka Shinsekai (ジャンボ釣船 つり吉 大阪新世界店)
- **Location**: Shinsekai, Osaka
- **Type**: Interactive fishing izakaya (Japanese pub)
- **Hours**: 5:00 PM - 11:00 PM (Dinner)
- **Price**: Varies
- **Nearest Station**: Dobutsuen-mae Station

### Benefits
- ✅ Complete restaurant page with all details and images
- ✅ Integrated into food dashboard (Osaka section)
- ✅ Linked from schedule pages (Day 10 - March 27 dinner)
- ✅ Carousel format matches other restaurant pages
- ✅ Bilingual support (English/Chinese)
- ✅ React app integration complete
- ✅ Perfect for dinner after exploring Tsutenkaku and Shinsekai area
- ✅ Unique interactive experience - catch your own fish!

### Notes
- Restaurant offers interactive fishing experience where guests catch their own fish from tanks
- Fish can be prepared in various styles: sashimi, grilled, fried, or hot pot
- Located in vibrant Shinsekai district near Tsutenkaku, perfect for dinner after sightseeing
- All 9 images showcase fishing experience, fresh seafood, restaurant interior, and location
- Carousel includes auto-play functionality and touch/swipe support
- Perfect timing: Dinner at 7:00 PM after visiting Tsutenkaku at 5:30 PM
- Duration: ~1.5-2 hours for fishing and dining experience
- Fun and interactive experience - great for groups

---

## 2026-01-17: Updated Nakamura Tokichi Honten with Image Carousel

### Description
Enhanced the Nakamura Tokichi Honten (中村藤吉本店) restaurant page with additional images and converted the display format to a carousel, matching the style of other restaurant pages.

### Changes Made

#### Restaurant Page Updates
- **Added 6 new image URLs** to showcase Nakamura Tokichi Honten's matcha shop, products, tea experience, and traditional tea house
- **Converted image display** from single static image to interactive carousel format
- **Added carousel functionality** with navigation arrows and dot indicators
- **Total of 6 images** now available in the carousel

#### Image URLs Added
1. `https://global.tokichi.jp/cdn/shop/files/sp_top_202210_28-1.webp?v=1676857832&width=3840`
2. `https://global.tokichi.jp/cdn/shop/files/1_1_9d25c4e0-fdc9-4cdf-9f36-77c76069b6ed.webp?v=1676857729&width=3840`
3. `https://www.kyototourism.org/wp/wp-content/uploads/2021/01/Tea_Nakamura-Tokichi-Honten-01.jpg`
4. `https://global.tokichi.jp/cdn/shop/files/3_1b6712d2-d9f4-4376-85c9-40ee083c44f6.webp?v=1677140158&width=3840`
5. `https://tokichi.jp/cdn/shop/files/39_69bc85e7-dd86-4522-80f8-ba60d2b4c351.jpg?v=1674790321&width=1500`
6. `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNnuRn6-Q2jpLDSpcx68njipWba-bO_46zw&s`

#### Files Modified
- `restaurants/nakamura-tokichi-uji.html` - Added carousel with 6 images, navigation arrows, and indicators
- `src/data/restaurantsData.js` - Updated images array to include all 6 carousel images

### Benefits
- ✅ Consistent UI/UX - Carousel format matches other restaurant pages
- ✅ Better image showcase - Users can browse through multiple images of the tea house, matcha products, and desserts
- ✅ Interactive experience - Navigation arrows and indicators for easy browsing
- ✅ Complete data integration - All images properly linked in data files

### Notes
- Carousel includes auto-play functionality (pauses on hover)
- Touch/swipe support enabled for mobile devices
- All images have proper alt text for accessibility
- First image in carousel is used as thumbnail on dashboard
- Images showcase the historic tea house, matcha products, tea ceremony experience, and traditional Japanese desserts

---

## 2026-01-17: Updated Schedule for Day 7 and Day 10

### Description
Updated the itinerary for Day 7 (March 24) and Day 10 (March 27) based on user requirements to reorganize the Osaka exploration schedule.

### Changes Made

#### Day 7 (March 24) - Updated Schedule
- **Changed from**: Osaka Castle → Namba Yasaka → Kuromon Market → Tsutenkaku → Shinsaibashi → Dotonbori
- **Changed to**: Umeda Sky Building (9:00 AM) → Osaka Aquarium Kaiyukan (11:00 AM) → Shinsaibashi (2:30 PM) → Dotonbori (5:00 PM) → Dinner in Dotonbori (7:00 PM)
- **Title updated**: "Osaka City Highlights" → "Osaka Exploration"

#### Day 10 (March 27) - Updated Schedule
- **Changed from**: Umeda Sky Building (9:00 AM) → Osaka Aquarium → Shinsaibashi → Dotonbori
- **Changed to**: Katsuoji Temple (7:00 AM arrival) → Depart 9:00 AM → Osaka Castle (10:30 AM) → Kuromon Market (12:30 PM lunch) → Namba Yasaka Shrine (2:00 PM) → Harukas Abeno (3:00 PM shopping) → Tsutenkaku (5:30 PM) → Dinner in Shinsekai/Tsutenkaku area (7:00 PM)
- **Title updated**: "Last Shopping" → "Osaka City Highlights"
- **Added new locations**: Katsuoji Temple (勝尾寺) and Harukas Abeno (阿倍野HARUKAS)

#### Files Modified
- `schedule/day7.html` - Updated full day schedule with new itinerary
- `schedule/day10.html` - Updated full day schedule with new itinerary including Katsuoji and Harukas Abeno
- `schedule.html` - Updated summary cards and detailed schedules for both days

### Benefits
- ✅ Day 7 now focuses on Umeda Sky Building and Osaka Aquarium, followed by shopping and dinner
- ✅ Day 10 now includes early morning visit to Katsuoji Temple, followed by Osaka Castle and other city highlights
- ✅ Better distribution of attractions across the two days
- ✅ All schedule pages and summary cards are synchronized

### Notes
- Day 7: Umeda Sky Building at 9:00 AM, then aquarium, shopping, and dinner in Dotonbori
- Day 10: Early start at Katsuoji Temple (7:00 AM), then Osaka Castle, market lunch, shrine visit, shopping at Harukas Abeno, and dinner near Tsutenkaku
- All transit information and timing have been updated accordingly

---

## 2026-01-17: Created Osaka Aquarium Kaiyukan Attraction Page

### Description
Created a complete attraction page for Osaka Aquarium Kaiyukan (大阪海游馆), one of Japan's largest aquariums featuring whale sharks and a massive 5,400-ton central tank, with carousel images and full integration into the attractions dashboard and schedule pages.

### Changes Made

#### New Attraction Page Created
- **Created folder structure**: `attractions/osaka-aquarium/`
- **Created HTML page**: `osaka-aquarium.html` with full attraction details
- **Added 5 image URLs** in carousel format matching other attraction pages
- **Implemented carousel functionality** with navigation arrows and dot indicators

#### Image URLs Added
1. `https://asset.japan.travel/image/upload/v1648205341/osaka/H_00496_001.jpg`
2. `https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/hhdp9n7ww2yltm73opvb.jpg`
3. `https://www.the-kansai-guide.com/kansaiguide/data/directory/12000/11430/20211015_060912_bada8ec9_w640.jpg`
4. `https://pic.japanholiday.com/osakaaquas-1.jpg`
5. `https://a.travel-assets.com/findyours-php/viewfinder/images/res70/91000/91756-Osaka-Aquarium-Kaiyukan.jpg`

#### Files Created
- `attractions/osaka-aquarium/osaka-aquarium.html` - Complete attraction page with carousel, details, and bilingual content

#### Files Modified
- `src/data/attractionsData.js` - Added `osaka-aquarium` entry with all 5 images and attraction details
- `tourist-attraction.html` - Added attraction card to Osaka section
- `schedule/day10.html` - Updated link to point to new attraction page instead of Google Maps
- `schedule.html` - Updated link to point to new attraction page instead of Google Maps
- `src/pages/Attractions.jsx` - Added `osaka-aquarium` to Osaka attractions array

### Attraction Details
- **Name**: Osaka Aquarium Kaiyukan (大阪海游馆)
- **Location**: Osaka Bay, Osaka Prefecture
- **Type**: Large aquarium with whale sharks and marine life
- **Hours**: 10:00 AM - 8:00 PM (varies by season)
- **Price**: ¥2,700
- **Nearest Station**: Osakako Station (JR Osaka Loop Line)

### Benefits
- ✅ Complete attraction page with all details and images
- ✅ Integrated into attractions dashboard (Osaka section)
- ✅ Linked from schedule pages (Day 10)
- ✅ Carousel format matches other attraction pages
- ✅ Bilingual support (English/Chinese)
- ✅ React app integration complete
- ✅ Perfect for visit after Umeda Sky Building

### Notes
- Aquarium features a massive 5,400-ton central tank with whale sharks
- One of Japan's largest aquariums showcasing Pacific Rim marine life
- Unique spiral design with descending walkway through multiple floors
- All 5 images showcase the aquarium's main tank, whale sharks, and exterior
- Carousel includes auto-play functionality and touch/swipe support
- Perfect timing: Visit at 11:00 AM after Umeda Sky Building (9:00 AM), then head to Shinsaibashi at 2:30 PM
- Duration: ~2-3 hours to fully explore all exhibits
- Interactive exhibits and feeding shows available

---

## 2026-01-17: Created Ujigami Shrine Attraction Page

### Description
Created a complete attraction page for Ujigami Shrine (宇治上神社), a UNESCO World Heritage Site and one of Japan's oldest Shinto shrines located in Uji, Kyoto, with carousel images and full integration into the attractions dashboard and schedule pages.

### Changes Made

#### New Attraction Page Created
- **Created folder structure**: `attractions/ujigami/`
- **Created HTML page**: `ujigami.html` with full attraction details
- **Added 4 image URLs** in carousel format matching other attraction pages
- **Implemented carousel functionality** with navigation arrows and dot indicators

#### Image URLs Added
1. `https://www.japan-guide.com/g17/3978_02.jpg`
2. `https://www.japan-guide.com/g17/3978_01.jpg`
3. `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAf7rVPnFq06KA0cE0jLE4ZwQkdPOd-NCrA&s`
4. `https://japanjourneys.jp/wp-content/uploads/2019/10/ujigami-shrine-kyoto-header-2.jpg`

#### Files Created
- `attractions/ujigami/ujigami.html` - Complete attraction page with carousel, details, and bilingual content

#### Files Modified
- `src/data/attractionsData.js` - Added `ujigami` entry with all 4 images and attraction details
- `tourist-attraction.html` - Added attraction card to Kyoto section (labeled as Uji)
- `schedule/day9.html` - Updated link to point to new attraction page instead of Google Maps
- `schedule.html` - Updated link to point to new attraction page instead of Google Maps
- `src/pages/Attractions.jsx` - Added `ujigami` to Kyoto attractions array

### Attraction Details
- **Name**: Ujigami Shrine (宇治上神社)
- **Location**: Uji, Kyoto Prefecture
- **Type**: UNESCO World Heritage Shinto shrine
- **Hours**: 9:00 AM - 4:30 PM
- **Price**: Free
- **Nearest Station**: Uji Station

### Benefits
- ✅ Complete attraction page with all details and images
- ✅ Integrated into attractions dashboard (Kyoto section, labeled as Uji)
- ✅ Linked from schedule pages (Day 9)
- ✅ Carousel format matches other attraction pages
- ✅ Bilingual support (English/Chinese)
- ✅ React app integration complete
- ✅ Perfect for visit after Nakamura Tokichi Honten

### Notes
- Shrine is one of Japan's oldest Shinto shrines, dating back to the 11th century
- UNESCO World Heritage Site as part of "Historic Monuments of Ancient Kyoto"
- Located along the Uji River, offering peaceful and scenic experience
- All 4 images showcase traditional shrine architecture and grounds
- Carousel includes auto-play functionality and touch/swipe support
- Perfect timing: Visit at 10:30 AM after Nakamura Tokichi (9:30 AM), then leave for Nara at 11:30 AM
- Less crowded than many other Kyoto attractions, offering a tranquil experience

---

## 2026-01-17: Created Mt. Wakakusa Attraction Page

### Description
Created a complete attraction page for Mt. Wakakusa (若草山), a grass-covered mountain in Nara Park famous for panoramic sunset views, with carousel images and full integration into the attractions dashboard and schedule pages.

### Changes Made

#### New Attraction Page Created
- **Created folder structure**: `attractions/wakakusa/`
- **Created HTML page**: `wakakusa.html` with full attraction details
- **Added 7 image URLs** in carousel format matching other attraction pages
- **Implemented carousel functionality** with navigation arrows and dot indicators

#### Image URLs Added
1. `https://narashikanko.or.jp/lsc/upfile/spot/0001/0108/10108_1_l.jpg`
2. `https://narashikanko.or.jp/lsc/upfile/spot/0001/0108/10108_2_l.jpg`
3. `https://cdn.prod.rexby.com/image/a3c42040a8e34c88bc5500d192bb3128?format=webp&width=1080&height=1350`
4. `https://nara-sightseeing.com/ns/wp-content/uploads/2020/04/PMH_160821_191900_2402-1024x683.jpg`
5. `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0xx8OJilJe2a2PqCCTQY1x7YaNS-0wm7DA&s`
6. `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HXUMDBtNp71oMQXYLTpi88sZJltLuxt_4A&s`
7. `https://www.travelingjapan.net/wp-content/uploads/2022/11/night-veiw-from-mount-wakakusa-2-scaled.jpg`

#### Files Created
- `attractions/wakakusa/wakakusa.html` - Complete attraction page with carousel, details, and bilingual content

#### Files Modified
- `src/data/attractionsData.js` - Added `wakakusa` entry with all 7 images and attraction details
- `tourist-attraction.html` - Added attraction card to Nara section
- `schedule/day9.html` - Updated link to point to new attraction page instead of Google Maps
- `schedule.html` - Updated link to point to new attraction page instead of Google Maps
- `src/pages/Attractions.jsx` - Added `wakakusa` to Nara attractions array

### Attraction Details
- **Name**: Mt. Wakakusa (若草山)
- **Location**: Nara City, Nara Prefecture
- **Type**: Grass-covered mountain with panoramic views
- **Hours**: 9:00 AM - 5:00 PM (varies by season)
- **Price**: ¥150
- **Nearest Station**: Nara Station

### Benefits
- ✅ Complete attraction page with all details and images
- ✅ Integrated into attractions dashboard (Nara section)
- ✅ Linked from schedule pages (Day 9)
- ✅ Carousel format matches other attraction pages
- ✅ Bilingual support (English/Chinese)
- ✅ React app integration complete
- ✅ Perfect for sunset viewing after Kasuga Taisha visit

### Notes
- Mountain is 342 meters high and covered entirely with grass
- Famous for spectacular sunset views over Nara City (best at 5:30 PM)
- All 7 images showcase panoramic views, sunset scenes, and night views
- Carousel includes auto-play functionality and touch/swipe support
- Perfect timing: Visit at 5:30 PM after Kasuga Taisha, then dinner at Yamatoen Honten at 7:00 PM
- Annual Wakakusa Yamayaki festival in January sets the entire mountain on fire

---

## 2026-01-17: Created Yamatoen Honten Restaurant Page

### Description
Created a complete restaurant page for Yamatoen Honten (大和园本店), a traditional Japanese restaurant in Nara, with carousel images and full integration into the food dashboard and schedule pages.

### Changes Made

#### New Restaurant Page Created
- **Created folder structure**: `restaurants/yamatoen-honten/`
- **Created HTML page**: `yamatoen-honten.html` with full restaurant details
- **Added 6 image URLs** in carousel format matching other restaurant pages
- **Implemented carousel functionality** with navigation arrows and dot indicators

#### Image URLs Added
1. `https://static.where-e.com/Japan/Nara_Prefecture/Yamatoan-Honten_c105737e9d8c53bcb797de7c9e2608f7.jpg`
2. `https://airial.travel/_next/image?url=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-w%2F18%2F9b%2F56%2F98%2Fphoto1jpg.jpg&w=3840&q=75`
3. `https://tblg.k-img.com/restaurant/images/Rvw/322237/640x640_rect_8af8677932a564ea58216403d75ba3a1.jpg`
4. `https://carlming.net/wp-content/uploads/2024/03/20231011-2Q1A3248.jpg`
5. `https://media-cdn.tripadvisor.com/media/photo-p/29/6a/55/c7/yamatoan-honten.jpg`
6. `https://rimage.gnst.jp/rest/img/fz97xj7u0000/s_0n5j.jpg`

#### Files Created
- `restaurants/yamatoen-honten/yamatoen-honten.html` - Complete restaurant page with carousel, details, and bilingual content

#### Files Modified
- `src/data/restaurantsData.js` - Added `yamatoen-honten` entry with all 6 images and restaurant details
- `food.html` - Added restaurant card to Nara section
- `schedule/day9.html` - Updated link to point to new restaurant page instead of Google Maps
- `schedule.html` - Updated link to point to new restaurant page instead of Google Maps
- `src/pages/Food.jsx` - Added `yamatoen-honten` to Nara restaurants array

### Restaurant Details
- **Name**: Yamatoen Honten (大和园本店)
- **Location**: Nara, Nara Prefecture
- **Type**: Traditional Japanese restaurant
- **Hours**: 5:00 PM - 11:00 PM (Dinner)
- **Price**: Varies
- **Nearest Station**: Nara Station

### Benefits
- ✅ Complete restaurant page with all details and images
- ✅ Integrated into food dashboard (Nara section)
- ✅ Linked from schedule pages (Day 9)
- ✅ Carousel format matches other restaurant pages
- ✅ Bilingual support (English/Chinese)
- ✅ React app integration complete
- ✅ Perfect for dinner after Mt. Wakakusa exploration

### Notes
- Restaurant specializes in traditional Japanese cuisine with local Nara ingredients
- Located near Mt. Wakakusa, perfect for dinner after sunset viewing
- All 6 images showcase restaurant exterior, interior, and traditional dishes
- Carousel includes auto-play functionality and touch/swipe support
- Second Nara restaurant added to the system

---

## 2026-01-17: Created Kamameshi Shizuka Kouen-ten Restaurant Page

### Description
Created a complete restaurant page for Kamameshi Shizuka Kouen-ten (志津香), a traditional kamameshi (rice pot) restaurant in Nara, with carousel images and full integration into the food dashboard and schedule pages. Also added a new Nara section to the food dashboard.

### Changes Made

#### New Restaurant Page Created
- **Created folder structure**: `restaurants/kamameshi-shizuka/`
- **Created HTML page**: `kamameshi-shizuka.html` with full restaurant details
- **Added 5 image URLs** in carousel format matching other restaurant pages
- **Implemented carousel functionality** with navigation arrows and dot indicators

#### Image URLs Added
1. `https://static.gltjp.com/glt/data/directory/14000/13162/20220630_163718_48f149c8_w640.webp`
2. `https://tblg.k-img.com/restaurant/images/Rvw/229983/640x640_rect_d60dddefe0e8c38b8bbf3b442cd57d8a.jpg`
3. `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fmTOFcGdEFHULPfwm_oyPMACP6knwHlZWw&s`
4. `https://img.poibank.com/3H89xPXtywAD3SucB4lqym5UWHE=/W3siZm9ybWF0IjoianBnIn0seyJrZXkiOiJzdWdnZXN0aW9uLzE5NzMwMTgwLzg4NTYzLzE1NTg4NTg1OTI5NDgifSx7InJlc2l6ZSI6eyJ3aWR0aCI6IjcwMCJ9fV0=`
5. `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfjF-ked9UXjCvnkxGgFGmMKD4nkUTgTaGA&s`

#### Files Created
- `restaurants/kamameshi-shizuka/kamameshi-shizuka.html` - Complete restaurant page with carousel, details, and bilingual content

#### Files Modified
- `src/data/restaurantsData.js` - Added `kamameshi-shizuka` entry with all 5 images and restaurant details
- `food.html` - Added new Nara section with restaurant card
- `schedule/day9.html` - Updated link to point to new restaurant page instead of Google Maps
- `schedule.html` - Updated link to point to new restaurant page instead of Google Maps
- `src/pages/Food.jsx` - Added `kamameshi-shizuka` to Nara restaurants array and added Nara section to sections list

### Restaurant Details
- **Name**: Kamameshi Shizuka Kouen-ten (志津香)
- **Location**: Nara Park, Nara
- **Type**: Traditional kamameshi (rice pot) restaurant
- **Hours**: 11:00 AM - 3:00 PM (Lunch)
- **Price**: Varies
- **Nearest Station**: Nara Station

### Benefits
- ✅ Complete restaurant page with all details and images
- ✅ New Nara section added to food dashboard
- ✅ Integrated into food dashboard (Nara section)
- ✅ Linked from schedule pages (Day 9)
- ✅ Carousel format matches other restaurant pages
- ✅ Bilingual support (English/Chinese)
- ✅ React app integration complete with new Nara section

### Notes
- Restaurant specializes in traditional kamameshi (rice cooked in iron pot)
- Located near Nara Park, perfect for lunch before/after park exploration
- All 5 images showcase kamameshi dishes and restaurant interior
- Carousel includes auto-play functionality and touch/swipe support
- First Nara restaurant added to the system

---

## 2026-01-17: Created Gion Unagi Kawato Restaurant Page

### Description
Created a complete restaurant page for Gion Unagi Kawato (祇园うなぎ 川と), a traditional eel restaurant in Kyoto's Gion district, with carousel images and full integration into the food dashboard and schedule pages.

### Changes Made

#### New Restaurant Page Created
- **Created folder structure**: `restaurants/gion-unagi-kawato/`
- **Created HTML page**: `gion-unagi-kawato.html` with full restaurant details
- **Added 6 image URLs** in carousel format matching other restaurant pages
- **Implemented carousel functionality** with navigation arrows and dot indicators

#### Image URLs Added
1. `https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/285723/0ea5efdb69af2e51243dc205716d2910.jpg?token=28a170c&api=v2`
2. `https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/285722/f2910ac1f39d789b4ea39cd60d1794d7.jpg?token=ec2770b&api=v2`
3. `https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/285722/44ceacce72244d5a917f26680b67e334.jpg?token=d781f1c&api=v2`
4. `https://2.image.cdn.tablecheck.com/unsafe/full-fit-in/1200x630/smart/https%3A%2F%2Fcdn0.tablecheck.com%2Fimages%2F67651c7497c0b3a9968cf134%2Fimages%2Fmd%2F6bc23f0f.jpg%3F1734679669`
5. `https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/285725/1f736dfd9aa84e42817668d73b02837d.jpg?token=f8dc89f&api=v2`
6. `https://www.leafkyoto.net/leaf/wp-content/uploads/2022/07/240610-kyoto-kawatou2-1024x682.jpg`

#### Files Created
- `restaurants/gion-unagi-kawato/gion-unagi-kawato.html` - Complete restaurant page with carousel, details, and bilingual content

#### Files Modified
- `src/data/restaurantsData.js` - Added `gion-unagi-kawato` entry with all 6 images and restaurant details
- `food.html` - Added restaurant card to Kyoto section on food dashboard
- `schedule/day8.html` - Updated link to point to new restaurant page instead of Google Maps
- `schedule.html` - Updated link to point to new restaurant page instead of Google Maps
- `src/pages/Food.jsx` - Added `gion-unagi-kawato` to Kyoto restaurants array

### Restaurant Details
- **Name**: Gion Unagi Kawato (祇园うなぎ 川と)
- **Location**: Gion, Higashiyama Ward, Kyoto
- **Type**: Traditional eel restaurant
- **Hours**: 5:00 PM - 11:00 PM (Dinner)
- **Price**: Varies
- **Nearest Station**: Gion-Shijo Station

### Benefits
- ✅ Complete restaurant page with all details and images
- ✅ Integrated into food dashboard (Kyoto section)
- ✅ Linked from schedule pages (Day 8)
- ✅ Carousel format matches other restaurant pages
- ✅ Bilingual support (English/Chinese)
- ✅ React app integration complete

### Notes
- Restaurant specializes in traditional unagi (eel) dishes
- Located in historic Gion district, famous geisha area
- Perfect for dinner after exploring Gion district
- All 6 images showcase eel dishes and restaurant interior
- Carousel includes auto-play functionality and touch/swipe support

---

## 2026-01-17: Updated Asakusa Monja Yaki & Okonomiyaki Restaurant Page

### Description
Enhanced the Asakusa Monja Yaki & Okonomiyaki restaurant page with additional images and converted the display format to a carousel, matching the style of other restaurant pages.

### Changes Made

#### Restaurant Page Updates
- **Added 6 new image URLs** to showcase Monja Yaki and Okonomiyaki dishes
- **Converted image display** from static gallery to interactive carousel format
- **Added carousel functionality** with navigation arrows and dot indicators
- **Total of 7 images** now available in the carousel (original + 6 new images)

#### Image URLs Added
1. `https://tblg.k-img.com/resize/640x360c/restaurant/images/Rvw/261855/f7d28b7cb3c7b2ff2a55c328d1dd1162.jpg?token=2309b10&api=v2`
2. `https://cdn.macaro-ni.jp/assets/img/shutterstock/shutterstock_303556331.jpg?p=small`
3. `https://img2.mypl.net/image.php?id=2147637425&p=shopn&s=490_740&op=`
4. `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1JKBO_LuC2f3jxRyYH2YqVUl1TXOAU91uw&s`
5. `https://upload.wikimedia.org/wikipedia/commons/5/59/Okonomiyaki_001.jpg`
6. `https://www.whats4eats.com/wp-content/uploads/2023/05/breads-okonomiyaki-wikimedia-ZhengZhou-4x3-1-500x500.jpg`

#### Files Modified
- `restaurants/asakusa-monja.html` - Added carousel with 7 images, navigation arrows, and indicators
- `src/data/restaurantsData.js` - Updated images array to include all 7 carousel images
- `food.html` - Verified restaurant card appears correctly on dashboard

### Benefits
- ✅ Consistent UI/UX - Carousel format matches other restaurant pages (Ichiran, etc.)
- ✅ Better image showcase - Users can browse through multiple images of the food
- ✅ Interactive experience - Navigation arrows and indicators for easy browsing
- ✅ Complete data integration - All images properly linked in data files
- ✅ Dashboard visibility - Restaurant properly displayed on food dashboard

### Notes
- Carousel includes auto-play functionality (pauses on hover)
- Touch/swipe support enabled for mobile devices
- All images have proper alt text for accessibility
- First image in carousel is used as thumbnail on dashboard

---

## 2026-01-17: Replanned March 25-27 Schedules (Days 8-10)

### Description
Completely replanned the schedules for March 25 (Day 8 - Kyoto), March 26 (Day 9 - Uji & Nara), and March 27 (Day 10 - Osaka) with new itineraries, timings, and restaurants.

### Changes Made

#### Day 8 - March 25 (Kyoto) Schedule Update
- **Updated departure time** to 05:00 (earlier start to reach Fushimi Inari at 6am)
- **06:00** - Fushimi Inari Taisha (arrive at 6am) - Beat the crowds early morning
- **09:00** - Kiyomizu-dera Temple (moved from 11:00)
- **11:30** - Ninenzaka & Sannenzaka (lunch here)
- **14:00** - Gion District (moved from 17:00)
- **Removed** Yasaka Shrine and Kamogawa River from itinerary
- **Added** Gion Unagi Kawato (祇园うなぎ 川と) for dinner at 19:00
- **Updated** return time to 21:00

#### Day 9 - March 26 (Uji & Nara) Schedule Update
- **09:30** - Nakamura Tokichi Honten (Uji) - changed from 10:00
- **10:30** - Ujikami Shrine (walk around)
- **11:30** - Leave Uji for Nara (specific departure time)
- **13:00** - Kamameshi Shizuka Kouen-ten (志津香) - new restaurant for traditional kamameshi lunch
- **14:00-15:00** - Nara Park (1 hour allocation)
- **15:00-16:00** - Todaiji Temple (1 hour allocation)
- **16:00-17:00** - Kasuga Taisha Shrine (1 hour allocation)
- **17:30** - Mt Wakakusa (moved from 18:00)
- **19:00** - Yamatoen Honten (大和园本店) - new restaurant for dinner after mountain
- **21:00** - Return to Airbnb

#### Day 10 - March 27 (Osaka) Schedule Update
- **Completely replanned** from "Last Shopping" to "Osaka Exploration" (later updated to "Osaka City Highlights" - see entry above)
- **09:00** - Umeda Sky Building (arrive at 9am) - Floating Garden Observatory
- **11:00** - Osaka Aquarium Kaiyukan (大阪海游馆) - new attraction
- **14:30** - Shinsaibashi (shopping area)
- **17:00** - Dotonbori (walk around and dinner here too)
- **20:00** - Return to Airbnb
- **Removed** luggage collection and private van to KIX (moved to Day 11)
- **Note**: This schedule was further updated on 2026-01-17. Day 10 now includes Katsuoji Temple, Osaka Castle, Kuromon Market, Namba Yasaka Shrine, Harukas Abeno, and Tsutenkaku (see "Updated Schedule for Day 7 and Day 10" entry above)

#### Files Modified
- `schedule/day8.html` - Updated March 25 Kyoto itinerary
- `schedule/day9.html` - Updated March 26 Uji & Nara itinerary
- `schedule/day10.html` - Updated March 27 Osaka itinerary
- `schedule.html` - Updated dashboard summaries and detailed sections for Days 8, 9, and 10

### New Restaurants Added
- **Gion Unagi Kawato (祇园うなぎ 川と)** - Traditional eel restaurant in Gion district (Kyoto)
- **Kamameshi Shizuka Kouen-ten (志津香)** - Traditional kamameshi (rice pot) restaurant in Nara
- **Yamatoen Honten (大和园本店)** - Traditional Japanese restaurant in Nara (after Mt Wakakusa)

### New Attractions Visited
- **Osaka Aquarium Kaiyukan (大阪海游馆)** - One of Japan's largest aquariums with whale sharks

### Benefits
- ✅ More efficient timing - earlier start for Fushimi Inari to avoid crowds
- ✅ Better time allocation - specific 1-hour slots for Nara attractions
- ✅ Logical flow - Gion exploration followed by dinner in Gion
- ✅ Clear restaurant schedule - lunch and dinner locations specified
- ✅ Complete Osaka exploration day - Umeda Sky Building, Aquarium, shopping, and dinner

### Notes
- All travel times and Google Maps links maintained for navigation
- Specific timing allocations (1 hour each) for Nara Park, Todaiji, and Kasuga Taisha
- Day 10 title changed from "Last Shopping" to "Osaka Exploration" to better reflect the itinerary
- All schedules include departure/return times from Airbnb (JR Momodani Station)

---
