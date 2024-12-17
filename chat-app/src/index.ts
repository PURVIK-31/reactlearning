import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let websocketcounter: WebSocket[] = [];
wss.on("connection", function (socket) {
  websocketcounter.push(socket);
  socket.on("message", function (data) {
    websocketcounter.forEach((ws) => {
      ws.send(data.toString());
    });
  });
});
