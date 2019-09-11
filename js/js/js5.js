console.log("Jai Mahakal");
const naam = 'Suraj';
const greeting = "Good Morning";
// console.log(greeting + ' ' +naam);

let html;
html = "<h1> This is Heading of Mahakal<h1>"+
        "<p>This is a Paragraph</p>";
html = html.concat('this', ' str1');
console.log(html);  
// console.log(html.length);
// console.log(html.toLowerCase()); 
// console.log(html.toUpperCase()); 

// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(15));
// console.log(html.endsWith('str1'));
// console.log(html.includes('str2'));
// console.log(html.substring(24,31));
// console.log(html.slice(-4));
// console.log(html.split('1'));

console.log(html.replace('This', 'it'));

let fruit1 = 'Apple';
let fruit2 = 'Mango';
let myHtml = `Hello ${name}

<h2> This is \'heading\' </h2>
<p> You like ${fruit1} and ${fruit2}</p>

`;
document.body.innerHTML = myHtml;