let f;
const g = function () {
  let num = 12;
  f = function () {
    console.log(100 * num);
  };
};
g();
f();
console.dir(f);

const ffunct = function (n, wait) {
  let ingroup = n / 2;
  setTimeout(function () {
    console.log(
      `total no. of passengers are ${n} with 2 groups each with ${ingroup} passengers`
    );
  }, wait * 1000);
  console.log('wow');
};
ffunct(100, 5);

(function () {
  console.log('immediately invoked function expresion');
})();
(() => console.log('iife'))();

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();


let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(1));
console.log(arr.slice(1, 3));
console.log(arr.slice(-1));
//splice(mutate the array)
console.log(arr.splice(1));
console.log(arr.splice(1, 2));
console.log(arr);
//reverse(mutate the array)
let arr1 = ['w', 'o', 'm', 'e', 'n'];
console.log(arr1.reverse());
//concat(not mutate)
arr = ['a', 'b', 'c', 'd', 'e'];
let x = arr.concat(arr1);
console.log(x);
//Join
x = arr.join('-');
console.log(x);

//at
let ae = [12, 43, 54, 39];
console.log(ae[0], ae.at(0));
console.log(ae[ae.length - 1], ae.at(-1));

//for-each
let wq = [21, 12, 32, 45, 65];

wq.forEach(function (p1) {
  console.log(`yout bill cost: ${p1}`);
});

wq.forEach(function (val, ind, arr) {
  console.log(`yout bill cost: ${val} and order-no. :${ind + 1} `);
  console.log(arr);
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (val, key, curr) {
  console.log(`${key}:${val}`);
});
