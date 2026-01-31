import React from "react";
import { Helmet } from "react-helmet-async"; 

const AboutMe = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio | About</title>
      </Helmet>
       {/* Header */}
        <div className="text-center space-y-4 mb-12">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-slate-900 dark:text-white">Common </span>
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          {/* Underline */}
          <div className="flex justify-center">
            <span className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
            Everything you need to know about my services and workflow.
          </p>
        </div>
    </div>
  );
};

export default AboutMe;
