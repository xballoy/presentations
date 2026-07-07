# Les types TypeScript ne suffisent pas (1/2)

```ts
const user: User = {
  id: "12345",
  username: "xballoy",
};

type User = {
  id: string;
  username: string;
};
const getPosts = async (userId: string) => {
  // Récupère les posts
  return Promise.resolve([]);
};
(async () => {
  const posts = await getPosts(user.username);
})();
```

<!--
Aucune validation à la compilation sur l'entrée : on peut passer n'importe quelle chaîne de caractères à la fonction.
La même chose pourrait arriver avec un email, un code postal, un âge (un nombre positif), ou un nombre dans une plage...
-->
