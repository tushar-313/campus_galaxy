const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 3000;
app.use(express.json());


const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const postRoutes = require('./routes/post');
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
