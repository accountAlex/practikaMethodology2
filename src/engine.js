import readlineSync from 'readline-sync';

const MAX_ROUNDS = 1; 

const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const { question, correctAnswer } = generateRound(); 
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.trim() === String(correctAnswer)) { 
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; 
    }
  }

  console.log(`Congratulations, ${name}!`); 
};

export default runGame;