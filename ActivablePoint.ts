import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
import { Direction } from "./Direction.js"; // Ensure Direction is imported if used

export class ActivablePoint extends Point {

    constructor(id: number, x: number, y: number, color: string, size: number){
        super(id, x, y, color, size);
        console.log(`ActivablePoint.ts: Created ActivablePoint id=${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }

    public override activate(): boolean {
        console.log(`ActivablePoint.ts: ActivablePoint id=${this.id} activated`);
        // Add any additional activation logic here
        return super.activate();
    }
}