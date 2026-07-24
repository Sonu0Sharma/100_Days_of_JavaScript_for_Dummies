// Q1. create a function to count vovel in string as an argument



let str1 = "Hello My name is SONU"

function vovelCount (msg){
    let count = 0;

    if(msg){
        let msg2 = msg.toLowerCase()
        for (let i = 0; i < msg2.length; i++){
            if(msg2[i] == "a" || msg2[i] == "e" || msg2[i] == "i" || msg2[i] == "o" || msg2[i] == "u"){
                console.log(msg2[i])
                count++;
            }
        }
    }
    console.log(`The total number of vovels in you message are : ${count}`)
    return count;
}

vovelCount(str1)


// do same with arrow function
const arrowVovelCount = (msg) => {
    let count = 0;

    if(msg){
        let msg2 = msg.toLowerCase()
        for (let i = 0; i < msg2.length; i++){
            if(msg2[i] == "a" || msg2[i] == "e" || msg2[i] == "i" || msg2[i] == "o" || msg2[i] == "u"){
                console.log(msg2[i])
                count++;
            }
        }
    }
    console.log(`The total number of vovels in you message are : ${count}`)
    return count;
}

arrowVovelCount(str1)
