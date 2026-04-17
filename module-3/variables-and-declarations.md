# 🟢 Module 3: Variables & Declarations

1️⃣ var vs let vs const
🔹 var (Old way – avoid using)
```
var a = 10;
```

❌ Problems:

Function scoped (not block scoped)
Can redeclare
Can reassign

```
var a = 10;
var a = 20; // ✅ allowed (but bad)
```
👉 Not safe → Avoid in modern TypeScript

🔹 let (Modern variable)

```
let a = 10;
```
✅ Features:

Block scoped
Can reassign
Cannot redeclare in same scope

```
let a = 10;
a = 20; // ✅ allowed

let a = 30; // ❌ Error
```

🔹 const (Constant variable)
```
const a = 10;
```
✅ Features:

Block scoped
Cannot reassign
Must initialize
```
const a = 10;
a = 20; // ❌ Error
```

🔥 Quick Comparison

| Feature   | var      | let   | const |
| --------- | -------- | ----- | ----- |
| Scope     | Function | Block | Block |
| Reassign  | ✅        | ✅     | ❌     |
| Redeclare | ✅        | ❌     | ❌     |
| Use today | ❌        | ✅     | ✅     |


2️⃣ Type Annotations in Variables

👉 You can define type manually
```
let age: number = 25;
let name: string = "Ali";
let isActive: boolean = true;
```

🔹 Without annotation (Type Inference)
```
let age = 25; // TypeScript automatically: number
```

🔹 Why use annotations?

✅ Better safety
✅ Avoid mistakes
```
let age: number = 25;
age = "hello"; // ❌ Error
```
3️⃣ Reassignment Rules
🔹 let
```
let count = 10;
count = 20; // ✅ allowed
```

🔹 const
```
const count = 10;
count = 20; // ❌ not allowed
```

🔹 Object with const
```
const user = { name: "Ali" };

user.name = "John"; // ✅ allowed
user = {}; // ❌ not allowed
```
👉 Important:

const → reference cannot change
But object values can change

4️⃣ Constant Assertions (as const)

👉 Makes value fully readonly and fixed
```
const user = {
  name: "Ali",
  age: 25
} as const;
```
🔹 What happens?

❌ Cannot change anything:
```
user.name = "John"; // ❌ Error
```
🔹 Without as const
```
const user = {
  name: "Ali"
};

user.name = "John"; // ✅ allowed
```
🔹 Array Example
```
const colors = ["red", "blue"] as const;

// colors.push("green"); ❌ Error
```