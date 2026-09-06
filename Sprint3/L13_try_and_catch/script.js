console.log('hi')

let a = 5
let b = 39

try {
    console.log("a = ", a)
    console.log("b = ", b)
    console.log("a + b = ", a + b)
    console.log("a+c = ", a + c)
    console.log('a x b = ', a * b)
    console.log('a / b = ', a / b)
} catch (err) {
    console.log(err)
}

/*

When an error occurs inside the try block, 
execution immediately stops for the rest of that try block and jumps to the catch block.

What if you want the remaining calculations to run?

Then each risky statement needs its own try...catch



*/

