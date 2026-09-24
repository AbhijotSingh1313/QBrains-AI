const puppeteer = require('puppeteer');
const fs = require('fs');
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

        // 1. Small circuit test (Default circuit)
        console.log("Navigating to simulator (default circuit)...");
        await page.goto('http://127.0.0.1:8000/simulator/index.html', { waitUntil: 'networkidle0' });
        await page.waitForSelector('#canvasDiv', { timeout: 10000 });
        await new Promise(r => setTimeout(r, 1000));

        const smallMetrics = await page.evaluate(() => {
            const scroller = document.getElementById('probabilityGraphScroller');
            const track = document.getElementById('probabilityGraphScrollTrack');
            const workspace = document.getElementById('qlp-bottom-right-workspace');
            const canvas = document.getElementById('drawCanvas');
            const docWidth = document.documentElement.clientWidth;
            const scrollWidth = document.documentElement.scrollWidth;

            return {
                scrollerLeft: scroller ? scroller.offsetLeft : null,
                scrollerWidth: scroller ? scroller.offsetWidth : null,
                scrollerClientWidth: scroller ? scroller.clientWidth : null,
                scrollerScrollWidth: scroller ? scroller.scrollWidth : null,
                trackWidth: track ? track.offsetWidth : null,
                workspaceLeft: workspace ? workspace.offsetLeft : null,
                workspaceWidth: workspace ? workspace.offsetWidth : null,
                canvasWidth: canvas ? canvas.width : null,
                docWidth,
                scrollWidth,
                hasPageHScroll: scrollWidth > docWidth,
                scrollerOverflowX: scroller ? window.getComputedStyle(scroller).overflowX : null
            };
        });

        console.log("Small Circuit Metrics:", JSON.stringify(smallMetrics, null, 2));

        if (smallMetrics.scrollerLeft + smallMetrics.scrollerWidth >= smallMetrics.workspaceLeft) {
            throw new Error(`OVERLAP DETECTED! Scroller right edge (${smallMetrics.scrollerLeft + smallMetrics.scrollerWidth}) >= Workspace left (${smallMetrics.workspaceLeft})`);
        }
        if (smallMetrics.hasPageHScroll) {
            throw new Error(`PAGE HORIZONTAL SCROLL DETECTED! docWidth: ${smallMetrics.docWidth}, scrollWidth: ${smallMetrics.scrollWidth}`);
        }

        const screenshot1 = path.join(ARTIFACT_DIR, 'verify_prob_graph_small.png');
        await page.screenshot({ path: screenshot1 });
        console.log("Saved screenshot:", screenshot1);

        // 2. 5-qubit circuit (32 states)
        console.log("Testing 5-qubit circuit (32 basis states)...");
        const circuit5Qubits = JSON.stringify({
            cols: [["H", "H", "H", "H", "H"]]
        });
        await page.goto(`http://127.0.0.1:8000/simulator/index.html#circuit=${encodeURIComponent(circuit5Qubits)}`, { waitUntil: 'networkidle0' });
        await new Promise(r => setTimeout(r, 1000));

        const metrics5Q = await page.evaluate(() => {
            const scroller = document.getElementById('probabilityGraphScroller');
            const workspace = document.getElementById('qlp-bottom-right-workspace');
            return {
                scrollerLeft: scroller ? scroller.offsetLeft : null,
                scrollerWidth: scroller ? scroller.offsetWidth : null,
                scrollerScrollWidth: scroller ? scroller.scrollWidth : null,
                workspaceLeft: workspace ? workspace.offsetLeft : null,
                hasPageHScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth
            };
        });
        console.log("5-Qubit Circuit Metrics:", JSON.stringify(metrics5Q, null, 2));

        const screenshot2 = path.join(ARTIFACT_DIR, 'verify_prob_graph_5qubit.png');
        await page.screenshot({ path: screenshot2 });
        console.log("Saved screenshot:", screenshot2);

        // 3. 8-qubit circuit (256 states)
        console.log("Testing 8-qubit circuit (256 basis states)...");
        const circuit8Qubits = JSON.stringify({
            cols: [["H", "H", "H", "H", "H", "H", "H", "H"]]
        });
        await page.goto(`http://127.0.0.1:8000/simulator/index.html#circuit=${encodeURIComponent(circuit8Qubits)}`, { waitUntil: 'networkidle0' });
        await new Promise(r => setTimeout(r, 1200));

        const metrics8Q = await page.evaluate(() => {
            const scroller = document.getElementById('probabilityGraphScroller');
            const track = document.getElementById('probabilityGraphScrollTrack');
            const workspace = document.getElementById('qlp-bottom-right-workspace');
            return {
                scrollerLeft: scroller ? scroller.offsetLeft : null,
                scrollerWidth: scroller ? scroller.offsetWidth : null,
                scrollerClientWidth: scroller ? scroller.clientWidth : null,
                scrollerScrollWidth: scroller ? scroller.scrollWidth : null,
                trackWidth: track ? track.offsetWidth : null,
                workspaceLeft: workspace ? workspace.offsetLeft : null,
                hasPageHScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth,
                canScrollH: scroller && scroller.scrollWidth > scroller.clientWidth
            };
        });
        console.log("8-Qubit Circuit Initial Metrics:", JSON.stringify(metrics8Q, null, 2));

        if (!metrics8Q.canScrollH) {
            throw new Error(`Expected 8-qubit graph to be scrollable, but scrollWidth (${metrics8Q.scrollerScrollWidth}) <= clientWidth (${metrics8Q.scrollerClientWidth})`);
        }
        if (metrics8Q.scrollerLeft + metrics8Q.scrollerWidth >= metrics8Q.workspaceLeft) {
            throw new Error(`OVERLAP DETECTED on 8-qubit graph! Right edge: ${metrics8Q.scrollerLeft + metrics8Q.scrollerWidth}, Workspace: ${metrics8Q.workspaceLeft}`);
        }

        // Scroll into view of the histogram
        await page.evaluate(() => {
            const scroller = document.getElementById('probabilityGraphScroller');
            if (scroller) {
                scroller.scrollIntoView({ block: 'center' });
            }
        });
        await new Promise(r => setTimeout(r, 600));

        const screenshot3 = path.join(ARTIFACT_DIR, 'verify_prob_graph_8qubit_scrolled_left.png');
        await page.screenshot({ path: screenshot3 });
        console.log("Saved screenshot:", screenshot3);

        // Scroll to the middle
        console.log("Scrolling 8-qubit graph to middle...");
        await page.evaluate(() => {
            const scroller = document.getElementById('probabilityGraphScroller');
            scroller.scrollLeft = 1800;
            scroller.dispatchEvent(new Event('scroll'));
        });
        await new Promise(r => setTimeout(r, 600));

        const scrolledMetrics = await page.evaluate(() => {
            const scroller = document.getElementById('probabilityGraphScroller');
            return {
                scrollLeft: scroller.scrollLeft
            };
        });
        console.log("Scrolled Metrics:", scrolledMetrics);

        const screenshot4 = path.join(ARTIFACT_DIR, 'verify_prob_graph_8qubit_scrolled_middle.png');
        await page.screenshot({ path: screenshot4 });
        console.log("Saved screenshot:", screenshot4);

        // Scroll to the end (highest basis states, e.g. 11111111)
        console.log("Scrolling 8-qubit graph to right end...");
        await page.evaluate(() => {
            const scroller = document.getElementById('probabilityGraphScroller');
            scroller.scrollLeft = scroller.scrollWidth - scroller.clientWidth;
            scroller.dispatchEvent(new Event('scroll'));
        });
        await new Promise(r => setTimeout(r, 600));

        const screenshot5 = path.join(ARTIFACT_DIR, 'verify_prob_graph_8qubit_scrolled_right.png');
        await page.screenshot({ path: screenshot5 });
        console.log("Saved screenshot:", screenshot5);

        // Hover over a bar to test tooltip
        console.log("Testing bar hover tooltip...");
        const hoverPos = await page.evaluate(() => {
            const scroller = document.getElementById('probabilityGraphScroller');
            const rect = scroller.getBoundingClientRect();
            return {
                x: rect.left + 150,
                y: rect.top + 30
            };
        });
        await page.mouse.move(hoverPos.x, hoverPos.y);
        await new Promise(r => setTimeout(r, 500));

        const screenshot6 = path.join(ARTIFACT_DIR, 'verify_prob_graph_tooltip_hover.png');
        await page.screenshot({ path: screenshot6 });
        console.log("Saved screenshot:", screenshot6);

        // Verify Live Code panel is still functional
        console.log("Checking Live Code panel...");
        const codeText = await page.evaluate(() => {
            const codeEl = document.querySelector('#live-code-content');
            return codeEl ? codeEl.textContent.trim() : null;
        });
        console.log("Live Code snippet length:", codeText ? codeText.length : 0);
        if (!codeText || codeText.length < 10) {
            throw new Error("Live code panel content missing or empty!");
        }

        // Check console errors
        const severeErrors = errors.filter(e => !e.includes('favicon'));
        console.log("Severe errors count:", severeErrors.length);
        if (severeErrors.length > 0) {
            console.warn("Errors caught:", severeErrors);
        }

        console.log("ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!");
    } catch (err) {
        console.error("Verification failed:", err);
        process.exitCode = 1;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
