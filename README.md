# Real-Time Chat Application

A full-stack real-time chat application built with React, Node.js, Express, Socket.IO, MongoDB, bcrypt, and Cloudinary. The app provides instant messaging, secure user authentication, image uploads, and a clean and responsive interface suitable for both learning and production-level extensions.

## Features

- Real-time messaging using Socket.IO
- Secure authentication with bcrypt
- MongoDB database for storing users, conversations, and messages
- Cloudinary integration for image uploads
- Responsive React frontend using hooks and state management
- Express and Node.js backend with REST APIs and WebSocket events

## Tech Stack

Frontend
- React
- Axios
- Context API or custom hooks
- TailwindCSS 

Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB with Mongoose
- bcrypt
- Cloudinary SDK



## How It Works

1. The client establishes a WebSocket connection using Socket.IO.
2. Users register or log in, and their credentials are validated with bcrypt.
3. Messages are sent to the server and broadcast to the target chat or room.
4. MongoDB stores user data, chat history, and message objects.
5. Cloudinary handles profile and message image uploads, and returns a URL stored in the database.


