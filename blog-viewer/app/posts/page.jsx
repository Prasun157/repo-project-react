'use client'; 

import { useState, useEffect } from 'react';
import PostList from '../../components/PostList';
import PostDetail from '../../components/PostDetail';

export async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");
  return res.json();
}

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    getData().then(setPosts);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todays Blog Posts</h1>
      <PostList posts={posts} onPostClick={setSelectedPost} />
      {selectedPost && <PostDetail post={selectedPost} />}
    </div>
  );
}
