const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/authMiddleware');

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'You are authenticated', user: req.user });
});


const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);


module.exports = router;
