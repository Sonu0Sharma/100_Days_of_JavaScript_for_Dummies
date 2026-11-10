console.log("HI there this is for array methods")
// 1. forEach Method
// 2. Map Method
// 3. Filter Method
// 4. Reduce Method


//methods -- are same as functions - only difference is they are associated with a perticular data type
// therefore only used for those datatype

// for each loop -  foreach method
/*
arr.foreach(callback func)
*/

// callback func are func that are passed as argument into another function
// in for each - this callback func will be executed for each element for array

let arr1 = ['sonu','naman','bimlesh','parth','aashu']

arr1.forEach(function printVal(val){
    console.log(val)
})

// here we much create a parameter in callback - this parameter will be used by for each loop - loop will pass the value at each index for array
// usually we use arrow function as call back

let count = 0;
arr1.forEach((val)=>{
    count++
    console.log(count)
})

// foreach - callback have 3 parameters - value , index, array

arr1.forEach((val,idx,arr) => {
    console.log(val.toUpperCase(), idx , arr)
})

// MAP METHOD

// Same as forEach method - takes a callback function - can pass 3 parameters - value , index , array
// performs some operations for each value or any of 3 parameter
// the only difference is - the value its callback returns are used to form a new array

console.log("this is map method")

let arr2 = [23,46,7,34,67,79,37,56,25,64]

let newArr2 = arr2.map((val) => {
    console.log(val)
    return val*val
})
console.log(newArr2)

// FILTER METHOD

//created a new array for the elements that passes the given condition
console.log('this is filter method')

let oddArray = arr2.filter((val) => {
    return val % 2 !== 0
})
console.log(oddArray)

// REDUCE METHOD

// perform some operations on array and reduce it to a single value and then return it
console.log('this is reduce method')

/*
arr.reduce((result , current) => {
    code block
    })

    here result and current are like 2 pointers - result is val at index 0
    and current is val at index 1 

    reduce method will perform operations based on these 2 values and the resultant will be stored in result
    then pointer of current will shift forward , - same operations - outcome sptred in result 

    and at last result is returned
*/

let sum = arr2.reduce((result , current) => {
    return result + current
})

let largest = arr2.reduce((result , current)=>{
    return result > current? result: current
})

let smallest = arr2.reduce((result , current)=>{
    return result > current? current: result
})

console.log(sum)
console.log(smallest)
console.log(largest)



/*

forEach() → "Do something for each element."
map() → "Transform every element into a new element."
filter() → "Keep only the elements that match a condition."
reduce() → "Combine all the elements into one final value."

*/