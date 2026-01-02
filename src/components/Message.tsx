interface MessageProps {
  message: {
    text: string;
    timestamp: string;
    user: {
      name: string;
      avatar: string;
    };
  };
  isCurrentUser: boolean;
}

function Message({ message, isCurrentUser }: MessageProps) {
  const { text, timestamp, user } = message;

  const alignment = isCurrentUser ? 'items-end' : 'items-start';
  const bubbleColor = isCurrentUser ? 'bg-blue-600' : 'bg-gray-700';

  return (
    <div className={`flex flex-col mb-4 ${alignment}`}>
      <div className="flex items-center mb-1">
        {!isCurrentUser && <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-2" />}
        <span className="font-bold text-sm">{user.name}</span>
      </div>
      <div className={`rounded-lg p-3 max-w-lg ${bubbleColor}`}>
        <p>{text}</p>
      </div>
      <span className="text-xs text-gray-400 mt-1">{timestamp}</span>
    </div>
  );
}

export default Message;