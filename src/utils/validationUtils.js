import memoryConstants from '../constants/memory.js';

const validCategory = (inputCategory) => {
  let category = null;
  memoryConstants.categories.forEach((item, idx) => {
    inputCategory === item.menuOption && (category = item.name);
  })
  return category;
};

const validLevel = (inputLevel) => {
  let level = null;
  memoryConstants.levels.forEach((item, idx) => {
    item.menuOption === inputLevel && (level = item.value); 
  })
  return level;
};

const validXY = (position, xLength, yLength) => {
  let positionX = null;
  let positionY = null;
  if (position.length === 3) {
    const positionArray = position.split('');
    if (positionArray[1] === ',') {
      positionX = parseInt(positionArray[0]);
      positionY = parseInt(positionArray[2]);
      if(isNaN(positionX) || isNaN(positionY) || !(positionX >= 0 && positionX <= xLength-1) || !(positionY >= 0 && positionY <= yLength-1)) {
        return {valid: false};
      } 
      return {
        valid: true,
        positionX,
        positionY,
      }            
    } else {
      return {valid: false};
    }
  } else {
    return {valid: false};
  }
};

const validationUtils = {
  validCategory,
  validLevel,
  validXY,
};

export default validationUtils;
