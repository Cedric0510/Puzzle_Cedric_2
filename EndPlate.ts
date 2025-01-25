import { Plate } from "./Plate.js";
import { Shape } from "./Shape.js";

export class EndPlate extends Plate {
    public static color: string = "gold";

    constructor(id: number, x: number, y: number){
        super(id, x, y, EndPlate.color, 60);
        console.log(`EndPlate.ts: Created EndPlate id=${id} at (${x}, ${y}) with color ${EndPlate.color}`);
    }

    public override activate(): boolean {
        this.setColor("goldenrod");
        console.log("EndPlate.ts: EndPlate activated, level completed!");
        return super.activate();
    }

    public override getShape(): Shape {
        return Shape.DIAMOND;
    }

    public override get_z_index(): number {
        return 2;
    }
}