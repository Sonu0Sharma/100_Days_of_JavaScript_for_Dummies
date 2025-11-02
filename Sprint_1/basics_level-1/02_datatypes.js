"use strict"; // treat all js code as newer version ,
// a good practice - but modern js is smart enought to figure out this itself

// semi-colans are generally not that strict in js - we can just ignore them
// semi-colans are treated as termination of current line of code in node.js 
// and even a return/enter is also treated as termination of current line of code in node.js 

// thats why we can just ignore them

// alert('Hi')
// this method of alert is for browser - v8 engine , not for node js - we are currenlt using node.js in vs code

console.log("Welcome"); console.log("To JS world");

console.log(3
    +
    3
);
// but this writing of code is bad cause readability is compromised

// good practice -

console.log("Welcome")
console.log("To JS world")

/*
for reference we can refer to documentation :
1. MDN - by mozella - but this is not an offical doc
2. https://tc39.es/ecma262/2023/multipage/ - offical doc for standards
*/

////////////////////////////

/*
DataTypes -

1. number
    - without quotes
    - limit : 2^53
2. bigint 
    - similar to number - but with bigger limit
3. string
    - within quotes - single or duble
4. boolean
    - True or False
5. null
    - standalone type 
    - repesentation of empty value
    - internally its an object
6. undefined
    - declared memory but not defined - doesn't have any value given yet
7. symbol
    - primarly used in react
    - used to find or give uniquess to react components , also heavely used in figma


8. object

to check datatype => console.log(typeof varibale)
*/

let var1
let var2 = "Sonu"
let var3 = 22
let var4 = null
let isLoggedIn = false


console.log(var1)
console.log(typeof var1)

console.log(var2)
console.log(typeof var2)

console.log(var3)
console.log(typeof var3)

console.log(var4)
console.log(typeof var4)

console.log(isLoggedIn)
console.log(typeof isLoggedIn)
