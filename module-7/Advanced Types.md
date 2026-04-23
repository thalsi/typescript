# 🟡 Module 7: Advanced Types (TypeScript)

🟢 1. Union Types (|)

👉 One variable can have multiple possible types
```
let id: number | string;

id = 101;       // ✅
id = "A102";    // ✅
```
💡 Real use:

API may return number OR string
```
function printId(id: number | string) {
  console.log(id);
}
```

🟢 2. Intersection Types (&)

👉 Combine multiple types into one
```
type User = {
  name: string;
};

type Admin = {
  role: string;
};

type AdminUser = User & Admin;

const user: AdminUser = {
  name: "Ali",
  role: "Admin"
};
```
💡 Real use:

Merge multiple models (User + Permissions)

🟢 3. Literal Types

👉 Fixed exact values only
```
let status: "success" | "error" | "loading";

status = "success"; // ✅
status = "fail";    // ❌
```
💡 Real use:

API status
UI state

🟢 4. Type Narrowing

👉 TypeScript automatically detects type
```
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string
  } else {
    console.log(value.toFixed(2));    // number
  }
}
```
💡 Real use:

Handle union safely

🟢 5. Type Guards

👉 Custom logic to detect type

```
function isString(value: any): value is string {
  return typeof value === "string";
}

function print(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}
```

💡 Real use:

Reusable validation functions

🟢 6. Discriminated Unions ⭐ (VERY IMPORTANT)

👉 Best pattern for large apps
```
type Success = {
  type: "success";
  data: string;
};

type Error = {
  type: "error";
  message: string;
};

type ApiResponse = Success | Error;

function handle(res: ApiResponse) {
  if (res.type === "success") {
    console.log(res.data);
  } else {
    console.log(res.message);
  }
}
```
💡 Real use:

API responses
State management (NgRx, Akita)

🟢 7. Type Assertion (as)

👉 Force TypeScript to trust you
```
let value: any = "hello";

let len = (value as string).length;
```

⚠️ Dangerous if wrong!

💡 Real use:

DOM access
```
const input = document.getElementById("name") as HTMLInputElement;
```
🟢 8. Non-null Assertion (!)

👉 Tell TS: “This is NOT null”
```
const el = document.getElementById("btn")!;
el.click();
```
⚠️ If null → runtime error

🟢 9. Type Compatibility

👉 TypeScript uses structure, not name
```
type A = { name: string };
type B = { name: string };

let a: A = { name: "Ali" };
let b: B = a; // ✅ allowed
```
💡 Real use:

Flexible object assignment

🔥 Real Angular Example (IMPORTANT FOR YOU)
```
type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: any[];
};

type ErrorState = {
  status: "error";
  message: string;
};

type State = LoadingState | SuccessState | ErrorState;

function render(state: State) {
  switch (state.status) {
    case "loading":
      console.log("Loading...");
      break;

    case "success":
      console.log(state.data);
      break;

    case "error":
      console.log(state.message);
      break;
  }
}
```
👉 This is used in:

Akita store
API handling
UI state