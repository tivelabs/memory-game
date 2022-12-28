import CardCollection from '../src/CardCollection';
import Card from '../src/Card';

describe('CardDictionary', () => {
  it('setCard with animals data', () => {
    const itemsList = ['DOG', 'CAT', 'DOG', 'CAT']
    const cards = new CardCollection()
    for (let i = 0; i < itemsList.length; i++) {
        cards.setCard(`${i}`, new Card(itemsList[i]))
    };
    const cardsLength = cards.cardsLength();
    expect(cardsLength).toEqual(itemsList.length);
  });
});
