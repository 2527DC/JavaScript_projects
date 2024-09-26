import { useState, useRef, useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import "./FloatingChatApp.css";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);

  // Refs for message scroll and dragging logic
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  const blockRef = useRef(null);

  // Separate drag states for block
  const isBlockDragging = useRef(false);
  const blockStartX = useRef(0);
  const blockStartY = useRef(0);
  const blockInitialLeft = useRef(0);
  const blockInitialTop = useRef(0);

  // Separate drag states for chat container
  const isChatDragging = useRef(false);
  const chatStartX = useRef(0);
  const chatStartY = useRef(0);
  const chatInitialLeft = useRef(0);
  const chatInitialTop = useRef(0);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isBlockDragging.current) {
        const newLeft = blockInitialLeft.current + e.clientX - blockStartX.current;
        const newTop = blockInitialTop.current + e.clientY - blockStartY.current;
        blockRef.current.style.le = `${newLeft}px`;
        blockRef.current.style.top = `${newTop}px`;
      }

      if (isChatDragging.current) {
        const newLeft = chatInitialLeft.current + e.clientX - chatStartX.current;
        const newTop = chatInitialTop.current + e.clientY - chatStartY.current;
        chatRef.current.style.left = `${newLeft}px`;
        chatRef.current.style.top = `${newTop}px`;
      }
    };

    const handleMouseUp = () => {
      isBlockDragging.current = false;
      isChatDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleBlockMouseDown = (e) => {
    isBlockDragging.current = true;
    blockStartX.current = e.clientX;
    blockStartY.current = e.clientY;
    blockInitialLeft.current = blockRef.current.offsetLeft;
    blockInitialTop.current = blockRef.current.offsetTop;
  };

  const handleChatMouseDown = (e) => {
    isChatDragging.current = true;
    chatStartX.current = e.clientX;
    chatStartY.current = e.clientY;
    chatInitialLeft.current = chatRef.current.offsetLeft;
    chatInitialTop.current = chatRef.current.offsetTop;
  };

  const MakeConnection = () => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = Stomp.over(socket);

    client.connect(
      {
        passcode: "your-passcode",
        host: "your-server-host",
        "accept-version": "1.1,1.0",
        "heart-beat": "10000,10000",
      },
      () => {
        console.log("connected");
      }
    );
  };

  return (
    <>
      <button className="fab" onClick={() => setIsChatVisible(!isChatVisible)}>
        💬
      </button>

      {/* Draggable block */}
      <div className="block" ref={blockRef} onMouseDown={handleBlockMouseDown}>
        <h1 style={{ fontSize: "30px" }}>I am monster</h1>
      </div>

      {/* Draggable chat container */}
      {isChatVisible && (
        <div className="chat-container" ref={chatRef} onMouseDown={handleChatMouseDown}>
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button onClick={MakeConnection}>Connect</button>
    </>
  );
};

export default ChatApp;
