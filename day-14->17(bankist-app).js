'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movementDisplay = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements">
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

        <div class="movements__value">${mov}</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  labelBalance.innerHTML = `${acc.balance}eur`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(p => p > 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumIn.textContent = `${income}€`;

  const outgo = acc.movements
    .filter(va => va < 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumOut.textContent = `${Math.abs(outgo)}€`;

  const intrst = acc.movements
    .filter(p1 => p1 > 0)
    .map(p2 => (p2 * acc.interestRate) / 100)
    .filter((int, i, val) => {
      console.log(val);
      return int >= 1;
    })
    .reduce((acc, val) => acc + val, 0);
  labelSumInterest.textContent = `${intrst}€`;
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (val, ind, arr) {
        return val[0];
      })
      .join('');
  });
};

createUserName(accounts);

const updatedUI = function (x) {
  //movements
  movementDisplay(currentAccount.movements);
  //balance
  calcDisplayBalance(currentAccount);
  //summary
  calcDisplaySummary(currentAccount);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin == Number(inputLoginPin.value)) {
    //UI nd message
    labelWelcome.textContent = `Welcome back sir.${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    updatedUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieverAcc &&
    (currentAccount.balance >= 0) &
      (recieverAcc?.username !== currentAccount.username)
  ) {
    console.log(`valid`);
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    updatedUI(currentAccount);
  }

  //cur.movements.push(Number(inputTransferAmount.value));
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updatedUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  movementDisplay(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/*
//slice
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
});*/
const Data1 = {
  Julia: [3, 5, 2, 12, 7],
  Kate: [4, 1, 15, 8, 3],
};

const Data2 = {
  Julia: [9, 16, 6, 8, 3],
  Kate: [10, 5, 6, 1, 4],
};

const checkDogs = function (dogsJulia, dogsKate) {
  dogsJulia = Data1.Julia;
  dogsKate = Data1.Kate;
  dogsJulia.splice(-2, 2);
  dogsJulia.splice(0, 1);
  console.log(dogsJulia);
  const arr = dogsJulia.concat(dogsKate);
  console.log(arr);
  arr.forEach(function (val, ind) {
    val >= 3
      ? console.log(
          `Dog number ${ind + 1} is an adult, and is ${val} years old`
        )
      : console.log(`Dog number ${ind + 1} is still a puppy 
    `);
  });
};
checkDogs();

const Dataq = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  let hages = ages
    .map(function (val) {
      if (val <= 2) {
        return 2 * val;
      } else {
        return 16 + val * 4;
      }
    })
    .filter(function (va) {
      return va > 18;
    });
  console.log(hages);
};
calcAverageHumanAge(Dataq);

const eurtoUSD = 1.1;

const movementsUSD = movements.map(function (p1) {
  return p1 * eurtoUSD;
});
console.log(movementsUSD);

const emptarr = [];
for (const x of movements) {
  emptarr.push(x * eurtoUSD);
}
console.log(emptarr);
const movementsUSD1 = movements.map(m => m * eurtoUSD);
console.log(movementsUSD1);

const user = `Steven Thomas Williams`;
const userind = user
  .toLowerCase()
  .split(' ')
  .map(function (val, ind, arr) {
    return val[0];
  })
  .join('');

console.log(userind);
//map

console.log(accounts);
//filter
const deposit = movements.filter(val => val > 0);
console.log(deposit);
const withdrawals = movements.filter(function (val) {
  return val < 0;
});
console.log(withdrawals);
//
const balance = movements.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(balance);

let balance1 = 0;
for (let i of movements) {
  balance1 += i;
}
console.log(balance1);

const newf = movements.find(val => val < 0);
console.log(newf);
console.log(accounts);

const account = accounts.find(acc => acc.owner === `Jessica Davis`);
console.log(account);

for (let acc of accounts) {
  if (acc.owner === `Jessica Davis`) {
    console.log(acc);
  }
}

//some
console.log(movements);
console.log(movements.includes(70));
console.log(movements.some(val => val === 70));
const aDeposits = movements.some(val => val > 0);
console.log(aDeposits);

//every
const newarr = account4.movements.every(val => val > 0);
console.log(newarr);

//using statement for function differently not inside of function

const f = val => val > 2;
console.log('some');
console.log(account1.movements.some(f));
console.log('every');
console.log(account4.movements.every(f));
console.log('filter');
console.log(account2.movements.filter(f));

//flat(depth)
const arra1 = [1, [21, 3], 2, (5)[(4, 5, 3)]];
const arra2 = [1, [[21, 3], 2], 2, 5, [4, 5, 3]];

const x = arra2.flat(2);
console.log(x);

const y = accounts
  .map(val => val.movements)
  .flat()
  .reduce((acc, val) => acc + val, 0);
console.log(y);

const z = accounts
  .flatMap(val => val.movements)
  .reduce((acc, val) => acc + val, 0);
console.log(z);

//sort(string)
const str = ['taran', 'apple', 'banana'];
str.sort();
console.log(str);
//sort(number)
const num = [1, 34, 230, -12, -32];
console.log(num.sort());

//sort(number)accurate
movements.sort((a, b) => a - b);
console.log(movements);

//creating array and filling it
const n1 = new Array(7);
console.log(n1);
n1.fill(1);
console.log(n1);
n1.fill(8, 2, 4);

//from statement
const n2 = Array.from({ length: 5 }, (val, ind) => ind + 1);
console.log(n2);
