import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function (socket) {
  console.log("New client connected");
});
