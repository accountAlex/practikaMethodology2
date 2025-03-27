import getRandomNumber from '../utils.js';
import runGame from '../engine.js';

const description = 'What number is missing in the progression?'; 

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const progression = [];
  for (let j = 0; j < progressionLength; j += 1) {
    progression.push(start + step * j);
  }

  const correctAnswer = progression[hiddenIndex]; 
  progression[hiddenIndex] = '..'; 
  const question = progression.join(' '); 

  return { question, correctAnswer };
};

export default () => runGame(description, generateRound); 