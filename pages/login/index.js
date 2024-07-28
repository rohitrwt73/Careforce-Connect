import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

const ADMIN_ID = process.env.ADMIN_ID || "SPADMIN";
const ADMIN_PASS = process.env.ADMIN_PASS || "ADMIN2244";

const Login = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const userId = event.target.userId.value;
    const password = event.target.password.value;
    const isFwl = isLogin;
    console.log(isFwl);
    if (isFwl) {
      try {
        const response = await fetch("/api/login/flw", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uid: userId, password }),
        });

        if (response.status != 200) {
          throw new Error("Login failed");
        }

        const data = await response.json();
        // Handle successful login, e.g., store token, redirect
        localStorage.setItem("TOKEN", data.token.userId);
        router.push("/flw");
      } catch (error) {
        toast("There Was Some Error!");
      }
    } else {
      if (userId === ADMIN_ID && password === ADMIN_PASS) {
        router.push("/admin");
      } else {
        console.log(process.env.ADMIN_ID);
        toast("Wrong Credentials for Admin");
      }
    }
  };

  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-gray-800 font-poppins">
        <ToastContainer />
        <div className="w-full max-w-md mx-4 p-8 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105">
          <div className="flex justify-between mb-6">
            <button
              className={`py-2 px-4 rounded ${isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setIsLogin(true)}
            >
              FLW Login
            </button>
            <button
              className={`py-2 px-4 rounded ${!isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setIsLogin(false)}
            >
              Admin Login
            </button>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col">
            <input
              required
              type="text"
              name="userId"
              placeholder="User ID"
              className="mb-4 p-3 rounded-lg border-none bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              className="mb-4 p-3 rounded-lg border-none bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Login
            </button>
            <p className="mt-4 text-center text-gray-600 hover:underline">
              Forgot your password?
            </p>
            <p className="mt-2 text-center text-gray-600">
              Don't have an account?{" "}
              <span><Link href="/register" className="text-blue-600 hover:underline">Register
              </Link></span>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
