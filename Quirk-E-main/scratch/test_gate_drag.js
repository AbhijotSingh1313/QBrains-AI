const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 820 });
    await page.goto('http://127.0.0.1:8000/simulator/index.html', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));

    // Clear circuit first
    await page.click('#clear-circuit-button');
    await new Promise(r => setTimeout(r, 400));

    // Drag H gate from toolbox onto wire 0
    // In TopToolbox, Half Turns group has X, H at row 2 (dy=2), dx=1
    // Let's find coordinate or use mouse drag
    // Half Turns group is group 2.
    // Config.TOOLBOX_MARGIN_X = 40. Config.TOOLBOX_GROUP_SPAN = 88.
    // group 2 x = 40 + 2 * 88 = 216.
    // dx = 1 -> 216 + 42 = 258. y = 35 + 2 * 42 = 119.
    // Let's drag from (278, 139 + canvas top offset) to wire 0 (150, 250)
    const canvasBox = await page.evaluate(() => {
        const c = document.getElementById('drawCanvas');
        const r = c.getBoundingClientRect();
        return { left: r.left, top: r.top };
    });

    const startX = canvasBox.left + 278;
    const startY = canvasBox.top + 139;
    const endX = canvasBox.left + 150;
    const endY = canvasBox.top + 245;

    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(endX, endY, { steps: 10 });
    await page.mouse.up();
    await new Promise(r => setTimeout(r, 600));

    await page.screenshot({ path: 'C:/Users/lenovo/.gemini/antigravity-ide/brain/65448d18-9796-4090-bc4f-8095fa1bc059/verify_gate_dragged.png' });

    const hash = await page.evaluate(() => window.location.hash);
    console.log('Circuit hash after drag:', hash);

    await browser.close();
    console.log('Drag test finished');
})();
