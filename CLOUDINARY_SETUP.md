# Cloudinary Image Hosting Setup Guide

This guide will help you upload all images to Cloudinary and update your code to use Cloudinary URLs instead of local files.

## Step 1: Create Cloudinary Account

1. Go to https://cloudinary.com/users/register/free
2. Sign up for a free account (25GB storage, 25GB bandwidth/month)
3. After signing up, you'll see your **Dashboard** with:
   - Cloud Name
   - API Key
   - API Secret

## Step 2: Install Dependencies

```bash
npm install cloudinary
```

## Step 3: Set Environment Variables

Create a `.env` file in the project root (or set environment variables):

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Important**: Add `.env` to your `.gitignore` to keep your API keys secret!

## Step 4: Upload Images to Cloudinary

Run the upload script:

```bash
node scripts/upload-to-cloudinary.cjs
```

This will:
- Upload all images from `attractions/` and `restaurants/` folders
- Create a `cloudinary-mapping.json` file with old paths → Cloudinary URLs
- Show progress for each image

**Note**: The first upload may take 10-15 minutes for ~123 images.

## Step 5: Update Code to Use Cloudinary URLs

After uploading, update your data files:

```bash
node scripts/update-image-paths.cjs
```

This will automatically replace all image paths in:
- `src/data/attractionsData.js`
- `src/data/restaurantsData.js`

## Step 6: Remove Local Images (Optional)

Once everything is working, you can remove the local image folders to save space:

```bash
# Backup first!
# Then remove:
rm -rf attractions/
rm -rf restaurants/
```

Or keep them as backup and add to `.gitignore`:

```gitignore
# Image folders (now hosted on Cloudinary)
attractions/
restaurants/
```

## Step 7: Test Your Application

1. Run `npm run dev`
2. Check that all images load correctly
3. Verify images are loading from Cloudinary (check browser Network tab)

## Step 8: Remove Local Images (Optional)

Once everything is working and you've confirmed all images load from Cloudinary, you can remove the local image files to save space:

```bash
node scripts/remove-local-images.cjs
```

This script will:
- Show you all images that will be deleted
- Ask for confirmation (requires typing "DELETE")
- Delete all images from `attractions/` and `restaurants/` folders
- Clean up empty directories
- Show you how much space was freed

**⚠️ Important**: Only run this after you've:
1. ✅ Successfully uploaded to Cloudinary
2. ✅ Updated image paths in your code
3. ✅ Tested your app and confirmed images load correctly

## Troubleshooting

### Images not uploading
- Check your API credentials are correct
- Verify you have internet connection
- Check Cloudinary dashboard for upload limits

### Images not displaying
- Verify `cloudinary-mapping.json` was created
- Check that `update-image-paths.js` ran successfully
- Look for any remaining local paths in the data files

### Rate Limits
- Free tier has rate limits, but should be fine for initial upload
- If you hit limits, wait a few minutes and re-run the upload script (it won't re-upload existing images)

## Benefits

✅ **Reduced Git Size**: Images no longer in repository  
✅ **Faster Load Times**: Cloudinary CDN is fast globally  
✅ **Automatic Optimization**: Cloudinary optimizes images automatically  
✅ **Free Tier**: 25GB storage + 25GB bandwidth/month is generous  

## Cloudinary URL Format

Images will be stored as:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1/japantrip/attractions/sensoji/kaminarimon-gate.jpg
```

The script automatically handles:
- Image optimization
- Secure HTTPS URLs
- Proper folder structure
