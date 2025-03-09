import { useState, useEffect, useRef } from 'react';
import React from 'react';

Date.prototype.time = function () {
  const hh = this.getHours();
  const min = this.getMinutes();

  return [(hh > 9 ? '' : '0') + hh, (min > 9 ? '' : '0') + min].join(':');
};

const ChatbotBox = () => {
  const [messages, setMessages] = useState([]);

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className="chat-box">
      <div className="messages-container">
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={divRef} />
      </div>
      <ChatInput messages={messages} setMessages={setMessages} />
    </div>
  );
};

const ChatMessage = ({ message }) => {
  const { text, userType, createdAt } = message;
  const messageClass = userType !== 'AI' ? 'sent' : 'received';
  const time = createdAt.time();

  console.log(time);

  return (
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
      <div>{time}</div>
    </div>
  );
};

const ChatInput = ({ messages, setMessages }) => {
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    console.log(formValue);
    e.preventDefault();
    setMessages(
      messages.concat([
        { 
          id: Date.now(),
          createdAt: new Date(),
          text: formValue,
          userType: 'Student'
        },
      ])
    );
    setFormValue('');
  };

  return (
    <form onSubmit={sendMessage} className="chat-form">
      <input
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        placeholder="Aa"
        className="chat-input"
      />
      <button className="send-button" type="submit" disabled={!formValue}>
        🕊️
      </button>
    </form>
  );
};

export default ChatbotBox;
