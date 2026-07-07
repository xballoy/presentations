import {
  brand,
  type InferInput,
  type InferOutput,
  object,
  parse,
  pipe,
  string,
} from 'valibot';

const UserId = pipe(string(), brand('UserId'));
type UserId = InferOutput<typeof UserId>;
type InputUserId = InferInput<typeof UserId>;
const User = object({
  id: UserId,
  username: string(),
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

  const user = parse(User, userUnparsed);
  await getPosts(user.id);
})();
