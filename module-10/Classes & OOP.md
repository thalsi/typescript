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

5️⃣ Static Members

Static members = properties or methods that belong to the class itself, not to each object (instance).

👉 You use them directly with class name.

✅ 1️⃣ Static Property
```
class User {
  static company = "OpenAI";
}

console.log(User.company); // OpenAI
```

✅ No need object:
```
const u = new User();
```

Still access with:
```
User.company
```

❌ Not:
```
u.company
```

✅ Real Project Example
Config Class
```
class AppConfig {
  static apiUrl = "https://api.test.com";
}
```

Use anywhere:
```
AppConfig.apiUrl
```

Logger Utility
```
class Logger {
  static log(message: string) {
    console.log(message);
  }
}

Logger.log("Login Success");
```

✅ Instance vs Static
```
class User {
  name = "Ali";              // instance
  static company = "ABC";   // static
}

const u = new User();

console.log(u.name);        // ✅
console.log(User.company);  // ✅
```

✅ In Angular Real Use
```
export class ApiRoutes {
  static LOGIN = '/login';
  static USERS = '/users';
}
```

Use:
```
this.http.get(ApiRoutes.USERS)
``` 

7️⃣ Method Overriding 

Method Overriding means:

👉 Child class uses same method name as Parent class
👉 But child gives its own version of that method.

So parent method is replaced / overridden in child.

✅ Simple Example (TypeScript)
```
class Animal {
  sound(): void {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  sound(): void {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.sound();
```

Output:
```
Dog barks
```

👉 Parent had sound()
👉 Child also made sound()
👉 Child version runs.

✅ Why Use?

Used when child needs special behavior.

Example:

Animal sound → generic
Dog sound → bark
Cat sound → meow

✅ Real Project Example
```
class ApiService {
  getData() {
    console.log("Normal API Call");
  }
}

class SecureApiService extends ApiService {
  getData() {
    console.log("API Call with Token");
  }
}


const api = new SecureApiService();
api.getData();
```
Output:
```
API Call with Token
```
✅ Parent Method Call (super)
```
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    super.sound();
    console.log("Dog bark");
  }
}
```

Output:
```
Animal sound
Dog bark
```

super (Easy Explanation)

super means:

👉 Parent class reference inside child class.

Used to access:

Parent constructor
Parent methods
Parent properties

✅ 1. Call Parent Constructor
```
class Person {
  constructor(public name: string) {}
}

class Employee extends Person {
  constructor(name: string) {
    super(name); // call parent constructor
  }
}

const e = new Employee("Ali");
console.log(e.name);

output:
Ali
```

👉 super(name) sends value to parent constructor.

✅ 2. Call Parent Method
```
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    super.sound(); // parent method
    console.log("Dog bark");
  }
}

new Dog().sound();

output:
Animal sound
Dog bark

```

✅ 3. Access Parent Property
```
class Person {
  role = "Human";
}

class User extends Person {
  show() {
    console.log(super.role);
  }
}

new User().show();
```

📘 8️⃣ Abstract Classes

👉 Abstract class is a parent blueprint class that cannot create objects, but child classes inherit and complete it.

```
abstract class Animal {
  abstract sound(): void;

  sleep(): void {
    console.log("Sleeping...");
  }
}

class Dog extends Animal {
  sound(): void {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.sound();
d.sleep();
```

✅ Why Animal object not allowed?
```
const a = new Animal(); // ❌ Error
```
Because abstract class is only blueprint.

📘 Real Project Example
```
abstract class CrudService {
  abstract getAll(): void;
  abstract create(): void;
}
```

📘 9️⃣ Getters & Setters

Control property access.  

Getters and Setters are special methods used to:

Get value (read data) → get
Set value (update data) → set

Used for control + validation + clean access
```
class User {
  private _name: string = '';

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const u = new User();

u.name = "Ali";       // set
console.log(u.name);  // get
```

✅ Why Not Direct Property?

Because you can control data.

Direct property means:
```
class User {
  name = "";
}

u.name = "Ali";
```
This is simple, but no control.
Problem with Direct Property
1️⃣ No Validation
```
user.age = -10;
```
❌ Wrong age stored.

2️⃣ Anyone Can Change Anything
```
user.salary = -5000;
```
❌ Bad data.

✅ Validation Example
```
class User {
  private _age = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value >= 18) {
      this._age = value;
    } else {
      console.log("Age must be 18+");
    }
  }
}

const u = new User();

u.age = 15; // invalid
u.age = 25; // valid

console.log(u.age);
Age must be 18+
25
```

✅ Why Use in Enterprise Apps?

✔ Validation
✔ Hide private fields
✔ Clean API
✔ Computed values
✔ Better maintainability

📘 🔟 Implements Interface

Class follows interface rules.
```
interface User {
  name: string;
  login(): void;
}

class Admin implements User {
  name = "Ali";

  login() {
    console.log("Logged in");
  }
}

```

📘 Real Angular Example
```
interface OnInit {
  ngOnInit(): void;
}

class HomeComponent implements OnInit {
  ngOnInit() {
    console.log("Loaded");
  }
}
```