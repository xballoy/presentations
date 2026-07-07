---
layout: two-cols-header
---

# Using Zod / Valibot

Use Zod / Valibot to parse your objects / API responses and improve their types.

::left::

**Zod**

```ts
import { z } from "zod";

const UserId = z.string().brand("UserId");
type UserId = z.infer<typeof UserId>;
const User = z.object({
  id: UserId,
  username: z.string(),
});

const userUnparsed = {
  id: "12345",
  username: "xballoy",
};

// @ts-expect-error
await getPosts(userUnparsed.id);

const user = User.parse(userUnparsed);
await getPosts(user.id);
```

::right::

**Valibot**

```ts
import { brand, object, string, parse, Output } from "valibot";

const UserId = brand(string(), "UserId");
type UserId = Output<typeof UserId>;
const User = object({
  id: UserId,
  username: string(),
});

const userUnparsed = {
  id: "12345",
  username: "xballoy",
};

// @ts-expect-error
await getPosts(userUnparsed.id);

const user = parse(User, userUnparsed);
await getPosts(user.id);
```
