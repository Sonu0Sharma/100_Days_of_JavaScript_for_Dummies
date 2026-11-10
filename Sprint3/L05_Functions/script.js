console.log("Fucntions")

// fucntion always envoke / called with parenthesis - ()

/*
function func_name (param 1 , param 2 ...){
    
    code Block

    return

    }

*/

function greeting() {
    let str1 = "Welcome to apna collage"
    let str2 = "We are learning JS"

    console.log(`${str1} and ${str2}`)

    return(`${str1} and ${str2}`)
}

let result = greeting()
console.log(result)

// 🤪

// for (let i = 0; i<5 ; i++){
//     console.log(result)
// }

// INPUT

function greeting2(msg) {
    let str1 = "Welcome to apna collage"
    // if (msg !== undefined && msg !== "")
    if(msg){
        console.log(`Hello my name is ${msg}`)
    }
    let str2 = "We are learning JS"

    console.log(`${str1} and ${str2}`)

    return(`${str1} and ${str2}`)
}

greeting2()
greeting2("Sonu")

// function to calculate sum of 2

function twoSum (a,b){
    result = a +b;
    console.log(result)
    return(result)
}

twoSum(2,4)


// return only returns one value - but it can be array or object also -- if we want multiple

