import memoryConstants from '../constants/memory.js';

const validCategory = (inputCategory) => {
  let category = null;
  const isString = typeof inputCategory;
  if (isString !== 'string') {
    throw new Error('Category must be a string');
  }; 
  memoryConstants.categories.forEach((item, idx) => {
    inputCategory === item.name && (category = item.name);
  })
  if (category) {
    return category;
  } else {
    throw new Error('Invalid Category');
  } 
};

const validLevel = (inputLevel) => {
  let level = null;
  const isString = typeof inputLevel;
  if (isString !== 'string') {
    throw new Error('Level must be a string');
  }; 
  memoryConstants.levels.forEach((item, idx) => {
    inputLevel === item.name  && (level = item.value); 
  })
  if (level) {
    return level;
  } else {
    throw new Error('Invalid Level');
  }; 
};

const validXY = (x, y, xLength, yLength) => {
  if (typeof x !== 'number' && typeof y !== 'number') {
    throw new Error('x and y must be numbers');
  }
  if(!(x >= 0 && x <= xLength-1)) {
    throw new Error(`The x value must be between 0 - ${xLength-1}`);
  } 
  if(!(y >= 0 && y <= yLength-1)) {
    throw new Error(`The x value must be between 0 - ${yLength-1}`);
  } 
  return {
    positionX: x,
    positionY: y,
  }            
};

const validMenuCategory = (inputCategory) => {
  let category = null;
  memoryConstants.categories.forEach((item, idx) => {
    inputCategory === item.menuOption && (category = item.name);
  })
  return category;
};

const validMenuLevel = (inputLevel) => {
  let level = null;
  memoryConstants.levels.forEach((item, idx) => {
    item.menuOption === inputLevel && (level = item.name); 
  })
  return level;
};

const validMenuXY = (position, xLength, yLength) => {
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
  validMenuCategory,
  validMenuLevel,
  validMenuXY,
};

export default validationUtils;
