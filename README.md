<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![Socket.IO](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)

</div>

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

**Frontend**
- React
- Axios
- Context API or custom hooks
- TailwindCSS 

**Backend**
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
