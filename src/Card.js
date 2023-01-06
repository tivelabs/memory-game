import memoryConstants from './constants/memory.js';

class Card {
  #front;
  #back;
  #selected;
  #matched;
  #flipped; 

  constructor (frontData) {
    this.#front = frontData;
    this.#back = memoryConstants.hiddenCardSymbol;
    this.#selected = false;
    this.#matched = false;
    this.#flipped = false;  
  }

  getBack () {
    return this.#back;
  };

  isSelected () {
    return this.#selected;
  };

  isMatched () {
    return this.#matched;
  };

  isFlipped () {
    return this.#flipped;
  };

  selectCard () {
    this.#setSelected(true);
    this.#flipToDiscover();
  };

  unselectCard () {
    this.#setSelected(false);
    if (!this.isMatched()) {
      this.#flipToHide();
    }
  };

  hasMatchedCard (twinId) {
    let match = this.getBack().id === twinId;
    if (match) {
      this.#setMatched(match);
      return match;
    } 
    return match;
  }

  #setBack = (data) => {
    this.#back = data;
  };

  #setFlipped = (data) => {
    this.#flipped = data;
  };

  #setSelected = (data) => {
    this.#selected = data;
  };

  #setMatched = (data) => {
    this.#matched = data;
  };

  #flipToHide = () => {
    this.#setBack(memoryConstants.hiddenCardSymbol);
    this.#setFlipped(false);
  };

  #flipToDiscover = () => {
    this.#setBack(this.#front);
    this.#setFlipped(true)
  };
}

export default Card;
