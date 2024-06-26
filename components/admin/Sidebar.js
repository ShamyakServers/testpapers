import Link from 'next/link';

const Sidebar = () => (
  <div className="w-64 h-full bg-gray-800 text-white fixed">
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
    </div>
    <nav className="mt-6">
      <Link legacyBehavior  href="/">
        <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</a>
      </Link>
      <Link legacyBehavior href="/admin/add-quiz">
        <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Add Quiz</a>
      </Link>
      <Link legacyBehavior href="/add-mock-paper">
        <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Add Mock Paper</a>
      </Link>
      <Link legacyBehavior href="/manage-users">
        <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Manage Users</a>
      </Link>
    </nav>
  </div>
);

export default Sidebar;
