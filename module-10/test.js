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
