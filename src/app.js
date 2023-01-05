import MemoryGame from './MemoryGame.js';
import renderUtils from './utils/renderUtils.js';
import inputs from './helpers/inputs.js';
import validationUtils from './utils/validationUtils.js';

const startGame = async () => {
  let category = null;
  let level = null;
  let validation = {};
  let cardSelected = null;
  renderUtils.renderTitle();
  renderUtils.renderCategory();
  do {
    let inputCategory = parseInt(await inputs.askCategory());
    category = validationUtils.validMenuCategory(inputCategory);
    !category && renderUtils.renderInvalid('category');
  } while (!category);
  console.clear();
  renderUtils.renderLevel();

  do {
    let inputLevel = parseInt(await inputs.askLevel())
    level = validationUtils.validMenuLevel(inputLevel);
    !level && renderUtils.renderInvalid('level');      
  } while (!level);
  console.clear();
  const memoryGame = new MemoryGame();
  const init = memoryGame.initGame(category, level);

  do {
    let position = await inputs.askCoordinates();
    validation = validationUtils.validMenuXY(position, init.xLength, init.yLength);
    if (validation.valid) { 
      cardSelected = memoryGame.handleCardSelected(validation.positionX, validation.positionY)
    } else {
      renderUtils.renderInvalid('[x,y] index coordinates')    
    }
  } while (!cardSelected.isThereAWinner || !validation.valid);
  renderUtils.renderWin();
  process.exit() 
};

startGame()
