console.log('Jai Mahakal')


// let element = document.createElement('li');

// // Add a class name to the li element
// element.className = 'baba1';
// element.id = 'newli';
// element.setAttribute('title', 'mahadev');

// // innertext is for simpal text
// element.innerText = 'Hello this is created by Mahadev';
// // innerHTML is for change in html text.
// element.innerHTML = '<b><i>Hello this is created by MahaDev</i</b><br>';
// // element.appendChild(text)
// console.log(element);

let element = document.createElement('li');
let ul = document.querySelector('ul.wow');
let text = document.createTextNode('MahaDev, The destroyer');
element.appendChild(text);
ul.appendChild(element);
console.log(ul);
console.log(element);

// // console.log(ul)
// // console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for MahaDev');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));

myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2 title');
console.log(elem2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "http://dic.mp.nic.in/ujjain/mahakal/default.aspx"
