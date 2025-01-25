"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const Point_js_1 = require("./Point.js");
const Shape_js_1 = require("./Shape.js");
class Player extends Point_js_1.Point {
    name;
    static border_color = "black";
    constructor(id, x, y, name, color, size) {
        super(id, x, y, color, size);
        this.name = name;
        console.log(`Player.ts: Created Player ${name} with ID ${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }
    draw() {
        super.draw();
        this.drawer.drawCircle(this.getX(), this.getY(), Player.border_color, this.getSize() - 5);
    }
    getShape() {
        return Shape_js_1.Shape.CIRCLE;
    }
    get_z_index() {
        return 1;
    }
    activate() {
        console.log(`Player.ts: ${this.name} activated`);
        return super.activate();
    }
}
exports.Player = Player;
