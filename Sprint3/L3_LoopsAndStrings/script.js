console.log("Hekko")


// For loop
for (let i = 1; i < 6; i++){
    console.log("Hello", i)
}

// calculate sum of 1 to n

//  let n = prompt("Enter you n number : ")
// let sum = 0
// for (let i = 0; i<=n; i++ ){
//     sum = sum + i
//     console.log(sum)
// }



/* While loop
    initialization condition outside the loop
    and updation is inisde the code block
    the () only hold the checking condition


*/
let i = 0;

while(i<=5){
    console.log(`Current value of i is ${i} . ` );
    i++;
}



/* do while loop
    same as while , but the only unique part is that it gives shurity that the loop will run atleast once,
    even if the condition is false

    this can't even be achieved by for loop
*/

let x = 0
do{
    console.log("this is do while loop with false condition")
    x++;
} while(x>5);


// for of loop.     - used for string and array iteration

let str1 = "Sonu Sharma"
let length = 0
for (let i of str1){
    console.log(i)
    length++;
    
}
console.log(length)


// for in loop      - used for objects and arrays ,
//here the iterator holds the keys of object
// key in object

let stud1 = {
    name : "Sonu Sharma",
    degree : "Btech",
    cgpa : 7.65,
    btanch : "AI-DS",
    college : "GGSIPU",
    age : 23
};

for (let i in stud1){
    console.log(i)
}

for (let key in stud1){
    console.log(stud1[key])
}