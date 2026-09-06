console.log('classes')
/*=========================
✅ One object can be the prototype of many objects.
✅ Classes also create objects that share methods through a prototype.
✅ Classes are mainly a cleaner and more organized syntax over the same prototype system.


1. Every object has a prototype :
Every normal object in JavaScript automatically gets a prototype.
If a property or method is not found on the object itself, JavaScript looks for it in its prototype.

Example:
obj.property
________________________________________

2. Custom prototypes
You can make one object inherit from another.

Old way:
child.__proto__ = parent;

Modern way:
Object.setPrototypeOf(child, parent);

Now child can use all the methods and properties of parent (if they aren't present on child).
________________________________________

3. Object.create()
Creates a new object and sets its prototype at the same time.

const child = Object.create(parent);

Equivalent to:

const child = {};
Object.setPrototypeOf(child, parent);

________________________________________

4. Classes
A class is a blueprint for creating many similar objects.

class Student {
    greet() {}
}

const s1 = new Student();
const s2 = new Student();

Every object created with new Student() shares the methods stored in Student.prototype.

________________________________________

5. Relationship between prototypes and classes
Classes are built on top of JavaScript's prototype system.

When you write:

const s1 = new Student();

JavaScript internally links:

s1  --->  Student.prototype

So classes are not a new inheritance mechanism. They use prototypes under the hood.

________________________________________

6. Difference
__proto__ / Object.setPrototypeOf() → Connect an existing object to another object.
Object.create() → Create a new object with a chosen prototype.
class + new → Create many objects easily using a constructor and automatically link them to ClassName.prototype.

Classes are not ordinary objects. They are special kinds of functions. 
And since functions are objects in JavaScript, classes are also objects.
===========================*/



class toyotaCar {
    start(){
        console.log('start')
    }

    stop(){
        console.log('stop')
    }

    // let brandName : ""       --->     we can't do this in class

    setBrand(brand){
        this.brandName = brand
    }


}

let forutner = new toyotaCar();
console.log(forutner)
forutner.setBrand('fortuner')
console.log(forutner)
console.log(forutner.brandName)


/*======================
In the class, this.variableName will automatically create the variable inside that particular object. 
We don't need to create it ourselves. Or if the code is getting confusing, so for this particular scenario, 
we can use the constructor, and inside the constructor, we can declare the variable to make it more readable.
==========================*/


/*===========================
CONSTRUCTER

Rules :
✅ It's called automatically when you use new.
✅ A class can have only one constructor.
✅ You cannot name another method constructor.
✅ In derived classes (extends), you must call super() before using this.

Uses :
✅Runs automatically when you create an object with new.
✅Initialize object properties (its most common use). (property ---> varibale)
✅Perform setup work when an object is created.
✅Call the parent class's constructor using super() when using inheritance.
=============================*/

//  Whenever object is created using new keyword, this keyword first looks for the constructor of the class. 
// If the constructor is found, it is executed right away. 
// If it is not found, then JavaScript will create a default constructor for class.


class Sizuki {
    constructor(model, milage){

        console.log("Object is Created Sucessfully")

        this.modelName = model
        this.milage = milage
    }

    start(){
        console.log('start')
    }

    stop(){
        console.log('stop')
    }
}

let Maruti = new Sizuki('Maruti')
console.log(Maruti)

let Maruti2 = new Sizuki('Maruti' , 23)
console.log(Maruti2)
console.log(typeof Maruti2)

/*

output  --->    Sizuki {modelName: 'Maruti', milage: undefined}

this is the output ---> console.log() never prints the variable name. 
It prints the value. For class instances, 
browsers usually label the value with the constructor (class) name to help you identify its type. 

eg 
const arr = [1, 2, 3];
console.log(arr);
output  --->    Array(3) [1, 2, 3]

*/ 





/*========================================================*/
/*========================================================*/
