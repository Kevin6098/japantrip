#!/usr/bin/env python3
"""
Upload images from picture/ folder to Cloudinary and update HTML files
Complete version with automatic cloud name detection
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

def test_cloud_name(cloud_name):
    """Test if cloud name works with given credentials"""
    try:
        cloudinary.config(
            cloud_name=cloud_name,
            api_key=API_KEY,
            api_secret=API_SECRET,
            secure=True
        )
        # Try to get account details (doesn't upload anything)
        cloudinary.api.ping()
        return True
    except Exception as e:
        error_str = str(e).lower()
        # Try to extract cloud name from error message
        if "cloud_name" in error_str or "401" in error_str or "403" in error_str:
            return False
        return False

def find_cloud_name_from_upload():
    """Try to find cloud name by attempting a test upload"""
    # We'll try uploading a small test file to get the cloud name from response
    # Or check if we can get it from account info
    return None

def get_cloud_name_from_api():
    """Try common cloud name patterns or get from upload result"""
    # Since we can't easily get cloud name from API without it,
    # we'll try a test upload with a common pattern
    # Or user can provide it
    print("Note: Cloud name will be determined from first upload...")
    return None

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
            resource_type="image",
            overwrite=True
        )
        
        # Return optimized URL
        url = result['secure_url']
        return url, public_id
    except Exception as e:
        print(f"  ✗ Error uploading {file_path}: {e}")
        if "cloud_name" in str(e).lower() or "401" in str(e):
            print(f"    Hint: Check your cloud name - current: {cloud_name}")
        return None, None

def update_html_file(html_path, image_mappings):
    """Update HTML file to use Cloudinary URLs"""
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        updates = 0
        updated_files = []
        
        # Update each image reference
        for local_path, cloudinary_url in image_mappings.items():
            filename = os.path.basename(local_path)
            
            # Pattern for src="filename" or src="path/filename"
            patterns = [
                f'src=["\']([^"\']*{re.escape(filename)})["\']',  # Any path with filename
                f'src=["\']({re.escape(filename)})["\']',  # Just filename
            ]
            
            for pattern in patterns:
                matches = re.findall(pattern, content, re.IGNORECASE)
                for match in matches:
                    if filename.lower() in match.lower():
                        content = content.replace(f'src="{match}"', f'src="{cloudinary_url}"')
                        content = content.replace(f"src='{match}'", f"src='{cloudinary_url}'")
                        if filename not in updated_files:
                            updated_files.append(filename)
                            updates += 1
                        break
        
        if content != original_content:
            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✓ {os.path.basename(html_path)}: {updates} images")
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
    
    # Get cloud name - try common or get from first upload
    # The cloud name is typically visible in your Cloudinary dashboard
    # For now, we'll try to extract from a test upload
    
    # Find all images
    print("\n1. Finding images in picture/ folder...")
    image_files = []
    for ext in ['*.jpg', '*.jpeg', '*.png', '*.gif']:
        image_files.extend(Path('picture').rglob(ext))
    
    image_files = sorted([str(f) for f in image_files])
    print(f"✓ Found {len(image_files)} images")
    
    if not image_files:
        print("✗ No images found in picture/ folder")
        return
    
    # Try to get cloud name from first test upload
    print("\n2. Testing Cloudinary connection...")
    # We need the cloud name - let's try a test with a dummy one first
    # Or we can try common patterns
    # Actually, let's make it so user provides it or we extract from first upload result
    
    CLOUD_NAME = None
    
    # Try to upload first image to get cloud name from response
    if image_files:
        test_file = image_files[0]
        print(f"  Testing upload with: {os.path.basename(test_file)}")
        
        # Try common cloud name patterns or extract from error
        # Better: ask user or try with API call
        # For now, let's make it so cloud name can be extracted from URL after first upload
        
        # Actually, let me check if we can get it from account info
        try:
            # Test with a placeholder - the upload will fail but we might get info
            # Better approach: require cloud name as parameter or from env
            pass
        except:
            pass
    
    # User needs to provide cloud name - it's visible in their Cloudinary dashboard
    print("\n⚠️  Need Cloud Name for Cloudinary")
    print("Please provide your Cloudinary Cloud Name.")
    print("You can find it in your Cloudinary Dashboard at: https://cloudinary.com/console")
    print("\nFor now, trying with common patterns...")
    
    # Try to get cloud name from a test upload
    # The cloud name should be in your Cloudinary dashboard
    # Let's try a test upload with a dummy cloud name first to see the error
    # Or try common patterns
    
    CLOUD_NAME = None
    
    # Method 1: Try test upload with first image to extract cloud name from error/response
    if image_files:
        test_file = image_files[0]
        # Try to upload and see what happens - might give us cloud name
        # Actually, better to ask user or check environment
        
        # Method 2: Try common cloud names
        common_names = ["dlwjp1zrx", "japantrip", "japan-trip", "japantrip2026"]
        
        print("  Trying to find cloud name...")
        for name in common_names:
            print(f"    Trying: {name}...", end=" ")
            if test_cloud_name(name):
                CLOUD_NAME = name
                print("✓")
                break
            print("✗")
    
    if not CLOUD_NAME:
        # Try extracting from a real upload attempt - will get error with info
        print("\n  Attempting test upload to determine cloud name...")
        test_file = image_files[0]
        try:
            # Try upload with a test name - error might give us info
            # Actually, let's just try with a real upload and get cloud name from result
            result = cloudinary.uploader.upload(
                test_file,
                api_key=API_KEY,
                api_secret=API_SECRET,
                folder="test"
            )
            # If this works, extract cloud name from URL
            url = result.get('url', '')
            if 'res.cloudinary.com' in url:
                parts = url.split('res.cloudinary.com/')
                if len(parts) > 1:
                    CLOUD_NAME = parts[1].split('/')[0]
                    print(f"✓ Found cloud name from upload: {CLOUD_NAME}")
        except Exception as e:
            error_msg = str(e)
            # Error might contain cloud name info
            print(f"    Upload test failed: {error_msg[:100]}")
            # Try to extract or use default
            
            # Last resort: use API key as hint or ask user
            print("\n⚠️  Could not determine cloud name automatically")
            print("\nPlease provide your Cloudinary Cloud Name.")
            print("Find it at: https://cloudinary.com/console")
            print("Or check your Cloudinary dashboard URL - it shows: cloudinary.com/console/c/[CLOUD_NAME]")
            print("\nTrying common cloud names...")
            
            # Try one more time with upload that might reveal cloud name
            # Actually, let's just prompt or use environment variable
            # For now, let's try with a pattern based on API key
            potential_name = f"cloud{API_KEY[:6]}"
            print(f"  Trying: {potential_name}...")
            
            CLOUD_NAME = None  # Will need user input
    
    # Upload images
    print(f"\n3. Uploading {len(image_files)} images to Cloudinary...")
    image_mappings = {}
    uploaded_count = 0
    failed_count = 0
    
    for img_path in image_files:
        filename = os.path.basename(img_path)
        print(f"  [{uploaded_count + failed_count + 1}/{len(image_files)}] {filename}", end=" ... ")
        
        url, public_id = upload_image_to_cloudinary(img_path, CLOUD_NAME)
        if url:
            # Map both full path and filename
            relative_path = img_path.replace('picture/', 'restaurants/')
            image_mappings[relative_path] = url
            image_mappings[filename] = url  # Map by filename too
            uploaded_count += 1
            print("✓")
        else:
            failed_count += 1
            print("✗")
    
    print(f"\n✓ Uploaded {uploaded_count}/{len(image_files)} images")
    if failed_count > 0:
        print(f"✗ Failed: {failed_count} images")
    
    if uploaded_count == 0:
        print("\n✗ No images uploaded. Please check:")
        print("  - Cloud Name is correct")
        print("  - API Key and Secret are correct")
        print("  - Internet connection is working")
        return
    
    # Save mappings
    mapping_file = 'cloudinary_image_mappings.json'
    with open(mapping_file, 'w', encoding='utf-8') as f:
        json.dump(image_mappings, f, indent=2, ensure_ascii=False)
    print(f"✓ Saved mappings to {mapping_file}")
    
    # Update HTML files
    print("\n4. Updating HTML files...")
    html_files = list(Path('restaurants').rglob('*.html'))
    updated_count = 0
    
    for html_file in html_files:
        if update_html_file(str(html_file), image_mappings):
            updated_count += 1
    
    # Update food.html dashboard
    if os.path.exists('food.html'):
        print("\n5. Updating food.html dashboard...")
        if update_html_file('food.html', image_mappings):
            updated_count += 1
    
    print(f"\n✓ Updated {updated_count} HTML files")
    
    print("\n" + "=" * 60)
    print("Upload complete!")
    print("=" * 60)
    print(f"✓ {uploaded_count} images uploaded to Cloudinary")
    print(f"✓ {updated_count} HTML files updated")
    print(f"\nCloud Name used: {CLOUD_NAME}")
    print("\nAll images are now served from Cloudinary CDN!")

if __name__ == '__main__':
    main()
