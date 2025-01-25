import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class Wall extends Point {
    private static border_color: string = "black";

    constructor(id: number, x: number, y: number, color: string = 'grey', size: number = 50){
        super(id, x, y, color, size);
        console.log(`Wall.ts: Created Wall id=${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }

    public draw(): void {
        this.drawer.drawRectangle(this.getX(), this.getY(), this.getColor(), this.getSize());
        this.drawer.drawRectangle(this.getX(), this.getY(), Wall.border_color, this.getSize() - 5);
    }

    public override getShape(): Shape {
        return Shape.SQUARE;
    }

    public override get_z_index(): number {
        return 1;
    }

    public override activate(): boolean {
        console.log("Wall.ts: Wall activated");
        return super.activate();
    }
}