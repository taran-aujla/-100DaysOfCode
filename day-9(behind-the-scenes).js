'use strict';

console.log(nam);
//console.log(wow);
//console.log(loc);

var nam = 'taran';
//let wow = 'amazing';
//const loc = 102110;
/*
console.log(x(1, 2));
console.log(y(2, 3));
console.log(z(3, 4));
console.log(a(4, 5));
console.log(arrowfun(0, 1));

function x(num1, num2) {
  return num1 + num2;
}
let y = function (num1, num2) {
  return num1 + num2;
};
const z = function (num1, num2) {
  return num1 + num2;
};
var a = function (num1, num2) {
  return num1 + num2;
};
var arrowfun = (num1, num2) => num1 + num2;
*/
//using this key word (practice)again
const bt = {
  name: 'taran',
  roll: 195,
  calc: function () {
    console.log(this.roll + 12);
  },
};
console.log(bt);

//here(this)is for global window
console.log(this);

//normal functionn with (this)
const ab = function (d) {
  console.log(d + d);
  console.log(this);
};
ab(1);

//arrow function with this
const arr = num1 => {
  console.log(num1);
  console.log(this);
};
arr(11);

//argument keyword(only can be used in normal functions not in arrow function )

const array = function (p1, p2) {
  console.log(arguments);
  return p1 + p2;
};
array(1, 2, 3, 4);

let name1 = 'Taran';
let newname = 'Singh';
name1 = 'aujla';
console.log(name1, newname);

const data = {
  firstName: 'william',
  lastName: 'silver',
};
const datanew = data;
datanew.lastName = 'Gold';
console.log(datanew);
