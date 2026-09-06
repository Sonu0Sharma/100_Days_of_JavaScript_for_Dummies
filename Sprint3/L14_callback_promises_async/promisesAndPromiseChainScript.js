console.log('promises')

/*=============================
    PROMISES :
in JS , promises is for eventual completion of task
it's and object in js
solution to callback hell


    let promise = new Promise( (resolve , reject) => {...} )

    promise state - pending , fullfilled (resolve --> promiseResult) , rejected (reject values ---> promiseResult)
===============================*/

let promise = new Promise((resolve , reject) => {
    console.log('i am a promise')
    resolve('sucess', 123)
})

// let promise2 = new Promise((resolve , reject) => {
//     console.log('i am a promise - 2')
//     reject('failed - some error occured', 400)
// })

/*=============================
1. A Promise is an object
new Promise(...) creates a Promise object.
The Promise constructor takes a function as its argument. That function is called the executor function: resolve , reject
(resolve , reject) => {...}

2. The executor runs immediately
A Promise does not automatically mean "run this code later."
Usually, the work inside a Promise represents something asynchronous, such as:      fetch(...)

3. resolve() means the operation succeeded
resolve() only accepts one value. So for multiple pieces of information
        resolve({
            message: 'success',
            number: 123
        });
same for reject

5. Promise Consume
resolve() and reject() don't directly "return" the value to you.
They change the state of the Promise and provide a value that you can later consume with .then() and .catch().

===============================*/
let num = 14;

let promise3 = new Promise((resolve, reject) => {
    let number = num;

    if (number > 5) {
        resolve({
            message : "Sucess",
            statusCode : 201 
        });
    } else {
        reject({
            message : "Failed : Some error occured",
            statusCode : 404
        });
    }
});
// this is how we usually deal with promises inside the code base

let promise4 = new Promise((resolve, reject) => {

    let age = 20;

    if (age >= 18) {
        resolve("You are allowed");
    } else {
        reject("You are not allowed");
    }

});

promise4
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


/*==============================
         SOME OPERATION
               |
          Did it finish?
          /           \
       YES             NO
        |               |
     resolve          reject
        |               |
        v               v
     Promise          Promise
    fulfilled         rejected
        |               |
        v               v
     .then()          .catch()
==============================*/


/*==============================
The actual API server

Receive request
      ↓
Check authentication
      ↓
Query database
      ↓
Did database operation succeed?
      ↓
   ┌──YES───┐
   ↓        ↓
Return    Return
200       500
+ data   + error
=================================

API example :- 

app.get("/users/:id", async (req, res) => {

    const user = await database.findUser(req.params.id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }

});


==============================*/











/*============================================================*/
/*============================================================*/
/*============================================================*/
