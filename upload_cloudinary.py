#!/usr/bin/env python3
"""
Upload images from picture/ folder to Cloudinary and update HTML files
Usage: python3 upload_cloudinary.py [cloud_name]
"""

import os
import json
import re
import sys
from pathlib import Path
import cloudinary
import cloudinary.uploader
import cloudinary.api

# Cloudinary Configuration
API_KEY = "231629928327953"
API_SECRET = "TkQRWYMJAhEXYfD_hGxyhENH69Y"

# CLOUD_NAME - Get this from your Cloudinary Dashboard
# It's visible in the dashboard URL: https://cloudinary.com/console/c/[CLOUD_NAME]
# Or check your Cloudinary account settings
# If not set here, the script will try to auto-detect or use environment variable
CLOUD_NAME = None  # Set this to your cloud name, e.g., "your-cloud-name"

def upload_image_to_cloudinary(file_path, cloud_name):
    """Upload image to Cloudinary and return URL"""
    try:
        cloudinary.config(
            cloud_name=cloud_name,
            api_key=API_KEY,
            api_secret=API_SECRET,
            secure=True
        )
        
        # Get public_id from file path
        file_name = os.path.splitext(os.path.basename(file_path))[0]
        restaurant_name = os.path.basename(os.path.dirname(file_path))
        
        # Public ID: japantrip/restaurants/restaurant-name/image-name
        # Don't use folder parameter when public_id already includes the path
        public_id = f"japantrip/restaurants/{restaurant_name}/{file_name}"
        
        # Upload to Cloudinary
        result = cloudinary.uploader.upload(
            file_path,
            public_id=public_id,
            resource_type="image",
            overwrite=True
        )
        
        # Return optimized URL
        url = result['secure_url']
        return url, public_id, None
    except cloudinary.exceptions.Error as e:
        error_msg = str(e)
        # Try to extract cloud name from error or try different approaches
        return None, None, error_msg
    except Exception as e:
        return None, None, str(e)

def get_cloud_name_from_account():
    """Try to get cloud name from account info"""
    # Try different cloud names or extract from first upload
    # We'll try a test upload and extract from URL
    return None

def update_html_file(html_path, image_mappings):
    """Update HTML file to use Cloudinary URLs"""
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        updates = 0
        
        for local_path, cloudinary_url in image_mappings.items():
            filename = os.path.basename(local_path)
            
            # Pattern for src="filename"
            pattern = f'src=["\']([^"\']*{re.escape(filename)})["\']'
            
            if re.search(pattern, content, re.IGNORECASE):
                content = re.sub(pattern, f'src="{cloudinary_url}"', content, flags=re.IGNORECASE)
                updates += 1
        
        if content != original_content:
            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✓ {os.path.basename(html_path)}: {updates} images")
            return True
        return False
    except Exception as e:
        print(f"  ✗ Error: {html_path}: {e}")
        return False

def main():
    """Main function"""
    # Check command line arguments for cloud name
    global CLOUD_NAME
    if len(sys.argv) > 1:
        CLOUD_NAME = sys.argv[1]
        print(f"Using cloud name from command line: {CLOUD_NAME}")
    
    print("=" * 60)
    print("Cloudinary Image Upload & Link Update")
    print("=" * 60)
    
    # Find all images
    print("\n1. Finding images in picture/ folder...")
    image_files = []
    for ext in ['*.jpg', '*.jpeg', '*.png', '*.gif']:
        image_files.extend(Path('picture').rglob(ext))
    
    image_files = sorted([str(f) for f in image_files])
    print(f"✓ Found {len(image_files)} images")
    
    if not image_files:
        print("✗ No images found")
        return
    
    # Get cloud name
    print("\n2. Setting up Cloudinary...")
    
    # Check if cloud name is set in script
    if CLOUD_NAME:
        print(f"  Using cloud name from script: {CLOUD_NAME}")
    else:
        # Try environment variable
        CLOUD_NAME = os.environ.get('CLOUDINARY_CLOUD_NAME')
        if CLOUD_NAME:
            print(f"  Using cloud name from environment: {CLOUD_NAME}")
        else:
            # Try auto-detection with test upload
            print("  Attempting to detect cloud name...")
            test_file = image_files[0]
            test_cloud_names = ["dlwjp1zrx"]
            
            for test_name in test_cloud_names:
                try:
                    cloudinary.config(
                        cloud_name=test_name,
                        api_key=API_KEY,
                        api_secret=API_SECRET,
                        secure=True
                    )
                    result = cloudinary.uploader.upload(
                        test_file,
                        folder="japantrip/test",
                        overwrite=True
                    )
                    url = result.get('url', '') or result.get('secure_url', '')
                    if 'res.cloudinary.com' in url:
                        CLOUD_NAME = url.split('res.cloudinary.com/')[1].split('/')[0]
                        print(f"  ✓ Detected: {CLOUD_NAME}")
                        # Clean up test
                        try:
                            cloudinary.uploader.destroy(result['public_id'])
                        except:
                            pass
                        break
                except:
                    continue
    
    if not CLOUD_NAME:
        print("\n✗ Cloud Name is required")
        print("\nPlease provide your Cloudinary Cloud Name:")
        print("  1. Find it in Dashboard: https://cloudinary.com/console")
        print("  2. Or in your dashboard URL: .../console/c/[CLOUD_NAME]/...")
        print("\nThen either:")
        print("  - Edit this script and set: CLOUD_NAME = 'your-cloud-name'")
        print("  - Or run: export CLOUDINARY_CLOUD_NAME='your-cloud-name'")
        print("  - Or provide it when prompted")
        return
    
    # Configure with found cloud name
    cloudinary.config(
        cloud_name=CLOUD_NAME,
        api_key=API_KEY,
        api_secret=API_SECRET,
        secure=True
    )
    
    # Upload all images
    print(f"\n3. Uploading {len(image_files)} images to Cloudinary...")
    print(f"   Cloud Name: {CLOUD_NAME}")
    print()
    
    image_mappings = {}
    uploaded_count = 0
    failed_count = 0
    
    for idx, img_path in enumerate(image_files, 1):
        filename = os.path.basename(img_path)
        print(f"  [{idx}/{len(image_files)}] {filename}...", end=" ")
        
        url, public_id, error = upload_image_to_cloudinary(img_path, CLOUD_NAME)
        if url:
            relative_path = img_path.replace('picture/', 'restaurants/')
            image_mappings[relative_path] = url
            image_mappings[filename] = url
            uploaded_count += 1
            print("✓")
        else:
            failed_count += 1
            if error:
                print(f"✗ ({error[:50]})")
            else:
                print("✗")
    
    print(f"\n✓ Uploaded {uploaded_count}/{len(image_files)} images")
    if failed_count > 0:
        print(f"✗ Failed: {failed_count} images")
    
    if uploaded_count == 0:
        print("\n✗ No images uploaded. Please check:")
        print(f"  - Cloud Name: {CLOUD_NAME}")
        print(f"  - API Key: {API_KEY}")
        print("  - API Secret: (configured)")
        return
    
    # Save mappings
    mapping_file = 'cloudinary_image_mappings.json'
    with open(mapping_file, 'w', encoding='utf-8') as f:
        json.dump(image_mappings, f, indent=2, ensure_ascii=False)
    print(f"✓ Saved mappings to {mapping_file}")
    
    # Update HTML files
    print("\n4. Updating HTML files...")
    html_files = list(Path('restaurants').rglob('*.html'))
    if os.path.exists('food.html'):
        html_files.append(Path('food.html'))
    
    updated_count = 0
    for html_file in html_files:
        if html_file.exists():
            if update_html_file(str(html_file), image_mappings):
                updated_count += 1
    
    print(f"\n✓ Updated {updated_count} HTML files")
    
    print("\n" + "=" * 60)
    print("Upload complete!")
    print("=" * 60)
    print(f"✓ {uploaded_count} images uploaded to Cloudinary")
    print(f"✓ {updated_count} HTML files updated")
    print(f"\nCloud Name: {CLOUD_NAME}")
    print("All images are now served from Cloudinary CDN!")

if __name__ == '__main__':
    main()
