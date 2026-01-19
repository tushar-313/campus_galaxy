const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
require("./db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// PORT fix
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
