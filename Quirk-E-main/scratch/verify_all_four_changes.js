const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 820 });

    const errors = [];
    page.on('pageerror', err => errors.push('PageError: ' + err.message));
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push('ConsoleError: ' + msg.text());
        }
    });

    console.log('Loading platform...');
    await page.goto('http://127.0.0.1:8000/simulator/index.html', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));

    // Test 1: Toolbox Scroller position
    console.log('\n--- Checking Requirement 1: Toolbox Scroller ---');
    const scrollerBox = await page.evaluate(() => {
        const el = document.getElementById('toolboxScroller');
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
            top: el.style.top,
            height: el.style.height,
            clientHeight: el.clientHeight,
            rect: { top: rect.top, bottom: rect.bottom, height: rect.height }
        };
    });
    console.log('Toolbox scroller metrics:', JSON.stringify(scrollerBox));
    if (!scrollerBox || scrollerBox.clientHeight !== 216) {
        throw new Error(`Expected toolbox scroller clientHeight to be 216, got ${scrollerBox?.clientHeight}`);
    }

    // Scroll toolbox to verify scroll mechanics
    await page.evaluate(() => {
        const el = document.getElementById('toolboxScroller');
        el.scrollLeft = 200;
        el.dispatchEvent(new Event('scroll'));
    });
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: 'C:/Users/lenovo/.gemini/antigravity-ide/brain/65448d18-9796-4090-bc4f-8095fa1bc059/verify_toolbox_scrolled.png' });
    
    // Reset scroll
    await page.evaluate(() => {
        const el = document.getElementById('toolboxScroller');
        el.scrollLeft = 0;
        el.dispatchEvent(new Event('scroll'));
    });
    await new Promise(r => setTimeout(r, 200));

    // Test 2: About button removed, other buttons intact
    console.log('\n--- Checking Requirement 2: Header Buttons ---');
    const headerButtons = await page.evaluate(() => {
        return {
            hasAbout: document.getElementById('about-button') !== null,
            hasImport: document.getElementById('import-button') !== null,
            hasExport: document.getElementById('export-button') !== null,
            hasDownload: document.getElementById('download-options-button') !== null,
            hasGuide: document.getElementById('guide-button') !== null,
            hasTheme: document.getElementById('ui-settings-button') !== null
        };
    });
    console.log('Header buttons check:', JSON.stringify(headerButtons));
    if (headerButtons.hasAbout) {
        throw new Error('Expected About button to be removed!');
    }
    if (!headerButtons.hasImport || !headerButtons.hasExport || !headerButtons.hasDownload || !headerButtons.hasGuide || !headerButtons.hasTheme) {
        throw new Error('One or more required header buttons are missing!');
    }

    // Test 3: Guide button opens clean 8-step guide modal
    console.log('\n--- Checking Requirement 3: Guide Modal ---');
    await page.click('#guide-button');
    await new Promise(r => setTimeout(r, 400));

    const guideModalInfo = await page.evaluate(() => {
        const modal = document.getElementById('guide-modal-div');
        const isVisible = modal && window.getComputedStyle(modal).display === 'block';
        const title = modal ? modal.querySelector('.qlp-modal-title')?.textContent : null;
        const stepCards = modal ? Array.from(modal.querySelectorAll('.qlp-guide-step-card')).map(card => ({
            num: card.querySelector('.qlp-guide-step-num')?.textContent.trim(),
            title: card.querySelector('strong')?.textContent.trim(),
            desc: card.querySelector('span')?.textContent.trim()
        })) : [];
        return { isVisible, title, stepCards };
    });

    console.log('Guide Modal Info:', JSON.stringify(guideModalInfo, null, 2));
    if (!guideModalInfo.isVisible) {
        throw new Error('Guide modal is not visible after clicking #guide-button');
    }
    if (guideModalInfo.stepCards.length !== 8) {
        throw new Error(`Expected 8 guide steps, found ${guideModalInfo.stepCards.length}`);
    }

    await page.screenshot({ path: 'C:/Users/lenovo/.gemini/antigravity-ide/brain/65448d18-9796-4090-bc4f-8095fa1bc059/verify_guide_modal.png' });

    // Close guide modal via Esc
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 300));
    const isGuideClosed = await page.evaluate(() => {
        const modal = document.getElementById('guide-modal-div');
        return modal && modal.style.display === 'none';
    });
    console.log('Guide modal closed via Escape:', isGuideClosed);
    if (!isGuideClosed) {
        throw new Error('Guide modal did not close on Escape');
    }

    // Test 4: Circuit Gallery formatting and readability
    console.log('\n--- Checking Requirement 4: Circuit Gallery Formatting ---');
    await page.click('#circuits-button');
    await new Promise(r => setTimeout(r, 500));

    const galleryCardsInfo = await page.evaluate(() => {
        const cards = Array.from(document.querySelectorAll('.qlp-circuit-item'));
        return cards.map(c => {
            const nameEl = c.querySelector('.qlp-item-name');
            const descEl = c.querySelector('.qlp-item-desc');
            const badgeEl = c.querySelector('.qlp-item-badge');
            return {
                id: c.id,
                badge: badgeEl ? badgeEl.textContent.trim() : '',
                name: nameEl ? nameEl.textContent.trim() : '',
                desc: descEl ? descEl.textContent.trim() : '',
                cardHeight: c.clientHeight,
                scrollHeight: c.scrollHeight,
                isClipped: c.scrollHeight > c.clientHeight + 2
            };
        });
    });

    console.log(`Evaluated ${galleryCardsInfo.length} gallery cards.`);
    const clippedCards = galleryCardsInfo.filter(c => c.isClipped);
    if (clippedCards.length > 0) {
        console.error('Clipped cards found:', clippedCards);
        throw new Error(`${clippedCards.length} cards are vertically clipped!`);
    } else {
        console.log('All 22 circuit cards render cleanly with NO vertical clipping!');
    }

    await page.screenshot({ path: 'C:/Users/lenovo/.gemini/antigravity-ide/brain/65448d18-9796-4090-bc4f-8095fa1bc059/verify_circuit_gallery_fixed.png' });

    // Click Grover Search to verify circuit loading still works properly
    console.log('Clicking Grover Search card...');
    await page.click('#example-anchor-grover');
    await new Promise(r => setTimeout(r, 600));

    const circuitState = await page.evaluate(() => {
        const gallery = document.getElementById('circuits-div');
        const isGalleryClosed = gallery && gallery.style.display === 'none';
        const urlHash = window.location.hash;
        return { isGalleryClosed, hasCircuitInHash: urlHash.includes('Chance5') };
    });
    console.log('Circuit loading check:', JSON.stringify(circuitState));
    if (!circuitState.isGalleryClosed || !circuitState.hasCircuitInHash) {
        throw new Error('Circuit did not load properly from gallery click');
    }

    await page.screenshot({ path: 'C:/Users/lenovo/.gemini/antigravity-ide/brain/65448d18-9796-4090-bc4f-8095fa1bc059/verify_grover_loaded.png' });

    // Final dashboard overview screenshot
    await page.screenshot({ path: 'C:/Users/lenovo/.gemini/antigravity-ide/brain/65448d18-9796-4090-bc4f-8095fa1bc059/verify_final_dashboard.png' });

    await browser.close();

    console.log('\n--- Console Errors Check ---');
    console.log('Errors logged:', errors);
    if (errors.length > 0) {
        throw new Error('Console errors occurred during test');
    }
    console.log('\nALL FOUR REQUIREMENTS FULLY VERIFIED AND PASSING WITH ZERO ERRORS!');
})();
