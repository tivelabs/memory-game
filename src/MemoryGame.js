import arrayUtils from './utils/arrayUtils.js';
import renderUtils from './utils/renderUtils.js';
import Card from './Card.js';
import CardCollection from './CardCollection.js';

class MemoryGame {
  #gameInitialized;
  #renderCards;
  #isThereAWinner;
  #xLength;
  #yLength;
  #cards;

  constructor () {
    this.#gameInitialized = false;
    this.#renderCards = [];
    this.#isThereAWinner = false;
    this.#xLength = 0;
    this.#yLength = 0;
    this.#cards = {};
  };

  initGame (itemsType, levelValue) {
    const itemsList = arrayUtils.getGameItems(itemsType, levelValue);
    this.#cards = new CardCollection()
    this.#initCards(itemsList);
    this.#gameInitialized = true;
    renderUtils.renderCards(this.#renderCards)
  };

  handleCardSelected (x, y) {
    renderUtils.renderSelected(x, y);
    if (!this.#isSelectedCardValid(x, y)) {
      return;
    }
    this.#cards.selectCard(`${x}_${y}`);
    this.#updateRenderCard(x, y)
    renderUtils.renderCards(this.#renderCards)
    this.#handleCardsMatch(x, y);
    this.#verifyWinner();
  };

  getIsThereAWinner () {
    return this.#isThereAWinner;
  };

  getXLength () {
    return this.#xLength;
  };

  getYLength () {
    return this.#yLength;
  };

  getInitialized () {
    return this.#gameInitialized;
  };

  #initCards (randomItems) {
    let count = 0;
    this.#xLength = randomItems.length/3;
    this.#yLength = randomItems.length/this.#xLength;
    this.#renderCards = new Array(this.#xLength);
    for (let i = 0; i < this.#renderCards.length; i++) {
      this.#renderCards[i] = new Array(this.#yLength);
    }
    for (let i = 0; i < this.#xLength; i++) {
      for (let j = 0; j < this.#yLength; j++) {
        this.#cards.setCard(`${i}_${j}`, new Card(randomItems[count]))
        count++;
        this.#updateRenderCard(i, j);
      }
    }
  };

  #clearSelectedCards (key1, key2) {
    this.#cards.unselectCard(`${key1}`);
    this.#cards.unselectCard(`${key2}`);
    this.#cards.clearCardsSelected()
    this.#updateRenderCard(key1.split('_')[0], key1.split('_')[1]);
    this.#updateRenderCard(key2.split('_')[0], key2.split('_')[1]);
    renderUtils.renderCards(this.#renderCards)
  };

  #handleCardsMatch (x, y) {
    const selected = this.#verifyCardsSelected(x, y);
    if (selected.counter < 2) {
      return;
    }
    if (this.#cards.areTwinCards(`${x}_${y}`, selected.selected2)){
      this.#updateRenderCard(x, y)
      this.#updateRenderCard(selected.selected2.split('_')[0], selected.selected2.split('_')[1])
      renderUtils.renderCards(this.#renderCards)
      renderUtils.renderMatch();
    } else {
      renderUtils.renderNoMatch();
    }
    this.#clearSelectedCards(selected.selected1, selected.selected2);
  };

  #verifyWinner () {
    this.#isThereAWinner = (this.#cards.cardsLength() === this.#cards.getMatches()*2)
  };

  #verifyCardsSelected (x, y) {
    let counter = 0;
    let selected1 = '';
    let selected2 = '';
    counter = this.#cards.getSelected();
    let selected = this.#cards.getCardsSelected();
    if (selected.length === 2) {
      selected1 = selected[1];
      selected2 = selected[0];
    } 
    return {counter, selected1, selected2}
  };

  #isSelectedCardValid (x, y) {
    let counter = this.#cards.getSelected();
    let isSelected = this.#cards.getCard(`${x}_${y}`).isSelected();
    let isMatched = this.#cards.getCard(`${x}_${y}`).isMatched();
    return !(counter >= 2 ||
      isSelected === true ||
      isMatched === true ||
      this.#isThereAWinner);
  };

  #updateRenderCard (x, y) {
    this.#renderCards[x][y] = this.#cards.getCard(`${x}_${y}`).getBack().name;
  }
};

export default MemoryGame;
