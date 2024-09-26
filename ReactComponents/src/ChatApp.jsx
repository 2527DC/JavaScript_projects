import React, { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [recipient, setRecipient] = useState(''); // New state for recipient
    const [isConnected, setIsConnected] = useState(false);
    const stompClient = useRef(null);

    const connect = () => {
        const socket = new SockJS('http://localhost:8080/ws');
        stompClient.current = Stomp.over(socket);

        stompClient.current.connect({}, (frame) => {
            console.log('Connected: ' + frame);
            setIsConnected(true);
            stompClient.current.subscribe('/topic/messages', (message) => {
                if (message.body) {
                    // Parse the incoming message and add it to the state
                    const chatMessage = JSON.parse(message.body);
                    setMessages(prevMessages => [...prevMessages, chatMessage]);
                }
            });
        });
    };

    const sendMessage = () => {
        if (messageInput.trim() && recipient.trim()) {
            const chatMessage = {
                content: messageInput,
                recipient: recipient,
                sender: 'user' 
            };

            stompClient.current.send('/app/send', {}, JSON.stringify(chatMessage));
            setMessageInput(''); // Clear input after sending
            setRecipient(''); // Clear recipient after sending
        }
    };

    useEffect(() => {
        return () => {
            if (stompClient.current) {
                stompClient.current.disconnect();
                setIsConnected(false);
            }
        };
    }, []);

    return (
        <div>
            <div>
                <h2>Chat Messages</h2>
                <div>
                    {messages.map((msg, index) => (
                        <div key={index}>
                            <strong>{msg.sender}</strong>: {msg.content}
                        </div>
                    ))}
                </div>
            </div>
            {!isConnected ? (
                <button onClick={connect}>Connect</button>
            ) : (
                <div>
                    <input
                        type="text"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder="Recipient username"
                    />
                    <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type a message"
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            )}
        </div>
    );
};

export default Chat;
