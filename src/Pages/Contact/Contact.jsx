import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactItems = [
  { icon: <FaPhone />, text: "+8801844797780", label: "Call me" },
  {
    icon: <FaEnvelope />,
    text: "abdullahallmojahidstudent@gmail.com",
    label: "Email me",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "Cox's Bazar, Bangladesh",
    label: "Location",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! Check console for details.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>My Portfolio | Contact</title>
      </Helmet>

      {/* Flex container */}
      <div className="flex flex-col md:flex-row md:items-start gap-12">
        {/* Left - Header / Text */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center md:text-left">
            <span className="text-slate-900 dark:text-white">Let's </span>
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          {/* Underline */}
          <div className="flex justify-center md:justify-start">
            <span className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
          </div>

          <p className="text-slate-500 text-base md:text-lg max-w-md text-center md:text-left mt-8">
            I specialize in React.js, Node.js, MongoDB. <br />
            Whatever project you have in mind, or just <br /> want to say hi, my
            inbox is always open!
          </p>

          {/* Contact List */}
          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group mt-16">
                {/* Icon Box */}
                <div
                  className="w-12 h-12 mt-3 flex items-center justify-center rounded-2xl 
              bg-teal-500/10 text-teal-500
              group-hover:bg-teal-500 group-hover:text-white
              transition-all duration-300"
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500/70">
                    {item.label}
                  </p>
                  <p className="font-medium text-slate-800 dark:text-white">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-6"
          >
            {/* Full Name */}
            <h5 className="font-bold mb-[-20px]">Name</h5>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            {/* Email */}
            <h5 className="font-bold mb-[-20px]">Email Address</h5>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            {/* Subject */}
            <h5 className="font-bold mb-[-20px]">Subject</h5>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            {/* Message */}
            <h5 className="font-bold mb-[-20px]">Your Message </h5>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
