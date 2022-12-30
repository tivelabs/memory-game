import readline from 'readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const ask = (questionText) => {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
};

const askCategory = async () => {
  return await ask("Category ? :> ")
};

const askLevel = async () => {
  return await ask("Game Level ? :> ")
};

const askCoordinates = async () => {
  return await ask("Enter a Card index coordinates [x,y] :> ")
};

const inputs = {
  askCategory,
  askLevel,
  askCoordinates,
};

export default inputs;
