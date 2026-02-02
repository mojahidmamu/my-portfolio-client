import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold">{project.title}</h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.topics.map((topic, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4">
          {/* Live Demo */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
      flex-1 flex items-center justify-center gap-2
      bg-gradient-to-r from-emerald-500 to-teal-500
      hover:from-emerald-600 hover:to-teal-600
      text-white py-2.5 rounded-xl
      text-sm font-semibold
      shadow-md hover:shadow-lg
      transition-all duration-300
      hover:-translate-y-0.5
    "
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

          {/* GitHub Code */}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source Code"
            className="
      flex items-center justify-center
      w-11 h-11
      rounded-xl
      border border-gray-200 dark:border-gray-700
      bg-white dark:bg-gray-800
      hover:bg-gray-900 hover:text-white
      dark:hover:bg-white dark:hover:text-black
      shadow-sm hover:shadow-md
      transition-all duration-300
      hover:-translate-y-0.5
    "
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
