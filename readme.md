# 🌌 Campus Galaxy

Campus Galaxy is a full-stack campus discussion platform where students can share issues, ideas, and updates within their campus community.  
The project focuses on secure backend development and a modern, animated UI built using core web technologies.

---

## 🚀 Features

- User registration and login
- JWT-based authentication
- Secure protected routes
- Create campus posts
- Delete posts (only by post owner)
- Dynamic post feed
- Galaxy-themed animated UI
- Glassmorphism design
- Custom animated cursor and micro-interactions

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MySQL
- JWT (JSON Web Tokens)
- bcrypt
- dotenv

### Frontend
- HTML
- CSS (glassmorphism, gradients, animations)
- Vanilla JavaScript
- GSAP (animations)

---

## 🔐 Authentication & Authorization

- Passwords are hashed using bcrypt
- JWT token generated on login
- Token stored in localStorage
- Protected routes verify JWT
- Users can delete only their own posts

---

## 📂 Project Structure

campus_galaxy/
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── postController.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   └── posts.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── css/
│   │   ├── login.css
│   │   ├── register.css
│   │   └── index.css
│   │
│   ├── js/
│   │   ├── auth.js
│   │   └── posts.js
│   │
│   ├── login.html
│   ├── register.html
│   └── index.html
│
└── README.md