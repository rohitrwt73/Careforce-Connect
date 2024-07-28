import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="z-10 sticky top-0 bg-[#002549] text-white w-full py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">
          <Link className="text-white hover:text-blue-300 transition-colors duration-300" href="/" passHref>
            Indus Action
          </Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link className="text-lg px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-all duration-300" href="/" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link className="text-lg px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-all duration-300" href="/register" passHref>
              Join our team
            </Link>
          </li>
          <li>
            <Link className="text-lg px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition-all duration-300" href="/login" passHref>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
