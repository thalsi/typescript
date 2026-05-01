## 🟡 Module 11: Modules & Namespaces

This module teaches how to organize code into reusable files and structures in TypeScript.

📘 1. What is a Module?

A module is any file that has:

export
import

Each file has its own scope.

✅ Helps organize large apps.


Example
math.ts
```
export const pi = 3.14;

export function add(a: number, b: number): number {
  return a + b;
}
```

app.ts
```
import { pi, add } from './math';

console.log(pi);        // 3.14
console.log(add(2, 3)); // 5
```

📘 2. Export

Use export to make variables/functions/classes available outside file.

Named Export
```
export const name = "Ali";

export function greet() {
  console.log("Hello");
}
```

Import:
```
import { name, greet } from './file';
```

📘 3. Default Export

A default export means a file exports one main thing as the primary export.

You can import it without curly braces {}.

✅ Basic Syntax
Export
```
export default class User {
  name = "Ali";
}
```
Import
```
import User from './user';
```
✅ No {} needed.

📘 Why Use Default Export?

Use when file has one main class/function/component.

Examples:

One class
One React component
One service
One utility function

📘 Rename While Importing

Default export can use any name when importing.
user.ts
```
export default class User {}
```
app.ts
```
import MyUser from './user';
import Person from './user';
```
✅ Both work

Because default export has no fixed import name.

📘 Named Export vs Default Export
```
export class User {}
```
Import:
```
import { User } from './user';
```

Default Export
```
export default class User {}
```
Import:
```
import User from './user';
```
📘 Both Together
```
export default class User {}
export const age = 25;
```
Import:
```
import User, { age } from './user';
```

📘 Best Practice
Use Default Export When:

✅ File has one main item
Avoid When:

❌ Many exports in same file
❌ Need strict consistent names


# 4. Import Types

## Overview

Import statements let you use code from other files or modules.

---

## 1. Named Import

Import specific exported members by exact name.

```ts
import { add } from "./math";
add(2, 3);
```

---

## 2. Default Import

Import the default export from a module.

```ts
import User from "./user";
const u = new User();
```

---

## 3. Alias Import

Rename an imported member using `as`.

```ts
import { add as sum } from "./math";
sum(5, 5);
```

---

## 4. Import All

Import everything as one object.

```ts
import * as math from "./math";
math.add(1, 2);
```

---

## 5. Side Effect Import

Import a file only to run its code.

```ts
import "./config";
```

Example:

```ts
// config.ts
console.log("Loaded");
```

---

## 6. Type Only Import (TypeScript)

Import only types/interfaces.

```ts
import type { User } from "./types";
const u: User = { name: "Ali" };
```

---

## 7. Dynamic Import

Load a module when needed.

```ts
const math = await import("./math");
math.add(2, 3);
```

---

## Quick Table

| Import Type | Example                 | Use Case          |
| ----------- | ----------------------- | ----------------- |
| Named       | `import { add }`        | Specific exports  |
| Default     | `import User`           | Main export       |
| Alias       | `import { add as sum }` | Rename import     |
| All         | `import * as math`      | Group all exports |
| Side Effect | `import "./config"`     | Run setup code    |
| Type Only   | `import type { User }`  | Types only        |
| Dynamic     | `await import()`        | Lazy loading      |

---


📘 5. Namespace Basics

Before ES modules, TypeScript used namespace.

Used to group related code.

Example
```
namespace App {
  export class User {
    name = "Ali";
  }

  export function greet() {
    console.log("Hello");
  }
}

const u = new App.User();
App.greet();
```

Namespace Split Files
user.ts
```
namespace App {
  export class User {}
}
```

helper.ts
```
namespace App {
  export function greet() {}
}
```

Compile with:
```
tsc --outFile app.js user.ts helper.ts
```

## Module resolution

What is Module Resolution?

Module Resolution is the process TypeScript/JavaScript uses to locate imported modules/files based on paths, package rules, and config settings.
✅ Simple Meaning
```
import X from "somewhere";
```
👉 Module Resolution = How system finds “somewhere”

How TypeScript finds imported files.
```
import { User } from './models/user';
```

TS checks:
```
./models/user.ts
./models/user.tsx
./models/user.d.ts
./models/user/index.ts
```

tsconfig.json
```
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```
Used in Angular / Node.js.

📘 8. Path Alias

Avoid long imports.

tsconfig.json
```
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@app/*": ["app/*"],
      "@shared/*": ["shared/*"]
    }
  }
}
```
Use:
```
import { User } from '@app/models/user';
```

📘 9. Barrel Files

A file that re-exports many files.

Makes imports clean.

models/user.ts
```
export class User {}
```

models/product.ts
```
export class Product {}
```

models/index.ts
```
export * from './user';
export * from './product';
```

Use:
```
import { User, Product } from './models';
```

✅ Example Structure
Create:
```
models/index.ts
```

```
export * from "./user";
export * from "./product";
export * from "./order";
```

Now import:
```
import { User, Product, Order } from "./models";
```
👉 Cleaner and easier.
✅ Example Structure
```
src/
 └── shared/
      ├── button.ts
      ├── card.ts
      └── index.ts
```

index.ts
```
export * from "./button";
export * from "./card";
```
Use:
```
import { Button, Card } from "./shared";
```