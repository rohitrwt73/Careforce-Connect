import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <div className="flex items-center">
        <Link href="/flw">
          <Image
            src="https://www.indusaction.org/wp-content/themes/indusaction/img/logo.svg"
            alt="Indus Action Logo"
            width={197} // Adjust width as needed
            height={40} // Adjust height as needed
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Link
          href="/flw/allSchemes"
          className="text-blue-700 text-base p-2 transition-colors duration-300 hover:text-blue-500">
          Search Schemes
        </Link>
        <Link
          href="/flw/newPerson"
          className="text-blue-700 text-base p-2 transition-colors duration-300 hover:text-blue-500">
          Add New User
        </Link>
        <Link
          href="/flw/schemeMatcher"
          className="text-blue-700 text-base p-2 transition-colors duration-300 hover:text-blue-500">
          Scheme Matcher
        </Link>
        <Link
          href="/flw/reportIssue"
          className="text-blue-700 text-base p-2 transition-colors duration-300 hover:text-blue-500">
          Report Issues
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
