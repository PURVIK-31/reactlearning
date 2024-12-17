"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allsockets = [];
wss.on("connection", function (socket) {
    console.log("Client connected");
    socket.on("message", function (message) {
        const parsedmessage = JSON.parse(message);
        if (parsedmessage.type === "join") {
            allsockets.push({
                socket,
                room: parsedmessage.payload.roomId,
            });
        }
        if (parsedmessage.type === "chat") {
            let currentuserroom = null;
            for (let i = 0; i < allsockets.length; i++) {
                if (allsockets[i].socket == socket) {
                    console.log("message aagya!");
                    currentuserroom = allsockets[i].room;
                }
            }
            for (let i = 0; i < allsockets.length; i++) {
                if (allsockets[i].room == currentuserroom) {
                    allsockets[i].socket.send(parsedmessage.payload.message);
                }
            }
        }
    });
});
