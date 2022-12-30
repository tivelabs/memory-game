import CardCollection from '../src/CardCollection';
import Card from '../src/Card';

describe('CardDictionary', () => {
  it('setCard with animals data', () => {
    const itemsList = ['DOG', 'CAT', 'DOG', 'CAT']
    const cards = new CardCollection()
    itemsList.forEach((item, idx) => {
      cards.setCard(`${idx}`, new Card(item))
    });
    const cardsLength = cards.cardsLength();
    expect(cardsLength).toEqual(itemsList.length);
  });
});
