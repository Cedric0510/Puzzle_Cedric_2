"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PressPlate = void 0;
const Plate_js_1 = require("./Plate.js");
const Shape_js_1 = require("./Shape.js");
class PressPlate extends Plate_js_1.Plate {
    static color = "grey";
    constructor(id, x, y) {
        super(id, x, y, PressPlate.color, 50);
        console.log(`PressPlate.ts: Created PressPlate id=${id} at (${x}, ${y}) with color ${PressPlate.color}`);
    }
    activate() {
        this.setColor("green");
        console.log("PressPlate.ts: PressPlate activated, color changed to green");
        return super.activate();
    }
    getShape() {
        return Shape_js_1.Shape.DIAMOND;
    }
    get_z_index() {
        return 1;
    }
}
exports.PressPlate = PressPlate;
