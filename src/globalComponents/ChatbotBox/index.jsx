import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { LuSendHorizontal } from 'react-icons/lu';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import rehypeGFM from 'remark-gfm';
import threeDotsGif from '../../assets/three_dots.gif';

import { get_AI_tutor_response } from '../../utils/api_calls.jsx';

import { FaPaperPlane, FaFileImage, FaPaperclip, FaMicrophone } from 'react-icons/fa6';
// import geminiLogo from '../../assets/geminiLogo.webp';

import { IoEllipsisVerticalSharp } from 'react-icons/io5';

Date.prototype.time = function () {
  const hh = this.getHours();
  const min = this.getMinutes();

  return [(hh > 9 ? '' : '0') + hh, (min > 9 ? '' : '0') + min].join(':');
};

const ChatbotBox = () => {
  const [messages, setMessages] = useState([]);

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    messagesContainerRef.current.scrollTo({
      top: messagesContainerRef.current.scrollHeight + 1000,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div id="AI-chat-box" className="flex flex-col w-full h-144 shadow-xl bg-white rounded-xl p-6">
      <div className="flex justify-between items-center pb-4">
        <div className="ROBOTO_FONTS text-xl font-semibold">Gemini</div>
        <button className="p-2 rounded-lg transition-colors hover:bg-[#f3f3f3]">
          <IoEllipsisVerticalSharp className="text-xl" />
        </button>
      </div>
      <div className="border-1 border-[#ededed]" />
      <div className="overflow-y-auto h-full w-full pb-6" ref={messagesContainerRef}>
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <div className="border-1 border-[#ededed]" />
      <ChatInput setMessages={setMessages} />
    </div>
  );
};

const ChatMessage = ({ message }) => {
  const { text, userType, createdAt, type } = message;

  return type === 'LOADING' ? (
    <div className="flex my-8">
      <div className="flex mr-5 ">
        <img
          className="mt-auto rounded-full bg-gray-100 p-0.5"
          src={''}
          width={38}
          alt="pfp"
        />
      </div>
      <div className="w-fit px-3.5 bg-[#f0f0f0] rounded-2xl rounded-bl-none">
        <img src={threeDotsGif} alt="loading..." width={40} />
      </div>
    </div>
  ) : (
    <div className="message flex w-full my-8">
      {userType === 'AI' && (
        <div className="flex mr-5">
          <img
            className="mt-auto rounded-full bg-gray-100 p-0.5"
            src={''}
            width={38}
            alt="pfp"
          />
        </div>
      )}
      <div
        className={`w-fit max-w-216 px-4.5 pb-2 pt-2.5 rounded-2xl ${
          userType === 'AI'
            ? 'mr-auto bg-[#f0f0f0] text-black rounded-bl-none'
            : 'ml-auto bg-[#4880ff] text-white rounded-br-none'
        }`}
      >
        {userType === 'AI' ? (
          <div className="-mt-6">
            <ReactMarkdown rehypePlugins={[rehypeGFM]} remarkPlugins={[remarkBreaks]}>
              {text}
            </ReactMarkdown>
          </div>
        ) : (
          <paragraph>{text}</paragraph>
        )}
        <div className="text-xs text-right flex items-center justify-end">
          <p>{createdAt.time()}</p>
          <button
            className={`ml-2 p-1 rounded-md transition-colors ${
              userType === 'AI' ? 'hover:bg-[#dfdfdf]' : 'hover:bg-[#549ef8]'
            }`}
          >
            <IoEllipsisVerticalSharp className="text-base" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ChatInput = ({ setMessages }) => {
  const [formValue, setFormValue] = useState('');
  const [isResponding, setIsResponding] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!formValue || isResponding) {
      const chatBox = document.getElementById('AI-chat-box');
      chatBox.classList.remove('shake');

      // trigger a DOM reflow
      void chatBox.offsetWidth;

      chatBox.classList.add('shake');
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
    <form onSubmit={sendMessage} className="flex w-full h-22 py-4 text-[#646464] space-x-2">
      <button
        className={`min-w-fit h-full px-3 font-medium text-lg rounded-lg transition-colors flex items-center hover:bg-[#f3f3f3]`}
        type="button"
      >
        <FaMicrophone />
      </button>
      <input
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        placeholder="Write message"
        className="w-full h-full pl-4 outline-none border-none"
      />
      <button
        className={`min-w-fit h-full px-3 font-medium text-lg rounded-lg transition-colors flex items-center hover:bg-[#f3f3f3]`}
        type="button"
      >
        <FaPaperclip />
      </button>
      <button
        className={`min-w-fit h-full px-3 font-medium text-lg rounded-lg transition-colors flex items-center hover:bg-[#f3f3f3]`}
        type="button"
      >
        <FaFileImage />
      </button>
      <button
        className={`min-w-27 h-full px-6 ROBOTO_FONTS font-medium text-white text-sm rounded-lg transition-colors flex items-center justify-between ${
          !formValue || isResponding
            ? 'bg-[#c4c4c4] hover:bg-[#d3d3d3]'
            : 'bg-[#4880ff] hover:bg-[#5b6fef]'
        }`}
        type="submit"
      >
        <p>Send</p>
        <FaPaperPlane className="text-md" />
      </button>
    </form>
  );
};

export default ChatbotBox;
