const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// REGISTER CONTROLLER
const register = (req, res) => {

  const { name, email, password } = req.body;

  // 1. Validate input
  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'All fields are required'
    });
  }

  // 2. Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // 3. Insert user into database
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

  db.query(query, [name, email, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'User already exists or database error'
      });
    }

    // 4. Success response
    return res.status(201).json({
      message: 'User registered successfully'
    });
  });
};

// LOGIN CONTROLLER
const login = (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });

    const user = results[0];
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) return res.status(401).json({ message: 'Incorrect password' });

    // ✅ Generate JWT token
    const token = jwt.sign(
  { id: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

    // Return user info + token
    return res.json({
      message: 'Login successful',
      user: { id: user.id, name: user.name, email: user.email },
      token
    });
  });
};


module.exports = {
  register,
  login
};
