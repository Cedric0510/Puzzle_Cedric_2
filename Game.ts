import { Display } from "./Display.js";
import { Player } from "./Player.js";
import { EndPlate } from "./EndPlate.js";
import { PressPlate } from "./PressPlate.js";
import { Wall } from "./Wall.js";
import { Point } from "./Point.js";
import { Direction } from "./Direction.js";

function rand_int_in_range(min:number, max:number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class Game {
    protected display: Display;
    protected objects: Point[];
    protected player: Player;
    protected player2: Player;
    protected width: number;
    protected height: number;
    protected isOver: boolean = false;
    protected level: number = 1;

    constructor(width: number, height: number, scale: number){
        console.log("Game.ts: Initializing Game");
        this.display = new Display(width, height, scale);
        this.width = width;
        this.height = height;
        this.player = new Player(1, width / 2 - 50, height / 2, "Player1", "red", 50);
        this.player2 = new Player(2, width / 2 + 50, height / 2, "Player2", "blue", 50);
        this.objects = [];
        console.log("Game.ts: Players created and initialized");
    }

    public getObjects(): Point[] {
        console.log("Game.ts: getObjects called");
        return this.objects;
    }

    public getEmptyPoint(padding:number=0): Point{
        console.log("Game.ts: getEmptyPoint called");
        let x_pos : number;
        let y_pos : number;
        let empty_point : Point;

        do{
            x_pos = rand_int_in_range(padding, this.width - padding);
            y_pos = rand_int_in_range(padding, this.height - padding);
            empty_point = new PressPlate(999, x_pos, y_pos);
        }while(this.getObstacle(empty_point));

        console.log(`Game.ts: Empty point found at (${x_pos}, ${y_pos})`);
        return empty_point;
    }

    public getObstacle(point: Point): Point | undefined{
        console.log("Game.ts: Checking for obstacle at point");
        for(let obj of this.objects){
            if(obj.isOn(point) && !this.isWalkable(obj)) {
                console.log("Game.ts: Obstacle found");
                return obj;
            }
        }
        console.log("Game.ts: No obstacle found");
        return undefined;
    }

    protected isWalkable(obj: Point): boolean{
        console.log("Game.ts: Checking if object is walkable");
        if("can_walk_on" in obj && !(obj as any).can_walk_on()) return false;
        return true;
    }

    public run(): void{
        console.log("Game.ts: run method started");
        this.createLevel();
        this.handleEvent();
        console.log("Game.ts: run method completed");
    }

    handleEvent() {
        console.log("Game.ts: handleEvent called");
    }

    createLevel() {
        console.log("Game.ts: Creating level");
        this.objects.push(this.player);
        this.objects.push(this.player2);

        for(let i:number = 0; i < this.level; i++){
            let wall: Wall = new Wall(
                100 + i * 60, 
                100 + i * 60, 
                100 + i * 60, 
                "grey", 
                50
            );
            this.objects.push(wall);
        }

        let endPlate: EndPlate = new EndPlate(2000 + this.level, this.width - 100, this.height - 100);
        this.objects.push(endPlate);

        this.updateDisplay();
        console.log("Game.ts: Level created");
    }

    protected updateDisplay(): void{
        console.log("Game.ts: Updating display");
        this.display.draw(this);
    }
}