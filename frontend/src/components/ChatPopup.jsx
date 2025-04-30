import React, { useState } from 'react';
import './ChatPopup.css';

const ChatPopup = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  
  const handleOptionClick = (option) => {
    let response = "";

    switch (option) {
      case 'ajanvaraus':
        response = "Voit varata ajan sivulta: /ajanvaraus";
        break;
      case 'myymalat':
        response = "Lähimmät myymälämme löydät täältä: /myymalat";
        break;
      case 'verkkokauppa':
        response = "Voit selata tuotteita verkkokaupassamme: /";
        break;
      case 'nakeminen':
        response = "Näkemiseen liittyvissä asioissa suosittelemme varaamaan ajan optikolle.";
        break;
      default:
        response = "Kuinka voimme auttaa?";
    }

    setMessages(prev => [...prev, { sender: 'bot', text: response }]);
  };

  return (
    <div className="chat-popup">
      {open ? (
        <div className="chat-box">
          <button className="close-btn" onClick={() => setOpen(false)}>X</button>
          <h4>Hei! 👋 Tervetuloa.</h4>
          <p>Onko sinulla kysyttävää tuotteista tai palveluista?</p>

          <button className="chat-option" onClick={() => handleOptionClick('ajanvaraus')}>🕑 Ajanvaraus</button>
          <button className="chat-option" onClick={() => handleOptionClick('myymalat')}>📍 Myymälät</button>
          <button className="chat-option" onClick={() => handleOptionClick('verkkokauppa')}>🛒 Verkkokauppa</button>
          <button className="chat-option" onClick={() => handleOptionClick('nakeminen')}>👁️ Näkemiseen liittyvä asia</button>

          {/* Näytä bottiviestit */}
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button className="open-btn" onClick={() => setOpen(true)}>💬</button>
      )}
    </div>
  );
};

export default ChatPopup;
