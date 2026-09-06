console.log('inheritance')
// inheritance is passing down the properties(varibale) and methods(functions) from parent class to child class

// keyword - extends

/*========================================================*/
/*============================
eg:

class parent {
}
class child extend parent {
}


Child constructor is invoked → it reaches super() → parent constructor executes → returns → child constructor continues.
order of invication of constructor in js in case of inheritance


its a must to use keyword --->      super()

in every generation of child
============================*/

class human {
    constructor(name){
        this.name = name
        console.log('class human invoked')
    }
    eat(){
        console.log('eating done')
    }
    sleep(){
        console.log('sleeping done')
    }
}

class engineer extends human {
    constructor(name,profession){
        super(name)
        this.engineerName = name
        this.profession = profession
        console.log('class engineer invoked')
    }
    work(){
        super.eat()
        console.log('solve problems , build something')
    }
}

class employee extends engineer{

    constructor(name,profession,salary){
        super(name,profession)
        this.employeeName = name
        this.salary = salary
        console.log('class employee invoked')
    }
    calcTax() {
        const salary = this.salary;
        let tax = 0
        if (salary < 1200000) {
            console.log('Your tax is 0%')
            
            console.log(`Your tax will be ${tax} and your net salary will be ${salary - tax}`)
        } else {
            console.log('Your tax is 12%')
            tax = (12 / 100) * salary
            console.log(`Your tax will be ${tax} and your net salary will be ${salary - tax}`)
        }
        return tax;
    }
}

/*=========================
Child constructor is invoked → it reaches super() → parent constructor executes → returns → child constructor continues.
order of invication of constructor in js in case of inheritance

"constructer aik prem katha"
when we write --->       new Employee(1500000);
JavaScript does this --->       constructor(1500000)


if user doesn't passed values of constructer properties while making new objects - all properties became undefined

                class Employee {
                    constructor(salary) {
                        this.salary = salary;
                    }
                }

                const emp = new Employee();

                console.log(emp.salary);

we can assign values later also :

                const emp = new Employee();
                emp.salary = 1500000;


force the user to pass the value


                class Employee {
                    constructor(salary) {
                        this.salary = salary ?? Number(prompt("Enter salary:"));
                    }
                }   


===============================*/


let sonu = new employee("Sonu", "Software Engineer", 15694648);
// let sonu = new employee();
// sonu.name = "Sonu"
// sonu.profession = "Software Engineer"
// sonu.salary = 15694648

console.log(sonu)
console.log(sonu.calcTax())

//super keyword is basically used to invoke the constructor method of parent class. Notice this
// , the constructor itself is a method. So similarly, if we want to invoke any other method of the parent class,
// , in the child class, we can use the super keyword again.