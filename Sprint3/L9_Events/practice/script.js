console.log('Dark-Light mode toggle')

// select button
let btn1 = document.querySelector('#btn1')
let body = document.querySelector('body')

// 
// btn1.addEventListener('click', () => {
//     btn1.innerText = 'Light Mode'
//     body.setAttribute('class', 'darkMode')
//     btn1.setAttribute('class', 'darkMode')
// })

btn1.addEventListener('click', () => {
    console.log(btn1.getAttribute('class'))

    if (btn1.innerText === 'Click Me') {
        btn1.innerText = 'Light Mode'
        body.setAttribute('class', 'darkMode')
        btn1.setAttribute('class', 'darkMode')
    } else if (btn1.innerText === 'Dark Mode') {
        btn1.innerText = 'Light Mode'
        body.setAttribute('class', 'darkMode')
        btn1.setAttribute('class', 'darkMode')
    } else if (btn1.innerText === 'Light Mode') {
        btn1.innerText = 'Dark Mode'
        body.setAttribute('class', 'lightMode')
        btn1.setAttribute('class', 'lightMode')
    }
})