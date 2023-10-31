'use strict';

/////
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');
const currentP1 = document.querySelector('#current--0');
const currentP2 = document.querySelector('#current--1');

const di = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

scoreP1.textContent = 0;
scoreP2.textContent = 0;
di.classList.add('hidden');

let scorearray = [0, 0];
let currentscore = 0;
let activeplayer = 0;
let playing = true;
let switchplayer = function () {
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

btnroll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    di.classList.remove('hidden');
    di.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
    }
  }
});
btnhold.addEventListener('click', function () {
  if (playing) {
    scorearray[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scorearray[activeplayer];
    if (scorearray[activeplayer] >= 10) {
      playing = false;
      di.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }
});
btnnew.addEventListener('click', function () {
  playing = true;
  if (playing) {
    scorearray = [0, 0];
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove('player--winner');
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentscore = 0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    di.classList.remove('hidden');
    currentscore = 0;
    activeplayer = 0;
    scoreP1.textContent = 0;
    scoreP2.textContent = 0;
    document.getElementById(`current--0`).textContent = currentscore;
    document.getElementById(`current--1`).textContent = currentscore;
  }
});
