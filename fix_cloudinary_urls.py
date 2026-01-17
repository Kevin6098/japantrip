#!/usr/bin/env python3
"""
Fix duplicate path in Cloudinary URLs
"""

import re
import json
from pathlib import Path

def fix_urls_in_html(html_path):
    """Fix duplicate paths in HTML file"""
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    # Replace duplicate path: japantrip/restaurants/japantrip/restaurants/ -> japantrip/restaurants/
    content = re.sub(
        r'(https://res\.cloudinary\.com/[^/]+/image/upload/[^/]+/)japantrip/restaurants/japantrip/restaurants/',
        r'\1japantrip/restaurants/',
        content
    )
    
    if content != original:
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def fix_mapping_file():
    """Fix URLs in mapping file"""
    with open('cloudinary_image_mappings.json', 'r') as f:
        mappings = json.load(f)
    
    updated = {}
    for key, url in mappings.items():
        # Fix duplicate path
        new_url = re.sub(
            r'(https://res\.cloudinary\.com/[^/]+/image/upload/[^/]+/)japantrip/restaurants/japantrip/restaurants/',
            r'\1japantrip/restaurants/',
            url
        )
        updated[key] = new_url
    
    with open('cloudinary_image_mappings.json', 'w') as f:
        json.dump(updated, f, indent=2, ensure_ascii=False)

def main():
    print("Fixing duplicate paths in Cloudinary URLs...")
    
    # Fix mapping file
    fix_mapping_file()
    print("✓ Fixed cloudinary_image_mappings.json")
    
    # Fix HTML files
    html_files = list(Path('restaurants').rglob('*.html')) + [Path('food.html')]
    fixed = 0
    for html_file in html_files:
        if html_file.exists():
            if fix_urls_in_html(str(html_file)):
                fixed += 1
                print(f"✓ Fixed {html_file.name}")
    
    print(f"\n✓ Fixed {fixed} HTML files")

if __name__ == '__main__':
    main()
