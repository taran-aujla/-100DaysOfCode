'use strict';


const inBooking = [];

const createBookings = function (
  flightNumber,
  passenger = 1,
  price = 199 * passenger
) {
  const bookings = {
    flightNumber,
    passenger,
    price,
  };
  console.log(bookings);
  inBooking.push(bookings);
};
createBookings('AE24', undefined, 12);
console.log(inBooking);

const flight = 'L22';
const data = {
  name: 'taran',
  password: 102115,
};
const f1 = function (flight, passenger) {
  flight = 'L12';
  passenger.name = `MR. ${passenger.name}`;
  if (passenger.password == 102115) {
    alert('checked in');
  } else {
    alert('wrong password');
  }
};
console.log(f1(flight, data));
console.log(flight);
console.log(data);
//x is referencing to data

const oneword = function (str) {
  return str.replace(' ', '').toLowerCase();
};


const upperFirstword = function (str) {
  const [first, ...leftover] = str.split(' ');
  return [first.toUpperCase(), ...leftover].join(' ');
};

const out = function (str, fun) {
  console.log(`org string: ${str}`);
  console.log(`transformed string: ${fun(str)}`);
};

out(`javascript is life`, upperFirstword);

const ret = function () {
  console.log('hemllo');
};

document.body.addEventListener('click', ret);
//function in function
const greet = function (p1) {
  return function (p2) {
    console.log(`${p1} ${p2}`);
  };
};
const name = greet('wow');
name('taran');

const meet = p1 => p2 => console.log(`${p1} is here as ${p2}`);

meet('taran')('friend');

const flightt = {
  airline: 'luffi',
  code: 're',
  booking: [],
  book(flightno, name) {
    console.log(`${flightno} is there for ${name}`);
    this.booking = [`flight: ${flightno}`];
  },
};
const flight2 = {
  airline: 'walla',
  code: 'bi',
  booking: [],
};
const book = flightt.book;
book.call(flight2, 23, 'taran');
book.call(flight2, 22, 'ballu');
console.log(flight2);

//bind
const nnew = book.bind(flight2);
nnew(26, 'aujla');

flightt.plane = 100;
flightt.buy = function () {
  this.plane++;
  console.log(this.plane++);
};
document
  .querySelector('.buy')
  .addEventListener('click', flightt.buy.bind(flightt));

//bind without object
const ran = (price, taxper) => price + price * taxper;

const de = ran.bind(null);
console.log(de(100, 0.1));
//another way
const random = ran.bind(null, 200);
console.log(random(0.1));

let input;
const poll = {
  0: 'JavaScript',
  1: 'Python',
  2: 'Rust',
  3: 'C++',
  answers: [0, 0, 0, 0],
  registerNewAnswer: function () {
    input = Number(prompt(`What is your favourite programming language?`));
    if (input < 4) {
      return input;
    } else {
      alert('input must be 0 to 3');
    }
  },
};
let position = function () {
  let x = poll.registerNewAnswer();
  poll.answers[x]++;
  console.log(poll.answers);
};
document.querySelector('.poll').addEventListener('click', position);
