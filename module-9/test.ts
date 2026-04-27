console.log('without Generic..');

function getData(data: string): string {
    return data;
}

console.log(getData('Hello World'));

console.log('with Generic..');

function getDataGeneric<T>(data: T): T {
    return data;
}

console.log(getDataGeneric<string>('Hello World with Generic..'));
console.log(getDataGeneric<number>(12345));
console.log(getDataGeneric<boolean>(true));


console.log('with Generic and Array..');

function getDataGenericArray<T>(data: T[]): T[] {
    return data;
}   

console.log(getDataGenericArray<string>(['Hello', 'World', 'with', 'Generic', 'and', 'Array..']));
console.log(getDataGenericArray<number>([1, 2, 3, 4, 5]));
console.log(getDataGenericArray<boolean>([true, false, true, false]));

console.log('with Generic function');

function getFunctionGeneric<T>(data: T): T{
    return data;
}

console.log(getFunctionGeneric<string>('Hello World with Generic function..'));
console.log(getFunctionGeneric<number>(12345));
console.log(getFunctionGeneric<boolean>(true));

console.log('Generic in Interface..');

interface GenericInterface<T> {
    value: T;

}

let item1:GenericInterface<string> = { value: 'Hello World with Generic in Interface..' };
let item2:GenericInterface<number> = { value: 12345 };
let item3:GenericInterface<boolean> = { value: true };

console.log(item1.value);
console.log(item2.value);
console.log(item3.value);



interface ApiResponse<T>{
    status: number;
    message: string;
    data: T;
}

let response1: ApiResponse<string> = {
    status: 200,
    message: 'Success',
    data: 'Hello World with Generic in ApiResponse..'
};
console.log(response1.status);
console.log(response1.message);
console.log(response1.data);

let response2: ApiResponse<number> = {
    status: 200,
    message: 'Success',
    data: 12345
};
console.log(response2.status);
console.log(response2.message);
console.log(response2.data);

let response3: ApiResponse<boolean> = {
    status: 200,
    message: 'Success',
    data: true
};
console.log(response3.status);
console.log(response3.message);
console.log(response3.data);

let response4: ApiResponse<string[]> = {
    status: 200,
    message: 'Success',
    data: ['Hello', 'World', 'with', 'Generic', 'in', 'ApiResponse..']
};
console.log(response4.status);
console.log(response4.message);
console.log(response4.data);

interface User {
    name: string;
    age: number;
}

let response5: ApiResponse<User> = {
    status: 200,
    message: 'Success',
    data: { name: 'John Doe', age: 30 }
}

class Car<T>{
    model: T;
    constructor(model: T){
        this.model = model;
    }

    getModel(): T {
        return this.model;
    }
}

const car1 = new Car<string>('Tesla Model S');
console.log(car1.getModel());

const car2 = new Car<number>(2021);
console.log(car2.getModel());

function showLenght<T extends { length: number }>(data: T): void {
    console.log(`Length: ${data.length}`);
}

console.log('with Generic and Constraints..');

showLenght<string>('Hello World with Generic and Constraints..');
showLenght<string[]>(['Hello', 'World', 'with', 'Generic', 'and', 'Constraints..']);
showLenght<{ length: number }>({ length: 10 });
showLenght({ length: 20, name: 'John Doe' }); // This will work because it has a length property
// showLenght({ name: 'John Doe' }); // This will cause an error because it does not have a length property
// showLenght(12345); // This will cause an error because it does not have a length property

const userMe = {
  name: "Ali",
  age: 25,
  city: "Kochi"
};
type PersonKeys = keyof typeof userMe; // This will create a type that is a union of the keys of the Person interface
// console.log(PersonKeys); // This will cause an error because keyof is not a valid operator in TypeScript

function updateUser<T,K extends keyof T>(object: T, key: K, value: T[K]) {
    console.log(`Updating user  to ${value}`);
    object[key] = value;
    return object;
}
console.log('with Generic and keyof operator..');
console.log(userMe);
updateUser(userMe, 'name', 'Ali Ahmed');
updateUser(userMe, 'age', 26);
updateUser(userMe, 'city', 'Kochi, Kerala');
console.log(userMe);
console.log('with Generic and keyof operator in Interface..', updateUser(userMe, 'name', 'Jane Doe'));
