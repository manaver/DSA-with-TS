// Here are some basic programs on type in time as i encounter more new types i will add them here

//In Typescript we are mentioning the type of the variable helps us to write more robust code
let greetings: string = 'Hello World!';

//Javascript doesn't have any special runtime value for integers, so there's no equivalent to int or float - everything is simply number 
let number: number = 10;

let isTrue: boolean = true;


console.log(greetings + ' ' + number + ' ' + isTrue);

/*
Note:
In typescript as i tell above to define types of variables.
But in actual there is no need to define type when we are assigning value to the variable at the time of initialization.

//Do this
let greetings = 'Hello World!'; 

//Don't do this. Because it's obvious that the variable is of type string
let greetings:string = 'Hello World!';

Because typescript is smart enough to understand the type of the variable by the value assigned to it. When we are assigning value to the variable at the time of initialization.

So, the question is where do we need to define the type of the variable?
The answer is when we are not assigning any value to the variable at the time of initialization.

eg: function add(a: number,b: number){
        return a+b;
    }
    Here, we are expecting a and b to be number type. So, we need to define the type of the variable.


    Similarly, we can define the type of variable in other places like class, interface, etc.
*/

// Defining constants
const PI: number = 3.14;
// same as
let Pi: 3.14 = 3.14;
// These both statements gives error
// Pi = 3
// PI = 3
console.log("Value of Pi: ", Pi, " And Value of PI: ", PI)

//Mixed types
let x: (string | number) = 2;
console.log('Number Mixed value x = ', x);
x = 'working';
console.log('String Mixed value x = ', x);
// x = true //Gives error because type is not defined

//Fixed Mixed types
let seatAllotment: 'aisle' | 'middle' | 'window'
// seatAllotment = "Front" //Gives error
seatAllotment = 'window'
console.log('Seat Allotment: ', seatAllotment)