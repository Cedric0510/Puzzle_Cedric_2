"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plate = void 0;
const Point_js_1 = require("./Point.js");
const Shape_js_1 = require("./Shape.js");
class Plate extends Point_js_1.Point {
    static border_color = "black";
    constructor(id, x, y, color, size) {
        super(id, x, y, color, size);
        console.log(`Plate.ts: Created Plate id=${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }
    draw() {
        this.drawer.drawDiamond(this.getX(), this.getY(), this.getColor(), this.getSize());
        this.drawer.drawDiamond(this.getX(), this.getY(), Plate.border_color, this.getSize() * 0.8);
    }
    can_walk_on() {
        return true;
    }
    activate() {
        console.log("Plate.ts: activate method called");
        return true;
    }
    setColor(newColor) {
        this.color = newColor;
        console.log(`Plate.ts: setColor called with ${newColor}`);
    }
    getShape() {
        return Shape_js_1.Shape.DIAMOND;
    }
    get_z_index() {
        return 1;
    }
}
exports.Plate = Plate;
