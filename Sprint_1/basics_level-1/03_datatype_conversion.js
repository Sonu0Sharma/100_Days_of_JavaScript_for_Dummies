// basic primitive datatypes -> number,string,bigint,undefined,null,boolean

let score1 = 33

console.log(score1)
console.log(typeof score1);
console.log(typeof(score1));    // just another typing style

// but the real problem arises when we convert datatype :

let score2 = "33"
let score3 = "33abc"

console.log(score2);
console.log(typeof(score2));

console.log(score3);
console.log(typeof(score3));

// but score3 is not a pure number so -> in conversion it should not be converted into number datatype

// let new_variable = Number(og_variable) --- this is used to convert datatype 
// but the dayatype must be mentioned in first capital letter like 

// let var2 = number(var1) -----> wrong
// // let var2 = Number(var1) -----> right
// // let var2 = String(var1) -----> right



let valueInNumber2 = Number(score2)
console.log(valueInNumber2)
console.log(typeof(valueInNumber2))

let valueInNumber3 = Number(score3)
console.log(valueInNumber3)
console.log(typeof(valueInNumber3))

// see when we converted score3 -- it showed that conversion in sucessful 
// but it got converted in -- nan - not an number 
// so we need to keep this in mind before applying some operation in js while converting datatype

// boolean input --> num
let score4 = true
let valueInNumber4 = Number(score4)
console.log(valueInNumber4)
console.log(typeof(valueInNumber4))


let score5 = false
let valueInNumber5 = Number(score5)
console.log(valueInNumber5)
console.log(typeof(valueInNumber5))


// null value to num
let score6 = null
let valueInNumber6 = Number(score6)
console.log(valueInNumber6)
console.log(typeof(valueInNumber6))

// undefined to num
let score7 = undefined
let valueInNumber7 = Number(score7)
console.log(valueInNumber7)
console.log(typeof(valueInNumber7))

// string to num 
let score8 = "Sonu"
let valueInNumber8 = Number(score8)
console.log(valueInNumber8)
console.log(typeof(valueInNumber8))

/*
"33" => 33
"33abc" => NaN
"String" => NaN
true => 1 ; false => 0
null => 0
undefined => NaN
*/

///////////////////////////


//conversion to boolean
console.log("conversion to boolean");

// sting to boolen
let isLoddedin = "Sonu"
console.log(isLoddedin)
let booleanIsLoggedin = Boolean(isLoddedin)
console.log(booleanIsLoggedin);

// empty string to boolean
let isLoddedin2 = ""
console.log(isLoddedin2)
let booleanIsLoggedin2 = Boolean(isLoddedin2)
console.log(booleanIsLoggedin2);

//number to boolean
let isLoddedin3 = 0
console.log(isLoddedin3)
let booleanIsLoggedin3 = Boolean(isLoddedin3)
console.log(booleanIsLoggedin3);

let isLoddedin4 = 1
console.log(isLoddedin4)
let booleanIsLoggedin4 = Boolean(isLoddedin4)
console.log(booleanIsLoggedin4);

let isLoddedin5 = 2
console.log(isLoddedin5)
let booleanIsLoggedin5 = Boolean(isLoddedin5)
console.log(booleanIsLoggedin5);

// null and undefined to boolean

let isLoddedin6 = null
console.log(isLoddedin6)
let booleanIsLoggedin6 = Boolean(isLoddedin6)
console.log(booleanIsLoggedin6);

let isLoddedin7 = undefined
console.log(isLoddedin7)
let booleanIsLoggedin7 = Boolean(isLoddedin7)
console.log(booleanIsLoggedin7);

/*
conclusion
"someStringValues" => true
" " => false
0 => false; 1 => true; any other number => ture
null , undefined => false
*/

// same can be done for string easily