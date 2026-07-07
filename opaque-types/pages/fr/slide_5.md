# Les types TypeScript ne suffisent pas (2/2)

```ts
const user: User = {
  id: "12345",
  username: "xballoy",
};

type UserId = string;
type User = {
  id: UserId;
  username: string;
};
const getPosts = async (userId: UserId) => {
  // Fetch the posts
  return Promise.resolve([]);
};
(async () => {
  const posts = await getPosts(user.username);
})();
```

<!--
On pourrait utiliser un alias, mais cela ne fait que repousser le problème plus loin : c'est purement descriptif et
cela n'a aucun effet fonctionnel. Nous devons définir un nouveau type pour l'ID.
-->
