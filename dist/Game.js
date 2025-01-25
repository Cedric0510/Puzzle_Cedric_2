"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Display_js_1 = require("./Display.js");
const Player_js_1 = require("./Player.js");
const EndPlate_js_1 = require("./EndPlate.js");
const PressPlate_js_1 = require("./PressPlate.js");
const Wall_js_1 = require("./Wall.js");
function rand_int_in_range(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Game {
    display;
    objects;
    player;
    player2;
    width;
    height;
    isOver = false;
    level = 1;
    constructor(width, height, scale) {
        console.log("Game.ts: Initializing Game");
        this.display = new Display_js_1.Display(width, height, scale);
        this.width = width;
        this.height = height;
        this.player = new Player_js_1.Player(1, width / 2 - 50, height / 2, "Player1", "red", 50);
        this.player2 = new Player_js_1.Player(2, width / 2 + 50, height / 2, "Player2", "blue", 50);
        this.objects = [];
        console.log("Game.ts: Players created and initialized");
    }
    getObjects() {
        console.log("Game.ts: getObjects called");
        return this.objects;
    }
    getEmptyPoint(padding = 0) {
        console.log("Game.ts: getEmptyPoint called");
        let x_pos;
        let y_pos;
        let empty_point;
        do {
            x_pos = rand_int_in_range(padding, this.width - padding);
            y_pos = rand_int_in_range(padding, this.height - padding);
            empty_point = new PressPlate_js_1.PressPlate(999, x_pos, y_pos);
        } while (this.getObstacle(empty_point));
        console.log(`Game.ts: Empty point found at (${x_pos}, ${y_pos})`);
        return empty_point;
    }
    getObstacle(point) {
        console.log("Game.ts: Checking for obstacle at point");
        for (let obj of this.objects) {
            if (obj.isOn(point) && !this.isWalkable(obj)) {
                console.log("Game.ts: Obstacle found");
                return obj;
            }
        }
        console.log("Game.ts: No obstacle found");
        return undefined;
    }
    isWalkable(obj) {
        console.log("Game.ts: Checking if object is walkable");
        if ("can_walk_on" in obj && !obj.can_walk_on())
            return false;
        return true;
    }
    run() {
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
        for (let i = 0; i < this.level; i++) {
            let wall = new Wall_js_1.Wall(100 + i * 60, 100 + i * 60, 100 + i * 60, "grey", 50);
            this.objects.push(wall);
        }
        let endPlate = new EndPlate_js_1.EndPlate(2000 + this.level, this.width - 100, this.height - 100);
        this.objects.push(endPlate);
        this.updateDisplay();
        console.log("Game.ts: Level created");
    }
    updateDisplay() {
        console.log("Game.ts: Updating display");
        this.display.draw(this);
    }
}
exports.Game = Game;
