import Link from "next/link";

const RegistrationSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md text-center shadow-lg transform transition-all hover:scale-105">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">
          Registration Successful!
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Thank you for registering as an FWL. Your account will be verified by our admin team within the next 7-14 working days. You will receive an email once the verification is complete.
        </p>
        <Link href="/" passHref>
          <a className="inline-block py-2 px-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Go to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
