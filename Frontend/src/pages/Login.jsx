import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save token & admin info to localStorage
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("admin", JSON.stringify(data.admin));

      alert("Login Successful!");
      navigate("/admin"); // Redirect to the admin dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out transform hover:scale-105">
          <img src="images/about5.png" alt="" className="object-cover h-full w-full" />
        </div>

        <div className="p-10 w-[500px]">
          <h2 className="text-2xl font-bold text-gray-600 mb-1">Login</h2>

          {error && <p className="text-red-500">{error}</p>}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 border py-2 border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Password
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 border py-2 border-gray-300 rounded-md focus:outline-none focus:ring-red-500 transform hover:scale-105"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white font-bold rounded-md transition-transform duration-700 hover:bg-red-600 focus:outline-none focus:ring-2"
            >
              Login
            </button>

            <div>
              <span>Don't have an account?</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
