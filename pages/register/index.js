import React from "react";
import { useRouter } from "next/router";
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Register = () => {
  const router = useRouter();

  const handleSubmit = async(event) => {
    event.preventDefault();

    await fetch("/api/aadhar/112245641232")

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Redirect to Aadhaar verification page with query parameters
    const query = new URLSearchParams(data).toString();
    router.push(`/register/verifyAdhaar?${query}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <ToastContainer/>
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Register as a FWL
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="uid" placeholder="UID" required className="w-full p-4 rounded-lg bg-gray-700 text-gray-100" />
          <input type="text" name="password" placeholder="Password" required className="w-full p-4 rounded-lg bg-gray-700 text-gray-100" />
          <input type="text" name="name" placeholder="Name" required className="w-full p-4 rounded-lg bg-gray-700 text-gray-100" />
          <input type="date" name="dob" required className="w-full p-4 rounded-lg bg-gray-700 text-gray-100" />
          <div className="space-y-2">
            <span className="font-semibold">Gender:</span>
            <div className="flex space-x-4 text-gray-300">
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" value="male" required className="text-teal-500" />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" value="female" required className="text-teal-500" />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" value="other" required className="text-teal-500" />
                <span>Other</span>
              </label>
            </div>
          </div>
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-4 rounded-lg bg-gray-700 text-gray-100" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-4 rounded-lg bg-gray-700 text-gray-100" />
          <input type="text" name="aadhaar" placeholder="Aadhaar Number" required className="w-full p-4 rounded-lg bg-gray-700 text-gray-100" />

          <button type="submit" className="w-full py-2 mt-6 bg-teal-600 text-gray-100 rounded-lg border border-transparent shadow-lg hover:bg-teal-500 transition-colors duration-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
