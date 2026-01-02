interface User {
  id: number;
  name: string;
  avatar: string;
}

interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {
  return (
    <aside className="w-64 bg-gray-800 p-4 hidden md:block">
      <h2 className="text-lg font-bold mb-4">In Room</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex items-center mb-3">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
            <span className="font-medium">{user.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default UserList;
