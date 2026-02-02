import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, description, image }) => {
  const navigate = useNavigate();

  const goTo404 = () => {
    navigate("/404"); // Navigate to 404 page
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-transform transform hover:scale-105">
      {/* Image */}
      <div className="relative h-48 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-auto flex gap-2 flex-wrap">
          <button
            onClick={goTo404}
            className="flex-1 bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Live
          </button>
          <button
            onClick={goTo404}
            className="flex-1 bg-gray-100 dark:bg-gray-700 text-black dark:text-white py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Frontend
          </button>
          <button
            onClick={goTo404}
            className="flex-1 bg-gray-100 dark:bg-gray-700 text-black dark:text-white py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Backend
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
