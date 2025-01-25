import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class Plate extends Point {
    protected static border_color: string = "black";

    constructor(id: number, x: number, y: number, color: string, size: number){
        super(id, x, y, color, size);
        console.log(`Plate.ts: Created Plate id=${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }

    public draw(): void {
        this.drawer.drawDiamond(this.getX(), this.getY(), this.getColor(), this.getSize());
        this.drawer.drawDiamond(this.getX(), this.getY(), Plate.border_color, this.getSize() * 0.8);
    }

    public can_walk_on(): boolean {
        return true;
    }

    public activate(): boolean {
        console.log("Plate.ts: activate method called");
        return true;
    }

    public setColor(newColor: string): void {
        this.color = newColor;
        console.log(`Plate.ts: setColor called with ${newColor}`);
    }

    public getShape(): Shape {
        return Shape.DIAMOND;
    }

    public get_z_index(): number {
        return 1;
    }
}