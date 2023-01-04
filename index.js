import MemoryGame from "./src/MemoryGame.js";
import validationUtils from './src/utils/validationUtils.js';

let memoryGame;

export function initGame(category, level) {
  let validCategory = null;
  let validLevel = null;
  try {
    validCategory = validationUtils.validCategory(category);
  } catch(error) {
    throw new Error(error);
  }
  try {
    validLevel = validationUtils.validLevel(level);
  } catch(error) {
    throw new Error(error);
  }

  memoryGame = new MemoryGame();
  return memoryGame.initGame(validCategory, validLevel);
};

export function selectCard(x, y) {
  try {
    validationUtils.validXY(x, y, memoryGame.getXLength(), memoryGame.getYLength());
  } catch(error) {
    throw new Error(error);
  }
  return memoryGame.handleCardSelected(x, y);  
};