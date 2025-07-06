export default function handler(req, res) {
  const posts = [
    { id: 1, title: "First Post Blog", content: "Blog1 : you haved clicked on first post." },
    { id: 2, title: "Second Post Blog", content: "here is the second post , you have clicked on post 2." },
  ];
  res.status(200).json(posts);
}


