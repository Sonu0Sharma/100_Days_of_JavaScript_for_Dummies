console.log("HI")

// string properties - like objects have prototype properties by default
let str1 = "Sonu SHarma"
console.log(str1)
console.log(str1.length)
console.log(str1[1])

// template literates   --   `way to include ${expression} in a string`

let obj = {
    item : "pen",
    price : 50
}

console.log(`The cost of the ${obj.item} is ${obj.price}`)

// escape character ----  \n - new line , \t - tab sapce ,etc


// string methods - build in functions to manupulate strings
// in propery - its a metadata of string
// in method - its a fuction that do something to string itself
// in method - we uses ()
// methods - does not change the original string, it returns new value , we need to store them 
// JS strings are immutable


/*
str.toUpperCase()
str.toLowerCase()
str.trim()      - remove spaces from start and end
str.slice(start , end)      - end index not included
str1.concat(str2)       - we can also do - str1 + str2
str.replace(search_value , new_value)       - replace first matching value
str.replaceAll(search_value , new_value)    - replace all the matching values

*/


//Q1. user name generator

let fullname = prompt("Enter your full name : ")

// to remove whitespaces we use - replace(/\s+/g , "")

/*

/ → Start of the regex
\s → "whitespace"
\s+ → one or more consecutive whitespace characters
/ → End of the regex
g → global , search for all whitesapce 

*/

let temp = fullname.replace(/\s+/g , "");
temp = temp.toLowerCase()
let userName = `@${temp}${temp.length}`
console.log(userName)