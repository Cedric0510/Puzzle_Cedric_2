"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndPlate = void 0;
const Plate_js_1 = require("./Plate.js");
const Shape_js_1 = require("./Shape.js");
class EndPlate extends Plate_js_1.Plate {
    static color = "gold";
    constructor(id, x, y) {
        super(id, x, y, EndPlate.color, 60);
        console.log(`EndPlate.ts: Created EndPlate id=${id} at (${x}, ${y}) with color ${EndPlate.color}`);
    }
    activate() {
        this.setColor("goldenrod");
        console.log("EndPlate.ts: EndPlate activated, level completed!");
        return super.activate();
    }
    getShape() {
        return Shape_js_1.Shape.DIAMOND;
    }
    get_z_index() {
        return 2;
    }
}
exports.EndPlate = EndPlate;
