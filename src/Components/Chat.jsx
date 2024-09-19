import { useState, useEffect } from 'react';
import './Styles/Chat.css';

function Chat() {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Bienvenue sur Chatbot Service ! Comment puis-je vous aider ?' },
    { sender: 'bot', text: 'Choisissez une option : 1. Création de compte Gmail 2. Création de compte Netflix' }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatMessages([...chatMessages, { sender: 'user', text: message }]);
      setMessage('');
    }
  };

  return (

    // <div className="chat-container">
    //   <div className="chat-box">
    //     {chatMessages.map((msg, index) => (
    //       <div key={index} className={`message ${msg.sender}`}>
    //         {msg.text}
    //       </div>
    //     ))}
    //   </div>
    //   <form onSubmit={handleSendMessage} className="chat-input-form">
    //     <input
    //       type="text"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //       placeholder="Écrivez un message..."
    //       className="chat-input"
    //     />
    //     <button type="submit" className="btn-send">Envoyer</button>
    //   </form>
    // </div>

    
    <div className="chat-container">

      {/* Message de bienvenue de notre site après connexion de l'utilisateur */}

      <div class="flex items-start gap-2.5">
        <div class="flex flex-col gap-1 w-full max-w-[320px]">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Bot</span>

          </div>
          <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700" className='welcome-message'>
            <p class="text-sm font-normal text-gray-900 dark:text-white"> Bienvenue sur notre site !
              Nous sommes ravis de vous accueillir. Ici, notre chatbot est à votre service pour vous aider dans diverses tâches, comme la création de comptes Gmail, Outlook, ou Netflix. Sélectionnez simplement une option pour commencer et laissez-nous vous guider à travers le processus. Nous nous engageons à rendre votre expérience simple et agréable.</p>
          </div>
          <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700" className='first-message'>
            <p class="text-sm font-normal text-gray-900 dark:text-white"> Veuillez choisir dans cette liste le service que vous souhaitez!!</p>
          </div>
        </div>
      </div>
      <div className='input-area'>
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
