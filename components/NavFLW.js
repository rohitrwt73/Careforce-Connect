import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#002549]">
      <div className="flex items-center">
        <Link href="/flw">
          <Image
            src="https://www.indusaction.org/wp-content/themes/indusaction/img/logo.svg"
            alt="Indus Action Logo"
            width={197}
            height={40}
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Link href="/flw/allSchemes">
          <button className="rounded-md text-white font-extrabold bg-blue-500 hover:bg-gray-200 hover:text-blue-800 transition-all duration-300 text-base p-2">
            Search Schemes
          </button>
        </Link>
        <Link href="/flw/newPerson">
          <button className="rounded-md text-white font-extrabold bg-blue-500 p-2 transition-colors duration-300 hover:bg-gray-200 hover:text-blue-800">
            Add New User
          </button>
        </Link>
        <Link href="/flw/schemeMatcher">
          <button className="rounded-md font-extrabold bg-blue-500 text-white hover:bg-gray-200 hover:text-blue-800 text-blue-700 text-base p-2 transition-colors duration-300 hover:bg-gray-200 hover:text-blue-800">
            Scheme Matcher
          </button>
        </Link>
        <Link href="/flw/reportIssue">
          <button className="rounded-md text-white font-extrabold bg-blue-500 hover:bg-gray-200 text-blue-700 text-base p-2 rounded-lg transition-colors duration-300 hover:bg-gray-200 hover:text-blue-800">
            Report Issues
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
