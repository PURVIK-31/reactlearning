import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });
interface User {
  socket: WebSocket;
  room: string;
}
let allsockets: User[] = [];
wss.on("connection", function (socket) {
  socket.on("message", function (message) {
    const parsedmessage = JSON.parse(message as unknown as string);
    if (parsedmessage.type === "join") {
    }
    if (parsedmessage.type === "chat") {
    }
  });
});
