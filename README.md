# Full Stack Vite React App

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
git clone <repository-url>
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

The server will be running on [http://localhost:5000](http://localhost:5000) by default.

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

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. The page will auto-reload as you make changes.

## Build for Production

### Build the Client

To build the React app for production, run:

```bash
npm run build
# or
yarn build
```

This will generate an optimized build in the `client/dist` directory.

### Build the Server

The server typically doesn't need a build step if it's a simple Node.js app. Ensure your production server is configured to serve the built React app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Coding!** 🚀
