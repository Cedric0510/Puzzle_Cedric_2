"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
const Drawer_js_1 = require("./Drawer.js");
const Shape_js_1 = require("./Shape.js");
class Display {
    drawer;
    constructor(width, height, scale) {
        console.log("Display.ts: Initializing Display");
        this.drawer = new Drawer_js_1.Drawer(width, height, scale);
    }
    draw(game) {
        console.log("Display.ts: Drawing game");
        this.drawer.clear();
        let z_index = 0;
        let objects = game.getObjects();
        let left_obj = [];
        while (objects.length) {
            console.log(`Display.ts: Drawing objects at z-index ${z_index}`);
            for (let obj of objects) {
                if (!this.draw_object(obj, z_index)) {
                    left_obj.push(obj);
                }
            }
            objects = left_obj;
            left_obj = [];
            z_index++;
        }
        console.log("Display.ts: Drawing completed");
    }
    draw_object(obj, curr_z_index) {
        console.log(`Display.ts: Drawing object with z-index ${curr_z_index}`);
        if (obj.get_z_index() != curr_z_index)
            return false;
        switch (obj.getShape()) {
            case Shape_js_1.Shape.CIRCLE:
                console.log("Display.ts: Drawing Circle");
                this.drawer.drawCircle(obj.getX(), obj.getY(), obj.getColor(), obj.getSize());
                break;
            case Shape_js_1.Shape.SQUARE:
                console.log("Display.ts: Drawing Rectangle");
                this.drawer.drawRectangle(obj.getX(), obj.getY(), obj.getColor(), obj.getSize());
                break;
            case Shape_js_1.Shape.DIAMOND:
                console.log("Display.ts: Drawing Diamond");
                this.drawer.drawDiamond(obj.getX(), obj.getY(), obj.getColor(), obj.getSize());
                break;
            default:
                console.log(`Display.ts: Unknown shape ${obj.getShape()}`);
                return false;
        }
        return true;
    }
}
exports.Display = Display;
