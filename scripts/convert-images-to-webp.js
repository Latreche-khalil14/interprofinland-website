/**
 * Convert all PNG/JPG images to WebP format
 * Usage: node scripts/convert-images-to-webp.js
 */

import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const PUBLIC_IMAGES_DIR = join(__dirname, '../public/images');
const QUALITY = 80; // WebP quality (0-100)

async function getAllImageFiles(dir) {
  const files = [];
  
  async function scanDir(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        await scanDir(fullPath);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (IMAGE_EXTENSIONS.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  await scanDir(dir);
  return files;
}

async function convertToWebP(inputPath) {
  const ext = extname(inputPath);
  const outputPath = inputPath.replace(ext, '.webp');
  
  try {
    const fileStats = await stat(inputPath);
    const inputSize = fileStats.size;
    
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    const outputStats = await stat(outputPath);
    const outputSize = outputStats.size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
    
    console.log(`✅ ${basename(inputPath)} → ${basename(outputPath)} (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Failed to convert ${basename(inputPath)}:`, error.message);
  }
}

async function main() {
  console.log('🔍 Scanning for images...\n');
  
  const imageFiles = await getAllImageFiles(PUBLIC_IMAGES_DIR);
  
  if (imageFiles.length === 0) {
    console.log('No images found.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to convert.\n`);
  
  for (const imagePath of imageFiles) {
    await convertToWebP(imagePath);
  }
  
  console.log('\n✨ Conversion complete!');
  console.log('Note: Original images are preserved. You can delete them after verifying WebP versions work.');
}

main().catch(console.error);
