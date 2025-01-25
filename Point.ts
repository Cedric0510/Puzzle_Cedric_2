import { Drawer } from "./Drawer.js";
import { Shape } from "./Shape.js";

export class Point {
    protected id: number;
    protected x: number;
    protected y: number;
    protected color: string;
    protected size: number;
    protected drawer: Drawer;

    constructor(id: number, x: number, y: number, color: string = 'black', size: number = 50){
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.drawer = new Drawer(800, 600, 1);
        console.log(`Point.ts: Created Point id=${id} at (${x}, ${y}) with color ${color} and size ${size}`);
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getColor(): string {
        return this.color;
    }

    public getSize(): number {
        return this.size;
    }

    public setX(x: number): void {
        this.x = x;
        console.log(`Point.ts: setX called with ${x}`);
    }

    public setY(y: number): void {
        this.y = y;
        console.log(`Point.ts: setY called with ${y}`);
    }

    public setPos(x: number, y: number): void {
        console.log(`Point.ts: Setting position to (${x}, ${y})`);
        this.x = x;
        this.y = y;
    }

    public isOn(point: Point): boolean {
        return this.x === point.getX() && this.y === point.getY();
    }

    public get_z_index(): number {
        return 0;
    }

    public getShape(): Shape {
        return Shape.SQUARE;
    }

    public draw(): void {
        this.drawer.drawRectangle(this.x, this.y, this.color, this.size);
    }

    public setColor(newColor: string): void {
        this.color = newColor;
        console.log(`Point.ts: setColor called with ${newColor}`);
    }

    public activate(): boolean {
        console.log("Point.ts: activate called");
        return false;
    }
}