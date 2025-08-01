 ## Diet Planner
 
 ## Project Objective

The **Diet Planner** is a modern, responsive web application designed to help users track and plan their diet efficiently. Built with React 19, Tailwind CSS, and Vite, it provides a fast, interactive user experience with rich animations and data visualizations.

## Project Structure

diet-planner/
├── public/
├── src/
│   ├── components/              # Reusable UI components
│   ├── pages/                   # Route-based components
│   ├── assets/                  # Images and other assets
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md


## Installation and Setup

### Install Dependencies

Using npm:

npm install

Or using yarn:

yarn install

### Run the Project Locally

npm run dev

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Build for Production
npm run build

### Preview the Production Build

npm run preview

## Features

* ✅ Modern UI with Tailwind CSS
* ✅ Smooth animations with Framer Motion and GSAP
* ✅ Nutrition data visualized using Chart.js
* ✅ Horizontal scroll with `react-horizontal-scrolling-menu`
* ✅ Routing handled with React Router v7
* ✅ Responsive sliders using Swiper and Slick Carousel
* ✅ Clean and modular React component structure


## Major Dependencies

| Package                                   | Use                                    |
| ----------------------------------------- | -------------------------------------- |
| `react`, `react-dom`                      | Core React framework                   |
| `vite`                                    | Fast development server and build tool |
| `tailwindcss`                             | Utility-first CSS                      |
| `chart.js`, `react-chartjs-2`             | For charts and visualizations          |
| `framer-motion`, `gsap`                   | Smooth UI animations                   |
| `react-router-dom`                        | Routing                                |
| `react-slick`, `slick-carousel`, `swiper` | Sliders and carousels                  |
| `axios`                                   | API requests and communication         |


### Backend

# Diet Planner - Backend API

This is the backend service for the **Diet Planner** app. It provides RESTful APIs for user authentication, meal data management, and interaction with MongoDB using Express and Mongoose.


## Project Structure


server/
├── controllers/       # Business logic
├── models/            # Mongoose schemas
├── routes/            # API route handlers
├── middleware/        # Custom middleware (e.g., auth)
├── .env               # Environment variables (not committed)
├── index.js           # Entry point of the backend
└── README.md


##  Installed Dependencies

| Package        | Description                            |
|----------------|----------------------------------------|
| `express`      | Web framework for Node.js              |
| `mongoose`     | MongoDB object modeling                |
| `jsonwebtoken` | JWT-based authentication               |
| `bcryptjs`     | Password hashing                       |
| `cors`         | Enable CORS                            |
| `dotenv`       | Manage environment variables           |
| `nodemon`      | Auto-restart server on code change (dev) |
| `concurrently` | Run backend and frontend together (dev) |


## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or remotely

### Environment Variables

Create a `.env` file in the root of the `server/` directory with the following:

### env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

### Install Dependencies

npm install

###  Run the Server (Development)

npx nodemon index.js

Or:
npm run dev

> Make sure your MongoDB is running!

### API Endpoints

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| POST   | `/api/signup`    | Register a new user       |
| POST   | `/api/login`     | Authenticate a user       |
| GET    | `/api/profile`   | Get user data (protected) |
| ...    | Add other routes |                           |


## License

This backend is part of the **B9IS109** project submission and is intended for educational use only.

###  Next Steps

1. Create a `README.md` file inside your `server/` directory.
2. Paste the content above.
3. Commit and push:

cd server
git add README.md
git commit -m "Add backend README"
git push



