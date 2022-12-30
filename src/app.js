import MemoryGame from './MemoryGame.js';
import renderUtils from './utils/renderUtils.js';
import inputs from './helpers/inputs.js';
import validationUtils from './utils/validationUtils.js';

const startGame = async () => {
  let category = null;
  let level = null;
  let validation = {};
  renderUtils.renderTitle();
  renderUtils.renderCategory();
  do {
    let inputCategory = parseInt(await inputs.askCategory());
    category = validationUtils.validCategory(inputCategory);
    !category && renderUtils.renderInvalid('category');
  } while (!category);
  console.clear();
  renderUtils.renderLevel();

  do {
    let inputLevel = parseInt(await inputs.askLevel())
    level = validationUtils.validLevel(inputLevel);
    !level && renderUtils.renderInvalid('level');      
  } while (!level);
  console.clear();
  const memoryGame = new MemoryGame();
  memoryGame.initGame(category, level);

  do {
    let position = await inputs.askCoordinates();
    validation = validationUtils.validXY(position, memoryGame.getXLength(), memoryGame.getYLength());
    validation.valid ? 
        memoryGame.handleCardSelected(validation.positionX, validation.positionY) :
        renderUtils.renderInvalid('[x,y] index coordinates')    
  } while (!memoryGame.getIsThereAWinner() || !validation.valid);
  renderUtils.renderWin();
  process.exit() 
};

startGame()
