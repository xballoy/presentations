# Que sont les symboles ?

- Depuis ES6, `symbol` est un type primitif comme `string` ou `number`
- Créé à l'aide de la fonction `Symbol()` (impossible d'utiliser `new Symbol()`)
- Les symboles sont immuables et uniques

<!--
Dans NestJS, vous pouvez utiliser soit une chaîne de caractères, soit un symbole lors de l'enregistrement d'un provider.
L'avantage du symbole est que vous êtes certain d'éviter tout conflit de nommage, puisque les symboles sont uniques.
Si vous utilisez Symbol.for() pour créer votre symbole, il est partagé dans un registre global,
donc ajoutez un préfixe pour éviter les conflits !
-->
