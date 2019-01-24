/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding is when the `this` keyword has nothing being binded to it. So it binds to the window object by default.
 * 2. Implicit binding is when the `this` keyword is bound to object left of the invoked method.
 * 3. New binding is when the `this` keyword is bound specifically to the object instance created and returned by the constructor function.
 * 4. Explicit binding is when the `this` keyword is being bound explicitly through the .call(), .apply(), or .bind() methods.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function color(color) {
    console.log(`the color is ${this}`);
}
// color('red')

// Principle 2

// code example for Implicit Binding
const fred = {
    name: 'Fred',
    age: 30
}
// fred.speak();

// Principle 3

// code example for New Binding
function Person(person) {
    this.name = person;
}

const fredrick = new Person('Fredrick');

// console.log(fredrick.name)

// Principle 4

// code example for Explicit Binding
const willma = {
    name: 'Willma'
}

function introducePerson() {
    return console.log(`Hello my name is ${this.name}`)
}

// introducePerson.call(willma);
