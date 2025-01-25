"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivablePoint = void 0;
const Point_js_1 = require("./Point.js");
class ActivablePoint extends Point_js_1.Point {
    constructor(id, x, y, color, size) {
        super(id, x, y, color, size);
        console.log(`ActivablePoint.ts: Created ActivablePoint id=${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }
    activate() {
        console.log(`ActivablePoint.ts: ActivablePoint id=${this.id} activated`);
        // Add any additional activation logic here
        return super.activate();
    }
}
exports.ActivablePoint = ActivablePoint;
