console.log('Jai Mahakal');

// General loops : for, while, do while.

// let carName = volve;

// for( carName=volvo; carName<10; carName++)
// {
//     console.log(carName);
// }

// let a = 24;
// a += 1;
// a++;
// console.log(a);

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// let j = 0;
// while (j < 10) {
//     console.log(j + 1);
//     j += 1;
// }

// let k = 0;

// do{
//     console.log(k + 1);
//     k += 1;
// } while (k < 10);

// let k = 0;

// do {
//     console.log(k + 1);
//     if (k === 5) {
//         break;
//     }
//     k += 1;
// } while (k < 10);

let arr= [2,5,6,4,8,7];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }
arr.forEach(function(element, index, array) {
    console.log(element, index, array);
});

let obj = {
    name: "suraj mishra",
    age: 25,
    type: "Dangerous Programmer",
    os: "kali linux"
}
for(let key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`)
}
console.log('done');
