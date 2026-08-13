import { launch } from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function makeRoundFavicon() {
  const avatarPath = path.join(__dirname, 'public', 'avatar.png');
  const avatarBase64 = fs.readFileSync(avatarPath).toString('base64');
  const avatarDataUrl = `data:image/png;base64,${avatarBase64}`;

  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const browser = await launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 256, height: 256 });

  const dataUrl = await page.evaluate(async (imgSrc) => {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = imgSrc;
    await new Promise((resolve) => { img.onload = resolve; });

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    const minDim = Math.min(img.width, img.height);
    const sx = (img.width - minDim) / 2;
    const sy = (img.height - minDim) / 2;
    ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);

    return canvas.toDataURL('image/png');
  }, avatarDataUrl);

  const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
  const outPath = path.join(__dirname, 'public', 'favicon.png');
  fs.writeFileSync(outPath, Buffer.from(base64, 'base64'));

  await browser.close();
  console.log('Round favicon generated at:', outPath);
}

makeRoundFavicon().catch(console.error);
