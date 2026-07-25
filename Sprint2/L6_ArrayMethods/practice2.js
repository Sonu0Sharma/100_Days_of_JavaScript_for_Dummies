// Q1 filter the marks of students with 90+

let marks = [45,79,97,94,92,34,97,90]

let filteredMarks = marks.filter((val) => {
    return val >= 90
})
console.log(filteredMarks)


// Q2. take input n from user , create array from 1-n and -
// Summation using reduce method
// product of all element using reduce method

const prompt = require("prompt-sync")();
let n = prompt("enter limit of array in number : ")
let arr = []

for (let i = 0 ; i <= n ; i++){
    arr.push(i)
}
arr.splice(0,1)
console.log(arr)

//1.
let sum = arr.reduce((result,current) => {
    result = result + current
    return result
})
console.log(sum)

//2. 
let product = arr.reduce((result,current) => {
    result = result * current
    return result
})
console.log(product)