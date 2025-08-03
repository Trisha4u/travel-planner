# Travel Planner

A full-stack travel planning web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can register, log in, and manage their travel plans by adding, editing, and deleting trip details.

## Features

- User authentication (register/login)
- Create, update, and delete trip plans
- Store trip information such as destination, number of persons, number of days, and travel date
- Responsive user interface using React
- RESTful API built with Express and MongoDB
- Secure storage of sensitive information using environment variables

## Tech Stack

**Frontend**
- React.js (with Vite)
- Axios (for API communication)
- Bootstrap or Tailwind CSS (for styling)

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose

**Other Tools**
- dotenv (for managing environment variables)
- Git/GitHub (version control)
- VS Code (development)

## Folder Structure

travel-planner/
├── server/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── .env
│ └── package.json
├── travel-client/
│ ├── public/
│ ├── src/
│ ├── vite.config.js
│ └── package.json
└── .gitignore

bash
Copy
Edit

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/travel-planner.git
cd travel-planner
2. Backend Setup
bash
Copy
Edit
cd server
npm install
Create a .env file inside the server/ folder:
Start the backend server:
node server.js
3. Frontend Setup
bash
Copy
Edit
cd ../travel-client
npm install
npm run dev
The app will run on http://localhost:5173 (or the port shown in your terminal).

License
This project is for educational purposes. You are free to use and modify it as needed.
