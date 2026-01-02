import { useState } from 'react';
import { toast } from 'sonner';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
}

function MessageInput({ onSendMessage }: MessageInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text.trim());
      setText('');
      toast.success('Message sent!');
    } else {
      toast.error('Message cannot be empty.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 flex items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-gray-700 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
        Send
      </button>
    </form>
  );
}

export default MessageInput;
