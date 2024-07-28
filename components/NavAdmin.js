import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <div className="flex items-center">
        <Link href="/admin">
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
          href="/admin/fetchNewScheme"
          className="text-blue-700 text-base p-2 transition-colors duration-300 hover:text-blue-500">
          Fetch New Schemes
        </Link>
        <Link
          href="/flw/insertNewScheme"
          className="text-blue-700 text-base p-2 transition-colors duration-300 hover:text-blue-500">
          Insert New Scheme
        </Link>
        <Link
          href="/flw/seeCSUM"
          className="text-blue-700 text-base p-2 transition-colors duration-300 hover:text-blue-500">
          See Current user and Scheme Mappings
        </Link>
        <Link
          href="/flw/viewFLW"
          className="text-blue-700 text-base p-2 transition-colors duration-300 hover:text-blue-500">
          View FLW
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
