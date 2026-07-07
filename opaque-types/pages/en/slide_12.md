# Symbols in real life

- Intended to be private and unique, but ended up not being private
- Can be used to declare well-typed properties on objects
- You can see symbols using `Object.getOwnPropertySymbols()`
- But they are not visible using:
  - `for...in` loops
  - `Object.keys()`
  - `Object.getOwnPropertyNames()`
  - `JSON.stringify()`
