import memoryConstants from '../constants/memory.js';

const renderTitle = () => {
  console.log('*******************\n')
  console.log('*   MEMORY GAME   *\n');
  console.log('*******************\n')
};

const renderCategory = () => {
  console.log('Choose a category:\n')
  console.log(`Enter [1] for ${memoryConstants.categories[0]}, and [2] for ${memoryConstants.categories[1]}`)
};

const renderLevel = () => {
  console.log('Choose the game level:\n')
  console.log('Enter [1] for easy, [2] for medium, [3] for hard')
};

const renderCards = (cards, render, x, y) => {
  console.log('-------------------------------');
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (typeof cards[`${i}_${j}`].getBack() !== 'string') {
        render[i][j] = cards[`${i}_${j}`].getBack().name;
      } else {
        render[i][j] = cards[`${i}_${j}`].getBack();
      }    
    }
  }
  console.table(render)
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
