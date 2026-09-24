/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {CachablePainting} from "../draw/CachablePainting.js"
import {CircuitStats} from "../circuit/CircuitStats.js"
import {Config} from "../Config.js"
import {GateDrawParams} from "../draw/GateDrawParams.js"
import {GatePainting} from "../draw/GatePainting.js"
import {Hand} from "../ui/Hand.js"
import {MysteryGateSymbol, MysteryGateMaker} from "../gates/Joke_MysteryGate.js"
import {Rect} from "../math/Rect.js"
import {Painter} from "../draw/Painter.js"
import {Point} from "../math/Point.js"
import {seq} from "../base/Seq.js"
import {WidgetPainter} from "../draw/WidgetPainter.js"

class DisplayedToolbox {
    /**
     * That thing showing gates you can grab.
     * @param {!string} name
     * @param {!number} top
     * @param {!Array<!{hint: !string, gates: !Array<undefined|!Gate>}>} toolboxGroups
     * @param {!boolean} labelsOnTop
     * @param {undefined|!Array<!{hint: !string, gates: !Array<undefined|!Gate>}>=} originalGroups
     * @param {undefined|!CachablePainting=undefined} standardAppearance
     */
    constructor(
            name,
            top,
            toolboxGroups,
            labelsOnTop,
            originalGroups=undefined,
            standardAppearance=undefined) {
        /** @type {!String} */
        this.name = name;
        /** @type {!number} */
        this.top = top;
        /** @type {!Array<!{hint: !string, gates: !Array<undefined|!Gate>}>} */
        this.toolboxGroups = toolboxGroups;
        /** @type {!boolean} */
        this.labelsOnTop = labelsOnTop;
        /** @type {!Array<!{hint: !string, gates: !Array<undefined|!Gate>}>} */
        this._originalGroups = originalGroups || this.toolboxGroups;
        /**
         * @type {!CachablePainting}
         * @private
         */
        this._standardApperance = standardAppearance || new CachablePainting(
            () => ({width: this.desiredWidth(), height: this.desiredHeight()}),
            painter => {
                painter.ctx.save();
                painter.ctx.translate(0, -this.top);
                this._paintStandardContents(painter);
                painter.ctx.restore();
            });

        /** @type {!int} */
        this.groupHeight = 1;
        for (let group of toolboxGroups) {
            let h = Math.ceil(group.gates.length / 2);
            this.groupHeight = Math.max(this.groupHeight, h);
        }
    }

    /**
     * @param {!CustomGateSet} customGateSet
     */
    withCustomGatesInserted(customGateSet) {
        let groups = [...this._originalGroups];
        for (let i = 0; i < Math.max(1, customGateSet.gates.length); i += this.groupHeight*2) {
            let group = {
                hint: 'Custom Gates',
                gates: [undefined, undefined, undefined, undefined, undefined, undefined]
            };
            for (let j = 0; j < this.groupHeight*2 && i + j < customGateSet.gates.length; j++) {
                group.gates[j] = customGateSet.gates[i + j];
            }
            groups.push(group);
        }
        return new DisplayedToolbox(
            this.name,
            this.top,
            groups,
            this.labelsOnTop,
            this._originalGroups,
            this._standardApperance);
    }

    /**
     * @param {!int} groupIndex
     * @param {!int} gateIndex
     * @returns {!Rect}
     * @private
     */
    gateDrawRect(groupIndex, gateIndex) {
        let dx = gateIndex % 2;
        let dy = Math.floor(gateIndex / 2);

        let x = Config.TOOLBOX_MARGIN_X +
            dx * Config.TOOLBOX_GATE_SPAN +
            groupIndex * Config.TOOLBOX_GROUP_SPAN;
        let y = this.top +
            (this.labelsOnTop ? Config.TOOLBOX_MARGIN_Y : 3) +
            dy * Config.TOOLBOX_GATE_SPAN;

        return new Rect(
            Math.round(x - 0.5) + 0.5,
            Math.round(y - 0.5) + 0.5,
            Config.GATE_RADIUS * 2,
            Config.GATE_RADIUS * 2);
    }

    /**
     * @param {!int} groupIndex
     * @returns {!Rect}
     * @private
     */
    groupLabelRect(groupIndex) {
        if (this.labelsOnTop) {
            let r = this.gateDrawRect(groupIndex, 0);
            let c = new Point(r.x + Config.TOOLBOX_GATE_SPAN - Config.TOOLBOX_GATE_SPACING / 2, r.y - 18);
            return new Rect(c.x - Config.TOOLBOX_GATE_SPAN, c.y, Config.TOOLBOX_GATE_SPAN * 2, 20 - 4); 
        }
    
        let r = this.gateDrawRect(groupIndex, this.groupHeight * 2 - 2);
        let c = new Point(r.x + Config.TOOLBOX_GATE_SPAN - Config.TOOLBOX_GATE_SPACING / 2, r.bottom());
        return new Rect(c.x - Config.TOOLBOX_GATE_SPAN, c.y + 2, Config.TOOLBOX_GATE_SPAN * 2, 20); 
    }
    

    /**
     *
     * @param {undefined|!Point} pt
     *
     * @returns {undefined|!{groupIndex: !int, gateIndex: !int, gate: !Gate, rect: !Rect}}
     */
    findGateAt(pt) {
        if (pt === undefined) {
            return undefined;
        }
        if (pt.x < Config.TOOLBOX_MARGIN_X) {
            return undefined;
        }
        let scrollX = DisplayedToolbox.scrollX || 0;
        let adjustedPt = new Point(pt.x + scrollX, pt.y);
        for (let groupIndex = 0; groupIndex < this.toolboxGroups.length; groupIndex++) {
            let group = this.toolboxGroups[groupIndex];
            for (let gateIndex = 0; gateIndex < group.gates.length; gateIndex++) {
                let gate = group.gates[gateIndex];
                let rect = this.gateDrawRect(groupIndex, gateIndex);
                if (gate !== undefined && rect.containsPoint(adjustedPt)) {
                    return {groupIndex, gateIndex, gate, rect};
                }
            }
        }
        return undefined;
    }

    /**
     * @param {!DisplayedToolbox|*} other
     * @returns {!boolean}
     */
    isEqualTo(other) {
        return other instanceof DisplayedToolbox &&
            this.name === other.name &&
            this.top === other.top &&
            this.toolboxGroups === other.toolboxGroups &&
            this.labelsOnTop === other.labelsOnTop;
    }

    /**
     * @param {!number} newTop
     * @returns {!DisplayedToolbox}
     */
    withTop(newTop) {
        return new DisplayedToolbox(
            this.name,
            newTop,
            this.toolboxGroups,
            this.labelsOnTop,
            this._originalGroups,
            this._standardApperance);
    }

    /**
     * @param {!number} maxWidth
     * @returns {!Rect}
     */
    curArea(maxWidth) {
        return new Rect(0, this.top, maxWidth, this.desiredHeight());
    }

    /**
     * @param {!Painter} painter
     * @param {!CircuitStats} stats
     * @param {!Hand} hand
     */
    paint(painter, stats, hand) {
        const isDarkMode = localStorage.getItem('dark_mode') === 'true';
        let bg = isDarkMode ? Config.DARK_BG_TOOLBOX : Config.BACKGROUND_COLOR_TOOLBOX;
        painter.fillRect(this.curArea(painter.canvas.width), bg);

        let scrollX = DisplayedToolbox.scrollX || 0;
        let marginX = Config.TOOLBOX_MARGIN_X;

        // Clip gate painting area so gates don't spill into title or out of bounds
        painter.ctx.save();
        painter.ctx.beginPath();
        painter.ctx.rect(marginX, this.top, Math.max(0, painter.canvas.width - marginX), this.desiredHeight());
        painter.ctx.clip();

        this._standardApperance.paint(-scrollX, this.top, painter);
        this._paintDeviations(painter, stats, hand);

        painter.ctx.restore();

        // Fixed title block on the left
        painter.fillRect(new Rect(0, this.top, marginX, this.desiredHeight()), bg);
        // Vertical divider between title block and scrollable gates
        painter.ctx.save();
        painter.ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
        painter.ctx.lineWidth = 1;
        painter.ctx.beginPath();
        painter.ctx.moveTo(marginX - 0.5, this.top);
        painter.ctx.lineTo(marginX - 0.5, this.top + this.desiredHeight());
        painter.ctx.stroke();
        painter.ctx.restore();

        // Title text
        let r = new Rect(0, this.top, marginX, this.desiredHeight());
        let {x, y} = r.center();
        painter.ctx.save();
        painter.ctx.translate(x, y);
        painter.ctx.rotate(-Math.PI/2);
        let textColor = isDarkMode ? '#94a3b8' : 'black';
        painter.printLine(this.name, new Rect(-r.h / 2, -r.w / 2, r.h, r.w), 0.5, textColor, 24);
        painter.ctx.restore();
    }

    /**
     * @param {!Painter} painter
     */
    _paintStandardContents(painter) {
        // Gates.
        for (let groupIndex = 0; groupIndex < this.toolboxGroups.length; groupIndex++) {
            this._paintGatesInGroup(painter, Hand.EMPTY, groupIndex);
        }

        // Title of toolbox.
        let r = this.curArea(Config.TOOLBOX_MARGIN_X);
        let {x, y} = r.center();
        painter.ctx.save();
        painter.ctx.translate(x, y);
        painter.ctx.rotate(-Math.PI/2);
        painter.printLine(this.name, new Rect(-r.h / 2, -r.w / 2, r.h, r.w), 0.5, 'black', 24);
        painter.ctx.restore();
    }

    /**
     * @param {!Painter} painter
     * @param {!CircuitStats} stats
     * @param {!Hand} hand
     */
    _paintDeviations(painter, stats, hand) {
        let scrollX = DisplayedToolbox.scrollX || 0;
        for (let groupIndex = 0; groupIndex < this.toolboxGroups.length; groupIndex++) {
            // Custom gates.
            if (groupIndex >= this._originalGroups.length) {
                painter.ctx.save();
                painter.ctx.translate(-scrollX, 0);
                this._paintGatesInGroup(painter, hand, groupIndex);
                painter.ctx.restore();
            }

            // Keep scroll blockers positioned over gates.
            let group = this.toolboxGroups[groupIndex];
            for (let gateIndex = 0; gateIndex < group.gates.length; gateIndex++) {
                if (group.gates[gateIndex] !== undefined) {
                    let rect = this.gateDrawRect(groupIndex, gateIndex).shiftedBy(-scrollX, 0);
                    if (rect.right() > Config.TOOLBOX_MARGIN_X && rect.x < painter.canvas.width) {
                        painter.noteTouchBlocker({
                            rect: rect,
                            cursor: 'pointer'}
                        );
                    }
                }
            }
        }

        this._paintFocus(painter, stats, hand);
    }

    /**
     * @param {!Painter} painter
     * @param {!Hand} hand
     * @param {!int} groupIndex
     * @private
     */
    _paintGatesInGroup(painter, hand, groupIndex) {
        let group = this.toolboxGroups[groupIndex];
        let r = this.groupLabelRect(groupIndex);
        painter.print(
            group.hint,
            r.x + r.w/2,
            r.y + r.h/2,
            'center',
            'middle',
            'black',
            '16px sans-serif',
            r.w,
            r.h);

        for (let gateIndex = 0; gateIndex < group.gates.length; gateIndex++) {
            let gate = group.gates[gateIndex];
            if (gate === undefined) {
                continue;
            }
            let rect = this.gateDrawRect(groupIndex, gateIndex);
            DisplayedToolbox._paintGate(painter, hand, gate, rect, false, CircuitStats.EMPTY);
        }
    }

    /**
     * @param {!Painter} painter
     * @param {!Hand} hand
     * @param {!Gate} gate
     * @param {!Rect} rect
     * @param {!boolean} isHighlighted
     * @param {!CircuitStats} stats
     * @private
     */
    static _paintGate(painter, hand, gate, rect, isHighlighted, stats) {
        let drawer = gate.customDrawer || GatePainting.DEFAULT_DRAWER;
        painter.startIgnoringIncomingTouchBlockers();
        drawer(new GateDrawParams(
            painter,
            hand,
            true, // inToolbox
            isHighlighted,
            false, // isResizeShowing
            false, // isResizeHighlighted
            rect,
            gate,
            stats,
            undefined, // positionInCircuit
            [], // focusPoints
            undefined)); // customStatsForCircuitPos
        painter.stopIgnoringIncomingTouchBlockers();
    }

    /**
     * @param {!Painter} painter
     * @param {!CircuitStats} stats
     * @param {!Hand} hand
     * @private
     */
    _paintFocus(painter, stats, hand) {
        let scrollX = DisplayedToolbox.scrollX || 0;
        // Focus when hovering, but also when dragging a gate over its own toolbox spot.
        let f = this.findGateAt(hand.pos);
        if (f === undefined || (hand.heldGate !== undefined && f.gate.symbol !== hand.heldGate.symbol)) {
            return;
        }

        let screenRect = f.rect.shiftedBy(-scrollX, 0);

        // Draw highlight.
        DisplayedToolbox._paintGate(painter, hand, f.gate, screenRect, true, stats);

        // Size tooltip.
        painter.ctx.save();
        painter.ctx.globalAlpha = 0;
        painter.ctx.translate(-10000, -10000);
        let {maxW, maxH} = WidgetPainter.paintGateTooltip(
            painter, new Rect(0, 0, 500, 300), f.gate, stats.time, true);
        let mayNeedToScale = maxW >= 500 || maxH >= 300;
        painter.ctx.restore();

        // Draw tooltip.
        let cx = screenRect.right() + 1;
        let hintRect = new Rect(cx, screenRect.center().y, maxW, maxH).
            snapInside(painter.paintableArea().skipRight(10).skipBottom(20));
        painter.defer(() => WidgetPainter.paintGateTooltip(painter, hintRect, f.gate, stats.time, mayNeedToScale));
    }

    /**
     * @returns {!number}
     */
    desiredWidth() {
        return this.gateDrawRect(this.toolboxGroups.length - 1, 5).right() + 5;
    }

    //noinspection JSMethodCanBeStatic
    /**
     * @returns {!number}
     */
    desiredHeight() {
        return (1 + this.groupHeight) * (Config.GATE_RADIUS * 2 + 2) + Config.GATE_RADIUS;
    }

    /**
     * @param {!Hand} hand
     * @returns {!Hand} newHand
     */
    tryGrab(hand) {
        if (hand.pos === undefined || hand.isBusy()) {
            return hand;
        }

        let f = this.findGateAt(hand.pos);
        if (f === undefined) {
            return hand;
        }

        if (f.gate.symbol === MysteryGateSymbol) {
            setTimeout(() => { this.toolboxGroups[f.groupIndex].gates[f.gateIndex] = MysteryGateMaker(); }, 0.1);
        }
        return hand.withHeldGate(f.gate, new Point(Config.GATE_RADIUS, Config.GATE_RADIUS));
    }

    /**
     * @param {!Hand} hand
     * @returns {Infinity|!number}
     */
    stableDuration(hand) {
        return seq(hand.hoverPoints()).
            map(p => this.findGateAt(p)).
            filter(e => e !== undefined).
            map(e => e.gate.stableDuration()).
            min(Infinity);
    }
}

DisplayedToolbox.scrollX = 0;

export {DisplayedToolbox}
