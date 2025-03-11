import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { LuSendHorizontal } from "react-icons/lu";
import ReactMarkdown from 'react-markdown';
import threeDotsGif from '../../assets/three_dots.gif';

import { get_AI_tutor_response } from '../../utils/api_calls';


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
    <div id="AI-chat-box" className="chat-box">
      <div className="messages-container">
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={divRef} />
      </div>
      <ChatInput setMessages={setMessages} />
    </div>
  );
};

const ChatMessage = ({ message }) => {
  const { text, userType, createdAt, type } = message;
  const messageClass = userType !== 'AI' ? 'sent' : 'received';

  return type === 'LOADING' ? (
    <div className={`message message-loading`}>
      <img src={threeDotsGif} alt="loading..." width={40} />
    </div>
  ) : (
    <div className={`message ${messageClass}`}>
      {
        userType === 'AI' ? (
          <ReactMarkdown>{text}</ReactMarkdown>
        ) : (
          <p>{text}</p>
        )
      }
      <div>{createdAt.time()}</div>
    </div>
  );
};

const ChatInput = ({ setMessages }) => {
  const [formValue, setFormValue] = useState('');
  const [isResponding, setIsResponding] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if(!formValue || isResponding) {

      const chatBox = document.getElementById("AI-chat-box"); 
      chatBox.classList.remove("shake"); 

      // trigger a DOM reflow 
      void chatBox.offsetWidth; 

      chatBox.classList.add("shake");
      return;
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        createdAt: new Date(),
        type: 'MESSAGE',
        text: formValue,
        userType: 'Student',
      },
    ]);
    setIsResponding(true);
    setMessages((prevMessages) => [...prevMessages, { type: 'LOADING', userType: 'AI' }]);
    get_AI_tutor_response(formValue).then((aiResponseText) => {
      setIsResponding(false);
      const aiMessage = {
        id: Date.now(),
        createdAt: new Date(),
        type: 'MESSAGE',
        text: aiResponseText,
        userType: 'AI',
      };
      setMessages((prevMessages) => [...prevMessages.slice(0, -1), aiMessage]);
    });
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
      <button className={`send-button ${(!formValue || isResponding) ? 'disabled' : ''}`} type="submit">
        <LuSendHorizontal className='text-white text-xl' />
      </button>
    </form>
  );
};

export default ChatbotBox;
