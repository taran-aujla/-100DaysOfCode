'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//html new
const Nhtml = function (data, classname) {
  const html = `
    <article class="country ${classname}">
    <img class="country__img" src=${data.flag} />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(2)}</p>
      <p class="country__row"><span>🗣️</span>w</p>
      <p class="country__row"><span>💰</span>w</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
//call
/*
const getCONnBOR = function (con) {
  //req1 country
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${con}`
  );
  request.send();

  //render country
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    Nhtml(data);
    const [neighbour] = data.borders;
    if (!neighbour) return;

    //re2 neighbour
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);

      Nhtml(data2, 'neighbour');
    });
  });
};

getCONnBOR('pakistan');
*/
///////////////////////////////////////
//promises self
/*
const Pr = new Promise((resolve, reject) => {
  let x = 2;
  if ((x = 2)) {
    resolve('done');
  } else {
    reject('notDone');
  }
});
console.log(Pr);
Pr.then(OPofPr => {
  console.log(`done+${OPofPr}`);
}).catch(OPofPr => {
  console.log(`no+${Pr}`);
});*/
/*
const getCondata = function (conName) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${conName}`)
    .then(Response => Response.json())
    .then(Response2 => {
      Nhtml(Response2[0]);
      const neighbour = Response2[0].borders[0];
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
      );
    })
    .then(res => res.json())
    .then(res2 => Nhtml(res2, 'neighbour'))
    .catch(x => alert(x));
};

const whereAmI = function (lat, long) {
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
    .then(res => res.json())
    .then(res2 => {
      return getCondata(res2.country);
    })
    .catch(err => console.log(`cant use because ${err}`));
};

btn.addEventListener('click', function () {
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
});
*/
//creatting new promises
/*const lottery = new Promise(function (resolve, reject) {
  let x = Math.random();
  if (x > 0.5) {
    resolve('greater than 0.5');
  } else {
    reject('not greater than 0.5');
  }
});

lottery
  .then(resp => console.log(`after then ${resp}`))
  .catch(resp1 => console.error(`after catch ${resp1}`));

const 
*/

const whereAmI2 = async function (ContryName) {
  try {
    const respo = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${ContryName}`
    );
    if (!respo.ok) throw new Error('recheck the country');
    console.log(respo);
    const r2 = await respo.json();
    console.log(r2);
    Nhtml(r2[0]);
    return console.log(`we are in ${r2[0].name}`);
  } catch (resa) {
    alert(resa.message);
  }
};
btn.addEventListener('click', function () {
  whereAmI2(prompt('enter country'));
  console.log(`its at second in list`);
});

(async function () {
  try {
    const x = await whereAmI2();
    console.log(x);
  } catch (respon) {
    console.log(respon);
  }
})();

//coding challenge 2

const onscreen = document.querySelector('.images');

const createImage2 = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const im = document.createElement('img');
    im.src = imgPath;
    im.addEventListener('load', function () {
      onscreen.append(this);
      resolve(this);
    });
    im.addEventListener('error', function () {
      reject('errrrorrr');
    });
  });
};

createImage2('img/img-2.jpg')
  .then(x => console.log(x))
  .catch(re => console.error(`somthing ${re}`));

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async imm => await createImage2(imm));
    console.log(imgs);

    const ress = await Promise.all(imgs);
    console.log(ress);
  } catch (error) {
    console.error(`your error is ${error}`);
  }
};

loadAll(['imgimg-1.jpg', 'imgimg-2.jpg', 'imgimg-3.jpg']).then(x =>
  console.log('x')
);
