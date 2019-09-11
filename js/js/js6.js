console.log('Jai Mahakal');

// Array

let carValue = [32, 44, 52, 62, 72, 82];
const carName = ['volvo', 'bmw', 'audii', 'mercedes']
const mixed = ['str', 77, [7,5]];

const arr = new Array(44,55,22, 'volvo');
console.log(arr);
// console.log(mixed);
// console.log(carName[3]);

// console.log(arr.length);
// console.log(Array.isArray('arr'));

arr[3] = 'mercedes';
let arrelement = arr[1];
console.log('Element :', arrelement);
console.log(arr);

let value = carValue.indexOf(72);
// console.log(value);

// Mutating or Modifying arrys
carValue.push(500);
console.log(carValue);

carName.unshift('mercedes');
console.log(carName);

carName.pop();
console.log(carName);

carValue.shift();
console.log(carValue);

carValue.splice(2,1);
console.log(carValue);

carName.reverse();
console.log(carName);

let carValue1 = [500, 600, 700,800];
carValue = carValue.concat(carValue1);
console.log(carValue);

let myobj = {
    name: 'car',
    model: 'Volvo XC',
isActive: true,
cost:[120, 250, 500]
}
console.log(myobj.model);
console.log(myobj.cost);
