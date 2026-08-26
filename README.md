<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![Socket.IO](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)

<img src="docs/chat-demo.gif" alt="Animated Application Demo" width="800" />
<br>
<em>(Tip: Record a short screen capture of the chat updating in real-time and save it as <code>docs/chat-demo.gif</code> to render here.)</em>

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

This application relies on an event-driven architecture to ensure messages are delivered instantly while keeping media storage decoupled from the main database.

```mermaid
sequenceDiagram
    participant Client as React Frontend
    participant Server as Node/Express + Socket.IO
    participant DB as MongoDB
    participant CDN as Cloudinary
    
    Note over Client, Server: 1. Establish WebSocket Connection
    Client->>Server: Connect via Socket.IO
    
    Note over Client, DB: 2. Secure Authentication
    Client->>Server: Login / Register Request
    Server->>DB: Validate/Store Credentials (bcrypt)
    
    Note over Client, CDN: 5. Media Handling
    Client->>CDN: Upload Image (Profile/Message)
    CDN-->>Server: Return Secure Image URL
    Server->>DB: Store URL Reference
    
    Note over Client, DB: 3 & 4. Message Broadcasting
    Client->>Server: Send Message Event
    Server->>DB: Store Message & Chat History
    Server-->>Client: Broadcast to Target Chat/Room
