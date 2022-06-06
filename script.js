'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите чисто';

    //  Player won
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor =
      'rgba(9, 250, 21, 1)';
    document.querySelector('.question').style.width = '50rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        guessingNumber > secretNumber ? 'Слишком много' : 'Слишком мало';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Конец игры';
      document.querySelector('.score').textContent = '0';
    }
  }
});

//   //  To high
//   else if (guessingNumber > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Слишком много';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.guess-message').textContent = 'Конец игры';
//       document.querySelector('.score').textContent = '0';
//     }
//     //  To low
//   } else if (guessingNumber < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Слишком мало';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.guess-message').textContent = 'Конец игры';
//       document.querySelector('.score').textContent = '0';
//     }
//   }
// })

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.question').textContent = '???';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = score;
  // document.querySelector('.number-input').textContent = ' ';
  document.querySelector('.number-input').value = '';
});
