# Les symboles dans la vraie vie

- Conçus pour être privés et uniques, mais ils ne se sont finalement pas révélés privés
- Peuvent être utilisés pour déclarer des propriétés bien typées sur des objets
- Vous pouvez voir les symboles avec `Object.getOwnPropertySymbols()`
- Mais ils ne sont pas visibles avec :
  - les boucles `for...in`
  - `Object.keys()`
  - `Object.getOwnPropertyNames()`
  - `JSON.stringify()`
