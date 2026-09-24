const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 800 });
    await page.goto('http://127.0.0.1:8000/simulator/index.html', { waitUntil: 'networkidle0' });

    // Click on Circuit Gallery button
    await page.click('#circuits-button');
    await new Promise(r => setTimeout(r, 600));

    await page.screenshot({ path: 'C:/Users/lenovo/.gemini/antigravity-ide/brain/65448d18-9796-4090-bc4f-8095fa1bc059/circuit_gallery_current.png' });
    await browser.close();
    console.log('Circuit gallery screenshot saved');
})();
