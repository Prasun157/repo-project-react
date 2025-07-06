
export default function PostDetail({ post }) {
  if (!post) return null;

  return (
    <div style={{ marginTop: '20px', padding: '10px', border:'1px solid #ccc' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
