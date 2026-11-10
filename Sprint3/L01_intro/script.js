console.log("hello")
console.log("Hi i am Sonu");
console.log('I love JS')

/////

fullName = "Sonu Sharma"
console.log(fullName);

raidus = 30.5
follow = true

// Dynamically typed -- no need to tell the datatype at varibale declaration like in c++.

// variable rules - 
//     1. case sensitive
//     2. only alphabets (letter) ,numbers , underscore , $ are allowed
//     3. must only start with letter , underscore , $
//     4. no reserved words allowed

Console = "Hello 2"
console.log(Console);

// declarations-
    // 1. var -- can be re_declare , and updated , scope global
    // 2. let -- can't re_declare , can be updated , scope block
    // 3. const -- can't re_declare, can't update , scope block 

const WRITER = "Sonu Sharma"
let age = 23

console.log(WRITER , age)
console.log(typeof WRITER)

// datatypes in JS - number , string , boolean , null , undefined , bigint , symbols

// to check -- typeof varibale

let x = null
console.log(x)
console.log(typeof x)

let y = BigInt("1223")
console.log(y)
console.log(typeof y)

let z = Symbol("Hello!")
console.log(z)
console.log(typeof z)

// non primitive datatype -- object

const student1 = {
    name : "Sonu Sharma",
    age : 23,
    course : "B.tech",
    cgpa : 7.7,
    isPass : false
}

console.log(student1)
console.log(student1.age)

student1.age = 24

console.log(student1.age)

//  Practice --

const Product1 = {
    name : "parker jotter standard",
    inkColor : "black",
    reviews : 7002,
    rating : 4,
    DealOfTheDay : true,
    mrp : 285,
    discount : Symbol ("5%"),
    discountedPrice : 270
}

console.log(Product1)