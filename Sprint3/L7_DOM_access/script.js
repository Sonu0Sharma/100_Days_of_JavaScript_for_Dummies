console.log('This is a dom practice session')
console.dir(document.body)
console.log(document.body)


// 3 old methods to select html elememts :


let heading1 = document.getElementById("heading_1")
console.log(heading1)

// getElementsByClassname   -   returns a HTMLcollection

let headings = document.getElementsByClassName("headings")
console.log(headings)

// getElementByTagname      -   HTMLcollection

let button = document.getElementsByTagName("button")
console.log(button)


// 2 modern ways to select html elemnts :   Query Selectors

// querySelector()      -   Returns the first matching element only
// we can pass - tag , class , id       -       auto detects
let para = document.querySelector('p')
console.log(para)

let firstHeading = document.querySelector(".headings")
console.log(firstHeading)



// querySelectorAll()      -   Returns all matching elements
// returns a    -   NodeList    - similar data structure like HTMLcollection
let allParas = document.querySelectorAll("p")
console.log(allParas)

let alltHeading = document.querySelectorAll(".headings")
console.log(alltHeading)


//==================================================================
//
//      COMMON PROPERTIES
//
//==================================================================

/*

1. tagName      -   returns tag name of a node
2. innerText    -   returns the text content inside element and all its children
3. innerHTML    -   returns entire HTML content along with text of a element
4. innerContent

we can get and set values using these properties 

*/

//tagName

//Because we accessed the button element using class name, it returned a HTML collection. 
// That's why we did indexing and then applied a property tag name.
console.log(button[0].tagName)

//innerTex  -   text✅ , hidden text❌ , html ❌

console.log(button[0].innerText)

let body = document.querySelector('body')
console.log(body)
console.log(body.innerText)

// Properties for navigation    -   children , firstChild , lastChild
console.log(body.firstChild)
console.log(body.lastChild)
console.log(body.children)


// innerHTML    -   text✅ , hidden text✅ , html ✅
console.log(body.innerHTML)

let div1 = document.querySelector('#div_1')
console.log(div1)
console.log(div1.innerHTML)

// textContent      -   text✅ , hidden text✅ , html ❌
let div2 = document.querySelector('#div_2')
console.log(div2)
console.log(div2.innerText)
console.log(div2.textContent)

/*

1. we can also set the values using these properties

2. we can also select or navigate into child nodes by 3 ways
    1. direclty use tag , class , id    -   select a child node
    2. Select the parent first, then find child
    3. using children method - convert the parent into HTMLCollection

*/

// methods 2 

// let div2 = document.querySelector('#div_2')
console.log(div2)
let boldText = div2.querySelector('b')
console.log(boldText)

// method 3 

let childrenCollection = div2.children
console.log(childrenCollection)
console.log(childrenCollection[2])

// set values

console.log(button)
let myButton = button[0]
console.log(myButton)
console.log(myButton.innerText)
myButton.innerText = "Click!"
console.log(myButton)

// we can similarly change / set values using - innerHTML , innerText , textContent

