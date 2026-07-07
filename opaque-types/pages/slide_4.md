# TypeScript types are not enough (1/2)

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
  // Fetch the posts
  return Promise.resolve([]);
};
(async () => {
  const posts = await getPosts(user.username);
})();
```

<!--
No compile-time validation on the input: we can pass any string to the function.
Could be the same with an email / zip code / age (positive number) / number in a range…
-->
