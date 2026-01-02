import ChatRoom from './pages/ChatRoom';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <ChatRoom />
      <Toaster richColors />
    </div>
  );
}

export default App;
