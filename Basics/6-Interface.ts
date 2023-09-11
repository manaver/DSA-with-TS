//Interface in TypeScript
/*
- Interface is a structure that defines the contract in your application.
- It defines the syntax for classes to follow.
- Classes that are derived from an interface must follow the structure provided by their interface.
- An interface is a syntactical contract that an entity should conform to.
- In other words, an interface defines the syntax that any entity must adhere to.
- Interfaces define properties, methods, and events, which are the members of the interface.
- Interfaces contain only the declaration of the members.
- It is the responsibility of the deriving class to define the members.
*/

//Program on Interface
interface IPerson {
    firstName: string;
    lastName: string;
    sayHi: () => string;
}

let customer: IPerson = {
    firstName: "Manav",
    lastName: "Verma",
    sayHi: (): string => { return "Hi there" }
}

console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
