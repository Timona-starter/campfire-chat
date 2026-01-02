import { useState } from 'react';
import Header from '../components/Header';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import UserList from '../components/UserList';
import { initialMessages } from '../data/messages';
import { users } from '../data/users';

interface MessageData {
  id: number;
  text: string;
  timestamp: string;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
}

const currentUser = users[0];

function ChatRoom() {
  const [messages, setMessages] = useState<MessageData[]>(initialMessages);

  const handleSendMessage = (text: string) => {
    const newMessage: MessageData = {
      id: messages.length + 1,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: currentUser,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header title="Karibu Chat" />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-col flex-1">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg) => (
              <Message key={msg.id} message={msg} isCurrentUser={msg.user.id === currentUser.id} />
            ))}
          </div>
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
        <UserList users={users} />
      </div>
    </div>
  );
}

export default ChatRoom;
