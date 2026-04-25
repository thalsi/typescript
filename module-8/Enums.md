## 🟡 Module 8: Enums

🟡 1. Numeric Enums

👉 Default enum type (values are numbers)
```
enum Status {
  Pending,   // 0
  Approved,  // 1
  Rejected   // 2
}
```
✅ Usage:
```
let orderStatus: Status = Status.Approved;
console.log(orderStatus); // 1
```
👉 You can also set values manually:
```
enum Status {
  Pending = 1,
  Approved = 5,
  Rejected = 10
}
```

💡 Real Use Case

👉 Backend API returns numeric codes
```
enum ApiStatus {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

function handleResponse(status: ApiStatus) {
  if (status === ApiStatus.Success) {
    console.log("Success");
  }
}
```

🟢 2. String Enums

👉 Values are strings (more readable)
```
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}
```
✅ Usage:
```
let userRole: Role = Role.Admin;
console.log(userRole); // "ADMIN"
```

💡 Real Use Case

👉 Authentication / Authorization system
```
function checkAccess(role: Role) {
  if (role === Role.Admin) {
    return "Full Access";
  }
  return "Limited Access";
}
```
👉 API-friendly + readable in logs

🔵 3. Heterogeneous Enums

👉 Mix of number + string (⚠️ rarely used)
```
enum Mix {
  No = 0,
  Yes = "YES"
}
```
❗ Problem
Confusing
Hard to maintain
Not recommended in real projects

👉 Avoid unless very specific need

🟣 4. Const Enums

👉 Optimized enums (removed during compilation)
```
const enum Direction {
  Up,
  Down,
  Left,
  Right
}
```
✅ Usage:
```
let move = Direction.Up;
```

👉 Compiled JS:
```
let move = 0;
```

💡 Real Use Case

👉 Performance-critical apps (large Angular apps, libraries)

No runtime object
Smaller bundle size

🔶 5. Enum vs Union (VERY IMPORTANT)

This is where many developers get confused.
✅ Enum
```
enum Status {
  Pending,
  Approved,
  Rejected
}
```

✅ Union Type
```
type Status = "pending" | "approved" | "rejected";
```

⚔️ Enum vs Union Comparison
```
| Feature        | Enum   | Union       |
| -------------- | ------ | ----------- |
| Runtime exists | ✅ Yes  | ❌ No        |
| Type safety    | ✅ Good | ✅ Excellent |
| Readability    | Medium | High        |
| Bundle size    | Larger | Smaller     |
| Flexibility    | Less   | More        |

```

💡 Real Use Case Comparison
🟢 Use Enum when:
You need mapping
You need numeric values
You want central constants

👉 Example:
```
enum PaymentStatus {
  Pending = 0,
  Success = 1,
  Failed = 2
}
```

🔵 Use Union when:
You need simple value restriction
No runtime logic needed

👉 Example (BEST for Angular forms / APIs):
```
type PaymentStatus = "pending" | "success" | "failed";
```

API Response
```
type ApiResponseStatus = "success" | "error";
interface ApiResponse<T> {
  data: T;
  status: ApiResponseStatus;
}
```

UI State (Enum)
```
enum LoadingState {
  Idle,
  Loading,
  Success,
  Error
}
```

👉 Why enum here?

You may use numeric logic
Easier state handling in components