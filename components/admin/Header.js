const Header = () => (
    <header className="w-full  p-4 shadow-md flex justify-between items-center">
      <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      <div className="flex items-center">
        <img
          src="/avatar.png"
          alt="Admin Avatar"
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-2">Admin</span>
      </div>
    </header>
  );
  
  export default Header;
  