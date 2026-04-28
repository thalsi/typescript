🟡 Module 10: Classes & OOP in TypeScript

TypeScript adds Object-Oriented Programming (OOP) features to JavaScript.

Used in Angular, enterprise apps, large projects.

📘 1️⃣ Class Basics

A class is a blueprint for creating objects.
```
class User {
  name = "John";
}

const user1 = new User();

console.log(user1.name);
```

📘 Real Project Example
```
class Employee {
  id = 1;
  name = "Rahul";
  role = "Developer";
}

const emp = new Employee();

console.log(emp.name);
```

📘 Why Use Class?

Instead of repeating:
```
const user1 = { name: "A" };
const user2 = { name: "B" };
const user3 = { name: "C" };
```
Use:
```
class User {
  name = "";
}
```

✅ Without Class
```
const user1 = {
  name: "Ali",
  age: 25,
  login() {
    console.log("Login");
  }
};

const user2 = {
  name: "John",
  age: 30,
  login() {
    console.log("Login");
  }
};
```
❌ Repeated code.

✅ With Class
```
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  login() {
    console.log("Login");
  }
}

const user1 = new User("Ali", 25);
const user2 = new User("John", 30);
```
✅ Clean
✅ Reusable
✅ Easy to manage

Supports OOP Features

✅ Inheritance
✅ Encapsulation
✅ Polymorphism
✅ Abstraction

🔥 Class vs Function (TypeScript / JavaScript)

| Feature                       | Class                 | Function               |
| ----------------------------- | --------------------- | ---------------------- |
| Purpose                       | Blueprint for objects | Reusable block of code |
| Creates object data + methods | ✅ Yes                 | ❌ Not directly         |
| OOP support                   | ✅ Yes                 | ❌ Limited              |
| Best for large apps           | ✅ Yes                 | ✅ Utility logic        |
| Angular usage                 | Components, Services  | Helpers, utils         |

Same Problem Solved Both Ways

Meaning: One problem can be solved using Function style or Class style.

Example problem:

👉 Create users and allow login.
✅ 1️⃣ Function Way
```
function createUser(name: string, age: number) {
  return {
    name,
    age,

    login() {
      console.log(name + " logged in");
    }
  };
}

const user1 = createUser("Ali", 25);
const user2 = createUser("John", 30);

user1.login();
user2.login();
```
Output:
```
Ali logged in
John logged in
```

✅ 2️⃣ Class Way
```
class User {
  constructor(
    public name: string,
    public age: number
  ) {}

  login() {
    console.log(this.name + " logged in");
  }
}

const user1 = new User("Ali", 25);
const user2 = new User("John", 30);

user1.login();
user2.login();
```
Output:
```
Ali logged in
John logged in
```

🔥 Both Solve Same Problem

Create users + login method.


📘 2️⃣ Constructors

Constructor runs automatically when object created.
```
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const u1 = new User("Ali");

console.log(u1.name);
```
✅ Output:
```
Ali
```

📘 Real Project Example
```
class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number
  ) {}
}

const p1 = new Product(1, "Laptop", 50000);
```
📘 3️⃣ Access Modifiers

Used to control access.

🟢 public
Accessible everywhere.
```
class User {
  public name = "Ali";
}

const u = new User();
console.log(u.name);
```


🔴 private

Only inside class.
```
class User {
  private password = "123";
}

const u = new User();
// u.password ❌ Error
```

🟡 protected

Inside class + child class.
```
class User {
  protected age = 25;
}

class Admin extends User {
  showAge() {
    console.log(this.age);
  }
}
```

📘 4️⃣ readonly Properties

Cannot change after assign.
```
class User {
  readonly id = 1;
}

const u = new User();

// u.id = 5 ❌ Error
```

📘 Real Project Example
```
class Employee {
  constructor(
    readonly employeeId: number,
    public name: string
  ) {}
}
```
Employee ID should not change.

🔥 Difference: const vs readonly
| Feature                    | `const`    | `readonly`     |
| -------------------------- | ---------- | -------------- |
| Used on                    | Variable   | Class property |
| Reassign variable/property | No         | Property no    |
| Object internal values     | Can change | Depends        |

readonly in Object / Array Case 👍

You asked: object array case?

Very important concept.

🔥 1️⃣ readonly with Object Property
```
class Test {
  readonly user = {
    name: "Ali",
    age: 25
  };
}

const t = new Test();
```
Can we change object itself?
```
t.user = { name: "John", age: 30 }; ❌ Error
```
Because user is readonly.

Can we change inside values?
```
t.user.name = "John"; ✅
t.user.age = 30; ✅
```
✅ Allowed


🎯 Meaning

readonly user

Locks the reference, not deep inner values.

🔥 2️⃣ readonly with Array
```
class Test {
  readonly items = [1, 2, 3];
}

const t = new Test();
```

Replace full array?
```
t.items = [4, 5, 6]; ❌ Error
```

Modify inside array?
```
t.items.push(4); ✅
t.items[0] = 100; ✅
```
Allowed (normal readonly property case)

📘 Why?

Because array object reference is readonly, internal content can mutate.

🔥 3️⃣ Truly Readonly Array

Use:
```
readonly items: readonly number[] = [1,2,3];
```
or
```
ReadonlyArray<number>
```
Now:
```
items.push(4); ❌
items[0] = 5; ❌
```

📘 Example
```
class Test {
  readonly items: readonly number[] = [1,2,3];
}
```

🔥 Deep Readonly Object?

Normal readonly:
```
readonly user = { name: "Ali" }
```
Still allows:
```
user.name = "John"
```
To make fields readonly:
```
readonly user: Readonly<{ name: string; age: number }> = {
  name: "Ali",
  age: 25
};
```

Now:
```
user.name = "John"; ❌
```