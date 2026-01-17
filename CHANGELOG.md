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

## 2026-01-17: Uploaded Restaurant Images to Cloudinary

### Description
Uploaded all restaurant images from the `picture/` folder to Cloudinary CDN and updated all HTML files to use Cloudinary URLs instead of local paths.

### Changes Made

#### Image Upload
- **37 images** uploaded from `picture/` folder to Cloudinary
  - Afuri Yurakucho: 6 images
  - Gashoken: 7 images
  - Ginza Kanimitsu: 5 images
  - Ichiran Ramen: 3 images
  - Kobe Steak Nick: 5 images
  - Nakamura Tokichi Ginza: 3 images
  - Pain Maison: 4 images
  - Tsukada Shabu: 4 images

#### HTML Files Updated
- Updated 8 restaurant HTML pages in `restaurants/` folder
  - `pain-maison/pain-maison.html`
  - `tsukada-shabu/tsukada-shabu.html`
  - `afuri-yurakucho/afuri-yurakucho.html`
  - `kobe-steak-nick/kobe-steak-nick.html`
  - `gashoken/gashoken.html`
  - `ginza-kanimitsu/ginza-kanimitsu.html`
  - `nakamura-tokichi-ginza/nakamura-tokichi-ginza.html`
  - `ichiran-ramen/ichiran-ramen.html`
- Updated `food.html` dashboard with Cloudinary URLs

#### Files Created
- `upload_cloudinary.py` - Script to upload images and update HTML files
- `cloudinary_image_mappings.json` - Mapping of local paths to Cloudinary URLs
- `fix_cloudinary_urls.py` - Script to fix duplicate path issues in URLs

#### Configuration
- Cloudinary Cloud Name: `dput41tre`
- API Key: `231629928327953`
- Images stored at: `japantrip/restaurants/[restaurant-name]/[image-name]`

### Benefits
- ✅ Images now served from Cloudinary CDN (faster loading)
- ✅ Reduced repository size (no local images needed)
- ✅ Automatic image optimization by Cloudinary
- ✅ All HTML files automatically updated with new URLs

### Notes
- All images are accessible via Cloudinary CDN URLs
- Original images remain in `picture/` folder as backup
- Virtual environment `venv_cloudinary` created for Cloudinary Python SDK

---
