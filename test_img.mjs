import fs from 'fs';
import path from 'path';

// read dimensions if possible
const dir = './public/assets/persons-rols';
const files = fs.readdirSync(dir);
console.log('Files in persons-rols:', files);
