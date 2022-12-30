import MemoryGame from "./src/MemoryGame.js";

let memoryGame;

export function initGame(category, level) {
  memoryGame = new MemoryGame();
  memoryGame.initGame(category, level);
};

export function selectCard(x, y) {
    memoryGame.handleCardSelected(x, y);  
    return memoryGame.getIsThereAWinner();
};