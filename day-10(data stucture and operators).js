'use strict';

// Data needed for a later exercise
/*const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  */

// Data needed for first part of the section
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
*/
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
