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

console.groupEnd()

console.group("exercise 2")

function person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new person("Ryan", 23);

person1.greet();           // Output: Hello, my name is Ryan and I am 23 years old.

console.groupEnd()

console.group("exercise 3")

const person2 = new person("Dom", 24)

person2.greet(); // Output: Hello, my name is Dom and I am 24 years old.

console.groupEnd()

console.group("exercise 4")

person.info = function(){
    return "this is a person class";
}

console.log(person.info()) //this outputs the return in the info function
/*console.log(person1.info())*/ // you get Uncaught TypeError: person1.info is not a function

console.groupEnd()

console.group("exercise 4")

console.groupEnd()