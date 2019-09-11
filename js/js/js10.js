console.log('Jai Mahakal');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.children);

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[0].nodeType;
// console.log(nodeName);
// console.log(nodeType);
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');

// console.log(container.children[2].children[0].children[3]);
// console.log(container.children[3].children[0].children[1]);
// console.log(container.children[3].children[0].children[4]);

// //for check firstchild & firstelementchild
// console.log(container.childNodes); 
// console.log(container.firstChild);
// console.log(container.firstElementChild);

// //for check lastchild & lastelementchild
// console.log(container.childNodes); 
// console.log(container.lastChild);
// console.log(container.lastElementChild);

// // Count of child elements
// console.log(container.childNodes);
// console.log(container.children);
// console.log(container.childElementCount); 

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextSibling.nextSibling);
console.log(container.firstElementChild.nextSibling.nextSibling.nextSibling);
console.log(container.firstElementChild.nextSibling.nextSibling.nextSibling.nextSibling);
console.log(container.firstElementChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
console.log(container.firstElementChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);


