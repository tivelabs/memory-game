# memory-game

## installing dependencies

- All dependencies will be installed using the following command:

```
npm install
```

## Running the tests

- Just run the following command:

```
npm test
```

## Running the app

- In the root of the applications folder runs the following command:

```
node app.js
```

## Playing the game

1. ### Select a Category

- Choose between 'animals', and 'numbers' categories typing 1 to choose animals and 2 to choose numbers, then press Intro.


2. ### Select a game level

- Choose between 'easy', 'medium', and 'hard' levels typing 1 to choose the easy level, 2 to choose the medium level, and 3 to choose the hard level, then press Intro.


3. ### Select cards

- After setting the category and level, the game shows a card grid hiding the card's values.
- To select a card, just type an index coordinate in the format x,y 
    - The index coordinate x should be a number between the vertical indexes in the grid.
    - The index coordinate y should be a number between the horizontal indexes in the grid.
- After introduce a index coordinate (x,y) press Intro.
- Continue introducing coordinates to select cards until all card matches are discovered.