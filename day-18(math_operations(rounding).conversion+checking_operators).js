console.log(Number.parseInt('20px'));
console.log(Number.parseInt('20'));
console.log(Number.parseInt('20.3'));
//parsefloat
console.log(Number.parseFloat('30.2px'));
console.log(Number.parseFloat('30.2'));
//isNaN
console.log('isnan');
console.log(Number.isNaN('40'));
console.log(Number.isNaN(40));
console.log(Number.isNaN(+'20px'));
//isfinite
console.log('is finite');
console.log(Number.isFinite('30'));
console.log(Number.isFinite(30));
console.log(Number.isFinite(30 / 0));

////
//math function operators
//math.max,min
console.log(Math.max(3, 54, '1'));
console.log(Math.min(3, 54, '1'));
//math.sqrt
console.log(Math.sqrt(25));
//math.trunc
console.log(Math.trunc(20.6));
console.log(Math.trunc('20.1'));
//math.random
console.log(Math.trunc(Math.random() * 10) + 1);

//roundings
//math.ceil
console.log(Math.ceil(20.1));

console.log(Math.ceil(20.9));
//math.floor
console.log(Math.floor(20.1, 20.9));
//
//string
console.log((2.321).toFixed(1));
//number
console.log(+(2.321).toFixed(1));
