// Q1 print square of each value of array using for each

let arr1 = [1,2,4,5,7,8,7,5]

console.log(arr1)
arr1.forEach((val,idx,arr) => {
    ans = val **2
    console.log(ans)
})


// second way
console.log("This is second way to solve")
let calSquare = (num) => {
    console.log(num * num);
}

arr1.forEach(calSquare)