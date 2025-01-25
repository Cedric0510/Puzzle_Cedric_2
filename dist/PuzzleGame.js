"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_js_1 = require("./Game.js");
console.log("PuzzleGame.ts: Starting application");
try {
    let game = new Game_js_1.Game(800, 600, 1);
    console.log("PuzzleGame.ts: Game instance created");
    game.run();
    console.log("PuzzleGame.ts: Game run method called");
}
catch (error) {
    console.error("PuzzleGame.ts: Error initializing the game", error);
}
