import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class Player extends Point {
    private name: string;
    private static border_color: string = "black";

    constructor(id: number, x: number, y: number, name: string, color: string, size: number){
        super(id, x, y, color, size);
        this.name = name;
        console.log(`Player.ts: Created Player ${name} with ID ${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }

    public override draw(): void {
        super.draw();
        this.drawer.drawCircle(this.getX(), this.getY(), Player.border_color, this.getSize() - 5);
    }

    public override getShape(): Shape {
        return Shape.CIRCLE;
    }

    public override get_z_index(): number {
        return 1;
    }

    public override activate(): boolean {
        console.log(`Player.ts: ${this.name} activated`);
        return super.activate();
    }
}
