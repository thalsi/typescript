# 🟢 Module 5: Objects & Arrays (TypeScript)

🔷 1. Object Types

👉 Object means a collection of key-value pairs.
```
let user: { name: string; age: number };

user = {
  name: "Thasleeh",
  age: 24
};
```

✔ Real use:
Store user data
API response
Form data

🔷 2. Nested Objects

👉 Object inside another object.

✅ Example:
```
let user: {
  name: string;
  address: {
    city: string;
    pincode: number;
  };
};

user = {
  name: "Thasleeh",
  address: {
    city: "Kochi",
    pincode: 682001
  }
};
```
Real use:
Complex data (user profile, order details)

🔷 3. Array Types

👉 Array = list of values

✅ Method 1:
```
let numbers: number[] = [1, 2, 3];
```
✅ Method 2:
```
let names: Array<string> = ["Ali", "Rahul"];
```

✔ Real use:
Product list
User list

🔷 4. Readonly Arrays

👉 Cannot modify (safe data)

✅ Example:
```
let numbers: readonly number[] = [1, 2, 3];

numbers.push(4); // ❌ Error
numbers[0] = 10; // ❌ Error
```
✔ Real use:
Fixed data (config, constants)

🔷 5. Tuple Types

👉 Fixed length + fixed types

✅ Example:
```
let user: [string, number];

user = ["Thasleeh", 24];
```

```
let response: [number, string] = [200, "Success"];
```
✔ Real use:
API response
Coordinates
✅ Option 1: Add more types
```
let response: [number, string, string, number] = [200, "Success", "the", 300];
```

✅ Option 2: Use Array instead (flexible)
```
let response: (number | string)[] = [200, "Success", "the", 300];
```
✅ Option 3: Tuple with rest (advanced)
```
let response: [number, string, ...any[]] = [200, "Success", "the", 300];
```

🔷 6. Destructuring with Types

👉 Extract values easily

✅ Array Destructuring:
```
let numbers: number[] = [10, 20, 30];

let [a, b] = numbers;

console.log(a); // 10
console.log(b); // 20
```

✅ Object Destructuring:
```
let user = {
  name: "Thasleeh",
  age: 24
};

let { name, age }: { name: string; age: number } = user;
```

✅ Nested Destructuring:
```
let user = {
  name: "Thasleeh",
  address: {
    city: "Kochi"
  }
};

let { address: { city } }: { address: { city: string } } = user;

console.log(city); // Kochi
```

❌ Without destructuring:
```
let user = { name: "Thasleeh", age: 24 };

console.log(user.name);
console.log(user.age);
```

✅ With destructuring:
```
let { name, age } = user;

console.log(name);
console.log(age);
```
✔ Cleaner
✔ Less typing

✅ 2. When working with Function Parameters

👉 Very useful in Angular / APIs

❌ Without destructuring:
```
function display(user: { name: string; age: number }) {
  console.log(user.name);
}
```

✅ With destructuring:
```
function display({ name, age }: { name: string; age: number }) {
  console.log(name);
}
```

✔ Direct access
✔ Clean function

👉 Use when you need specific positions

Example:
```
let numbers = [10, 20, 30];

let [first, second] = numbers;

console.log(first);  // 10
```
✔ Easy extraction

✅ 4. Swapping values (cool trick 😎)
```
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
```

✅ 5. API Responses (REAL USE 🔥)
```
let response = {
  status: 200,
  data: { name: "Ali" }
};

let { status, data } = response;
```
✅ 6. Nested Data
```
let user = {
  name: "Thasleeh",
  address: { city: "Kochi" }
};

let { address: { city } } = user;

console.log(city);
```