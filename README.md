# Todo Web App

## Overview
The **Todo Web App** is a simple yet efficient task management application that allows users to create, edit, delete, and manage their to-do lists. The app features a user authentication system with login and registration functionality and utilizes **MongoDB** for data storage.

## Features
- **User Authentication**: Register and log in to manage personal tasks securely.
- **Create Todos**: Add new tasks to the list.
- **Edit Todos**: Modify existing tasks.
- **Delete Todos**: Remove completed or unnecessary tasks.
- **Persistent Storage**: Uses MongoDB to store user and todo data.
- **Modern UI**: Built with React and React Router for a seamless experience.

## Tech Stack
- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Development Tools**: Vite, ESLint, Nodemon

## Installation
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **MongoDB** (running locally or using MongoDB Atlas)

### Steps to Run the Application
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-repo/todoweb.git
   cd todoweb
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Set up the environment**:
   - Create a `.env` file in the root directory and add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     JWT_SECRET=your_secret_key
     ```
4. **Run the backend**:
   ```sh
   npm run server
   ```
5. **Run the frontend**:
   ```sh
   npm run dev
   ```
6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints
### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login user

### Todos
- **GET** `/api/todos` - Fetch all todos
- **POST** `/api/todos` - Add a new todo
- **PUT** `/api/todos/:id` - Update a todo
- **DELETE** `/api/todos/:id` - Delete a todo

## Folder Structure
```
/todoweb
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   ├── main.jsx
├── package.json
├── vite.config.js
├── .env
```

## Future Enhancements
- Add due dates and reminders for todos
- Implement user profile management
- Enhance UI with animations
- Integrate real-time collaboration

## License
This project is licensed under the **MIT License**.


### Contact
For any questions, feel free to reach out at (niteshreddy242005@example.com).

