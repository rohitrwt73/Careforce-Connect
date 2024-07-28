import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegisterAadhaar = () => {
  const [otp, setOtp] = useState("");
  const [userData, setUserData] = useState({});
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    // Extract and set user data from query parameters
    const { uid, password, name, dob, gender, phone, email, aadhaar } = query;
    setUserData({ uid, password, name, dob, gender, phone, email, aadhaar });
  }, [query]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace with your API endpoint
      const response = await fetch('/api/aadhar/otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "otp": otp }),
      });

      if (!response.ok) {
        throw new Error('Verification failed');
      }

      // Upload all data to Firestore
      try {
        const response = await fetch('/api/register/flw', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });

        if (response.status != 200) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        // Handle successful login, e.g., store token, redirect
        localStorage.setItem("TOKEN", data.token.userId)
        router.push("/flw")
      } catch (error) {
        toast("There Was Some Error!");
      }

      // Redirect to a success or confirmation page
      router.push('/register/success');  // Replace with your success page route
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg w-full max-w-md text-center shadow-lg transform transition-all hover:scale-105">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Verify Your Aadhaar
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={userData.aadhaar}
              readOnly
              className="w-full p-4 pl-12 border border-transparent rounded-lg bg-gray-200 text-gray-900"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="OTP"
              required
              className="w-full p-4 pl-12 border border-transparent rounded-lg bg-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-blue-600 text-white rounded-lg border border-transparent shadow-lg hover:bg-blue-500 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterAadhaar;
