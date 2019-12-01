let myFirtName = "Teo ";

let myNameLenght = myFirtName.length;
// console.log(myNameLenght);

let helloPrefix = "Hello, my name is ";

let finalString = helloPrefix + myFirtName;
// console.log(finalString);

let finalString_2 = helloPrefix.concat(myFirtName);
//console.log(finalString_2);

// trim()
let myLastName = "Huynh";
let myName = myFirtName + myLastName;

// console.log("My name is: ", myName);

let utilizedFirtName = myFirtName.trim();
myName = utilizedFirtName + myLastName;
// console.log(myName);

// Cat chuoi
let helloString = "Hello World!"
let helloStringSplit = helloString.split(" ");
//console.log(helloStringSplit);

// indexOf
let indexOfA = helloString.indexOf("A");
console.log(indexOfA);

let indexOfO = helloString.indexOf("Hello");
console.log(indexOfO);







