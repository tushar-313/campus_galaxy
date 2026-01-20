# Campus Galaxy 🌌

Campus Galaxy is a full-stack web application built for college students to share posts and updates in a secure way.  
The project focuses on real-world backend development, authentication, and cloud deployment.

---

## 🔗 Live Demo

👉 https://campus-galaxy.onrender.com 

> Note: The app is hosted on free cloud services, so the first load may take a few seconds if the server was inactive. May give database error because of free trial version.

---

## 📸 Screenshots / Demo

<!-- Add screenshots here -->
<!-- Example:
![Login Page](screenshots/login.png)
![Posts Page](screenshots/posts.png)
-->


## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Auth:** JWT (JSON Web Token)  
- **Database:** MySQL  
- **Deployment:** Render (Backend), Railway (Database)

---

## ✨ Features

- User registration & login
- JWT-based authentication
- Protected routes (login required)
- Create and delete posts
- Relational MySQL database
- Cloud deployment with environment variables

---

## 📂 Project Structure
campus_galaxy/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── db.js
│   └── server.js
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── index.html
│   ├── login.html
│   └── register.html
│
└── README.md



## 🔐 Authentication Flow

- User logs in with email and password  
- Backend generates a JWT token  
- Token is stored in the browser  
- Unauthenticated users are redirected to the login page 

## ⚙️ Environment Variables

Create a `.env` file for local development.
In production, environment variables are configured on the hosting platform.


## 🧪 Run Locally

Steps:

1. Clone the repository  
2. Navigate to the `backend` folder  
3. Install dependencies  
4. Start the server  

Open in browser:
http://localhost:3000


---

## ☁️ Deployment

- Backend deployed on Render
- MySQL database hosted on Railway
- The application is accessed via a public Render URL
- Environment variables are configured on the hosting platform
- Uptime monitoring is used to reduce cold starts


---

## 👨‍💻 Author

**Tushar Agarwal**  
B.Tech CSE, IIIT Nagpur  

---

## 📌 Note

This project was built for learning full-stack development and real deployment workflows.

