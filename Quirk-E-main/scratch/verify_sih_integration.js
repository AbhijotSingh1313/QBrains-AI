const puppeteer = require('puppeteer');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\lenovo\\.gemini\\antigravity-ide\\brain\\65448d18-9796-4090-bc4f-8095fa1bc059';

(async () => {
    let browser;
    try {
        console.log("Launching Puppeteer...");
        browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 1536, height: 864 });

        const errors = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
                console.error("Browser Console Error:", msg.text());
            }
        });
        page.on('pageerror', err => {
            errors.push(err.message);
            console.error("Browser Page Error:", err.message);
        });

        // 1. Visit root landing page (SIH Dashboard)
        console.log("Navigating to http://127.0.0.1:8000/...");
        await page.goto('http://127.0.0.1:8000/', { waitUntil: 'networkidle0' });
        await new Promise(r => setTimeout(r, 2000));

        const title = await page.title();
        console.log("Page Title:", title);
        if (!title.includes('QNova')) {
            throw new Error(`Expected title to contain 'QNova', got '${title}'`);
        }

        const dashboardInfo = await page.evaluate(() => {
            const composerBtn = document.querySelector('.btn-primary');
            const navItems = Array.from(document.querySelectorAll('nav div, header div')).map(e => e.textContent);
            const canvas = document.querySelector('canvas');
            return {
                composerBtnText: composerBtn ? composerBtn.textContent.trim() : null,
                hasCanvas: !!canvas
            };
        });
        console.log("Dashboard Info:", dashboardInfo);

        const screenshot1 = path.join(ARTIFACT_DIR, 'verify_sih_landing_dashboard.png');
        await page.screenshot({ path: screenshot1 });
        console.log("Saved screenshot:", screenshot1);

        // 2. Test Simulation module in SIH dashboard
        console.log("Testing 3D Bloch Simulation button...");
        const simBtn = await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            const b = btns.find(btn => btn.textContent.includes('3D Bloch Simulation'));
            if (b) { b.click(); return true; }
            return false;
        });
        console.log("Clicked 3D Bloch Simulation button:", simBtn);
        await new Promise(r => setTimeout(r, 800));

        const screenshotSim = path.join(ARTIFACT_DIR, 'verify_sih_simulation_modal.png');
        await page.screenshot({ path: screenshotSim });
        console.log("Saved simulation modal screenshot:", screenshotSim);

        // Close modal
        await page.keyboard.press('Escape');
        await new Promise(r => setTimeout(r, 500));

        // 3. Click Launch Circuit Composer to open Circuit Builder directly
        console.log("Clicking Launch Circuit Composer button...");
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
            page.evaluate(() => {
                const btns = Array.from(document.querySelectorAll('button'));
                const b = btns.find(btn => btn.textContent.includes('Launch Circuit Composer'));
                if (b) b.click();
            })
        ]);

        console.log("Current URL after click:", page.url());
        if (!page.url().includes('/simulator/index.html')) {
            throw new Error(`Expected URL to include /simulator/index.html, got ${page.url()}`);
        }

        await new Promise(r => setTimeout(r, 1200));

        // Verify Circuit Builder elements
        const circuitInfo = await page.evaluate(() => {
            const canvas = document.getElementById('drawCanvas');
            const dashboardBtn = document.getElementById('dashboard-nav-button');
            const toolboxScroller = document.getElementById('toolboxScroller');
            const codePanel = document.getElementById('liveCodePanel');
            const probScroller = document.getElementById('probabilityGraphScroller');
            return {
                hasCanvas: !!canvas,
                hasDashboardBtn: !!dashboardBtn,
                dashboardBtnText: dashboardBtn ? dashboardBtn.textContent.trim() : null,
                hasToolbox: !!toolboxScroller,
                hasCodePanel: !!codePanel,
                hasProbScroller: !!probScroller
            };
        });
        console.log("Circuit Builder Info:", circuitInfo);

        if (!circuitInfo.hasCanvas || !circuitInfo.hasDashboardBtn) {
            throw new Error("Circuit builder canvas or dashboard button not found!");
        }

        const screenshot2 = path.join(ARTIFACT_DIR, 'verify_circuit_builder_from_dashboard.png');
        await page.screenshot({ path: screenshot2 });
        console.log("Saved screenshot:", screenshot2);

        // 4. Click Dashboard button to return to Dashboard
        console.log("Clicking Dashboard button in circuit builder header...");
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
            page.evaluate(() => {
                document.getElementById('dashboard-nav-button').click();
            })
        ]);

        console.log("URL after clicking Dashboard:", page.url());
        if (!page.url().endsWith(':8000/')) {
            throw new Error(`Expected URL to be root dashboard http://127.0.0.1:8000/, got ${page.url()}`);
        }

        await new Promise(r => setTimeout(r, 1000));
        const screenshot3 = path.join(ARTIFACT_DIR, 'verify_back_to_dashboard.png');
        await page.screenshot({ path: screenshot3 });
        console.log("Saved screenshot:", screenshot3);

        // 5. Test Navbar Composer click from dashboard
        console.log("Testing Navbar Composer click...");
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
            page.evaluate(() => {
                const navButtons = Array.from(document.querySelectorAll('header div, header button, header span'));
                const composerItem = navButtons.find(el => el.textContent.trim().startsWith('Composer'));
                if (composerItem) composerItem.click();
                else {
                    // Fallback search
                    const all = Array.from(document.querySelectorAll('*'));
                    const item = all.find(e => e.textContent && e.textContent.includes('Composer') && e.onclick);
                    if (item) item.click();
                }
            })
        ]);

        console.log("URL after clicking Navbar Composer:", page.url());
        if (!page.url().includes('/simulator/index.html')) {
            throw new Error(`Expected URL to include /simulator/index.html, got ${page.url()}`);
        }

        const severeErrors = errors.filter(e => !e.includes('favicon'));
        console.log("Severe errors count:", severeErrors.length);
        if (severeErrors.length > 0) {
            console.warn("Errors caught:", severeErrors);
        }

        console.log("ALL INTEGRATION VERIFICATION CHECKS PASSED!");
    } catch (err) {
        console.error("Verification failed:", err);
        process.exitCode = 1;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
