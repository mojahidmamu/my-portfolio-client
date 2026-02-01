import React from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "./blogsData";
import logo from "../../assets/home/icon.png"

const BlogCard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center mb-14 mt-8">
        <div className="flex items-center gap-3">
          {/* Icon / Image */}
          <img
            src={logo}
            alt="Books Icon"
            className="w-12 h-12"
          />
          <h1 className="text-5xl font-bold">Featured Blogs</h1>
        </div>
        {/* Underline */}
        <span className="block w-16 h-1 bg-black mt-2 rounded-full"></span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1 space-y-4">
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              <button
                onClick={() => navigate(`/blogs/${blog.id}`)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
