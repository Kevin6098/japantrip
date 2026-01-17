/**
 * Cloudinary Image Upload Script
 * 
 * This script uploads all images from attractions/ and restaurants/ folders to Cloudinary
 * and generates a mapping file with the Cloudinary URLs.
 * 
 * Setup:
 * 1. Install: npm install cloudinary
 * 2. Set environment variables:
 *    - CLOUDINARY_CLOUD_NAME
 *    - CLOUDINARY_API_KEY
 *    - CLOUDINARY_API_SECRET
 * 3. Run: node scripts/upload-to-cloudinary.js
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Image mapping to store old paths -> Cloudinary URLs
const imageMapping = {};

// Function to upload a single image
async function uploadImage(filePath, publicId) {
  try {
    console.log(`Uploading: ${filePath}...`);
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      folder: 'japantrip',
      overwrite: false,
      resource_type: 'auto',
    });
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error.message);
    return null;
  }
}

// Function to get all image files recursively
function getAllImages(dir, baseDir = '') {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const relativePath = path.join(baseDir, item.name);

    if (item.isDirectory()) {
      files.push(...getAllImages(fullPath, relativePath));
    } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(item.name)) {
      files.push({
        fullPath,
        relativePath: relativePath.replace(/\\/g, '/'), // Normalize path separators
      });
    }
  }

  return files;
}

// Main upload function
async function uploadAllImages() {
  console.log('Starting Cloudinary upload...\n');

  // Get all images from attractions and restaurants folders
  const attractionsDir = path.join(__dirname, '..', 'attractions');
  const restaurantsDir = path.join(__dirname, '..', 'restaurants');

  const allImages = [];

  if (fs.existsSync(attractionsDir)) {
    allImages.push(...getAllImages(attractionsDir, 'attractions'));
  }

  if (fs.existsSync(restaurantsDir)) {
    allImages.push(...getAllImages(restaurantsDir, 'restaurants'));
  }

  console.log(`Found ${allImages.length} images to upload\n`);

  // Upload each image
  for (const image of allImages) {
    // Create public_id: japantrip/attractions/sensoji/kaminarimon-gate
    const publicId = `japantrip/${image.relativePath.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '')}`;
    
    // Old path format: /attractions/sensoji/kaminarimon-gate.jpg
    const oldPath = `/${image.relativePath}`;
    
    const cloudinaryUrl = await uploadImage(image.fullPath, publicId);
    
    if (cloudinaryUrl) {
      imageMapping[oldPath] = cloudinaryUrl;
      console.log(`✓ ${oldPath} -> ${cloudinaryUrl}\n`);
    }
  }

  // Save mapping to file
  const mappingPath = path.join(__dirname, '..', 'cloudinary-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(imageMapping, null, 2));
  console.log(`\n✓ Mapping saved to: ${mappingPath}`);
  console.log(`\nTotal images uploaded: ${Object.keys(imageMapping).length}`);
}

// Run the upload
uploadAllImages().catch(console.error);
