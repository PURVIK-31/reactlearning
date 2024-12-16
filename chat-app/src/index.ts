import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
  socket.on("message", function (data) {
    console.log("received: %s", data.toString());
    socket.send(" (: hello from server ");
  });
});
