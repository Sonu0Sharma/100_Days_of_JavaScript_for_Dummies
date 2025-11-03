/*
Comparison Operators: Used to compare two values and return a boolean (true or false). 
== (Equal to - checks for value equality, type coercion may occur)
=== (Strict equal to - checks for value and type equality)
!= (Not equal to - checks for value inequality, type coercion may occur)
!== (Strict not equal to - checks for value and type inequality)
> (Greater than)
< (Less than)
>= (Greater than or equal to)
<= (Less than or equal to)

examples:

==	Equal to (loose)	5 == "5"	true (type coercion occurs)
===	Strict equal to	5 === "5"	false (compares value and type)
!=	Not equal to	5 != 8	true
!==	Strict not equal to	5 !== "5"	true
>	Greater than	10 > 5	true
<	Less than	5 < 10	true
>=	Greater than or equal to	10 >= 10	true
<=	Less than or equal to	5 <= 10	true

*/

/////////// these are normal - but the problem arises in tricky situations like comparison of different datatypes

console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
==      is equality check operator

<  >  <=  >= ,      these are comparison operators 

comparison operators comverts the null to int equivalent i.e. --> 0

then we have 
0 > 0 --> flase
0 >-= true

*/

console.log("undefined comparison");

let tepm = undefined
console.log(tepm);

console.log(typeof(tepm));
temp2 = Number(tepm)
console.log(temp2);
console.log(typeof(temp2));

// Number(undefined) --> Nan , this is why it gives false in every comparison


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log("strick check -- this also checks datatype");

console.log("2" == 2);
console.log("2" === 2);
