"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movable = void 0;
const Point_js_1 = require("./Point.js");
const Shape_js_1 = require("./Shape.js");
const Direction_js_1 = require("./Direction.js");
class Movable extends Point_js_1.Point {
    _can_move;
    constructor(id, x, y, color = 'black', size = 50) {
        super(id, x, y, color, size);
        this._can_move = true;
        console.log(`Movable.ts: Created Movable id=${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }
    can_move() {
        return this._can_move;
    }
    nextPos(dir) {
        return new Point_js_1.Point(this.id, this.getX() + Number(dir === Direction_js_1.Direction.RIGHT) - Number(dir === Direction_js_1.Direction.LEFT), this.getY() + Number(dir === Direction_js_1.Direction.DOWN) - Number(dir === Direction_js_1.Direction.UP));
    }
    /**
     * Déplace l'objet vers une cible.
     * @param target - Point cible.
     */
    moveTo(target) {
        if (!this._can_move)
            return;
        this.setX(target.getX());
        this.setY(target.getY());
        console.log(`Movable.ts: Moved to (${target.getX()}, ${target.getY()})`);
    }
    move(dir) {
        const targetPos = this.nextPos(dir);
        this.moveTo(targetPos);
    }
    get_z_index() {
        return 1;
    }
    getShape() {
        return Shape_js_1.Shape.CIRCLE;
    }
    activate() {
        console.log("Movable.ts: Movable activated");
        return super.activate();
    }
}
exports.Movable = Movable;
