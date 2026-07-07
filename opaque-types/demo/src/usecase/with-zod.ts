import { z } from 'zod';

const UserId = z.string().brand('UserId');
type UserId = z.infer<typeof UserId>;
const User = z.object({
  id: UserId,
  username: z.string(),
});

const getPosts = async (userId: UserId) => {
  // Fetch the posts
  return Promise.resolve([]);
};

(async () => {
  const userUnparsed = {
    id: '12345',
    username: 'xballoy',
  };
  // @ts-expect-error
  await getPosts(userUnparsed.username);

  // @ts-expect-error
  await getPosts(userUnparsed.id);

  const user = User.parse(userUnparsed);
  await getPosts(user.id);
})();
