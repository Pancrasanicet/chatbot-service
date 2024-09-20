import { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Welcome from './Chat/Welcome';
import './Styles/Chat.css';

function Chat() {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatMessages([...chatMessages, { sender: 'user', text: message }]);
      setMessage(''); // Clear input after sending
    }
  };

  return (
    <div className="chat-container">

      {/* Message de bienvenue */}

      <div className="Welcome-Chat">
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Bot services</span>
            <img class="w-8 h-8 rounded-full" src="/src/assets/robot.png" alt="Mascotte image"></img>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 welcome-message">
            <div className="text-sm font-normal text-gray-900 dark:text-white">
              <Welcome />
            </div>
          </div>
        </div>
      </div>


        {chatMessages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <span>{msg.text}</span>
          </div>
        ))}


      {/* Input area for sending messages */}
      <div className="input-area">
        <form onSubmit={handleSendMessage} className="chat-input-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Écrivez un message..."
            className="chat-input"
          />
          <button type="submit" className="btn-send">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
