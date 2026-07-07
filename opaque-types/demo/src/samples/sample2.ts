const user: User = {
  id: '12345',
  username: 'xballoy',
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
