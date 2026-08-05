import { launch } from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generatePDF() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const browser = await launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const htmlPath = path.join(__dirname, 'public', 'resume', 'resume_source.html');
  const pdfPath = path.join(__dirname, 'public', 'resume', 'Resume.pdf');

  await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '0.35in',
      right: '0.45in',
      bottom: '0.35in',
      left: '0.45in'
    }
  });

  await browser.close();
  console.log('PDF generated successfully at:', pdfPath);
}

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
