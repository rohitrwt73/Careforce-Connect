import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-gray-100 w-full p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" className="text-teal-400 hover:text-teal-300">Indus Action
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-teal-300">Home
            </Link>
          </li>
          <li>
            <Link href="/register" className="hover:text-teal-300">Join Our Team
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-teal-300">Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
