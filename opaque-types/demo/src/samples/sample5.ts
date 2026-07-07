const user: User = {
  id: '12345' as UserId,
  username: 'xballoy',
};

type Brand<BaseType, Name> = BaseType & { __brand: Name };
type UserId = Brand<string, 'UserId'>;
type User = {
  id: UserId;
  username: string;
};
const getPosts = async (userId: UserId) => {
  // Fetch the posts
  return Promise.resolve([]);
};

(async () => {
  // @ts-expect-error
  // TS2345: Argument of type string is not assignable to parameter of type UserId
  await getPosts(user.username);

  await getPosts(user.id);
})();
