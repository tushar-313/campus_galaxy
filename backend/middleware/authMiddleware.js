const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  console.log('--- AUTH MIDDLEWARE HIT ---');

  const authHeader = req.headers.authorization;
  console.log('AUTH HEADER:', authHeader);

  if (!authHeader) {
    console.log('NO AUTH HEADER');
    return res.status(401).json({ message: 'Access denied, no token provided' });
  }

  const token = authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : authHeader;

  console.log('TOKEN EXTRACTED:', token);
  console.log('JWT SECRET:', process.env.JWT_SECRET);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('TOKEN DECODED:', decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.log('JWT VERIFY ERROR:', error.message);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = verifyToken;
