/*

Arithmetic Operators: Used for mathematical calculations.
+	Addition	5 + 2	7
-	Subtraction	5 - 2	3
*	Multiplication	5 * 2	10
/	Division	6 / 2	3
%	Modulus (Remainder)	5 % 2	1
**	Exponentiation	5 ** 2	25
++	Increment	let x = 5; x++;	x becomes 6
--	Decrement	let x = 5; x--;	x becomes 4


Assignment Operators: Used to assign values to variables.
= (Assignment)
+= (Add and assign)
-= (Subtract and assign)
*= (Multiply and assign)
/= (Divide and assign)
%= (Modulus and assign)
**= (Exponentiate and assign)

example :

=	x = 5	x = 5
+=	x += 5	x = x + 5
-=	x -= 5	x = x - 5
*=	x *= 5	x = x * 5
/=	x /= 5	x = x / 5
%=	x %= 5	x = x % 5

let x = 10;
let y = 5;

+=	Addition Assignment	x += y;	15	
-=	Subtraction Assignment	x -= y;	5	
*=	Multiplication Assignment	x *= y;	50	
/=	Division Assignment	x /= y;	2	
%=	Remainder Assignment	x %= y;	0	
**=	Exponentiation Assignment	x **= y;	100000


////////////

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


Logical Operators: Used to combine or manipulate boolean values.
&& (Logical AND) -- both true then ture
|| (Logical OR) -- one true then true
! (Logical NOT) --  true <--> false


String Operators: Primarily the + operator for string concatenation


Bitwise Operators: Perform operations on the binary representation of numbers. These are less commonly used in general web development.
& (AND)
| (OR)
^ (XOR)
~ (NOT)
<< (Left Shift)
>> (Right Shift)
>>> (Zero-fill Right Shift)


Type Operators: Used to determine the type of a variable or value.
typeof (Returns a string indicating the data type)
instanceof (Checks if an object is an instance of a specific class)


Ternary (conditional) operator :
question mark (?) 
colon (:).

example --   condition ? expressionIfTrue : expressionIfFalse;

const userAge = 20;
const votingStatus = (userAge >= 18) ? "Can vote" : "Cannot vote";
console.log(votingStatus);


condition: The expression that is evaluated to be true or false.
?: Separates the condition from the true result.
expressionIfTrue: The value returned if the condition is true.
:: Separates the true result from the false result.
expressionIfFalse: The value returned if the condition is false


*/


// ok now we will move to tricky situations

let str1 = "Hello"
let str2 = " Sonu"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// if string is first then rest will be treated as strings only
// is a number is first then operator will be applied to num then add string at last


///////// there is a topic of precidence order -- but not recommended in production cause this is called a messy code -- if we need to apply logic with many operators then use () to seperate the operators 

// type conversion via operator
console.log(true);
console.log(+ true);
console.log(+"");   // this is very bad 

// another tricky way

let num1 , num2 , num3
num1 = num2 = num3 = 2+2
console.log(num3);
// this is also done by many , but not good as it compromises with readability

// //////// prefix , postfix increment

let gameScore = 100
gameScore++
console.log(gameScore);
