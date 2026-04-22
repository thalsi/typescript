# 🟢 Module 6: Type Aliases & Interfaces

## 🟢 1. Type Aliases

👉 Used to create a custom type name

```
type User = {
  name: string;
  age: number;
};
```
✅ Usage:
```
const user1: User = {
  name: "Ali",
  age: 25
};
```

📌 You can also use with unions:
```
type Status = "success" | "error" | "loading";
```

🟢 2. Interface Basics

👉 Interface is also used to define object structure
```
interface User {
  name: string;
  age: number;
}
```

✅ Usage:
```
  const user2: User = {
  name: "Sara",
  age: 22
};  
```

🟢 4. Extending Interfaces

👉 One interface can inherit another
```
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
```
✅ Usage:
```
const emp: Employee = {
  name: "John",
  salary: 5000
};
```

🟢 5. Merging Interfaces

👉 Same interface name = automatically merged
```
interface Car {
  brand: string;
}

interface Car {
  model: string;
}
```
✅ Result:
```
const car: Car = {
  brand: "Toyota",
  model: "Innova"
};
```

🟢 6. Readonly Properties

👉 Cannot change after assignment
```
interface Product {
  readonly id: number;
  name: string;
}
```
❌ Error:
```
product.id = 10; // Not allowed
```

🟢 7. Optional Properties

👉 Use ? for optional values
```
interface User {
  name: string;
  age?: number;
}
```
✅ Valid:
```
const u1: User = { name: "Ali" };
```

🟢 8. Index Signatures

👉 When you don’t know all property names
```

interface Errors {
  [key: string]: string;
}
```
✅ Usage:
```
const formErrors: Errors = {
  username: "Required",
  password: "Too short"
};
```


---

type vs interface
👉 Both are used to define structure
```
type User = { name: string };

interface User { name: string }
```
✅ Same result

🔥 But difference comes in USE CASE
👉 Used for API, models, Angular

```
interface User {
  id: number;
  name: string;
}
```
✔ Real use:

API response
Forms
Store (Akita)

🟢 2. Type → More Powerful (Flexible)

👉 Can do more than interface
```
type ID = string | number;

type Status = "loading" | "success";

type Add = (a: number, b: number) => number;
```

✔ Can handle:

Union ✅
Function types ✅
Primitive types ✅


🟢 What is Generic Interface?
👉 It means:

“Same interface can work with different data types”
🟢 Normal Interface (Problem)
```
interface ApiResponse {
  data: User[];
  status: number;
}
```
👉 Problem:
❌ Only works for User
❌ Cannot reuse for Product, Order, etc.

🟢 Generic Interface (Solution)
```
interface ApiResponse<T> {
  data: T;
  status: number;
}
```
👉 T = any type (placeholder)
🧠 Simple Meaning

👉 T means:

“I will decide the type later”

🟢 Use with User
```
interface User {
  id: number;
  name: string;
}

const res: ApiResponse<User[]> = {
  data: [{ id: 1, name: "Ali" }],
  status: 200
};
```
🟢 Use with Product
```
interface Product {
  id: number;
  price: number;
}

const res2: ApiResponse<Product[]> = {
  data: [{ id: 1, price: 500 }],
  status: 200
};
```

🔥 Same Interface → Different Data
```
ApiResponse<User[]>
ApiResponse<Product[]>
ApiResponse<Order[]>
```
✔ Reusable
✔ Clean code
✔ Best for large apps

🟢 Real Angular Service
```
getUsers(): Observable<ApiResponse<User[]>> {
  return this.http.get<ApiResponse<User[]>>('/api/users');
}
```

🧠 Easy Analogy

👉 Generic = empty box 📦

You decide what to put inside later
```
ApiResponse<T>
```

➡ later:
```
ApiResponse<User>
ApiResponse<Product>
```

🚀 When to Use Generic Interface

👉 Use when:

API structure is same
Only data type changes

💡 One Line

👉 Generic = Reusable Interface