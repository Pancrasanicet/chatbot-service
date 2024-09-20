import React, { useState, useEffect } from 'react';
import './Welcome.css'; 

const Welcome = () => {
  const messages = [
    { id: 1, text: "Bienvenue sur notre site !" },
    { id: 2, text: "Nous sommes ravis de vous accueillir." },
    { id: 3, text: "Notre chatbot est à votre service pour vous aider." },
    { id: 4, text: "Vous pouvez créer des comptes Gmail, Outlook, ou Netflix." },
    { id: 5, text: "Sélectionnez simplement une option pour commencer." },
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (currentMessage < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessage(currentMessage + 1);
      }, 200); 
      return () => clearTimeout(timer);
    }
  }, [currentMessage, messages.length]);

  return (
    <div className="welcome-container">
      {messages.slice(0, currentMessage).map((message) => (
        <p key={message.id} className={`message message-${message.id} text-left bg-yellow-500 text-white py-8`}>
          {message.text}
        </p>
      ))}
    </div>
  );
};

export default Welcome;
