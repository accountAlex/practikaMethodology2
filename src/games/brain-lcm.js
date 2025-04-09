import getRandomNumber from '../utils.js';
import runGame from '../engine.js';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);
const lcmOfThree = (a, b, c) => lcm(lcm(a, b), c);

const description = 'Find the smallest common multiple of given numbers.'; 

const generateRound = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const num3 = getRandomNumber(1, 20);

  const question = `${num1} ${num2} ${num3}`; 
  const correctAnswer = lcmOfThree(num1, num2, num3); 

  return { question, correctAnswer };
};

export default () => runGame(description, generateRound); 