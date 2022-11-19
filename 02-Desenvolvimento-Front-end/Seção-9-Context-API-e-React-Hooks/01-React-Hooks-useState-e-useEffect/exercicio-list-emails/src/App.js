import './App.css';
import { useState, useEffect } from 'react';
import messagesList from './data/menssageList';
import List from './components/List';
import Controls from './components/Controls';
import { read, unread } from './constants';

function App() {
  const [messages, setMessages] = useState(messagesList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === read);
  
    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [messages]);

  const setMessageStatus = (messageID, newStatus) => {
    const updateMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageID) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage
    });

    setMessages(updateMessages);
  };

  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: read }));
    setMessages(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: unread }));
    setMessages(allAsRead);
  };

  return (
    <div>
      <header>
        <h1>TrybeMail</h1>
      </header>
      <List
        messages={messages} 
        setMessageStatus={setMessageStatus}
      />
      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />
    </div>
  )
}

export default App;
