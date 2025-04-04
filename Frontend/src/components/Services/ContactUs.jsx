import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  // State for Form Data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/contact", formData);

      alert(res.data.message); // Show success message
      setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error:", error.response?.data?.error || error.message);
      alert("Failed to send message! Try again.");
    }
  };

  return (
    <div className="bg-gray-100 px-6 md:px-[100px] shadow-xl py-12 mt-[60px] rounded-lg">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-10">
        {/* Left Section */}
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-gray-800">📞 Get In Touch</h1>
          <p className="text-gray-600 mt-4 text-2xl">
            Have questions? Feel free to reach out, and we’ll get back to you as soon as possible.
          </p>
         
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="bg-gray-50 h-[50px] px-4 border border-gray-300 rounded-md 
                         text-gray-800 font-medium focus:outline-none focus:ring-2 
                         focus:ring-red-400 placeholder-gray-500 transition-all duration-300"
            />

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="bg-gray-50 h-[50px] px-4 border border-gray-300 rounded-md 
                         text-gray-800 font-medium focus:outline-none focus:ring-2 
                         focus:ring-red-400 placeholder-gray-500 transition-all duration-300"
            />
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="bg-gray-50 h-[50px] w-full px-4 border border-gray-300 rounded-md 
                       text-gray-800 font-medium focus:outline-none focus:ring-2 
                       focus:ring-red-400 placeholder-gray-500 transition-all duration-300 mt-4"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-gray-50 h-[120px] w-full px-4 py-2 border border-gray-300 rounded-md 
                       text-gray-800 font-medium focus:outline-none focus:ring-2 
                       focus:ring-red-400 placeholder-gray-500 transition-all duration-300 mt-4 resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-6 w-full bg-red-500 text-white font-semibold py-3 rounded-md 
                       hover:bg-red-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
