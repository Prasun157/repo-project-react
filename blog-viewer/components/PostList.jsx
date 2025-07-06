export default function PostList({ posts, onPostClick }) {
  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.id}
          style={{ cursor: 'pointer', marginBottom: '10px' }}
          onClick={() => onPostClick(post)}
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
}
