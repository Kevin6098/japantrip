/**
 * Fix Cloudinary URLs Script
 * 
 * This script fixes duplicate "japantrip/japantrip" paths in Cloudinary URLs
 * by replacing them with single "japantrip" path.
 * 
 * Run: node scripts/fix-cloudinary-urls.cjs
 */

const fs = require('fs');
const path = require('path');

// Files to update
const filesToUpdate = [
  path.join(__dirname, '..', 'src', 'data', 'attractionsData.js'),
  path.join(__dirname, '..', 'src', 'data', 'restaurantsData.js'),
];

// Function to fix URLs in a file
function fixUrls(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath} (not found)`);
    return 0;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fixedCount = 0;
  
  // Count occurrences before fixing
  const beforeCount = (content.match(/japantrip\/japantrip/g) || []).length;
  
  // Replace duplicate japantrip/japantrip with single japantrip
  if (content.includes('japantrip/japantrip')) {
    content = content.replace(/japantrip\/japantrip\//g, 'japantrip/');
    fixedCount = beforeCount;
  }
  
  // Also fix any URL that might have the wrong version path structure
  // Cloudinary URLs should be: .../upload/v1/japantrip/... not .../upload/v1/japantrip/japantrip/...
  content = content.replace(
    /(https:\/\/res\.cloudinary\.com\/[^\/]+\/image\/upload\/v\d+\/japantrip)\/japantrip\//g,
    '$1/'
  );
  
  if (fixedCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${fixedCount} URLs in: ${filePath}`);
    return fixedCount;
  } else {
    console.log(`No issues found in: ${filePath}`);
    return 0;
  }
}

// Update all files
console.log('Fixing duplicate japantrip paths in Cloudinary URLs...\n');
let totalFixed = 0;
filesToUpdate.forEach(file => {
  totalFixed += fixUrls(file);
});

console.log(`\n${'='.repeat(60)}`);
console.log(`Total URLs fixed: ${totalFixed}`);
console.log(`${'='.repeat(60)}`);

if (totalFixed > 0) {
  console.log('\n✓ All URLs have been fixed!');
  console.log('  Make sure to test your application to verify images load correctly.');
} else {
  console.log('\n✓ No URLs needed fixing.');
}

console.log('');
