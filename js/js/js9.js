console.log('Jai Mahakal');
console.log('Jai MahaDev');
/*
element selectors:
1. Single element selector
2. Multi element selector
*/

// 1. Single element selector

// let element = document.getElementById('heading');
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = 'gold';
// element.style.textAlign = 'center';
// element.innerText = 'HanuTech is a good Company';
// element.innerHTML = '<b><i> Power of MahaDev</i></b>';
// console.log(element.tagName);
// console.log(element.id);
// console.log(element.className);
// console.log(element.innerHTML);
// console.log(element.innerText);

// let sel = document.querySelector('.child red good');
// sel = document.querySelector('#myfirst');
// sel = document.querySelector('.this');
// sel = document.querySelector('.childul1');
// sel = document.querySelector('div');
// sel.style.color = 'lightgreen';
// console.log(sel);

 // 2. Multi element selector


let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);





// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//    element.style.color = 'blue'; 
//    element.style.textAlign = 'center';
// }
Array.from(elems).forEach(element => {
    console.log(element);
   element.style.color = 'gold'; 
});
// console.log(elems[0].getElementsByClassName('child'))

