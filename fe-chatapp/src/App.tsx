import "./App.css";
import ChatApp from "./Components/ChatApp";
const ws = new WebSocket("ws://localhost:8080");
function App() {
  return (
    <>
      <ChatApp />
    </>
  );
}

export default App;
