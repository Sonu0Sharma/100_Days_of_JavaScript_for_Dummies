console.log('Welcome to L8 - DOM manipulation')

//==============================================
//      DOM MANIPULATION
//==============================================

/*

Manipulation by attritbute :

1. getAttribute(atr)
2. setAttribute(atr , value)

*/

let div1 = document.querySelector('#div1')
console.log(div1)

//1. getAttribute() -

// console.log(div1.getAttribute('id'))
let div1Id = div1.getAttribute('id')
console.log(div1Id)

let p1 = document.querySelector('#p1')
console.log(p1.getAttribute('class'))

//2. setAttribute() -
console.log(p1.getAttribute('id'))
p1.setAttribute('id','para1')
console.log(p1.getAttribute('id'))

// you can assign a new class to a node dynamically , and that class can have lots of style in css file.


/*

Manipulation by style :

1. node.style   -   works only for inline style in html, we can set also the inline style vale by this
    -   node.style     -   get inline style
    -   node.style.backgroundColor = 'red;     -   set inline style

2. getComputedStyle( node );    --->    lets you read the final styles after the browser has applied all CSS rules

to manipulate style - 
    1. we can use node.style method -- but not recommended
    2. Add or remove CSS classes -- by classList.add / .remove / .toggle
    3. You can modify the stylesheet that's loaded in the page through the CSS Object Model (CSSOM). -- advance and not needed

*/

//1. node.style method

console.log(div1.style)
div1.style.backgroundColor = 'tomato'
div1.style.fontSize = '2rem'
div1.innerText = 'Hello!'



//2. getComputedStyle(node) - method
console.log(getComputedStyle(div1))     // this returns an style object
console.log(getComputedStyle(div1).color)

// or we can do
let div1Style = getComputedStyle(div1)
console.log(div1Style.color)
console.log(div1Style.backgroundColor)
console.log(div1Style.height)
console.log(div1Style.width)
console.log(div1Style.border)


/*

Manipulation by element :

step 1 - crate element
    1. let el = document.createElement("div")

step 2 - use element
    A. Insert element
        1. node.append(el)      --      add at end of node (inside)
        2. node.prepend(el)     --      add at start of node (inside)
        3. node.before(el)      --      add before the node (outside)
        4. node.after(el)       --      add after the node (outisde)
    
    B. Delete element
        1. node.remove()        --      remove the element

*/

// create ele
let btn1 = document.createElement('button')


// use ele
console.log(p1)
p1.after(btn1)

//customize element
btn1.innerText = 'Click me!'
btn1.setAttribute('class','button')
btn1.setAttribute('id', 'btn1')
console.log(btn1.getAttribute('id'))

// example 2 

let heading2 = document.createElement('h2')
heading2.innerHTML = '<i><b> ~ Made By Sonu Sharma </b></i>'

let hRuler = document.querySelector('hr')
hRuler.before(heading2)

let p2 = document.createElement('p')
p2.innerText = 'hi , this is the second paragraph made for creating and deleting from JS'
p1.after(p2)

// lets delete node

p2.remove()

