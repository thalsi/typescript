"use strict";
console.log('without Generic..');
function getData(data) {
    return data;
}
console.log(getData('Hello World'));
console.log('with Generic..');
function getDataGeneric(data) {
    return data;
}
console.log(getDataGeneric('Hello World with Generic..'));
console.log(getDataGeneric(12345));
console.log(getDataGeneric(true));
console.log('with Generic and Array..');
function getDataGenericArray(data) {
    return data;
}
console.log(getDataGenericArray(['Hello', 'World', 'with', 'Generic', 'and', 'Array..']));
console.log(getDataGenericArray([1, 2, 3, 4, 5]));
console.log(getDataGenericArray([true, false, true, false]));
console.log('with Generic function');
function getFunctionGeneric(data) {
    return data;
}
console.log(getFunctionGeneric('Hello World with Generic function..'));
console.log(getFunctionGeneric(12345));
console.log(getFunctionGeneric(true));
console.log('Generic in Interface..');
let item1 = { value: 'Hello World with Generic in Interface..' };
let item2 = { value: 12345 };
let item3 = { value: true };
console.log(item1.value);
console.log(item2.value);
console.log(item3.value);
let response1 = {
    status: 200,
    message: 'Success',
    data: 'Hello World with Generic in ApiResponse..'
};
console.log(response1.status);
console.log(response1.message);
console.log(response1.data);
let response2 = {
    status: 200,
    message: 'Success',
    data: 12345
};
console.log(response2.status);
console.log(response2.message);
console.log(response2.data);
let response3 = {
    status: 200,
    message: 'Success',
    data: true
};
console.log(response3.status);
console.log(response3.message);
console.log(response3.data);
let response4 = {
    status: 200,
    message: 'Success',
    data: ['Hello', 'World', 'with', 'Generic', 'in', 'ApiResponse..']
};
console.log(response4.status);
console.log(response4.message);
console.log(response4.data);
let response5 = {
    status: 200,
    message: 'Success',
    data: { name: 'John Doe', age: 30 }
};
class Car {
    model;
    constructor(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }
}
const car1 = new Car('Tesla Model S');
console.log(car1.getModel());
const car2 = new Car(2021);
console.log(car2.getModel());
function showLenght(data) {
    console.log(`Length: ${data.length}`);
}
console.log('with Generic and Constraints..');
showLenght('Hello World with Generic and Constraints..');
showLenght(['Hello', 'World', 'with', 'Generic', 'and', 'Constraints..']);
showLenght({ length: 10 });
showLenght({ length: 20, name: 'John Doe' }); // This will work because it has a length property
// showLenght({ name: 'John Doe' }); // This will cause an error because it does not have a length property
// showLenght(12345); // This will cause an error because it does not have a length property
const userMe = {
    name: "Ali",
    age: 25,
    city: "Kochi"
};
// console.log(PersonKeys); // This will cause an error because keyof is not a valid operator in TypeScript
function updateUser(object, key, value) {
    console.log(`Updating user  to ${value}`);
    object[key] = value;
}
