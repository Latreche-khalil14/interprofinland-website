import os
import sys
import shutil
from pathlib import Path
from PIL import Image, ImageOps

# Ensure UTF-8 output on Windows
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = Path(r"c:\Users\Administrator\Desktop\InterProFinland\public\assets")
BACKUP_DIR = Path(r"c:\Users\Administrator\Desktop\InterProFinland\public\assets_backup_originals")

def create_backup():
    if not BACKUP_DIR.exists():
        print(f"Creating backup at: {BACKUP_DIR}")
        shutil.copytree(BASE_DIR, BACKUP_DIR)
        print("[OK] Backup created successfully!")
    else:
        print(f"[OK] Backup already exists at: {BACKUP_DIR}")

def resize_and_crop(img_path, target_width, target_height, centering=(0.5, 0.5)):
    try:
        with Image.open(img_path) as img:
            # Convert RGBA/P to RGB if saving webp with full quality if needed, or preserve RGBA
            if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                img = img.convert("RGBA")
            else:
                img = img.convert("RGB")
            
            # Smart crop and resize using ImageOps.fit (cover behavior)
            resized = ImageOps.fit(img, (target_width, target_height), method=Image.Resampling.LANCZOS, centering=centering)
            
            # Overwrite with optimized webp
            resized.save(img_path, "WEBP", quality=85, method=6)
            return True
    except Exception as e:
        print(f"Error processing {img_path.name}: {e}")
        return False

def process_directory(directory, target_w, target_h, centering=(0.5, 0.5)):
    if not directory.exists():
        return
    print(f"\nProcessing {directory.name} (Target: {target_w}x{target_h})...")
    count = 0
    for file in directory.glob("*.*"):
        if file.suffix.lower() in [".webp", ".jpg", ".jpeg", ".png"] and file.is_file():
            success = resize_and_crop(file, target_w, target_h, centering)
            if success:
                count += 1
                print(f"  [OK] {file.name} -> {target_w}x{target_h}")
    print(f"Done! {count} images optimized in {directory.name}.")

def main():
    print("=== InterProFinland Image Resizer & Optimizer ===")
    create_backup()
    
    # 1. Events / Signature Programs (3:4 ratio) -> 600 x 800
    events_dir = BASE_DIR / "events"
    process_directory(events_dir, 600, 800, centering=(0.5, 0.4))
    
    # 2. Persons / Team / Mentors (4:5 ratio) -> 600 x 750 (centering biased towards face)
    persons_dir = BASE_DIR / "persons-rols"
    process_directory(persons_dir, 600, 750, centering=(0.5, 0.25))
    
    # 3. Handbook cover (5:7 ratio) -> 500 x 700
    handbook = BASE_DIR / "QR-Handbook-cover.webp"
    if handbook.exists():
        resize_and_crop(handbook, 500, 700, centering=(0.5, 0.5))
        print("  [OK] QR-Handbook-cover.webp -> 500x700")
        
    print("\nAll operations completed successfully! Originals are safe in public/assets_backup_originals.")

if __name__ == "__main__":
    main()
