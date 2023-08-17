// Let's check some examples on functions in typescript


//In this example if we do not define the type of the variable then it will be of type any (any stops the type checking of the variable, so it's better to avoid using any)
let hero: string;

function getHero() {
    return 'Thor';
}

hero = getHero();
console.log('My Hero' + ' ' + hero);


// Another Example of prevent use of any type in function
function getHeroName(hero: string) {
    return 'My Hero' + ' ' + hero;
}

console.log(getHeroName('Thor'));

/*
Example of vulnerable code which use any type

function signUpUser(name, email, password){
    //code to sign up user
}

//If user pass wrong type of value then it will be a problem
signUpUser(1, 2, 3);

So to prevent this types of mistakes while developing the code we use TypeChecking in typescript.

//TypeChecking
function signUpUser(name: string, email: string, password: string){
    //code to sign up user
}
signUpUser(1, 2, 3); //Gives error 'Argument must be string'
*/


// Default value of the variable in function Argument using arrow function

const signUpUser = (email: string, password: string, isPaid: boolean = false): void => {
    //code to sign up user
    console.log(email + " is Paid: " + isPaid);
}

signUpUser('test1@gmail.com', '123456');
signUpUser('test2@gmail.com', '123456', true);

//Example of never type
//never type is used when we are sure that the function will never return anything like error function which will throw error and exit the program
try {
    const throwError = (message: string): never => {
        throw new Error(message);
    }
    throwError('Throwing Error');
} catch (e) {
    console.log(e);
}

