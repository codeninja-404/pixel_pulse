### ADMIN LOGIN

- EMAIL : admin@pixelpulse.com
- PASS : admin7898

## Features

- **Enhanced Security**: Robust security measures for both client and backend, specifically for admin pages.
- **Admin Dashboard**: Effortlessly manage posts, comments, and users with full CRUD operations via MongoDB.
- **Responsive Design**: Fully responsive layout with an elegant dark mode for optimal user experience on any device.
- **Sophisticated Search**: Advanced search functionality, including title search, result limiting, and sorting through a sleek sidebar using cutting-edge MongoDB queries.
- **Interactive Community**: Users can easily leave, edit, and delete comments, fostering a dynamic and engaging community.
- **Performance Optimization**: Optimized performance for fast loading times and smooth interactions, ensuring a superior user experience.

# PIXEL-PULSE

This repository contains a full stack application with a Vite React frontend and a Node.js/Express backend.

## Project Structure

The project structure is as follows:

```
project/
│
├── client/           # Frontend (Vite + React)
│   ├── node_modules/ # Dependencies for frontend
│   ├── public/       # Static files
│   ├── src/          # Source files for React app
│   └── package.json  # Project manifest for frontend
│
├── src/              # Source files for backend
├── node_modules/     # Dependencies for backend
├── .gitignore        # Specifies intentionally untracked files to ignore (root)
├── package.json      # Project manifest for backend
└── README.md         # Documentation for entire project
```

## Getting Started

Follow these steps to get the application up and running:

### Clone the Repository

```bash
#SSH
git clone git@github.com:codeninja-404/pixel_pulse.git
#HTTPS
git clone https://github.com/codeninja-404/pixel_pulse.git
```

### Navigate to the Project Directory

```bash
cd project
```

### Install Server Dependencies

In the project root directory, install the backend dependencies:

```bash
npm install
# or
yarn
```

### Start the Server

Start the Node.js/Express server:

```bash
npm start
# or
yarn start
```

The server will be running on [http://localhost:3000](http://localhost:3000).

### Install Client Dependencies

Navigate to the client directory and install the frontend dependencies:

```bash
cd client
npm install
# or
yarn
```

### Start the Client

Start the Vite development server for the React app:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app. The page will auto-reload as you make changes.
