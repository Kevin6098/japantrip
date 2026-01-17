#!/usr/bin/env python3
"""
Upload images from picture/ folder to Cloudinary and update HTML files
"""

import os
import json
import re
from pathlib import Path
import cloudinary
import cloudinary.uploader
import cloudinary.api

# Cloudinary Configuration
API_KEY = "231629928327953"
API_SECRET = "TkQRWYMJAhEXYfD_hGxyhENH69Y"

# Try to get cloud name from API
def get_cloud_name():
    """Try to get cloud name from API or use default"""
    # You can also set this manually
    # Common patterns: try API call or use environment variable
    # For now, we'll test with a simple upload to get it
    return None  # Will try to get from test upload

# Configure Cloudinary (will update cloud_name after test)
CLOUD_NAME = None

def upload_image_to_cloudinary(file_path, folder_path=""):
    """Upload image to Cloudinary and return URL"""
    try:
        # Get public_id from file path
        # Format: picture/restaurant-name/image.jpg -> japantrip/restaurants/restaurant-name/image
        relative_path = file_path.replace('picture/', '')
        file_name = os.path.splitext(os.path.basename(file_path))[0]
        restaurant_name = os.path.basename(os.path.dirname(file_path))
        
        # Public ID: japantrip/restaurants/restaurant-name/image-name
        public_id = f"japantrip/restaurants/{restaurant_name}/{file_name}"
        
        # Upload to Cloudinary
        result = cloudinary.uploader.upload(
            file_path,
            public_id=public_id,
            folder="japantrip/restaurants",
            resource_type="image"
        )
        
        # Return optimized URL
        url = result['secure_url']
        return url, public_id
    except Exception as e:
        print(f"  ✗ Error uploading {file_path}: {e}")
        return None, None

def update_html_file(html_path, image_mappings):
    """Update HTML file to use Cloudinary URLs"""
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        updates = 0
        
        # Update each image reference
        for local_path, cloudinary_url in image_mappings.items():
            # Get filename
            filename = os.path.basename(local_path)
            
            # Try to match the filename in src attributes
            pattern = f'src=["\']([^"\']*{re.escape(filename)})["\']'
            
            if re.search(pattern, content, re.IGNORECASE):
                content = re.sub(pattern, f'src="{cloudinary_url}"', content, flags=re.IGNORECASE)
                updates += 1
        
        if content != original_content:
            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✓ Updated {os.path.basename(html_path)}: {updates} images")
            return True
        return False
    except Exception as e:
        print(f"  ✗ Error updating {html_path}: {e}")
        return False

def main():
    """Main function"""
    print("=" * 60)
    print("Cloudinary Image Upload & Link Update")
    print("=" * 60)
    
    # Find all images in picture/ folder
    print("\n1. Finding images in picture/ folder...")
    image_files = []
    for ext in ['*.jpg', '*.jpeg', '*.png', '*.gif']:
        image_files.extend(Path('picture').rglob(ext))
    
    image_files = sorted(image_files)
    print(f"✓ Found {len(image_files)} images")
    
    # Upload images to Cloudinary
    print("\n2. Uploading images to Cloudinary...")
    image_mappings = {}
    uploaded_count = 0
    
    for img_file in image_files:
        img_path = str(img_file)
        print(f"  Uploading: {img_path}")
        
        url, public_id = upload_image_to_cloudinary(img_path)
        if url:
            # Map original path to Cloudinary URL
            # Need to map to restaurant HTML structure
            relative_path = img_path.replace('picture/', 'restaurants/')
            image_mappings[relative_path] = url
            image_mappings[os.path.basename(img_path)] = url  # Also map by filename
            uploaded_count += 1
            print(f"    ✓ {public_id}")
        else:
            print(f"    ✗ Failed")
    
    print(f"\n✓ Uploaded {uploaded_count}/{len(image_files)} images")
    
    # Save mappings
    mapping_file = 'cloudinary_image_mappings.json'
    with open(mapping_file, 'w', encoding='utf-8') as f:
        json.dump(image_mappings, f, indent=2, ensure_ascii=False)
    print(f"✓ Saved mappings to {mapping_file}")
    
    # Update HTML files
    print("\n3. Updating HTML files...")
    html_files = list(Path('restaurants').rglob('*.html'))
    updated_count = 0
    
    for html_file in html_files:
        if update_html_file(str(html_file), image_mappings):
            updated_count += 1
    
    print(f"\n✓ Updated {updated_count} HTML files")
    
    # Also update food.html dashboard
    if os.path.exists('food.html'):
        print("\n4. Updating food.html dashboard...")
        update_html_file('food.html', image_mappings)
    
    print("\n" + "=" * 60)
    print("Upload complete!")
    print("=" * 60)
    print(f"✓ {uploaded_count} images uploaded to Cloudinary")
    print(f"✓ {updated_count + 1} HTML files updated")
    print("\nAll images are now served from Cloudinary CDN!")

if __name__ == '__main__':
    main()
