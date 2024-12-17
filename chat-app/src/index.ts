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
      allsockets.push({
        socket,
        room: parsedmessage.payload.roomId,
      });
    }
    if (parsedmessage.type === "chat") {
      let currentuserroom = null;
      for (let i = 0; i <= allsockets.length; i++) {
        if (allsockets[i].socket == socket) {
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
