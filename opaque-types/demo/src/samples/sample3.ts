const user: User = {
  id: '12345',
  username: 'xballoy',
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
