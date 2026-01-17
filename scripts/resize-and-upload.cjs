/**
 * Script to resize an image and upload to Cloudinary
 * This will resize the image to reduce file size while maintaining quality
 */

require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dput41tre',
  api_key: process.env.CLOUDINARY_API_KEY || '231629928327953',
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Image to resize and upload
const imagePath = path.join(__dirname, '..', 'attractions', 'shibuya', 'aerial-view.jpg');
const tempPath = path.join(__dirname, '..', 'attractions', 'shibuya', 'aerial-view-resized.jpg');

async function resizeAndUpload() {
  try {
    console.log('=== Resizing and Uploading Shibuya Aerial View ===\n');
    console.log(`Original file: ${imagePath}`);
    
    // Check if file exists
    if (!fs.existsSync(imagePath)) {
      console.error(`ERROR: File not found: ${imagePath}`);
      process.exit(1);
    }
    
    // Get original file stats
    const originalStats = fs.statSync(imagePath);
    console.log(`Original size: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);
    
    // Resize image to reduce file size
    // We'll resize to max 2000px width and compress to reduce file size
    console.log('\nResizing image...');
    await sharp(imagePath)
      .resize(2000, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: 85,
        mozjpeg: true
      })
      .toFile(tempPath);
    
    // Check resized file size
    const resizedStats = fs.statSync(tempPath);
    console.log(`Resized size: ${(resizedStats.size / 1024 / 1024).toFixed(2)} MB`);
    
    if (resizedStats.size > 10 * 1024 * 1024) {
      console.log('\nStill too large, trying more aggressive compression...');
      // Try more aggressive compression
      await sharp(imagePath)
        .resize(1800, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ 
          quality: 80,
          mozjpeg: true
        })
        .toFile(tempPath);
      
      const resizedStats2 = fs.statSync(tempPath);
      console.log(`Resized size (aggressive): ${(resizedStats2.size / 1024 / 1024).toFixed(2)} MB`);
    }
    
    // Upload to Cloudinary
    console.log('\nUploading to Cloudinary...');
    const publicId = 'japantrip/attractions/shibuya/aerial-view';
    
    const result = await cloudinary.uploader.upload(tempPath, {
      public_id: publicId,
      overwrite: true,
      resource_type: 'image',
    });
    
    console.log(`\n✅ Successfully uploaded to Cloudinary!`);
    console.log(`Public ID: ${publicId}`);
    console.log(`URL: ${result.secure_url}`);
    console.log(`\nFinal file size on Cloudinary: ${(result.bytes / 1024 / 1024).toFixed(2)} MB`);
    
    // Clean up temp file
    fs.unlinkSync(tempPath);
    console.log('\n✅ Temporary file cleaned up');
    
    console.log('\n=== Upload Complete ===');
    console.log(`Use this URL in attractionsData.js:`);
    console.log(`${result.secure_url}`);
    
  } catch (error) {
    console.error(`\n❌ ERROR: ${error.message}`);
    // Clean up temp file if it exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    process.exit(1);
  }
}

resizeAndUpload();
