const express = require('express');
const router = express.Router();

const { createPost, getPosts, deletePost } = require('../controllers/postController');
const verifyToken = require('../middleware/authMiddleware');

// create
router.post('/create', verifyToken, createPost);

// get all
router.get('/', getPosts);

// delete (IMPORTANT)
router.delete('/:id', verifyToken, deletePost);

module.exports = router;
