/**
 * Script to extract Cloudinary URLs from HTML files and update data files
 * This reads the HTML files which have the correct Cloudinary URLs
 * and generates matching data for attractionsData.js and restaurantsData.js
 */

const fs = require('fs');
const path = require('path');

// Cloudinary base URL
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dput41tre/image/upload';

// Directories
const attractionsDir = path.join(__dirname, '..', 'attractions');
const restaurantsDir = path.join(__dirname, '..', 'restaurants');

// Function to extract Cloudinary URLs from HTML content
function extractCloudinaryUrls(htmlContent) {
  const urlPattern = /https:\/\/res\.cloudinary\.com\/dput41tre\/image\/upload\/v\d+\/japantrip\/[^"'\s]+\.(jpg|jpeg|png|gif|webp)/gi;
  const matches = htmlContent.match(urlPattern) || [];
  // Remove duplicates
  return [...new Set(matches)];
}

// Function to scan a folder and extract image URLs from HTML files
function scanFolder(baseDir, type) {
  const results = {};
  
  if (!fs.existsSync(baseDir)) {
    console.log(`Directory ${baseDir} does not exist`);
    return results;
  }
  
  const folders = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  for (const folder of folders) {
    const folderPath = path.join(baseDir, folder);
    const htmlFile = path.join(folderPath, `${folder}.html`);
    
    if (fs.existsSync(htmlFile)) {
      const htmlContent = fs.readFileSync(htmlFile, 'utf8');
      const urls = extractCloudinaryUrls(htmlContent);
      
      if (urls.length > 0) {
        results[folder] = urls;
        console.log(`Found ${urls.length} Cloudinary URLs for ${type}/${folder}`);
      } else {
        // Check for local image files
        const files = fs.readdirSync(folderPath);
        const imageFiles = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
        if (imageFiles.length > 0) {
          console.log(`[NO CLOUDINARY] ${type}/${folder} has ${imageFiles.length} local images but no Cloudinary URLs in HTML`);
          // Generate expected Cloudinary URLs (these may or may not exist on Cloudinary)
          results[folder] = imageFiles.map(img => 
            `${CLOUDINARY_BASE}/japantrip/${type}/${folder}/${img}`
          );
        }
      }
    }
  }
  
  return results;
}

// Main function
async function main() {
  console.log('Scanning for Cloudinary URLs...\n');
  
  console.log('=== ATTRACTIONS ===');
  const attractionUrls = scanFolder(attractionsDir, 'attractions');
  
  console.log('\n=== RESTAURANTS ===');
  const restaurantUrls = scanFolder(restaurantsDir, 'restaurants');
  
  // Output the results as JSON for easy copying
  const output = {
    attractions: attractionUrls,
    restaurants: restaurantUrls
  };
  
  const outputPath = path.join(__dirname, '..', 'cloudinary-image-urls.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`\nSaved URL mapping to ${outputPath}`);
  
  // Print summary
  console.log('\n=== SUMMARY ===');
  console.log(`Attractions with images: ${Object.keys(attractionUrls).length}`);
  console.log(`Restaurants with images: ${Object.keys(restaurantUrls).length}`);
}

main().catch(console.error);
