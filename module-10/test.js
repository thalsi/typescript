"use strict";
console.log('module 10 :- class');
class Person {
    name = 'john';
}
const person = new Person();
console.log(person.name);
class Employee {
    id = 1;
    name = 'john';
}
const employee = new Employee();
console.log(employee.id);
console.log(employee.name);
class Manager {
    name;
    constructor(name) {
        this.name = name;
    }
}
const manager = new Manager('Alice');
console.log(manager.name);
class Developer {
    name = 'john and public';
    salary = 50000;
    experience = 5;
}
const developer = new Developer();
console.log(developer.name);
// console.log(developer.salary); // Error: Property 'salary' is private and only accessible within class 'Developer'.
// console.log(developer.experience); // Error: Property 'experience' is protected and only accessible within class 'Developer' and its subclasses.
class SeniorDeveloper extends Developer {
    showExperience() {
        console.log(this.experience); // Accessible because it's protected
    }
}
const seniorDeveloper = new SeniorDeveloper();
seniorDeveloper.showExperience(); // Output: 5
class Test {
    static count = 100;
    static incrementCount() {
        this.count++;
    }
}
console.log(Test.count); // Output: 100
Test.incrementCount();
console.log(Test.count); // Output: 101
class Animal {
    sonud() {
        console.log('Animal makes a sound');
    }
}
class Dog extends Animal {
    sonud() {
        console.log('Dog barks');
    }
}
const dog = new Dog();
dog.sonud(); // Output: Dog barks
class Airoplan {
    start() {
        console.log('Airoplan is starting');
    }
}
class Boeing extends Airoplan {
    sound() {
        console.log('Boeing is flying');
    }
}
const boeing = new Boeing();
boeing.start(); // Output: Airoplan is starting
boeing.sound(); // Output: Boeing is flying
class Circle {
    left = 10;
    shape() {
        console.log('This is a circle');
    }
}
const circle = new Circle();
console.log(circle.left);
