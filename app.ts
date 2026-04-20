
const user={
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com"
} as const

console.log(`User Information:`);
console.log(`Name: ${user.name}`);
// user.name = "Alimon CK";
// console.log(`Name: ${user.name}`);


let add:(a:number, b:number) =>number;
let sub:(a:number, b:number) =>number;

add = (a, b) => a + b;

console.log(`Addition: ${add(5, 3)}`);
sub = function(a, b) {
    return a - b;
}

console.log(`Subtraction: ${sub(5, 3)}`);