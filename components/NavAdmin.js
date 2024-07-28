import Link from "next/link";
import Image from "next/image";

const AdminNavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#002549]">
      <div className="flex items-center">
        <Link href="/admin">
          <Image
            src="https://www.indusaction.org/wp-content/themes/indusaction/img/logo.svg"
            alt="Indus Action Logo"
            width={197}
            height={40}
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Link href="/admin/fetchNewScheme">
          <button className="rounded-md text-white font-extrabold bg-blue-500 hover:bg-gray-200 hover:text-blue-800 transition-all duration-300 text-base p-2">
            Fetch New Schemes
          </button>
        </Link>
        <Link href="/admin/insertNewScheme">
          <button className="rounded-md text-white font-extrabold bg-blue-500 p-2 transition-colors duration-300 hover:bg-gray-200 hover:text-blue-800">
            Insert New Scheme
          </button>
        </Link>
        <Link href="/admin/seeCSUM">
          <button className="rounded-md font-extrabold bg-blue-500 text-white hover:bg-gray-200 hover:text-blue-800 text-base p-2 transition-colors duration-300">
            See Current user and Scheme Mappings
          </button>
        </Link>
        <Link href="/admin/viewFLW">
          <button className="rounded-md text-white font-extrabold bg-blue-500 hover:text-blue-600 hover:bg-gray-200 text-base p-2 transition-colors duration-300">
            View FLW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminNavBar;
