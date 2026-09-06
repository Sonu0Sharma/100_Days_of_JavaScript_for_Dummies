console.log("hello conditionals")

let mode = "dark"
let bg_color 

// If    conditionals

if (mode === "dark"){
    bg_color = "Black";
} 
if(mode === "light") {
    bg_color = "white";
}
console.log(bg_color)

//If - else conditionals

let age = prompt("Enter your age - ");

if(age >= 18){
    console.log("You can vote")
} else {
    console.log("you can't vote")
}

if(age % 2 === 0){
    console.log("your age is even")
} else {
    console.log("your age is odd")
}

// Else - if      conditionals
if(age <= 12 ){
    console.log("you are junior")
} else if (age <= 19){
    console.log("you are teenager")
} else if (age <= 60){
    console.log("you are adult")
} else {
    console.log("you are senior citizen")
}

// Ternary Operator     -    compact if else

age >= 20 ? console.log("You are eligible for marrage✅") : console.log("You are not eligible for marrage🥀")

// Switch case conditionals     -     very beautiful if used properly 
// always use break in each code/case block otherwise all the below cases will execute , that's the only issue with switch


let item = prompt("Search your fruit : ")

switch(item) {
    case("orange"):
        console.log("oranges are $0.23 per pound")
        break;
    case("mango"):
    case("papaya"):
        console.log(`${item} are $0.40 per pound`)
        break;
    default:
        console.log(`Sorry ! we are out of ${item}`)
}