## 🟢 Module 4: Functions


1. Function Types
```
let add: (a: number, b: number) => number;

add = function (x, y) {
  return x + y;
};

console.log(add(2, 3)); // 5
```

2. Parameter Types

You can give type for function parameters.
```
function greet(name: string) {
  console.log("Hello " + name);
}

greet("Ali"); // ✅
```

3. Return Types

You can define what type function returns.
```
function multiply(a: number, b: number): number {
  return a * b;
}
```

4. Optional Parameters

Use ? to make parameter optional.
```
function user(name: string, age?: number) {
  console.log(name, age);
}

user("Ali");        // age undefined
user("Ali", 25);    // age 25
```

5. Default Parameters

You can give default value.
```
function welcome(name: string = "Guest") {
  console.log("Hello " + name);
}

welcome();        // Hello Guest
welcome("Ali");   // Hello Ali
```

6. Rest Parameters

👉 Multiple values
```
function sum(...numbers: number[]) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

7. Function Overloading

👉 Same function, different usage

```
function display(value: string): void;
function display(value: number): void;

function display(value: any) {
  console.log(value);
}

display("Hello");
display(100);
```

8. Arrow Functions with Types
👉 Short syntax
```
const addNum = (a: number, b: number): number => {
  return a + b;
};

console.log(addNum(5, 3));
```

9. Callback Functions

👉 Function inside another function
```
function processUser(callback: (name: string) => void) {
  callback("Ali");
}

processUser(function (name) {
  console.log("Hello " + name);
});
```