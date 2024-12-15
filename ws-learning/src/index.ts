import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function (socket) {
  socket.send("hello");
  console.log("connected");
});
