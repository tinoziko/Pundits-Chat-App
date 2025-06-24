import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
const userSocketMap = {};
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
    },
});

export function getReceiverSocketId(userId) {
    return userSocketMap[userId];
}

io.on("connection", (socket) => {
    console.log("A user has connected",socket.id);

    socket.on("disconnected", (socket) => {
        console.log("A user has disconnected", socket.id);
    })
})

export {io, app, server};
