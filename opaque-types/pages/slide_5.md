# TypeScript types are not enough (2/2)

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
We could use an alias, but it only pushes the problem further: it is purely descriptive and
has no functional effect. We need to define a new type for the ID.
-->
