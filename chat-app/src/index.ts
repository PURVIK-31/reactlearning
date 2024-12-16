import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
const websocketcounter: WebSocket[] = [];
wss.on("connection", function (socket) {
  websocketcounter.push(socket);
  socket.on("message", function (data) {
    for (let i = 0; i < websocketcounter.length; i++) {
      console.log("received: %s", data.toString());
      socket.send(" (: hello from server ");
    }
  });
});
