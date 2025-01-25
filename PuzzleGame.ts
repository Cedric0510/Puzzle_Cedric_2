import { Game } from "./Game.js";

console.log("PuzzleGame.ts: Starting application");

try {
    let game: Game = new Game(800, 600, 1);
    console.log("PuzzleGame.ts: Game instance created");
    game.run();
    console.log("PuzzleGame.ts: Game run method called");
} catch (error) {
    console.error("PuzzleGame.ts: Error initializing the game", error);
}