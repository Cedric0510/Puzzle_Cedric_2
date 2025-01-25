"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
const Point_js_1 = require("./Point.js");
const Shape_js_1 = require("./Shape.js");
class Wall extends Point_js_1.Point {
    static border_color = "black";
    constructor(id, x, y, color = 'grey', size = 50) {
        super(id, x, y, color, size);
        console.log(`Wall.ts: Created Wall id=${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }
    draw() {
        this.drawer.drawRectangle(this.getX(), this.getY(), this.getColor(), this.getSize());
        this.drawer.drawRectangle(this.getX(), this.getY(), Wall.border_color, this.getSize() - 5);
    }
    getShape() {
        return Shape_js_1.Shape.SQUARE;
    }
    get_z_index() {
        return 1;
    }
    activate() {
        console.log("Wall.ts: Wall activated");
        return super.activate();
    }
}
exports.Wall = Wall;
