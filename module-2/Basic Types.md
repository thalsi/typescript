# 🟢 Module 2: Basic Types (TypeScript)

## ✅ 1. Type Annotations

👉 What?
You manually tell TypeScript what type a variable should be.

✔ Example:
```
let age: number = 25;
let name: string = "John";
let isActive: boolean = true;
```

✔ Usage:
Use when you want strict control
Helps avoid mistakes

## ✅ 2. Type Inference

👉 What?
TypeScript automatically guesses the type.

✔ Example:
```
let age = 25;        // inferred as number
let name = "John";   // inferred as string
```

✔ Usage:
No need to write types always
Cleaner code

# 🟡 Primitive Types

✅ 3. number

👉 Used for all numbers (integer + decimal)

✔ Example:
```
let price: number = 100;
let rating: number = 4.5;
```

✔ Usage:
Calculations
Counting values

✅ 4. string

👉 Used for text

✔ Example:
```
let username: string = "Thasleeh";
let message: string = `Hello ${username}`;
```

✔ Usage:
Names, messages, labels

✅ 5. boolean

👉 true / false values

✔ Example:
```
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;
```

✔ Usage:
Conditions (if, else)

✅ 6. null

👉 Intentional empty value

✔ Example:
```
let data: null = null;
```

✔ Usage:
When you explicitly say no value
```
let user: string | null = null;
```

✅ 7. undefined

👉 Variable declared but no value assigned

✔ Example:
```
let value: undefined = undefined;
```
👉 Difference:

null → you set it
undefined → not assigned yet

✅ 8. symbol

👉 Unique value (mostly advanced use)

✔ Example:
```
const a = Symbol();
const b = Symbol();

console.log(a === b); // false ❌

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false
```

🔹 Simple Example 2 (Object key)
```
const ID = Symbol();

const user = {
  name: "John",
  [ID]: 123
};

console.log(user[ID]); // 123
```
👉 Special key (safe)

🔹 Simple Example 3 (No conflict)

```
const key1 = Symbol();
const key2 = Symbol();

const obj = {
  [key1]: "A",
  [key2]: "B"
};

console.log(obj[key1]); // A
console.log(obj[key2]); // B
```

👉 No clash (same name problem avoided)

🔹 Simple Example 4 (Hidden key)
```
const secret = Symbol();

const data = {
  name: "Test",
  [secret]: "hidden"
};

console.log(Object.keys(data)); // ["name"]
```

👉 Hidden (not visible in keys)

🧠 When to use (simple)

👉 Use symbol when:

Need unique key
Want no conflict
Want hidden data

✅ 9. bigint

👉 Large numbers (beyond normal limit)

✔ Example:
```
let bigNumber: bigint = 12345678901234567890n;
```

✔ Usage:
Financial calculations
Large data handling

🔴 Special Types

✅ 10. any

👉 Turns OFF type checking (avoid using)

✔ Example:
```
let data: any = 10;
data = "hello";
data = true;
```

✔ Usage:
When you don’t know type (temporary)
⚠️ Dangerous → no safety

✅ 11. unknown

👉 Safer version of any

✔ Example:
```
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

✔ Usage:
When type is unknown
Must check before use

✅ 12. void

👉 Function returns nothing

✔ Example:
```
function logMessage(): void {
  console.log("Hello");
}
```
✔ Usage:
Functions with no return

✅ 13. never

👉 Function NEVER returns
```
function throwError(): never {
  throw new Error("Error occurred");
}
```
✔ Usage:
Infinite loops
Errors
```
function infiniteLoop(): never {
  while (true) {}
}
```

