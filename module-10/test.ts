console.log('module 10 :- class');

class Person {
    name: string='john';
}

const person = new Person();
console.log(person.name);

class Employee{
    id : number=1;
    name: string='john';

}

const employee = new Employee();
console.log(employee.id);
console.log(employee.name);

class Manager{
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const manager = new Manager('Alice');
console.log(manager.name);


class Developer{
    public name: string='john and public';
    private salary: number=50000;
    protected experience: number=5;
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


class Test{
    static count: number=100;

    static incrementCount() {
        this.count++;
    }
}

console.log(Test.count); // Output: 100
Test.incrementCount();
console.log(Test.count); // Output: 101

class Animal{
    sonud(){
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal{
    override sonud(){
        console.log('Dog barks');
    }
}

const dog = new Dog();
dog.sonud(); // Output: Dog barks

abstract class Airoplan {
    
    abstract sound():void;

    start(){
        console.log('Airoplan is starting');
    }
}

class Boeing extends Airoplan{
    sound(): void {
        console.log('Boeing is flying');
    }   
}

const boeing = new Boeing();
boeing.start(); // Output: Airoplan is starting
boeing.sound(); // Output: Boeing is flying


interface Shape {
    left:number;
    shape():void;
}

class Circle implements Shape{
    left: number=10;
    shape(): void {
        console.log('This is a circle');
    }
}

const circle = new Circle();
console.log(circle.left);