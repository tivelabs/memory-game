import animals_english from '../data/animals_english.js';
import numbers_english from '../data/numbers_english.js';

const getItemsListByType = type => {
  let itemsList = '';
  switch (type) {
    case 'animals':
      itemsList = animals_english;
      break;
    case 'numbers':
      itemsList = numbers_english;
      break;
    default:
      break;
  }
  return itemsList;
};

const getGameItems = (type, numberItems) => {
  const array = getItemsListByType(type);
  return getRandomItems(array, numberItems);
};

const getRandomItems = (array, numberItems) => {
  let randomIndex = 0;
  let item = {};
  let newArray = [];
  let random = [];
  for (let i = 0; i < numberItems; i++) {
    while (random.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * array.length);
    }
    random[i] = randomIndex;
    item = array[randomIndex];
    newArray[i] = item;
  }
  return pairItems([...newArray, ...newArray]);
};

const pairItems = array => {
  let randomIndex = 0;
  for (let i = 0; i < array.length; i++) {
    randomIndex = Math.floor(Math.random() * i);
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
};

const memoUtils = {
  getGameItems,
};

export default memoUtils;
