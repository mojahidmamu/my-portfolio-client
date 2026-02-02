import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard"; 

// Dummy projects data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    image: "/project1.jpg",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A full-stack e-commerce app with cart and payment functionality.",
    image: "/project2.jpg",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A blogging platform with authentication and CRUD features.",
    image: "/project3.jpg",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6 sm:px-12 lg:px-20 bg-background text-foreground transition-colors duration-500">
      <Helmet>
        <title>My Portfolio | Projects</title>
      </Helmet>

      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-slate-900 dark:text-white"> 🚀 My </span>
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="flex justify-center">
          <span className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
        </div>

        <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
          A showcase of my recent works — built with modern technologies and clean UI/UX.
          Explore the live demos or check the source code!
        </p>
      </div>

      {/* Projects Grid */}
      {projects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-muted rounded-3xl"
        >
          <p className="text-xl text-muted-foreground font-medium">No projects found.</p>
          <p className="text-sm text-muted-foreground/60">Check back later or explore my GitHub!</p>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
