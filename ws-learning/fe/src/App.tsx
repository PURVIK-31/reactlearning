import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState();
  function sendMessage() {
    if (!socket) {
      return;
    }
    //@ts-ignore
    socket.send("ping");
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/");
    setSocket(ws);
    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);
  // Error 1: Incorrect syntax - remove the curly brace after return
  // Error 2: Semicolon after div is causing invalid JSX
  // Error 3: Self-closing input tag should use /> not ></input>
  // Error 1: Missing closing curly brace for App function
  // Error 2: useState needs a type parameter
  // Error 3: WebSocket connection should be cleaned up on unmount
  return (
    <div>
      <input type="text" placeholder="MESSAGE PUT HERE BISH !!" />
      <button onClick={sendMessage}> SEND </button>
    </div>
  );
} // Add closing brace here

export default App;
