'use strict';

// Data needed for a later exercise
/*const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  */

// Data needed for first part of the section
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  newlocation: function ({ datee, clander }) {
    console.log(fu);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/
/*
//desrtucting array
const arr = [12, 21, 22];
const x = arr[0];
const y = arr[1];
const z = arr[2];
console.log(x, y, z);
//into this
const [x1, y1, z1] = arr;
console.log(x, y, z);

let [a, b, c] = restaurant.categories;
console.log(a, b, c);

//swapping using detructing array
[a, b] = [b, a];
console.log(a, b, c);

const [order1, order2] = restaurant.order(2, 1);
console.log(order1, order2);

const { name, openingHours } = restaurant;
console.log(name, openingHours);

/*let s1 = 11;
let s2 = 12;
const obj = {
  s1: 100,
  s2: 200,
}(({ s1, s2 } = obj));
console.log(s1, s2);

restaurant.fu = {
  datee: 23,
  clander: 2024,
};
console.log(restaurant.newlocation);

///spread operator(...)
let arra = [1, 2, 3];
let newarr = [2, 4, 5, ...arra];
console.log(newarr);

let adding_dish = [...restaurant.categories, 'saag'];
console.log(adding_dish);

//copy array
const copyarray = [...arra];
console.log(copyarray);
//joining array
const joined = [...restaurant.categories, ...restaurant.mainMenu];
console.log(joined);
//works  upon iterables:array,string,map,sets  but not on objects
const str = 'Taran';
const ar = [...str, 'a'];
console.log(ar);

let inputARR = [prompt('slect dish one'), prompt('select dish two')];

console.log(`customer wants ${inputARR}`);

//rest - when spread operators are used in left side

const [Italian, Focaccia, ...others] = [
  ...restaurant.starterMenu,
  ...restaurant.categories,
];
console.log(Italian, Focaccia, ...others);

const xy = function (...arrayy) {
  console.log(...arrayy);
};
xy(1, 2, 3, 4);

//short-circuiting
//using ||
console.log(3 || 'trn');
console.log('' || 'trn');
console.log(true || 0);
console.log(undefined || null);

restaurant.wow = 0;
const ne = restaurant.wow || 10;
console.log(ne);

//using &&
console.log(3 && 'trn');
console.log('' && 'trn');
console.log(true && 0);
console.log(undefined && null);

//or assignment operator
restaurant.woww ||= 10;
console.log(restaurant.woww);
//nullish(??=)assignement operator
restaurant.wowww ??= 10;
console.log(restaurant.wowww);

//and assignment operator
restaurant.woww &&= 10;
console.log(restaurant.woww);
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
let [players1, players2] = game.players;
console.log(players1, players2);
//2
let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
let allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5
let { team1, draw, team2 } = game.odds;
console.log(team1, draw, team2);
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Neuer', 'Pavard', 'Martinez', 'Alaba');

let com = team1 < team2 && console.log('team one wins');

//for-ofloop

let xa = [...game.players];
for (let i of xa) {
  console.log(i);
}
//entries give index:element
console.log(...game.players.entries());

for (let [ee, ff] of game.players.entries()) {
  console.log(`${ee + 1} = ${ff}`);
}
let wow;
//enchancement in object literals
const dataa = {
  nam: 'taran',
  batch: { nn: 'wow' },
  func: function (nam) {
    return this.nam;
  },
  //enchanced\
  fun(x) {
    return `${this.nam} and ${x}`;
  },
};
const college = {
  uni: 'tiet',
  years: [2021, 2022, 2023, 2024, 2025],
  dataa,
};
console.log(college);
console.log(dataa.batch?.nn);

//object keys
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  newlocation: function ({ datee, clander }) {
    console.log(fu);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
/*
const saved = Object.keys(openingHours);
console.log(`we are open on ${saved}`);
*/

//object value
/*
for (let days of restaurant.openingHours.values()) {
  console.log(days);
}
*/

for (let dd of restaurant.mainMenu.entries()) {
  console.log(dd);
}
//challenge
//1
for (let i of game.scored.entries()) {
  console.log(`Goal ${i[0]}: ${i[1]}`);
}
//2
let v = 0;
let t = 0;
for (let [key, value] of Object.entries(game.odds)) {
  v += value;
  t++;
}
console.log(v / t);

// sets
const orderSet = new Set(['w', 'e', 'r', 'w', 'r']);
console.log(orderSet);

console.log(new Set('taran'));

console.log(orderSet.size);

console.log(orderSet.has('w'));

console.log(orderSet.add('taran'));
console.log(orderSet.delete('w'));
console.log(orderSet);

let array1 = ['waiter', 'chief', 'manager', 'manager', 'cleaner', 'waiter'];
console.log(array1);
const deldup = [new Set(array1)];
console.log(deldup);

//maps
let ma = new Map();
const arr = [1, 2];
ma.set('k', 'wowowow');
ma.set(95, [2, 3, 1]);
ma.set(arr, 'yes this is array');

console.log(ma);
console.log('consoling');
console.log(ma.get('k'));
console.log(ma.get(95));
console.log(ma.get(arr));

const x = new Map([
  ['question', 'whos ur mood today?'],
  [1, 'wru?'],
  [2, 'im fine whos u'],
  [3, 'go away'],
  ['correct', 3],
  [true, 'correct wow'],
  [false, 'try again'],
]);

for (let [key, value] of x) {
  console.log(x.get('question'));
  if (typeof key == 'number') {
    console.log(`answer ${key} : ${value}`);
  }
}
const inp = Number(prompt('what ur answer'));

