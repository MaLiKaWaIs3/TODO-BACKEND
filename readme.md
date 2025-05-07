
````markdown
# TODO Backend API

A robust RESTful API for managing TODO tasks, built with Node.js, Express, and MongoDB.

## 🚀 Live Demo

API is live at: [https://todo-backend-eosin-rho.vercel.app/](https://todo-backend-eosin-rho.vercel.app/)

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt for password hashing
- CORS enabled
- Vercel for deployment

## 📦 Dependencies

```json
{
  "dependencies": {
    "bcryptjs": "^3.0.2",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.14.1"
  }
}
````

## 🏗️ Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # Database models
├── routes/         # API routes
└── server.js       # Entry point
```

## 📚 API Documentation

### Base URL

```
https://todo-backend-eosin-rho.vercel.app
```

### 🧑‍💻 Authentication Routes

* `POST /api/auth/register` – Register a new user
* `POST /api/auth/login` – Login a user and receive a JWT

### ✅ Task Routes (Protected)

* `GET /api/tasks` – Get all tasks
* `POST /api/tasks` – Create a new task
* `GET /api/tasks/:id` – Get a specific task
* `PUT /api/tasks/:id` – Update a task
* `DELETE /api/tasks/:id` – Delete a task

> All `/api/tasks` routes require a valid JWT token in the `Authorization` header.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v14 or higher)
* MongoDB Atlas or local instance
* npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/MaLiKaWaIs3/TODO-BACKEND.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Set environment variables**

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. **Run the server**

* For development:

```bash
npm run dev
```

* For production:

```bash
npm start
```

---

## 🔒 Environment Variables

| Key           | Description                   |
| ------------- | ----------------------------- |
| `PORT`        | Server port (default: 5000)   |
| `MONGODB_URI` | MongoDB connection string     |
| `JWT_SECRET`  | Secret for signing JWT tokens |

---

## 📝 Scripts

* `npm run dev` – Run server with nodemon (development)
* `npm start` – Run production build
* `npm test` – Run tests (if added)

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👤 Author

**MaLiKaWaIs3**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Please open an issue or pull request in [GitHub Issues](https://github.com/MaLiKaWaIs3/TODO-BACKEND/issues).

---

## ⭐ Show your support

Give a ⭐️ if you find this project helpful!
