import arrayUtils from '../src/utils/arrayUtils';

describe('arrayUtils', () => {
  it('getGameItems with numbers data', () => {
    const gameItems = arrayUtils.getGameItems('numbers', 1);
    expect(Array.isArray(gameItems)).toBeTruthy();
    expect(gameItems.length).toEqual(2);
    expect(JSON.stringify(gameItems[0])).toEqual(JSON.stringify(gameItems[1]));
  });
  it('getGameItems with animals data', () => {
    const gameItems = arrayUtils.getGameItems('animals', 1);
    expect(Array.isArray(gameItems)).toBeTruthy();
    expect(gameItems.length).toEqual(2);
    expect(JSON.stringify(gameItems[0])).toEqual(JSON.stringify(gameItems[1]));
  });
});
