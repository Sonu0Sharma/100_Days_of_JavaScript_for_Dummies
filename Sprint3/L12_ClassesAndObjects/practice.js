console.log('practice')

/*=====================

Q1. You are creating a website of your college. Create a class- User, 
with two properties: name and email. 
It also has a method called viewData(). This allows user to view website data. 


Q2. Create a new class called Admin, which inherits from User. 
Add a new method called editData() to Admin that allows it to edit website data.
======================*/

class User{
    constructor(name , email){
        this.name = name;
        this.email = email
        console.log('class - user -- constructer invoked')
    }

    viewData(){
        console.log('Website data...')
    }
}

let naman = new User("naman","naman@example.com")
console.log(naman)

class Admin extends User{
    constructor(name , email){
        super(name , email)
        console.log('Admin constructer invoked')
    }

    editData(){
        console.log("data edited")
    }
}

let sonu = new Admin("name" , "sonu@123example.com")