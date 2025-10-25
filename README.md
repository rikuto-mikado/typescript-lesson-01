# TypeScript Lesson 01 - Learning Notes

## What I Learned

### Core TypeScript Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Type Annotations** | Specify parameter/variable types | `function calc(price: number)` |
| **Non-null Assertion (`!`)** | Tell TS a value won't be null | `document.querySelector('form')!` |
| **Type Assertion (`as`)** | Explicitly specify a type | `event.target as HTMLFormElement` |

### Key Differences: TypeScript vs JavaScript

#### 1. Type Safety Prevents String Concatenation Bugs

**JavaScript:**
```js
const result = 2.85 + '15';  // Result: '2.8515' (string concatenation!)
```

**TypeScript:**
```ts
function add(a: number, b: number) {
  return a + b;  // TS enforces both must be numbers
}

add(2.85, '15');  // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'
```

#### 2. Null/Undefined Safety

**JavaScript:**
```js
const el = document.getElementById('missing');
el.textContent = 'Hello';  // ERROR: Runtime error if element doesn't exist
```

**TypeScript:**
```ts
const el = document.getElementById('price');     // Type: HTMLElement | null
el.textContent = 'Hello';  // ERROR: TS Error: Object is possibly 'null'

const el2 = document.getElementById('price')!;   // Non-null assertion
el2.textContent = 'Hello';  // OK (but dangerous if element doesn't exist)
```

#### 3. Type Assertions for Specific Types

**JavaScript:**
```js
const fd = new FormData(event.currentTarget);  // Works but no type checking
```

**TypeScript:**
```ts
const fd = new FormData(event.currentTarget as HTMLFormElement);
// Explicitly tells TS this is an HTMLFormElement
```

## What Was Difficult

1. **Understanding when to use `!` (Non-null assertion)**
   - Telling TS "I'm sure this exists" but it's your responsibility
   - If you're wrong, you get a runtime error just like JS

2. **Type assertion (`as`) vs Type annotation (`:`)**
   - `as` = "Trust me, this is this type" (override)
   - `:` = "This should be this type" (contract)

3. **Remembering to convert string to number**
   ```ts
   const inputPrice = fd.get('price')!;  // Type: FormDataEntryValue (string | File)
   deriveFinalPrice(+inputPrice);        // + converts to number
   ```

## Project Structure

```
typescript-lesson-01/
  calculator.ts    # TypeScript source with type annotations
  index.html       # HTML form
  app.css          # Styles
```

## Key Takeaway

TypeScript catches errors at **compile time** that JavaScript only catches at **runtime**. This prevents bugs like accidental string concatenation (`2.85 + '15' = '2.8515'`) before your code even runs.
