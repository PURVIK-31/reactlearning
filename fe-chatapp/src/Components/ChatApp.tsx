import { useState, useRef } from "react";

interface Message {
  text: string;
}

const ChatApp = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [roomId, setRoomId] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const wsRef = useRef<WebSocket | null>(null);

  const joinRoom = () => {
    if (!roomId) return;

    wsRef.current = new WebSocket("ws://localhost:8080");

    wsRef.current.onopen = () => {
      setIsConnected(true);
      const joinMessage = {
        type: "join",
        payload: {
          roomId: roomId,
        },
      };
      wsRef.current?.send(JSON.stringify(joinMessage));
    };

    wsRef.current.onmessage = (event) => {
      setMessages((prev) => [...prev, { text: event.data }]);
    };
  };

  const sendMessage = () => {
    if (!message || !wsRef.current) return;

    const chatMessage = {
      type: "chat",
      payload: {
        message: message,
      },
    };

    wsRef.current.send(JSON.stringify(chatMessage));
    setMessage("");
  };

  return (
    <div className="p-4">
      {!isConnected ? (
        <div>
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter room ID"
            className="border p-2 mr-2"
          />
          <button
            onClick={joinRoom}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Join Room
          </button>
        </div>
      ) : (
        <div>
          <div className="h-[400px] border overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div key={index} className="p-2">
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="border p-2 flex-1 mr-2"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatApp;
