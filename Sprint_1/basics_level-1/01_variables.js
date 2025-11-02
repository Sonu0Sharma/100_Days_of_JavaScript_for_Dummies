// varibales -- const , let , var 
// ways to declare varibales :


console.log('Hi Buddy')

const accountId = 144569                    // constant - can not be modified
let accountEmail = "sonu@example.com"       // let
var accountPassword = "1234"                // variable - can be modified
let accountState
accountCity = "Delhi"

// const accountCountry 
// lets try to modify

// accountId = 23

console.log(accountId);

// modifications

accountEmail = "naman@ex.com"
console.log(accountEmail);

accountPassword = "2121212"
accountCity = "jaipur"

// another method to print output

console.table([accountId , accountEmail , accountPassword, accountCity, accountState])


/*
always prefer const and let 
dont use var - because of issue in block scpoe and fucntional scope

so for constant declaration - only 1 methond - const
for variable declaration - 2 methods - var , let

const cant be modified later in code
varibale are made to be modified later in code


we cant declare a const without giving it a value
if a variable is declared without giving value - by default - undefined - this is called hoising

inferred method - here we dont use any keyword to declare varibale - just name = value 
this methonf existis - but highly inefficient and very bad practice - not recommended
*/