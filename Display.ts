import { Drawer } from "./Drawer.js";
import { Game } from "./Game.js";
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class Display {
    protected drawer: Drawer;

    constructor(width: number, height: number, scale: number){
        console.log("Display.ts: Initializing Display");
        this.drawer = new Drawer(width, height, scale);
    }

    public draw(game: Game): void {
        console.log("Display.ts: Drawing game");
        this.drawer.clear();
        let z_index: number = 0;
        let objects: Point[] = game.getObjects();
        let left_obj: Point[] = [];

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

    public draw_object(obj: Point, curr_z_index: number): boolean {
        console.log(`Display.ts: Drawing object with z-index ${curr_z_index}`);
        if(obj.get_z_index() != curr_z_index) return false;

        switch(obj.getShape()){
            case Shape.CIRCLE:
                console.log("Display.ts: Drawing Circle");
                this.drawer.drawCircle(obj.getX(), obj.getY(), obj.getColor(), obj.getSize());
                break;
            case Shape.SQUARE:
                console.log("Display.ts: Drawing Rectangle");
                this.drawer.drawRectangle(obj.getX(), obj.getY(), obj.getColor(), obj.getSize());
                break;
            case Shape.DIAMOND:
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