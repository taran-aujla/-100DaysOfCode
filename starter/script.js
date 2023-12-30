'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnscrollto = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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

//scrolling button
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

//page navigation

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//MENNU FADE ANIMATION
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = 0.5;
      }
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function (e) {
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');

  siblings.forEach(el => {
    if (el !== link) {
      el.style.opacity = 1;
    }
  });
  logo.style.opacity = 1;
});

//observer api
/*
const callback = function (entries, obs) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const options = {
  root: null,
  threshold: [0, 0.2],
};

const obsrvr = new IntersectionObserver(callback, options);

obsrvr.observe(section1);
*/
/////////
////////

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stkNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerobsrvr = new IntersectionObserver(stkNav, {
  root: null,
  threshold: 0,
  rootMargin: `-90px`,
});
headerobsrvr.observe(header);

//reveal seaction
const allsections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const opti = {
  root: null,
  threshold: 0.15,
};
const sectionObserver = new IntersectionObserver(revealSection, opti);

allsections.forEach(function (entr) {
  sectionObserver.observe(entr);
  entr.classList.add('section--hidden');
});

//lazy  loading images
const imgTarget = document.querySelectorAll('img[data-src]');

const imgCallBack = function (entries, observer) {
  const [ent] = entries;

  if (!ent.isIntersecting) return;

  ent.target.src = ent.target.dataset.src;
  ent.target.addEventListener('load', function () {
    ent.target.classList.remove('lazy-img');
  });
  imgobserver.unobserve(ent.target);
};

const optionss = {
  root: null,
  threshold: 0,
  rootMargin: `200px`,
};

const imgobserver = new IntersectionObserver(imgCallBack, optionss);

imgTarget.forEach(img => imgobserver.observe(img));

/*


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
*/
/////

/*
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
*/

//going downward
/*
const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));

h1.firstElementChild.style.color = 'white';

//going upward
console.log(h1.parentNode);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
*/
