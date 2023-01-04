# memory-game

## installing library

    - To install memory-game library in your project just run the following command:

    ```
    npm i @tive-labs/memory-game
    ```

## Using memory-game library

1. ### Import the library

    - At the beginning of the js file in which you are going to use the library import as follows:

    ```js
    import {initGame, selectCard} from @tive-labs/memory-game
    ```

2. ### initGame

    - initGame receives two parameters, category and level.
        - Category must be 'animals' or 'numbers'
        - Level must be 'easy' or 'medium' or 'hard'

    ```js
    const memoryGame = initGame('animals', 'easy');
    ```

    - initGame returns an object with a 2d array of hidden cards, and the length of the array (xLength and yLength):

    ```js
    {
        cards,
        xLength,
        yLength
    }
    ```

3. ### selectCard

    - selectCard receives two parameters, position x and position y.
        - x must be a number representing the x position (vertival position) on the 2d array.
        - y must be a number representing the y position (horizontal position) on the 2d array.

    ```js
    const selected = selectCard(0, 1);
    ```

- selectCard returns an object with three properties:

    ```js
    {
        cardData,
        cardMatch,
        isThereAWinner
    }
    ```

    - cardData: Contains an object with the data of the discovered card (id, name, shortName)
    - cardMatch: Contains an object with a boolean value (isNewMatched) that indicates if exist a new card match, and an object (matchedCards) with the positions of the matched cards (x_y):
    
    ```js
    {
        isNewMatched,
        matchedCards: {
            firstCard,
            lastCard
        }
    }
    ```

    - isThereAWinner: Contains a boolean value indicating if the player won the game. 