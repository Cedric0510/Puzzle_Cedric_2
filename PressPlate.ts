import { Plate } from "./Plate.js";
import { Shape } from "./Shape.js";

export class PressPlate extends Plate {
    public static color: string = "grey";

    constructor(id: number, x: number, y: number){
        super(id, x, y, PressPlate.color, 50);
        console.log(`PressPlate.ts: Created PressPlate id=${id} at (${x}, ${y}) with color ${PressPlate.color}`);
    }

    public override activate(): boolean {
        this.setColor("green");
        console.log("PressPlate.ts: PressPlate activated, color changed to green");
        return super.activate();
    }

    public override getShape(): Shape {
        return Shape.DIAMOND;
    }

    public override get_z_index(): number {
        return 1;
    }
}