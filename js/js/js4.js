console.log('Jai Mahakal');
// Type conversion 

let myVar;
myVar = String(25);
// console.log(myVar, (typeof myVar));
let booleanVar = (true);
console.log(booleanVar, (typeof booleanVar));

let date = new Date();
console.log(date, (typeof date));

let arr = ([1,2,3,4,5,]);
console.log(arr.length, (typeof arr));

let i = 75;
console.log(i.toString());

let stri = Number("5258");
stri = Number("344d5");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri, (typeof stri));

let number = parseInt('42');
console.log(number, (typeof number));

let num = parseFloat('45.56');
console.log(num, (typeof num));

let num1 = parseFloat('45.506');
console.log(num1.toFixed(1), (typeof num1));

// Type coercion

let mystr = Number("777");
let mynum = 75;

console.log(mystr + mynum);