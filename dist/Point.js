"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const Drawer_js_1 = require("./Drawer.js");
const Shape_js_1 = require("./Shape.js");
class Point {
    id;
    x;
    y;
    color;
    size;
    drawer;
    constructor(id, x, y, color = 'black', size = 50) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.drawer = new Drawer_js_1.Drawer(800, 600, 1);
        console.log(`Point.ts: Created Point id=${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getColor() {
        return this.color;
    }
    getSize() {
        return this.size;
    }
    setX(x) {
        this.x = x;
        console.log(`Point.ts: setX called with ${x}`);
    }
    setY(y) {
        this.y = y;
        console.log(`Point.ts: setY called with ${y}`);
    }
    setPos(x, y) {
        console.log(`Point.ts: Setting position to (${x}, ${y})`);
        this.x = x;
        this.y = y;
    }
    isOn(point) {
        return this.x === point.getX() && this.y === point.getY();
    }
    get_z_index() {
        return 0;
    }
    getShape() {
        return Shape_js_1.Shape.SQUARE;
    }
    draw() {
        this.drawer.drawRectangle(this.x, this.y, this.color, this.size);
    }
    setColor(newColor) {
        this.color = newColor;
        console.log(`Point.ts: setColor called with ${newColor}`);
    }
    activate() {
        console.log("Point.ts: activate called");
        return false;
    }
}
exports.Point = Point;
