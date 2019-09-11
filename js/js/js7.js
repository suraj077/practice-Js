console.log('Jai Mahakal')

// javascript operators:
// 1. Arithmetic operators:-
// Operator	Description
// +	             Addition
// -	             Subtraction
// *	             Multiplication
// **                 	Exponentiation (ES2016)
// /	                Division
// %	                   Modulus (Division Remainder)
// ++	                 Increment
// --                  	Decrement

var x = 5;
var y = 6;
console.log(x+y);

var x = 23;
var y = 4;
console.log(x += y);

var name = "suraj ";
var surname = "mishra";
console.log(name + " " + surname);

var day = "what a very";  //When used on strings, the + operator is called the concatenation operator.
day += " lucky day";
console.log(day);
// Adding Strings and Numbers
var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;
console.log(x,y,z);

// JavaScript Comparison Operators

// Operator	      Description

// ==	          equal to
// ===	          equal value and equal type
// !=            not equal
// !==	          not equal value or not equal type
// >	          greater than
// <	          less than
// >=	          greater than or equal to
// <=	          less than or equal to
// ?	          ternary operator
// Comparison and Logical operators are used to test for true or false.

// JavaScript Logical Operators

// Operator	Description
// &&	        logical and
// ||	        logical or
// !	        logical not

// JavaScript Type Operators

// Operator	Description
// typeof	    Returns the type of a variable
// instanceof	Returns true if an object is an instance of an object type

// var myObj = { name: "John", age: 31, city: "New York" };
// var myJSON = JSON.stringify(myObj);
// console.log(myObj);

// var myJSON = '{"name":"John", "age":31, "city":"New York"}';
// var myObj = JSON.parse(myJSON);
// console.log(myObj.city);

const age = 17;

if(age <= 18){
    console.log('hello you are child go home');
}

// else if(age==25){
//     console.log('age is 25');
// }

else{
    console.log('you have right to vote');
}
 
var x = 10;
x -=5;
console.log(x);

var x = 10;
x +=5;
console.log(x);

var x = 10;
x *=5;
console.log(x);

var x = 15;
x /=5;
console.log(x);

var x = 17;
x %=5;
console.log(x);

var x = 10;
x **=5;
console.log(x);

var fname = "suraj";
var lname = "mishra";
var name = fname + " " + lname;
console.log(name);

var greeting = "HOW ARE YOU";
greeting += " suraj";
console.log(greeting); 

const carPrice = 200;

if(carPrice < 199)
{
console.log('its bmw');
}
else if(carPrice > 500){
    console.log('aaha its mercedes');
}
else{
    console.log('wow its volvo');
}

const movieTicket = 499;

if(movieTicket > 500){
    console.log('Sir go to first class');
}
else if(movieTicket < 500){
    console.log('Sir go to seet no 75');
}
else{
    console.log('Sir go to normal class');
}

const mobile = 401;

if(mobile >= 800){
    console.log('wow its samsung mobile');
}
else if(mobile <= 400){
    console.log('its china products');
}
else{
    console.log('its nokia phone');
}

let accountBlance = 1000000000;

if(accountBlance != 1000000000){
    console.log('you have to earn more');
}
else{
    console.log('go, start your own business');
}






