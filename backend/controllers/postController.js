const db = require('../db');

// CREATE POST
const createPost = (req, res) => {
  const { title, description } = req.body || {};
  const userId = req.user.id; // comes from JWT middleware

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const query = 'INSERT INTO posts (user_id, title, description) VALUES (?, ?, ?)';
  db.query(query, [userId, title, description], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err.message });

    res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
  });
};

// GET ALL POSTS
const getPosts = (req, res) => {
  const query = `
    SELECT posts.id, posts.title, posts.description, posts.created_at, users.name as author
    FROM posts
    JOIN users ON posts.user_id = users.id
    ORDER BY posts.created_at DESC
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err.message });

    res.json({ posts: results });
  });
};

const deletePost = (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;

  const deletePost = (req, res) => {
  console.log("DELETE HIT");
  console.log("PARAMS:", req.params);
  console.log("USER:", req.user);
  };
  // Step 1: check ownership
  const checkQuery = 'SELECT user_id FROM posts WHERE id = ?';

  db.query(checkQuery, [postId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Step 2: ownership check
    if (result[0].user_id !== userId) {
      return res.status(403).json({ message: 'Not allowed to delete this post' });
    }

    // Step 3: delete
    const deleteQuery = 'DELETE FROM posts WHERE id = ?';
    db.query(deleteQuery, [postId], (err) => {
      if (err) {
        return res.status(500).json({ message: 'Delete failed' });
      }

      res.json({ message: 'Post deleted successfully' });
    });
  });
};

module.exports = { createPost, getPosts, deletePost };
