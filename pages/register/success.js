import Link from "next/link";

const RegistrationSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md text-white text-center">
        <h1 className="text-3xl font-bold mb-4">
          Registration Successful!
        </h1>
        <p className="text-lg mb-6">
          Thank you for registering as an FWL. Your account will be verified by our admin team within the next 7-14 working days. You will receive an email once the verification is complete.
        </p>
        <Link href="/" className="inline-block py-2 px-4 bg-teal-600 text-gray-100 rounded-lg shadow-lg hover:bg-teal-500 transition-colors duration-300">
            Go to Home
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
