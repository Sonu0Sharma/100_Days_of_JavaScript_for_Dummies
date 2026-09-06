console.log('callback and callback hell issue')

/*============================
SYNCHRONOUS PROGRAMMING:
    code execution - line by line ,    next line waits for finih of previous line
    JS itself is only synchronous
================================*/

console.log('one')
console.log('tow')
console.log('three')

/*=============================
ASYNCHRONOUS PROGRAMMING:
    code block that takes time is passed to event loop:

    #   The Event Loop: The engine behind Async JS. 
    Asynchronous operations are pushed to Web APIs (like fetch or setTimeout). 
    Once finished, their results are queued in the Microtask Queue (for Promises) or Macrotask Queue (for timers/events) 
    and executed sequentially when the main call stack is entirely empty.

    #   Error Handling: Always wrap your await blocks inside a try...catch statement 
    to cleanly handle unexpected network or parsing failures.

    #   Parallel Execution: Avoid awaiting independent calls sequentially, which creates artificial bottlenecks. 
    Use Promise.all() to run them concurrently

    #   Top-Level Await: Historically, await was strictly forbidden outside an async function.
    Modern environments permit it at the root file level, 
    provided the script is running inside a JavaScript Module (type="module").
===============================*/

function hello() {
    console.log('hello from normal function')
}

// setTimeout(hello() , 3000)
// the problem here is that - frist the hello() is executed right away and then whatever it return's os given to setTimeout
// because of parenthesis       hello() 


setTimeout(hello, 2000)

setTimeout(() => {
    console.log('arrow function hello')
}, 3000);

console.log('console print after - timer function - setTimeout')

// callbacks - a function passed as argument to another function's parameter 
let a = 535
let b = 77


function sum(a, b) {
    console.log(a + b)
    return a + b
}

function calculate(x, y, callbackSum) {
    callbackSum(x, y)
}

calculate(a, b, sum)
calculate(24, 58, sum)

// or we can also do this:

calculate(a, b, () => {
    console.log(a + 5)
})

// async :

setTimeout(() => {
    calculate(a, b, sum)
}, 3000);


/*=============================
    NESTING :

Nested callbacks - forming pyramid like structure (Pyramid of Doom)     --->    hard to read and understand code

===============================*/
// nesting :
//example 1 -
let age = 19
if (age >= 18) {
    if (age >= 60) {
        console.log('senior')
    } else {
        console.log('middle')
    }
} else {
    console.log('child')
}

//example 2 -
for (let i = 0; i < 10; i++) {
    let str = ''

    for (let j = 0; j < i; j++) {
        str += '*'
    }
    console.log(i, str)
}

/*==============================
    CALLBACKS IN ASYNC JS :
==============================*/

// lets make a function that resembles data base - returns data after some time after searching
function getData(dataID, getNextData) {
    setTimeout(() => {
        console.log('data', dataID);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// Now let's suppose we need multiple data with delay:
getData(1)
getData(2)
getData(3)      // see the problem is all 3 data comes exactly same time 

// we need data but in an order of delay    --->    data-1  (...2s...)   data-2    (...2s...)   data-3 
// One more thing ---> if we ever need to pass a function as callback along with the parameter - always use arrow function

// getData(123,getData(23))         // Wrong❌ , cause we can't pass callback with argument

// getData(123, () => {
//     getData(234, () => {
//         getData(345, () => {
//             getData(456)
//         })
//     })
// })

// this is called Pyramid of doom / callback hell   --->.  in larger code base - hard to understand

getData(123, () => {
    console.log('getting data 234 ...')
    getData(234, () => {
        console.log('getting data 345 ...')
        getData(345, () => {
            console.log('getting data 456 ...')
            getData(456)
        })
    })
})






/*============================================================*/
/*============================================================*/
/*============================================================*/
/*============================================================*/
