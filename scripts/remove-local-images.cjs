/**
 * Remove Local Images Script
 * 
 * This script removes all image files from attractions/ and restaurants/ folders
 * after images have been uploaded to Cloudinary and paths have been updated.
 * 
 * IMPORTANT: Only run this AFTER:
 * 1. Images have been successfully uploaded to Cloudinary (upload-to-cloudinary.cjs)
 * 2. Image paths have been updated in code (update-image-paths.cjs)
 * 3. You have tested your app and confirmed all images load from Cloudinary
 * 
 * Run: node scripts/remove-local-images.cjs
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create readline interface for user confirmation
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask for user confirmation
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Function to get all image files recursively
function getAllImages(dir, baseDir = '') {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const relativePath = path.join(baseDir, item.name);

    if (item.isDirectory()) {
      files.push(...getAllImages(fullPath, relativePath));
    } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(item.name)) {
      files.push({
        fullPath,
        relativePath: relativePath.replace(/\\/g, '/'),
      });
    }
  }

  return files;
}

// Function to calculate total size
function getTotalSize(files) {
  let totalSize = 0;
  for (const file of files) {
    try {
      const stats = fs.statSync(file.fullPath);
      totalSize += stats.size;
    } catch (error) {
      // File might not exist, skip it
    }
  }
  return totalSize;
}

// Function to format bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Main function
async function removeLocalImages() {
  console.log('='.repeat(60));
  console.log('Remove Local Images Script');
  console.log('='.repeat(60));
  console.log('\n⚠️  WARNING: This will permanently delete all image files!');
  console.log('\nBefore proceeding, make sure you have:');
  console.log('  1. ✅ Successfully uploaded images to Cloudinary');
  console.log('  2. ✅ Updated image paths in your code');
  console.log('  3. ✅ Tested your app and confirmed images load from Cloudinary');
  console.log('  4. ✅ Made a backup (if desired)');
  console.log('');

  // Get all images
  const attractionsDir = path.join(__dirname, '..', 'attractions');
  const restaurantsDir = path.join(__dirname, '..', 'restaurants');

  const allImages = [];
  
  if (fs.existsSync(attractionsDir)) {
    allImages.push(...getAllImages(attractionsDir, 'attractions'));
  }
  
  if (fs.existsSync(restaurantsDir)) {
    allImages.push(...getAllImages(restaurantsDir, 'restaurants'));
  }

  if (allImages.length === 0) {
    console.log('✓ No image files found in attractions/ or restaurants/ folders.');
    console.log('  They may have already been removed, or the folders don\'t exist.');
    rl.close();
    return;
  }

  const totalSize = getTotalSize(allImages);

  console.log(`Found ${allImages.length} image files (${formatBytes(totalSize)} total)`);
  console.log('');

  // Show sample files
  console.log('Sample files to be deleted:');
  allImages.slice(0, 5).forEach((img, index) => {
    console.log(`  ${index + 1}. ${img.relativePath}`);
  });
  if (allImages.length > 5) {
    console.log(`  ... and ${allImages.length - 5} more files`);
  }
  console.log('');

  // Ask for confirmation
  const confirm1 = await askQuestion('Are you sure you want to delete all these images? (yes/no): ');
  
  if (confirm1.toLowerCase() !== 'yes') {
    console.log('\nOperation cancelled. No files were deleted.');
    rl.close();
    return;
  }

  console.log('');
  const confirm2 = await askQuestion('Type "DELETE" to confirm: ');
  
  if (confirm2 !== 'DELETE') {
    console.log('\nOperation cancelled. No files were deleted.');
    rl.close();
    return;
  }

  console.log('\nDeleting images...\n');

  let deletedCount = 0;
  let errorCount = 0;

  // Delete each image
  for (const image of allImages) {
    try {
      fs.unlinkSync(image.fullPath);
      deletedCount++;
      if (deletedCount % 10 === 0) {
        process.stdout.write(`Deleted ${deletedCount}/${allImages.length} files...\r`);
      }
    } catch (error) {
      errorCount++;
      console.error(`\nError deleting ${image.relativePath}: ${error.message}`);
    }
  }

  console.log('\n');
  console.log('='.repeat(60));
  console.log('Deletion Complete!');
  console.log('='.repeat(60));
  console.log(`✓ Successfully deleted: ${deletedCount} files`);
  if (errorCount > 0) {
    console.log(`⚠ Errors: ${errorCount} files`);
  }
  console.log(`✓ Space freed: ${formatBytes(totalSize)}`);
  console.log('');

  // Try to remove empty directories
  console.log('Cleaning up empty directories...');
  try {
    function removeEmptyDirs(dir) {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      if (items.length === 0) {
        fs.rmdirSync(dir);
        return true;
      }
      
      let allEmpty = true;
      for (const item of items) {
        const itemPath = path.join(dir, item);
        if (fs.statSync(itemPath).isDirectory()) {
          if (removeEmptyDirs(itemPath)) {
            // Check if parent is now empty
            const remainingItems = fs.readdirSync(dir);
            if (remainingItems.length === 0) {
              fs.rmdirSync(dir);
              return true;
            }
          } else {
            allEmpty = false;
          }
        } else {
          allEmpty = false;
        }
      }
      return allEmpty;
    }

    if (fs.existsSync(attractionsDir)) {
      removeEmptyDirs(attractionsDir);
    }
    if (fs.existsSync(restaurantsDir)) {
      removeEmptyDirs(restaurantsDir);
    }
    console.log('✓ Empty directories removed');
  } catch (error) {
    console.log('⚠ Some directories could not be removed (may not be empty)');
  }

  console.log('');
  console.log('Done! Your images are now hosted on Cloudinary.');
  console.log('Remember to add attractions/ and restaurants/ to .gitignore if you haven\'t already.');
  console.log('');

  rl.close();
}

// Run the script
removeLocalImages().catch(error => {
  console.error('Error:', error);
  rl.close();
  process.exit(1);
});
