import React from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";


const Register = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("/api/aadhar/112245641232");

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Redirect to Aadhaar verification page with query parameters
    const query = new URLSearchParams(data).toString();
    router.push(`/register/verifyAdhaar?${query}`);
  };

  return (
    <>
    <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-8">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg w-full max-w-md text-gray-800 shadow-2xl transform transition-all hover:scale-105">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-600">
          Register as a FWL
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="uid"
            placeholder="UID"
            required
            className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            name="dob"
            required
            className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="space-y-2">
            <span className="font-semibold">Gender:</span>
            <div className="flex space-x-4 text-gray-800">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  required
                  className="text-blue-500"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  required
                  className="text-blue-500"
                />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  required
                  className="text-blue-500"
                />
                <span>Other</span>
              </label>
            </div>
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="aadhaar"
            placeholder="Aadhaar Number"
            required
            className="w-full p-4 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 mt-8 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
