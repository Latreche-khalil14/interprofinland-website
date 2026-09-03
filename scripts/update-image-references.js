/**
 * Update image references from .png/.jpg to .webp in all Astro files
 * Usage: node scripts/update-image-references.js
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIR = join(__dirname, '../src');

async function getAllAstroFiles(dir) {
  const files = [];
  
  async function scanDir(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        await scanDir(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.astro') || entry.name.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  await scanDir(dir);
  return files;
}

async function updateImageReferences(filePath) {
  let content = await readFile(filePath, 'utf-8');
  let updated = false;
  
  // Replace .png, .jpg, .jpeg with .webp in image paths
  const patterns = [
    // Image paths in src attributes
    /src=["']([^"']+\.(png|jpg|jpeg))["']/gi,
    // Image paths in object/data structures
    /image:\s*["']([^"']+\.(png|jpg|jpeg))["']/gi,
    // Image paths in poster attributes
    /poster:\s*["']([^"']+\.(png|jpg|jpeg))["']/gi,
  ];
  
  patterns.forEach((pattern) => {
    const newContent = content.replace(pattern, (match, path, ext) => {
      updated = true;
      return match.replace(`.${ext}`, '.webp');
    });
    
    if (newContent !== content) {
      content = newContent;
    }
  });
  
  if (updated) {
    await writeFile(filePath, content, 'utf-8');
    return true;
  }
  
  return false;
}

async function main() {
  console.log('🔍 Scanning for Astro files...\n');
  
  const astroFiles = await getAllAstroFiles(SRC_DIR);
  console.log(`Found ${astroFiles.length} files to check.\n`);
  
  let updatedCount = 0;
  
  for (const filePath of astroFiles) {
    const wasUpdated = await updateImageReferences(filePath);
    if (wasUpdated) {
      updatedCount++;
      console.log(`✅ Updated: ${filePath.replace(SRC_DIR, 'src')}`);
    }
  }
  
  console.log(`\n✨ Complete! Updated ${updatedCount} file(s).`);
}

main().catch(console.error);
