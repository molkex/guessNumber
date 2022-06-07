'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const backgroundColor = function(color) {
  document.querySelector('body').style.backgroundColor = color;
};

const guessMessage = function(message) {
  document.querySelector('.guess-message').textContent = message;
};

const check = () => {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  if (!guessingNumber) {
    guessMessage('Введите чисто');
  } else if (guessingNumber === secretNumber) {
    guessMessage('Правильно');
    document.querySelector('.question').textContent = secretNumber;
    backgroundColor('#09FA15FF');
    document.querySelector('.question').style.width = '50rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      guessMessage(guessingNumber > secretNumber ? 'Слишком много' : 'Слишком мало');
      score--;
      document.querySelector('.score').textContent = score;
      backgroundColor('#FA0941FF');
      setTimeout(() => backgroundColor('#000000'), 500);
    } else {
      guessMessage('Конец игры');
      document.querySelector('.score').textContent = '0';
      backgroundColor('#FA0941FF');
    }
  }
};

const repeat = function() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.question').textContent = '???';
  backgroundColor('#000000');
  guessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
};

document.querySelector('.check').addEventListener('click', function() {
  check();
});

document.querySelector('.again').addEventListener('click', function() {
  repeat();
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    check();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyR') {
    repeat();
  }
});


