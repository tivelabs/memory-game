import MemoryGame from '../src/MemoryGame';

describe('MemoryGame', () => {
  it('initGame with animals', () => {
    const memoryGame = new MemoryGame
    memoryGame.initGame('animals', 6);
    const initialized = memoryGame.getInitialized();
    expect(initialized).toBeTruthy();
  });
  it('initGame with numbers', () => {
    const memoryGame = new MemoryGame
    memoryGame.initGame('numbers', 6);
    const initialized = memoryGame.getInitialized();
    expect(initialized).toBeTruthy();
  });
});
