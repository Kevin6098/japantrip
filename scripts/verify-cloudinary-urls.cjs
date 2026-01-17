/**
 * Verify Cloudinary URLs Script
 * 
 * This script checks if all images in the data files are using Cloudinary URLs
 * and tests if the URLs are accessible.
 * 
 * Run: node scripts/verify-cloudinary-urls.cjs
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Files to check
const filesToCheck = [
  path.join(__dirname, '..', 'src', 'data', 'attractionsData.js'),
  path.join(__dirname, '..', 'src', 'data', 'restaurantsData.js'),
];

// Function to test if URL is accessible
function testUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https:') ? https : http;
    const request = client.get(url, { timeout: 5000 }, (response) => {
      resolve({
        url,
        status: response.statusCode,
        accessible: response.statusCode === 200,
      });
      response.destroy();
    });
    
    request.on('error', (error) => {
      resolve({
        url,
        status: 0,
        accessible: false,
        error: error.message,
      });
    });
    
    request.on('timeout', () => {
      request.destroy();
      resolve({
        url,
        status: 0,
        accessible: false,
        error: 'Timeout',
      });
    });
  });
}

// Extract all image URLs from a file
function extractImageUrls(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const cloudinaryUrls = content.match(/https:\/\/res\.cloudinary\.com[^\s'"]+/g) || [];
  const localPaths = content.match(/['"]\/attractions\/[^'"]+['"]/g) || [];
  const localRestaurantPaths = content.match(/['"]\/restaurants\/[^'"]+['"]/g) || [];
  
  return {
    cloudinaryUrls: [...new Set(cloudinaryUrls)],
    localPaths: [...new Set(localPaths)],
    localRestaurantPaths: [...new Set(localRestaurantPaths)],
  };
}

// Main function
async function verifyUrls() {
  console.log('='.repeat(60));
  console.log('Cloudinary URL Verification');
  console.log('='.repeat(60));
  console.log('');

  let totalCloudinaryUrls = 0;
  let totalLocalPaths = 0;
  let accessibleUrls = 0;
  let inaccessibleUrls = 0;

  for (const filePath of filesToCheck) {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠ File not found: ${filePath}\n`);
      continue;
    }

    const fileName = path.basename(filePath);
    console.log(`Checking: ${fileName}`);
    console.log('-'.repeat(60));

    const { cloudinaryUrls, localPaths, localRestaurantPaths } = extractImageUrls(filePath);

    totalCloudinaryUrls += cloudinaryUrls.length;
    totalLocalPaths += localPaths.length + localRestaurantPaths.length;

    // Report local paths (should be 0)
    if (localPaths.length > 0 || localRestaurantPaths.length > 0) {
      console.log(`⚠ Found ${localPaths.length + localRestaurantPaths.length} local paths (should be 0):`);
      [...localPaths, ...localRestaurantPaths].slice(0, 5).forEach(path => {
        console.log(`  ${path}`);
      });
      if (localPaths.length + localRestaurantPaths.length > 5) {
        console.log(`  ... and ${localPaths.length + localRestaurantPaths.length - 5} more`);
      }
      console.log('');
    }

    // Report Cloudinary URLs
    console.log(`✓ Found ${cloudinaryUrls.length} Cloudinary URLs`);
    
    // Test first 3 URLs
    if (cloudinaryUrls.length > 0) {
      console.log('\nTesting sample URLs...');
      const testUrls = cloudinaryUrls.slice(0, 3);
      
      for (const url of testUrls) {
        const result = await testUrl(url);
        if (result.accessible) {
          accessibleUrls++;
          console.log(`  ✅ ${result.url.substring(0, 60)}... (Status: ${result.status})`);
        } else {
          inaccessibleUrls++;
          console.log(`  ❌ ${result.url.substring(0, 60)}... (${result.error || `Status: ${result.status}`})`);
        }
      }
    }

    console.log('');
  }

  // Summary
  console.log('='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));
  console.log(`Cloudinary URLs: ${totalCloudinaryUrls}`);
  console.log(`Local paths (should be 0): ${totalLocalPaths}`);
  console.log(`Tested URLs - Accessible: ${accessibleUrls}, Inaccessible: ${inaccessibleUrls}`);
  console.log('');

  if (totalLocalPaths > 0) {
    console.log('⚠ WARNING: Found local image paths in your data files!');
    console.log('  You need to run: node scripts/update-image-paths.cjs');
    console.log('');
  }

  if (inaccessibleUrls > 0) {
    console.log('⚠ WARNING: Some Cloudinary URLs are not accessible!');
    console.log('  Check your Cloudinary account and verify images are uploaded.');
    console.log('');
  }

  if (totalLocalPaths === 0 && inaccessibleUrls === 0 && totalCloudinaryUrls > 0) {
    console.log('✅ All images are using Cloudinary URLs and are accessible!');
    console.log('');
  }
}

// Run verification
verifyUrls().catch(console.error);
