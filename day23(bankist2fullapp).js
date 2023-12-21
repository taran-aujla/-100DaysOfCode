'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////
////////

//selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allbuttons = document.getElementsByTagName('button');
console.log(allbuttons);

console.log(document.getElementsByClassName('btn'));

//creating and inserting elements
//.insertadjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we use cookies for functionality. <button class="btn btn--close-cookie">okay</button>';

////prepend(on top)
//header.prepend(message);
////append(at bottom)
header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//color will not be shown bcoz not written in JS
console.log(message.style.color);
//will be shown
console.log(message.style.width);

console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseInt(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes//
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'just an logo';

console.log(logo.getAttribute('atrbte'));
logo.setAttribute('xyz', 'wow');

//data attribute
console.log(logo.dataset.versionNumber);
/////

const btnscrollto = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnscrollto.addEventListener('click', function (e) {
  /*const s1coords = section1.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  */
  section1.scrollIntoView({ behavior: 'smooth' });
});

const alrt = function (e) {
  alert(`you are reading heading`);
};

const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', alrt);
setTimeout(() => h1.removeEventListener('mouseenter', alrt), 3000);

//bubbling and capturing

//rgb(255,255,255)
const randomINT = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomcolor = () =>
  `rgb(${randomINT(0, 255)},${randomINT(0, 255)},${randomINT(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomcolor();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomcolor();
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomcolor();
});
