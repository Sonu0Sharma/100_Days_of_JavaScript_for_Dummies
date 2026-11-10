console.log('L7 practice')

//Q1

// create 

let text1 = "from Sonu Sharma"

// access ele

let heading1 = document.querySelector('h2')
console.log(heading1.innerText) 
console.log(typeof heading1.innerText) 

// change

heading1.innerText = heading1.innerText+" "+text1
console.log(heading1.innerText) 


// Q2

let boxes = document.querySelectorAll('.box')
console.log(boxes)

for(let i = 0 ; i < boxes.length ; i++){
    console.log(boxes[i])
    console.log(boxes[i].innerText)
    boxes[i].innerText = boxes[i].innerText +" "+ i
}