import MemoryGame from './src/MemoryGame.js';
import renderUtils from './src/utils/renderUtils.js';
import validationUtils from './src/utils/validationUtils.js';
import memoryConstants from './src/constants/memory.js';
import readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const ask = (questionText) => {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

const startGame = async () => {
  let type = null;
  let level = null;
  let validation = {};
  renderUtils.renderTitle();
  renderUtils.renderCategory();
  do {
    let inputType = parseInt(await ask("Category ? :> "))
    if ([1, 2].includes(inputType)) {
      inputType === 1 ? type = memoryConstants.categories[0] : type = memoryConstants.categories[1];
    } else {
      renderUtils.renderInvalid('category');
    }
  } while (!type);
  console.clear();
  renderUtils.renderLevel();
  do {
    let inputLevel = parseInt(await ask("Game Level ? :> "))
    const levels = [1, 2, 3];
    if (levels.includes(inputLevel)) {
      levels.forEach((item, idx) => {
        item === inputLevel && (level = memoryConstants.levels[idx]); 
      })
    }else {
      renderUtils.renderInvalid('level');
    }
  } while (!level);
  console.clear();
  const memoryGame = new MemoryGame();
  memoryGame.initGame(type, level);

  do {
    let position = await ask("Enter a Card index coordinates [x,y] :> ")

    validation = validationUtils.validXY(position, memoryGame.getXLength(), memoryGame.getYLength());

    if (validation.valid) {
      memoryGame.handleCardSelected(validation.positionX, validation.positionY);   
    }else {
      renderUtils.renderInvalid('[x,y] index coordinates');
    }
  } while (!memoryGame.getIsThereAWinner() || !validation.valid);
  renderUtils.renderWin();
  process.exit() 
};

startGame()
