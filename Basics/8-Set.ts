/*
Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

The Set object lets you store unique values of any type, whether primitive values or object references.
*/

const set = new Set();

set.add(1); // Set { 1 }
set.add(2); // Set { 1, 2 }
set.add(1); // Set { 1, 2 }

set.add('string'); // Set { 1, 2, 'string' }

const o = { a: 1, b: 2 };
set.add(o); // Set { 1, 2, 'string', { a: 1, b: 2 } }

set.has(1); // true
set.has(3); // false, 3 has not been added to the set

console.log("Set:")
console.log(set);
console.log('Size of set = ' + set.size); // 4

set.delete(2); // removes 2 from the set

console.log("Updated Set:")
console.log(set);