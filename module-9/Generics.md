## Generics

Generics means reusable type-safe code.
Instead of writing separate code for string, number, object, etc., we write one flexible code.

👉 Simple meaning: Type variable
```
function identity<T>(value: T): T {
  return value;
}
```

1️⃣ Introduction to Generics

Without generic:
```
function getValue(value: string): string {
  return value;
}
```
Only string works.

With generic:
```
function getValue<T>(value: T): T {
  return value;
}
```
Use:
```
getValue("Hello")
getValue(100)
getValue(true)
```
✅ Same function for all types.

2️⃣ Generic Functions
Example 1
```
function printData<T>(data: T): void {
  console.log(data);
}
```
Use:
```
printData<string>("Hello")
printData<number>(10)
printData<boolean>(true)
```
Example 2 (Type Inference)
```
printData("Hi")
printData(50)
```

Real Use Case

API response helper:
```
function apiResponse<T>(data: T): T {
  return data;
}

apiResponse({ name: "Ali" });
apiResponse([1,2,3]);
```
3️⃣ Generic Interfaces
```
interface Box<T> {
  value: T;
}
```
Use:
```
let box1: Box<string> = {
  value: "Hello"
};

let box2: Box<number> = {
  value: 100
};
```

Real Use Case
```
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

use 
```
let user: ApiResponse<string> = {
  success: true,
  data: "User Loaded"
};
```

4️⃣ Generic Classes
```
class StorageBox<T> {
  item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}
```
Use:
```
const box1 = new StorageBox<string>("Book");
const box2 = new StorageBox<number>(500);
```

Real Use Case
```
class UserStore<T> {
  users: T[] = [];

  add(user: T) {
    this.users.push(user);
  }
}
```
5️⃣ Constraints

Sometimes we need only specific types.

Use extends
```
function showLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}
```
Use:
```
showLength("Hello")
showLength([1,2,3])
```

❌ Error:
```
showLength(100)
```
Because number has no length.

Real Use Case
```
function logName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}
```

6️⃣ Default Generic Types

If no type passed, default used.
```
interface UserData<T = string> {
  value: T;
}
```
Use:
```
let a: UserData = {
  value: "Hello"
}
```
(Default string)
```
let b: UserData<number> = {
  value: 100
}
```

7️⃣ Keyof with Generics

Very powerful.
```
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```
Use:
```
const user = {
  name: "Ali",
  age: 25
};

getProperty(user, "name");
getProperty(user, "age");
```
❌ Error:
```
getProperty(user, "salary")
```
Because salary not exists.

Real Angular Use Case
```
function patchForm<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
) {
  obj[key] = value;
}
```

Important Symbols
| Symbol    | Meaning                |
| --------- | ---------------------- |
| `<T>`     | Generic type           |
| `<T, U>`  | Multiple generic types |
| `extends` | Constraint             |
| `keyof`   | Keys of object         |
| `T[K]`    | Value type of key      |


Multiple Generic Types
```
function pair<T, U>(a: T, b: U) {
  return [a, b];
}

pair<string, number>("Age", 25);
```

Real Project Example (CRUD Service)
```
class CrudService<T> {

  items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}
```
Use:
```
const users = new CrudService<string>();
users.add("Ali");
```


🟡 Generic vs Any

generic and any both allow flexibility, but very different.

👉 Short answer:

any = turn off type checking
generic = flexible + keep type safety

Example 1

Using any
```
function getData(value: any): any {
  return value;
}

const result = getData("Hello");
result.toFixed(); // allowed, but wrong
```
❌ Dangerous


Using Generic
```
function getData<T>(value: T): T {
  return value;
}

const result = getData("Hello");
result.toUpperCase(); // correct
result.toFixed();     // error
```
✅ Safe