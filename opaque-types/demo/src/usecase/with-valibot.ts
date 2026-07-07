import { brand, object, string, parse, Output, Input } from 'valibot';

const UserId = brand(string(), 'UserId');
type UserId = Output<typeof UserId>;
type InputUserId = Input<typeof UserId>;
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
