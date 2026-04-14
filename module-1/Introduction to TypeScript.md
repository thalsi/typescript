## 📌 1. What is TypeScript
TypeScript is a programming language developed by Microsoft
It is a superset of JavaScript (means it adds extra features to JavaScript)
Main feature: Static typing (you can define types like number, string, etc.)

👉 Example idea:
```
JavaScript → no type checking
TypeScript → checks errors before running
```
## 📌 2. Why use TypeScript
- Catch errors before runtime
- Better code readability
- Helps in large projects
- Strong support for IDE (VS Code autocomplete)
- Makes code more maintainable

## 📌 3. TypeScript vs JavaScript

| Feature         | TypeScript      | JavaScript     |
| --------------- | --------------- | -------------- |
| Typing          | Static typing   | Dynamic typing |
| Error detection | Compile time    | Runtime        |
| Learning curve  | Slightly higher | Easy           |
| File extension  | `.ts`           | `.js`          |
| Compilation     | Required        | Not required   |

## 📌 4. Features of TypeScript
1. Static typing
2. Interfaces
3. Enums
4. Generics
5. Type inference
6. Object-Oriented Programming (OOP)
7. Advanced tooling support


## 📌 5. How TypeScript works (Transpilation)

TypeScript does NOT run directly in browser.

👉 Flow:
```
TypeScript (.ts)
        ↓
Compile (tsc)
        ↓
JavaScript (.js)
        ↓
Browser / Node.js runs it
```
👉 This process is called:
👉 Transpilation

## 📌 6. Installing TypeScript

You need Node.js + npm

Install TypeScript globally:
```
npm install -g typescript
```

Check version:
```
tsc -v
```

## 📌 7. Setting up development environment

Best tools:

- Visual Studio Code (recommended)
- Install extensions:
    - TypeScript support (built-in)
    - ESLint (optional)

Create project:
```
mkdir ts-project
cd ts-project
npm init -y
tsc --init
```

## 📌 8. Running TypeScript files
1. Create file:
```
app.ts
```
2. Compile:
```
tsc app.ts
```
3. Run:
```
node app.js
```

## 📌 9. TypeScript Compiler (tsc)
tsc = TypeScript Compiler
Converts .ts → .js

Common commands:
```
tsc file.ts        // compile single file
tsc                // compile whole project
tsc --watch        // auto compile on change
```
