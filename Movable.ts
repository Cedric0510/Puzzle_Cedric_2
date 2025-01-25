import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
import { Direction } from "./Direction.js";

export class Movable extends Point {
    private _can_move: boolean;

    constructor(id: number, x: number, y: number, color: string = 'black', size: number = 50){
        super(id, x, y, color, size);
        this._can_move = true;
        console.log(`Movable.ts: Created Movable id=${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }

    public can_move(): boolean {
        return this._can_move;
    }

    public nextPos(dir: Direction): Point {
        return new Point(
            this.id,
            this.getX() + Number(dir === Direction.RIGHT) - Number(dir === Direction.LEFT),
            this.getY() + Number(dir === Direction.DOWN) - Number(dir === Direction.UP)
        );   
    }

    /**
     * Déplace l'objet vers une cible.
     * @param target - Point cible.
     */
    public moveTo(target: Point): void {
        if(!this._can_move) return;
        this.setX(target.getX());
        this.setY(target.getY());
        console.log(`Movable.ts: Moved to (${target.getX()}, ${target.getY()})`);
    }

    public move(dir: Direction): void {
        const targetPos = this.nextPos(dir);
        this.moveTo(targetPos);
    }

    public override get_z_index(): number {
        return 1;
    }

    public override getShape(): Shape {
        return Shape.CIRCLE;
    }

    public override activate(): boolean {
        console.log("Movable.ts: Movable activated");
        return super.activate();
    }
}