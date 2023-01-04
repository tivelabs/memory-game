class CardCollection {
  #matches;
  #selected;
  #cardsSelected;

  constructor () {
    this.#matches = 0
    this.#selected = 0
    this.#cardsSelected = []
    this.cards = {}
  };

  hasCard (key) {
    return this.cards.hasOwnProperty(key);
  };

  setCard (key, value) {
    this.cards[key] = value;
  };

  getCard (key) {
    return this.hasCard(key) ? this.cards[key] : undefined;
  };
  
  getMatches () {
    return this.#matches;
  };

  getSelected () {
    return this.#selected;
  };

  getCardsSelected () {
    return this.#cardsSelected;
  };

  clearCardsSelected () {
    this.#cardsSelected = [];
    this.#selected = 0;
  };

  cardsLength () {
    return Object.keys(this.cards).length;
  };

  getCards () {
    return this.cards;
  };

  selectCard (key) {
    this.cards[key].selectCard();
    this.#cardsSelectedAdd();
    this.#setCardsSelected(key)
    return this.cards[key].getBack();
  };

  unselectCard (key) {
    this.cards[key].unselectCard();
  };

  areTwinCards (key1, key2) {
    const twins = (this.cards[key1].hasMatchedCard(this.cards[key2].getBack().id) &&
    this.cards[key2].hasMatchedCard(this.cards[key1].getBack().id));
    twins && this.#cardsMatchesAdd();
    return twins;
  };

  #setCardsSelected (key) {
    this.#cardsSelected.push(key)
  };

  #cardsMatchesAdd () {
    this.#matches++;
  };

  #cardsSelectedAdd () {
    this.#selected++;
  };
}

export default CardCollection;