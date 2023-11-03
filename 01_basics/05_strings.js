// const name = "rohit"
// const repoCount = 50

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} ` );

const gameName = new String('Hitesh-hc-com')

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6, 4); //Hite
console.log(anotherString);

const newString1 = "  Rohit  "
console.log(newString1.trim()) // remove space

const url = "https://rohit.com/rohit%20sharma"

console.log(url.replace('%20', '_')) // https://rohit.com/rohit_sharma
console.log(gameName.split('-')); // [ 'Hitesh', 'hc', 'com' ]