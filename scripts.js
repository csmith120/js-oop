console.group("exercise 1")

function makeMaster(food, price, restaurant) {
    this.food = food;
    this.price = price;
    this.restaurant = restaurant;
}

const place1 = new makeMaster("raviola", 2.34, "italian");

console.log(place1.food);       // Output: raviola
console.log(place1.price);      // Output: 2.34
console.log(place1.restaurant); // Output: italian

console.groupEnd

console.group("exercise 2")
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Ryan", 23);

console.log(person1.name); // Output: Ryan
console.log(person1.age);  // Output: 23

console.groupEnd