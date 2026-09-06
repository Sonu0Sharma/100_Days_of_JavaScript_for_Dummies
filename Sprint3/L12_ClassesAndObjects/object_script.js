console.log('Object and classes')

/*============================
JS objects are the entity having state and behaviour (properties and methods)
all objects have a special property called PROTOTYPE

we can set prototype using      __proto__

if object and prototype have same methods - object method is used

2 improtamt methods of object :
    Object.keys(obj)        ----        gives all keys of object - can be stors in array
    Object.values(obj)      ----        gives all values of object - can be stors in array

=======================≠======*/

const stud1 = {
    fullname: 'Sonu Sharma',

    studentMarks: {
        english: 89,
        maths: 90,
        science: 95,
    },

    printMarks: function (subject) {
        console.log(`${subject} marks are : ${this.studentMarks[subject]}`)
        return this.studentMarks[subject]
    },

    averageMarks: function () {
        let temp = 0
        let marks = Object.values(this.studentMarks)

        for (let i = 0; i < marks.length; i++) {
            temp += marks[i]
        }

        console.log(`the average marks of student is : ${temp / marks.length}`)
        return temp / marks.length
    }
}

console.log(stud1)
console.log(stud1.printMarks('english'))
console.log(stud1.averageMarks())

// every object has some predefoned set of methods and properties - they come from prototype

console.log(stud1.toString)
// this .toString is a method that we didn't defined - but stud object has it -- it comes from prototype
// example 2 

let arr1 = ['mango', 'watermelon', 'orange']
console.log(arr1)
console.log(typeof arr1)
// noticed      --->    arrays are internally objects in JS
// so they must also have a prototype ---> and  yes they have 
arr1.push('lichi')
// this push methond that we didn't defined ---> was inherited from arrays's prototypeconsole.log(arr1)
console.log(arr1)


// so we can do this also ---> set one object as prototype for another object and then use the 
// first object's methods inside of second object also 

const employeeTax = {
    calcTax: function (salary) {
        if (salary < 1200000) {
            console.log('Your tax is 0%')
            let tax = 0
            console.log(`Your tax will be ${tax} and your net salary will be ${salary - tax}`)
        } else {
            console.log('Your tax is 12%')
            let tax = (12 / 100) * salary
            console.log(`Your tax will be ${tax} and your net salary will be ${salary - tax}`)
        }
    }
}

const karan = {
    salary: Number(prompt('Enter your salary in numbers without any comas : '))
}

// now to get calclulate tax as a method for every employee ---> we can set it as prototype of other objects

karan.__proto__ = employeeTax

//Function parameters don't need this ✅
//Object properties are accessed with this ✅

console.log(karan)
console.log(karan.calcTax(karan.salary))

// type of  prototype   --->    "reference to an object"

