//Strings in TS

// At initialization we are not assigning any value to the array so TS will not be able to infer the type of the array, So it will not work
// const arr: [] = []

//So to make this work we need to define the type of the array
const arr: string[] = []

arr.push('a')
arr.push('e')
arr.push('i')
arr.push('o')
arr.push('u')

console.log(arr);

// Example for object array
type User = {
    name: string,
    isActive: boolean
}

const users: User[] = [];

users.push({ name: 'Manav', isActive: true })
users.push({ name: 'John', isActive: false })
users.push({ name: 'Parrot', isActive: true })

console.log(users);

// Example for mixed array
const mixed: (string | number | boolean)[] = [];

mixed.push('Manav')
mixed.push(1)
mixed.push(true)
mixed.push('John')

console.log('Before Popping: ')
console.log(mixed);

mixed.pop() // Removes the last element from the array
console.log('After Popping: ')
console.log(mixed);

//Real world example of readonly arrays
const arr2: readonly string[] = ['Manav', 'John', 'Parrot']
//Error if we try to push
// arr2.push('Pigeon')
console.log('Readonly array: ', arr2);