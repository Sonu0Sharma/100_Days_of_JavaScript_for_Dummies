// q1. print all even numbers

for (let i = 0; i <= 100; i++){
    if(i%2 === 0){
        console.log(i)
    }
}


// create a game of gussing numbers , prompt user until he guess right

let number = Math.floor(Math.random() * 100) + 1;
// math is an inbuild library

alert("Welcome to the number guess game!")
let userInput = prompt("Enter your guess : ")

/*
now the loop selection

for       ---  Used when we know for how many times we are going to run this loop 
while.    ---  Used when we dont know exactly how many times it gonna run
do while  ---  same as while + surity that loop will run atleat once


we can use any for this but , while loop is perfect for this condition
*/

while(userInput != number){
    if(userInput < number){
        console.log("Your guess is smaller")
        userInput = prompt("Your guess is smaller , Try Again :")
    } else {
        console.log("Your guess is bigger")
        userInput = prompt("Your guess is bigger , Try Again :")
    } 
}

console.log("Congratulation! Your guess is correct✅")
alert("Congratulation! Your guess is correct✅")