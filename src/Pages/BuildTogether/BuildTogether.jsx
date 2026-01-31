import React from "react";

const BuildTogether = () => {
  return (
    <div>
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        {/* Title */}
        <h2 className="text-4xl mt-20 md:text-5xl font-extrabold tracking-tight">
          <span className="text-slate-900 dark:text-white">
            Let's Build Something{" "}
          </span>
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Together
          </span>
        </h2>

        {/* Underline */}
        <div className="flex justify-center">
          <span className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
          Subcribe to my newsletter for the latest tech insights, project
          updates and <br /> exclusive development tips. No scam, only value.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mx-auto my-10">
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="name@example.com"
          required
          className="flex-1 p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
               focus:outline-none focus:ring-2 focus:ring-purple-500 transition placeholder-gray-400"
        />
        {/* Subscribe Button */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 
               text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:scale-105"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default BuildTogether;
