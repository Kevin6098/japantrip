/**
 * Script to upload all local images to Cloudinary
 * This will upload images from both attractions/ and restaurants/ folders
 */

require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dput41tre',
  api_key: process.env.CLOUDINARY_API_KEY || '231629928327953',
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Check if Cloudinary is configured
if (!cloudinary.config().api_secret) {
  console.error('ERROR: CLOUDINARY_API_SECRET is not set!');
  console.error('Please set it in your .env file:');
  console.error('  CLOUDINARY_API_SECRET=your_api_secret_here');
  process.exit(1);
}

// Directories to scan
const directories = [
  { local: path.join(__dirname, '..', 'attractions'), cloudinary: 'japantrip/attractions' },
  { local: path.join(__dirname, '..', 'restaurants'), cloudinary: 'japantrip/restaurants' },
];

// Image extensions to upload
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

// Function to get all image files in a directory
function getImageFiles(dir) {
  const results = [];
  
  if (!fs.existsSync(dir)) {
    return results;
  }
  
  const folders = fs.readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  for (const folder of folders) {
    const folderPath = path.join(dir, folder);
    const files = fs.readdirSync(folderPath);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        results.push({
          localPath: path.join(folderPath, file),
          folder: folder,
          filename: file,
        });
      }
    }
  }
  
  return results;
}

// Function to upload a single image
async function uploadImage(localPath, cloudinaryFolder, folder, filename) {
  const publicId = `${cloudinaryFolder}/${folder}/${path.parse(filename).name}`;
  
  try {
    // Check if already exists
    try {
      await cloudinary.api.resource(publicId);
      console.log(`  [SKIP] Already exists: ${publicId}`);
      return { status: 'exists', publicId };
    } catch (e) {
      // Resource doesn't exist, upload it
    }
    
    const result = await cloudinary.uploader.upload(localPath, {
      public_id: publicId,
      overwrite: false,
      resource_type: 'image',
    });
    
    console.log(`  [UPLOADED] ${publicId}`);
    return { status: 'uploaded', publicId, url: result.secure_url };
  } catch (error) {
    console.error(`  [ERROR] Failed to upload ${publicId}: ${error.message}`);
    return { status: 'error', publicId, error: error.message };
  }
}

// Main function
async function main() {
  console.log('=== Cloudinary Image Uploader ===\n');
  console.log(`Cloud Name: ${cloudinary.config().cloud_name}`);
  console.log(`API Key: ${cloudinary.config().api_key}`);
  console.log('');
  
  const stats = {
    uploaded: 0,
    exists: 0,
    errors: 0,
  };
  
  for (const dir of directories) {
    console.log(`\n=== Scanning ${dir.local} ===`);
    const images = getImageFiles(dir.local);
    console.log(`Found ${images.length} images\n`);
    
    for (const image of images) {
      const result = await uploadImage(
        image.localPath,
        dir.cloudinary,
        image.folder,
        image.filename
      );
      
      if (result.status === 'uploaded') stats.uploaded++;
      else if (result.status === 'exists') stats.exists++;
      else stats.errors++;
    }
  }
  
  console.log('\n=== Summary ===');
  console.log(`Uploaded: ${stats.uploaded}`);
  console.log(`Already existed: ${stats.exists}`);
  console.log(`Errors: ${stats.errors}`);
}

main().catch(console.error);
