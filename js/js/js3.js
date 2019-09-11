console.log(`Jai Mahakal`);

/***************DATA TYPES*****************/

// Primitive Data Types

// String
let name = "MahaDev";
console.log("my God name is "+ name);
console.log("Data type is "+ (typeof name));

// Numbers
let marks = 55;
console.log("Data type is "+ (typeof marks));

// boolean
let is_Driver = true;
console.log("Data type is "+ (typeof is_Driver));

// null
let nullVar = null;
console.log("Data type is "+ (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is "+ (typeof undef));

// References Data Types

// arrys
let my_arr = [12, 32, 21, 23, "suraj", 'false'];
console.log("Data type is "+ (typeof my_arr));

// object literals 
let car_Price = {
    volvo: 100,
    bmw: 200,
    mercedes: 300,
    audii: 400
}
console.table(typeof car_Price);
function FindName() {
    
}
console.table(typeof FindName);

let date = new Date();
console.table(typeof date);