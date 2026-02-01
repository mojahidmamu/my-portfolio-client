import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaDownload, FaGithub } from "react-icons/fa";
import Profile from "../../assets/home/Profile-image.jpg";

const techStack = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Redux",
  "Firebase",
];

const AboutMe = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio | About</title>
      </Helmet>
      {/* Parent Div */}
      <div>
        {/* First Div */}
        <div>
          {/* Left Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-5/12 flex justify-center relative"
          >
            {/* Floating Animation Wrapper */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative group"
            >
              {/* Spinning Gradient Border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500 via-primary to-green-500 rounded-full blur-md opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-spin-slow"></div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl z-10">
                <img
                  src={Profile}
                  alt="Abdullah all Mojahid"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>

              {/* Pulsing Decorative Ring */}
              <div className="absolute inset-0 rounded-full ring-8 ring-primary/20 animate-pulse z-0"></div>
            </motion.div>
          </motion.div>
        </div>
        {/* Second Div */}
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-slate-900 dark:text-white">About </span>
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* Underline */}
          <div className="flex justify-center">
            <span className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
            Iam a passionate{" "}
            <span className="text-foreground font-bold underline underline-offset-4 decoration-primary/50">
              Full-Stack Developer
            </span>{" "}
            dedicated to building modern, scalable and secure web applications.
          </p>
        </div>

        {/* Cart and Button */}
        <div className="w-full max-w-6xl mx-auto p-6">
          {/* Stats Cards with Staggered Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-12">
            {[
              {
                label: "Projects Done",
                value: "30+",
                color: "from-blue-500/20 to-blue-600/5",
                textColor: "text-blue-500",
              },
              {
                label: "Experience",
                value: "2+ Years",
                color: "from-green-500/20 to-green-600/5",
                textColor: "text-green-500",
              },
              {
                label: "Happy Clients",
                value: "100+",
                color: "from-purple-500/20 to-purple-600/5",
                textColor: "text-purple-500",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${stat.color} border border-primary/10 rounded-2xl p-6 backdrop-blur-md shadow-sm`}
              >
                <h3 className={`text-3xl font-bold ${stat.textColor}`}>
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-xs font-bold mt-1 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-4 w-full mb-12">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary/70">
              Technical Prowess
            </h4>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                  className="px-5 py-2 bg-secondary/50 text-secondary-foreground border border-primary/5 rounded-full text-xs font-bold transition-all cursor-default backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-6"
          >
            <a
              // href="/Sharifa_Resume.pdf"
              download
              className="flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              <FaDownload /> Download CV
            </a>
            <a
              href="https://github.com/mojahidmamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-secondary/80 text-secondary-foreground border border-primary/20 px-10 py-4 rounded-full font-bold hover:bg-foreground hover:text-background transition-all transform hover:-translate-y-1"
            >
              <FaGithub className="text-xl" /> GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
