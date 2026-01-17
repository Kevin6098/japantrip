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

# Cloudinary Configuration
API_KEY = "231629928327953"
API_SECRET = "TkQRWYMJAhEXYfD_hGxyhENH69Y"

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
        public_id = f"japantrip/restaurants/{restaurant_name}/{file_name}"
        
        # Upload to Cloudinary
        result = cloudinary.uploader.upload(
            file_path,
            public_id=public_id,
            folder="japantrip/restaurants",
            resource_type="image",
            overwrite=True
        )
        
        # Return optimized URL
        url = result['secure_url']
        return url, public_id
    except Exception as e:
        print(f"  ✗ Error: {str(e)[:100]}")
        return None, None

def update_html_file(html_path, image_mappings):
    """Update HTML file to use Cloudinary URLs"""
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        updates = 0
        updated_files = []
        
        for local_path, cloudinary_url in image_mappings.items():
            filename = os.path.basename(local_path)
            
            # Match filename in src attributes
            patterns = [
                f'src=["\']([^"\']*{re.escape(filename)})["\']',
            ]
            
            for pattern in patterns:
                if re.search(pattern, content, re.IGNORECASE):
                    # Replace all occurrences
                    content = re.sub(pattern, f'src="{cloudinary_url}"', content, flags=re.IGNORECASE)
                    if filename not in updated_files:
                        updated_files.append(filename)
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
    print("=" * 60)
    print("Cloudinary Image Upload")
    print("=" * 60)
    
    # Find all images
    print("\n1. Finding images...")
    image_files = []
    for ext in ['*.jpg', '*.jpeg', '*.png', '*.gif']:
        image_files.extend(Path('picture').rglob(ext))
    
    image_files = sorted([str(f) for f in image_files])
    print(f"✓ Found {len(image_files)} images")
    
    if not image_files:
        print("✗ No images found")
        return
    
    # Try to determine cloud name from first upload
    print("\n2. Determining Cloud Name...")
    
    # Try a test upload to extract cloud name from response
    test_file = image_files[0]
    CLOUD_NAME = None
    
    # Try common cloud names first
    test_names = ["dlwjp1zrx"]
    
    for test_name in test_names:
        print(f"  Testing: {test_name}...", end=" ")
        try:
            cloudinary.config(
                cloud_name=test_name,
                api_key=API_KEY,
                api_secret=API_SECRET,
                secure=True
            )
            # Try ping
            cloudinary.api.ping()
            CLOUD_NAME = test_name
            print("✓")
            break
        except Exception as e:
            # Try actual upload - might reveal cloud name
            try:
                result = cloudinary.uploader.upload(
                    test_file,
                    api_key=API_KEY,
                    api_secret=API_SECRET
                )
                # Extract from URL
                url = result.get('url', '')
                if 'res.cloudinary.com' in url:
                    parts = url.split('res.cloudinary.com/')
                    if len(parts) > 1:
                        CLOUD_NAME = parts[1].split('/')[0]
                        print(f"✓ (from upload)")
                        break
            except Exception as e2:
                # Check error for cloud name hint
                error_str = str(e2).lower()
                if "cloud_name" in error_str or "401" in error_str:
                    print("✗")
                    continue
                # Try extracting from error or response
                pass
    
    if not CLOUD_NAME:
        # Last attempt: try upload without cloud name config to see error
        print("\n⚠️  Need Cloud Name")
        print("Find it at: https://cloudinary.com/console")
        print("It's shown in your dashboard URL or account settings")
        print("\nTrying with direct upload test...")
        
        # Try one upload to see if we can get cloud name from response
        try:
            # Upload with minimal config
            result = cloudinary.uploader.upload(
                test_file,
                api_key=API_KEY,
                api_secret=API_SECRET,
                use_filename=True,
                unique_filename=False
            )
            url = result.get('url', '')
            if 'res.cloudinary.com' in url:
                CLOUD_NAME = url.split('res.cloudinary.com/')[1].split('/')[0]
                print(f"✓ Found from upload: {CLOUD_NAME}")
        except Exception as e:
            print(f"✗ Could not determine: {str(e)[:150]}")
            print("\nPlease manually set CLOUD_NAME in the script")
            return
    
    # Configure with found cloud name
    cloudinary.config(
        cloud_name=CLOUD_NAME,
        api_key=API_KEY,
        api_secret=API_SECRET,
        secure=True
    )
    
    print(f"\n3. Uploading {len(image_files)} images (cloud: {CLOUD_NAME})...")
    image_mappings = {}
    uploaded_count = 0
    
    for img_path in image_files:
        filename = os.path.basename(img_path)
        print(f"  [{uploaded_count + 1}/{len(image_files)}] {filename}...", end=" ")
        
        url, public_id = upload_image_to_cloudinary(img_path, CLOUD_NAME)
        if url:
            relative_path = img_path.replace('picture/', 'restaurants/')
            image_mappings[relative_path] = url
            image_mappings[filename] = url
            uploaded_count += 1
            print("✓")
        else:
            print("✗")
    
    print(f"\n✓ Uploaded {uploaded_count}/{len(image_files)} images")
    
    if uploaded_count == 0:
        print("\n✗ No images uploaded. Check credentials and cloud name.")
        return
    
    # Save mappings
    with open('cloudinary_image_mappings.json', 'w') as f:
        json.dump(image_mappings, f, indent=2)
    print(f"✓ Saved mappings")
    
    # Update HTML files
    print("\n4. Updating HTML files...")
    html_files = list(Path('restaurants').rglob('*.html')) + [Path('food.html')]
    updated_count = 0
    
    for html_file in html_files:
        if html_file.exists():
            if update_html_file(str(html_file), image_mappings):
                updated_count += 1
    
    print(f"\n✓ Updated {updated_count} HTML files")
    print("\n" + "=" * 60)
    print("Complete!")
    print("=" * 60)

if __name__ == '__main__':
    main()
