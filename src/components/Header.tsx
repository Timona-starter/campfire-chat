interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header className="bg-gray-800 p-4 shadow-md z-10">
      <h1 className="text-xl font-bold text-center">{title}</h1>
    </header>
  );
}

export default Header;
