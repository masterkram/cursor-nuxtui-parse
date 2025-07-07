#!/usr/bin/env node

import { promises as fs } from 'fs';
import * as path from 'path';

async function copyDir(src: string, dest: string) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  try {
    // __dirname is the build directory, so go up to the package root
    const packageRoot = path.resolve(__dirname, '..');
    const srcDir = path.join(packageRoot, 'components');
    const destDir = path.resolve(process.cwd(), '.nuxtui-context', 'components');

    // Check if source exists
    await fs.access(srcDir);

    await copyDir(srcDir, destDir);
    console.log(`Copied components to ${destDir}`);
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      console.error('Error: components directory not found in the package.');
    } else {
      console.error('Error copying components:', err);
    }
    process.exit(1);
  }
}

main(); 