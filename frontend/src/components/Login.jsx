import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3000";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        URL + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      // Handle successful login
      console.log("Login successful!", response.data); // Log response for debugging

      // Redirect to the home page
      navigate("/");

      

    } catch (err) {
      setError(true);
      console.error("Login failed:", err.response.data); // Log error details for debugging

     
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-[#EB8C24] via-[#E9BA5D] to-[#DCDCDC]">
      <div className="max-w-[40%] container mx-auto">
        <form onSubmit={handleSubmit} className="bg-opacity-30 backdrop-blur-md bg-white p-12 rounded-lg shadow-xl">
          <p style={{fontFamily:"Puppies Play", fontSize:"13xl" }} className="flex justify-center text-black text-3xl font-bold opacity-70 mb-12">
            Welcome
          </p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border-l-2 border-t-2 border-white rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border-l-2 border-t-2 border-white rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <input
            type="submit"
            value="Login"
            className="w-full p-3 mt-4 bg-green-500 text-white rounded-3xl focus:outline-none hover:bg-green-600 transition-colors duration-200"
          />
          <a href="#" className="text-gray-600 hover:text-gray-200 transition-colors duration-200">
            Forgot Password?
          </a>
          {error && <p className="text-red-500 mt-2">Login failed. Please try again.</p>}
        </form>

        <div className="drops absolute">
          <div className="drop drop-1 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
          <div className="drop drop-2 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
          <div className="drop drop-3 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
          <div className="drop drop-4 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
          <div className="drop drop-5 bg-opacity-30 bg-white rounded-lg shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
