/**
 * Update Image Paths Script
 * 
 * This script reads cloudinary-mapping.json and updates all image paths
 * in the React data files to use Cloudinary URLs.
 * 
 * Run after uploading images: node scripts/update-image-paths.cjs
 */

const fs = require('fs');
const path = require('path');

// Read the Cloudinary mapping
const mappingPath = path.join(__dirname, '..', 'cloudinary-mapping.json');
if (!fs.existsSync(mappingPath)) {
  console.error('Error: cloudinary-mapping.json not found. Please run upload-to-cloudinary.cjs first.');
  process.exit(1);
}

const imageMapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

// Files to update
const filesToUpdate = [
  path.join(__dirname, '..', 'src', 'data', 'attractionsData.js'),
  path.join(__dirname, '..', 'src', 'data', 'restaurantsData.js'),
];

// Function to replace image paths in a file
function updateImagePaths(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath} (not found)`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Replace all image paths with Cloudinary URLs
  for (const [oldPath, cloudinaryUrl] of Object.entries(imageMapping)) {
    // Escape special regex characters in oldPath
    const escapedPath = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedPath, 'g');
    
    if (content.includes(oldPath)) {
      content = content.replace(regex, cloudinaryUrl);
      updated = true;
      console.log(`  Updated: ${oldPath} -> ${cloudinaryUrl}`);
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${filePath}\n`);
  } else {
    console.log(`No changes needed: ${filePath}\n`);
  }
}

// Update all files
console.log('Updating image paths in data files...\n');
filesToUpdate.forEach(updateImagePaths);
console.log('Done!');
