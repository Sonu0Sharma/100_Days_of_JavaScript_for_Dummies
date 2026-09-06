console.log('practice script')


// Q1. Create new button, give it a text, click me. Give it background color, teal, 
// and insert it inside a body as the first element.

let body = document.querySelector('body')
let btn1 = document.createElement('button')
let div = document.createElement('div')
btn1.innerText ='Click Me'
btn1.style.color = 'whitesmoke'
btn1.style.backgroundColor = 'teal'
body.prepend(div)
div.prepend(btn1)


//Q2. Create a paragraph in HTML. Give it some styling. Now, create a class in CSS. Give it some properties. 
// Now, through JavaScript, access that paragraph and append this class into the classes of that para in HTML.

// use of classList

let para = document.querySelector('p')
console.log(para.classList)
para.classList.add('primaryColor','primaryFillColor')
