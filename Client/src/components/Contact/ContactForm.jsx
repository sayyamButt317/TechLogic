import { useState } from "react";
import axios from "axios";
import ContactStepperWidget from "./ContactStepper";

const ContactForm = () => {
  const [result, setResult] = useState(""); 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    location: "",
    text: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/v1/form', formData);

      if (response.status >= 200 && response.status < 300) { // Success range (including 201, 204, etc.)
        setResult("Message Sent!");
        setFormData({ // Reset form fields
          username: "",
          email: "",
          phone: "",
          location: "",
          text: "",
        });
      } else {
        setResult("Message Failed! (Error: " + response.status + ")"); // Show error status
      }

    } catch (error) {
      console.error("Error:", error);
      setResult("Message Failed! (Network Error)"); // Indicate network issues
    }
  };

  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      phone: "",
      location: "",
      text: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-4xl w-full">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <ContactStepperWidget />
          <h2 className="text-center text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                User name
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="User name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Enter your number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your number"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Enter Your Location
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Your Location"
              />
            </div>
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                Message here
              </label>
              <textarea
                id="text"
                value={formData.text}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Message here"
              />
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Reset
              </button>
            </div>

            {result && (
              <p className={`text-center mt-4 ${result === "Message Sent!" ? "text-green-500" : "text-red-500"}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
