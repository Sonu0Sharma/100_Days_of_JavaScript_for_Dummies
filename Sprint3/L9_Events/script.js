console.log('events and event listeners')

/*

node.event = () => { code }

*/

let btn1 = document.querySelector('#btn1')
console.log(btn1)

let count = 0;

btn1.onclick = () =>{
    console.log('button 1 was clicked')
    count++;
    console.log(`button 1 was clicked ${count} times`)
}
//========================

let box1 = document.querySelector('#box1')
box1.onmouseover = () =>{
    console.log('you are inside box')
}

//=============================
// important findnds - 
// 1. JS events have higher priority than inline html events
// 2. via event handlers (above) - you can have only one event handler on one node, 
// cause if there are 2 handlers on one node then the later one will override the all the previous handlers of that node
//=============================

// EVENT OBJECT     --   stores the info about an event (metadata)

btn1.onclick = (e) =>{
    console.log('Handler 2')
    console.log(e)
    console.log(e.type)
    console.log(e.target);
    console.log(e.clientX , e.clientY)
}

/*===============================
// EVENT LISTNERS

node.addEventListener( event , callback )
node.removeEventListener( event , callback )

# if you want to remove a eventlistner -- then the callback function should be stored some else where , 
like you can't use arroe fucntion

## benefit over event handlers      --->    it can handle multiple events handlers
===============================*/

let btn2 = document.querySelector('#btn2')
btn2.addEventListener('click' , () => {
    console.log('"Button was clicked" this event was handled by eventlistener')
})

btn2.addEventListener('dblclick' , (event) => {
    console.log('"Button was duble clicked" this event was handled by eventlistener')
    console.log(event)
    console.log(event.type)
})

// see now we have 2 handlers for same node 

// now to remove event listner-



let handler1 = (e) => {
    console.log('HANDLER - 1')
}


let handler2 = (e) => {
    console.log('HANDLER - 2')
}

let handler3 = (e) => {
    console.log('HANDLER - 3')
}

let handler4 = (e) => {
    console.log('HANDLER - 4')
}

// create ele
let button3 = document.createElement('button')
box1.after(button3)
button3.setAttribute('class','btn')
button3.setAttribute('id','btn3')
button3.innerText='Button3'

button3.addEventListener('click',handler1)
button3.addEventListener('click',handler2)
button3.addEventListener('click',handler3)
button3.addEventListener('click',handler4)

button3.removeEventListener('click',handler1)