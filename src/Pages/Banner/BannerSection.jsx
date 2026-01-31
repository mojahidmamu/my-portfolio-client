import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { Link } from "lucide-react";

const subtitles = [
  "a Full Stack Developer |",
  "a MERN Stack Developer |",
  "a Next JS Developer |",
  "a Front End Developer |",
  "a Web Developer |",
  "a React JS Developer |",
  "a TypeScript Developer |",
  "a Dedicated Learner |",
  "a Technology Enthusiast |",
  "a Backend Developer",
];

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(subtitles[currentIndex].slice(0, i));
      i++;

      if (i > subtitles[currentIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % subtitles.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className=" min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 pt-20 relative bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden">
      {/* Background blur effects */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 space-y-6 text-center md:text-left relative z-10"
      >
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500">
            Mojahid
          </span>
        </h1>

        {/* Animated subtitle */}
        <h2 className="text-lg sm:text-xl lg:text-2xl min-h-[32px] flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
          {displayText}
          <span className="border-r-2 border-primary animate-pulse h-6"></span>

          <span className="ml-2">
            {currentIndex === 0 && (
              <SiJavascript className="text-yellow-500 text-2xl" />
            )}
            {currentIndex === 1 && (
              <SiMongodb className="text-green-600 text-2xl" />
            )}
            {currentIndex === 2 && (
              <SiNextdotjs className="text-foreground text-2xl" />
            )}
            {currentIndex === 3 && (
              <SiHtml5 className="text-orange-500 text-2xl" />
            )}
            {currentIndex === 4 && (
              <SiCss3 className="text-blue-500 text-2xl" />
            )}
            {currentIndex === 5 && (
              <SiReact className="text-blue-400 text-2xl" />
            )}
            {currentIndex === 6 && (
              <SiTypescript className="text-blue-600 text-2xl" />
            )}
            {currentIndex === 9 && (
              <SiNodedotjs className="text-green-600 text-2xl" />
            )}
          </span>
        </h2>

        <p className="text-muted-foreground max-w-lg mx-auto md:mx-0">
          I build modern, scalable, and user-friendly web applications with a
          strong focus on clean code and great user experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <Link
            href="/projects"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            🚀 Get Started
          </Link>
          <Link
            href="/contact"
            className="border-2 border-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition"
          >
            📩 Contact Me
          </Link>
        </div>
      </motion.div>

      {/* Right Content (Image – optional) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative z-10"
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
          {/* Image is optional – add later */}
          {/* 
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover rounded-full"
          />
          */}
          <span>No Image</span>
        </div>
      </motion.div>
    </section>
  );
};

export default BannerSection;
