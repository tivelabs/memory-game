import memoryConstants from '../constants/memory.js';

const renderTitle = () => {
  console.log('*******************\n')
  console.log('*   MEMORY GAME   *\n');
  console.log('*******************\n')
};

const renderCategory = () => {
  console.log('Choose a category:\n')
  console.log(`Enter [1] for ${memoryConstants.categories[0].name}, and [2] for ${memoryConstants.categories[1].name}`)
};

const renderLevel = () => {
  console.log('Choose the game level:\n')
  console.log(`Enter [${memoryConstants.levels[0].menuOption}] for the easy level, [${memoryConstants.levels[1].menuOption}] for the medium level, and [${memoryConstants.levels[2].menuOption}] for the hard level`)
};

const renderCards = (cards) => {
  console.log('-------------------------------');
  console.table(cards)
};

const renderMatch = () => {
  console.log('Match!!');
};

const renderNoMatch = () => {
  console.log('No match!!');
};

const renderSelected = (x, y) => {
  console.log(`Card selected: ${x},${y}`);
};

const renderInvalid = (option) => {
  console.log(`Invalid ${option}, please try again.`);
};

const renderWin = () => {
  console.log('/////////////////////////////\n')
  console.log('//   CONGRATS!! YOU WIN   //\n');
  console.log('////////////////////////////\n')
};

const renderUtils = {
  renderTitle,
  renderCards,
  renderMatch,
  renderNoMatch,
  renderSelected,
  renderCategory,
  renderLevel,
  renderInvalid,
  renderWin,
};

export default renderUtils;
