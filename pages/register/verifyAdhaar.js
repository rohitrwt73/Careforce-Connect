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
    setUserData({uid, password, name, dob, gender, phone, email, aadhaar });
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
  
        if (response.status!=200) {
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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <ToastContainer/>
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Verify Your Aadhaar
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={userData.aadhaar}
              readOnly
              className="w-full p-4 pl-12 border border-transparent rounded-lg bg-gray-700 text-gray-100"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="OTP"
              required
              className="w-full p-4 pl-12 border border-transparent rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-teal-600 text-gray-100 rounded-lg border border-transparent shadow-lg hover:bg-teal-500 transition-colors duration-300"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterAadhaar;
