import {Config} from "../Config.js"
import {Painter} from "../draw/Painter.js"
import {CircuitStats} from "../circuit/CircuitStats.js"
import {Rect} from "../math/Rect.js"
import {Hand} from "../ui/Hand.js"
import {Point} from "../math/Point.js"
import {Util} from "../base/Util.js"
import {MathPainter} from "../draw/MathPainter.js"
import {Format} from "../base/Format.js"

class Histogram {
    /**
     * Histogram displaying result probabilities.
     * @param {!number} top
     */
    constructor(top) {
        this.top = top;
    }

    /**
     * @param {!number} newTop
     * @returns {!Histogram}
     */
    withTop(newTop) {
        return new Histogram(newTop);
    }

    desiredHeight() {
        return 260;
    }
    
    desiredWidth() {
        return 860;
    }

    containerWidth() {
        let margin_X = Config.TOOLBOX_MARGIN_X;
        let maxRight = 860;
        let workspace = typeof document !== 'undefined' ? document.getElementById("qlp-bottom-right-workspace") : null;
        if (workspace && workspace.offsetLeft > 200) {
            maxRight = Math.min(maxRight, workspace.offsetLeft - 20);
        }
        if (typeof window !== 'undefined' && window.innerWidth) {
            maxRight = Math.min(maxRight, window.innerWidth - 20);
        }
        return Math.max(280, maxRight - margin_X);
    }

    contentWidth(num_wires) {
        let bar_count = 1 << num_wires;
        let containerW = this.containerWidth();
        if (bar_count <= 32) {
            return containerW;
        }
        let minBarWidth = 18;
        return Math.max(containerW, bar_count * minBarWidth);
    }

    /**
     * @param {!Painter} painter
     * @param {!Number} num_wires
     */
    histogramArea(painter, num_wires) {
        let margin_top = 10;
        let margin_X = Config.TOOLBOX_MARGIN_X;
        let margin_bottom = (num_wires > 5) ? 122 : 100;

        let width = this.containerWidth();
        let height = this.desiredHeight() - margin_top - margin_bottom;
        return new Rect(margin_X, this.top + margin_top, width, height);
    }

    /**
     * @param {!Painter} painter   
     * @param {!Rect} area
     */
    drawYAxisTitle(painter, area) {
        const isDarkMode = localStorage.getItem('dark_mode') === 'true';
        let r = area.withX(0).withW(Config.TOOLBOX_MARGIN_X / 2);
        let {x, y} = r.center();
        painter.ctx.save();
        painter.ctx.translate(x, y);
        painter.ctx.rotate(-Math.PI/2);
        painter.printLine("Probability (%)", new Rect(-r.h / 2, -r.w / 2, r.h, r.w), 0.5, isDarkMode ? '#94a3b8' : 'black', 12);
        painter.ctx.restore();
    }
    
    /**
     * @param {!Painter} painter   
     */
    drawXAxisTitle(painter, area, numWires, stats) {
        const isDarkMode = localStorage.getItem('dark_mode') === 'true';
        let margin = (numWires > 5) ? 52 : 22;
        let titleY = area.bottom() + margin; 
        let titleArea = new Rect(area.x, titleY, area.w, 12);
        painter.printLine("Computational basis states", titleArea, 0.5, isDarkMode ? '#94a3b8' : 'black', 12);
    }
    
    
    /**
     * @param {!Painter} painter   
     * @param {!Rect} area
     */
    drawAxeNumbers(painter, area) {
        let r = area.withX(Config.TOOLBOX_MARGIN_X / 2).withW(Config.TOOLBOX_MARGIN_X / 2);
        let font_size = 8;
        
        for(let probability of [0, 20, 40, 60, 80, 100]) {
            let y = r.bottom() - r.h * (probability / 100) - 1;
            painter.printLine(probability + "%", new Rect(r.x, y - font_size / 2, Config.TOOLBOX_MARGIN_X / 2, font_size));
        };
    }
 
    /**
     * @param {!Painter} painter
     * @param {!Rect} area
     */
    drawAxes(painter, area) {
        let b = area.bottom();
        let { x, w, h } = area;
        for(let probability of [20, 40, 60, 80]) {
            let y = b - h * (probability / 100) - 1;
            painter.strokeLine(new Point(x, y), new Point(x + w, y), 'grey');
        };
    }
    
    /**
     * @param {!Painter} painter
     * @param {!Hand} hand
     * @param {!CircuitStats} stats
     * @param {!Rect} area
     */
    drawBars(painter, hand, stats, area) {
        let bar_count = stats.finalState.height();
        let numWires = stats.circuitDefinition.numWires;
        let contentW = this.contentWidth(numWires);
        let scrollX = Histogram.scrollX || 0;
        let padding = bar_count <= 32 ? contentW / (3 * bar_count) : 0;
        let width = contentW / bar_count - padding * (bar_count + 1) / bar_count;
        let labelLen = (numWires > 5) ? 42 : 30;
        let clipH = (numWires > 5) ? 54 : 26;

        painter.ctx.save();
        painter.ctx.beginPath();
        painter.ctx.rect(area.x, area.y - 2, area.w, area.h + clipH);
        painter.ctx.clip();

        const isColored = localStorage.getItem('colored_ui') === 'true';
        const isYellowMode = localStorage.getItem('yellow_mode') === 'true';
        let usedColor = Config.SAMPLING_AND_PROBABILITY_COLOR;
        let usedHighLight = Config.SAMPLING_AND_PROBABILITY_HIGHLIGHT;
        if(isColored && isYellowMode) {
            usedColor = Config.YELLOW;
            usedHighLight = Config.YELLOW_HIGHLIGHT;
        }
        const isDark = localStorage.getItem('dark_mode') === 'true';

        stats.finalState.getColumn(0).forEach((amplitude, index) => {
            let probability = amplitude.norm2(); 
            let label = `${Util.bin(index, Util.bitSize(bar_count - 1))}`;

            let x = area.x + index * width + (1 + index) * padding - scrollX;

            // Cull bars completely outside the visible container area
            if (x + width < area.x - 30 || x > area.x + area.w + 30) {
                return;
            }

            if(bar_count <= 32) { // draw label upright if there's enough space.
                painter.printLine(label, new Rect(x, area.bottom(), width, 20), 0.5);
            } else {
                painter.ctx.save();
                painter.ctx.translate(x + width / 2, area.bottom() + 2);
                painter.ctx.rotate(-Math.PI / 2);
                painter.printLine(label, new Rect(-labelLen, -width / 2, labelLen, width), 0.5, isDark ? '#94a3b8' : 'black', 9);
                painter.ctx.restore();
            }

            if(probability > 0) { // do not draw empty bar
                let height = probability * area.h;
                let bar = new Rect(x, area.bottom() - height, width, height);

                painter.fillRect(bar, usedColor); 

                if(hand.hoverPoints().some(point => bar.containsPoint(point))) {
                    painter.fillRect(bar, usedHighLight); 
                    painter.strokeRect(bar, 'black', 2);
                    MathPainter.paintDeferredValueTooltip(painter, bar.x + bar.w, bar.y, 
                    `Measured chance of |${label}⟩ (decimal ${index})`,
                    `raw: ${(probability * 100).toFixed(4)}%`,
                    `amplitude: ${amplitude.toString(new Format(false, 0, 5, ", "))}`)
                }
            } 
        });

        painter.ctx.restore();
    }
    

    /**
     * @param {!Painter} painter
     * @param {!CircuitStats} stats
     * @param {!Rect} area
     * @param {!Hand} hand
     * @param {!Number} num_wires
     */
    outputStateArea(painter, stats, area, hand, numWires) {
        let margin = (numWires > 5) ? 66 : 44;
        let boxWidth = area.w * 0.96;
        let boxHeight = 50;
    
        let boxX = area.center().x - boxWidth / 2;
        let boxY = area.bottom() + margin;
    
        const isDarkMode = localStorage.getItem('dark_mode') === 'true';
        // Text box
        let textBoxRect = new Rect(boxX, boxY, boxWidth, boxHeight);
        painter.fillRect(textBoxRect, isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(223, 223, 223, 0.66)');
        painter.strokeRect(textBoxRect, isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'black');
    
        let titleMargin = 8;
        painter.ctx.save();
        painter.ctx.fillStyle = isDarkMode ? '#94a3b8' : 'black';
        painter.ctx.font = 'bold 11px sans-serif';
        painter.ctx.fillText('Output state', textBoxRect.x + titleMargin, textBoxRect.y + titleMargin + 4);
        painter.ctx.restore();
    
        // Formatted string and output state value as text
        let outputState = stats.finalState
            .getColumn(0)
            .map((amplitude, index) => `${amplitude.toString(new Format(false, 0, 5, ''))}`)
            .join(', ');
        let formattedState = `[ ${outputState} ]`;
    
        painter.ctx.save();
        painter.ctx.fillStyle = isDarkMode ? '#e2e8f0' : 'black'; 
        painter.ctx.font = '12px arial'; 
        let textY = textBoxRect.y + 26; 
        let textX = textBoxRect.x + 10;
    
        let lineHeight = 14; 
        let maxLines = 2; 
        let words = formattedState.split(' ');
        let currentLine = '';
        let lineCount = 0;
    
        for (let word of words) {
            let testLine = currentLine + word + ' ';
            let testWidth = painter.ctx.measureText(testLine).width;
            if (testWidth > boxWidth - 20) { 
                painter.ctx.fillText(currentLine, textX, textY);
                currentLine = word + ' ';
                textY += lineHeight;
                lineCount++;
    
                if (lineCount === maxLines - 1) {
                    painter.ctx.fillText(currentLine.trim() + ' ...', textX, textY); 
                    break;
                }
            } else {
                currentLine = testLine;
            }
        }
    
        if (lineCount < maxLines) {
            painter.ctx.fillText(currentLine.trim(), textX, textY); 
        }
    
        painter.ctx.restore();
    
        // Copy button
        let buttonWidth = 30;
        let buttonHeight = 30;
        let buttonX = textBoxRect.right() - buttonWidth - 10;
        let buttonY = textBoxRect.y + 5;
    
        let buttonRect = new Rect(buttonX, buttonY, buttonWidth, buttonHeight);
        painter.fillRect(buttonRect, 'transparent'); 
        painter.ctx.save();
        painter.ctx.strokeStyle = isDarkMode ? '#94a3b8' : 'black';
        painter.ctx.lineWidth = 1.5;
    
        painter.ctx.strokeRect(buttonRect.x + 8, buttonRect.y + 8, 14, 18); 
        painter.ctx.beginPath();
        painter.ctx.arc(buttonRect.x + 15, buttonRect.y + 10, 4, Math.PI, 0); 
        painter.ctx.stroke();
    
        painter.ctx.restore();
    
        painter.canvas.addEventListener('click', (event) => {
            const rect = painter.canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
    
            if (
                mouseX >= buttonX &&
                mouseX <= buttonX + buttonWidth &&
                mouseY >= buttonY &&
                mouseY <= buttonY + buttonHeight
            ) {
                navigator.clipboard.writeText(formattedState)
                    .then(() => {
                        console.log('Output state copied to clipboard.');
                        painter.fillRect(buttonRect, 'rgba(136, 136, 136, 0.56)');
                        painter.ctx.strokeRect(buttonRect.x + 8, buttonRect.y + 8, 14, 18); 
                        painter.ctx.beginPath();
                        painter.ctx.arc(buttonRect.x + 15, buttonRect.y + 10, 4, Math.PI, 0); 
                        painter.ctx.stroke();
                    })
                    .catch((err) => {
                        console.error('Failed to copy output state: ', err);
                    });
            }
        });
    }

    /**
     * @param {!Painter} painter
     * @param {!CircuitStats} stats
     * @param {!Hand} hand
     */
    paint(painter, stats, hand) {
        let { numWires } = stats.circuitDefinition;
        let area = this.histogramArea(painter, numWires);
    
        this.drawYAxisTitle(painter, area);
        this.drawAxes(painter, area);
        this.drawAxeNumbers(painter, area);
    
        if (numWires <= 8) {
            this.drawBars(painter, hand, stats, area);
        } else {
            painter.printLine("Histogram not available for more than 8 wires.", area, 0.5, undefined, 16, undefined, 0.5);
        }
    
        this.outputStateArea(painter, stats, area, hand, numWires);
    
        this.drawXAxisTitle(painter, area, numWires, stats);
    
        painter.strokeRect(area);
    }
    
}

Histogram.scrollX = 0;

export {Histogram}