//Creating a new map object
const fruitVendor = new Map();

//Adding new elements to the map
fruitVendor.set("apple", "100");
fruitVendor.set("orange", "80");
fruitVendor.set("banana", "50");

if (fruitVendor.has("apple")) {
    console.log("Apple is available");
}

//Buying all apple
fruitVendor.delete("apple");

if (!fruitVendor.has("apple")) {
    console.log("Apple is not available");
}

console.log('Fruit Vendor has ' + fruitVendor.size + ' items');

console.log("Price of orange is " + fruitVendor.get("orange") + " rupees");

console.log(fruitVendor)