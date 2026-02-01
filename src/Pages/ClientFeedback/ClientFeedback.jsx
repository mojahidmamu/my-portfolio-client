import { Star, Quote } from "lucide-react";
import Client1 from "../../assets/People/images2.jpg";
import Client2 from "../../assets/People/images3.jpg";
import Client3 from "../../assets/People/images.jpeg";

const ClientFeedback = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-slate-900 dark:text-white">Client </span>
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Feedback
          </span>
        </h2>

        {/* Underline */}
        <div className="flex justify-center">
          <span className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
          <span className="italic">
            "Quality means doing it right when no one is looking."
          </span>{" "}
          --- Here is what <br /> they say about my work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
        {/* Card 1 - */}
        <div
          className="group relative p-8 sm:p-10 rounded-[2.5rem] 
          bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700 
          backdrop-blur-sm flex flex-col gap-6 
          transition-all duration-300
          hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          {/* Rating */}
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          {/* Quote Icon */}
          <Quote className="absolute top-8 right-10 w-12 h-12 text-purple-600/10 group-hover:text-purple-600/20 transition-colors" />

          {/* Comment */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
            &ldquo;Amazing work! Clean design, fast performance, and very
            professional.&rdquo;
          </p>

          {/* User Info */}
          <div className="flex items-center gap-4 mt-4 border-t border-gray-100 dark:border-gray-700 pt-6">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-purple-50 dark:ring-purple-900/20">
              <img
                src={Client1}
                alt="John Doe"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 dark:text-white">
                John Doe
              </h4>
              <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="group relative p-8 sm:p-10 rounded-[2.5rem] 
          bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700 
          backdrop-blur-sm flex flex-col gap-6 
          transition-all duration-300
          hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          <Quote className="absolute top-8 right-10 w-12 h-12 text-purple-600/10 group-hover:text-purple-600/20 transition-colors" />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
            &ldquo;The UI looks premium and the animations feel very
            smooth.&rdquo;
          </p>

          <div className="flex items-center gap-4 mt-4 border-t border-gray-100 dark:border-gray-700 pt-6">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-purple-50 dark:ring-purple-900/20">
              <img
                src={Client2}
                alt="Sarah Smith"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 dark:text-white">
                Sarah Smith
              </h4>
              <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>

        {/* Card 3*/}
        <div
          className="group relative p-8 sm:p-10 rounded-[2.5rem] 
          bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700 
          backdrop-blur-sm flex flex-col gap-6 
          transition-all duration-300
          hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          <Quote className="absolute top-8 right-10 w-12 h-12 text-purple-600/10 group-hover:text-purple-600/20 transition-colors" />

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
            &ldquo;Highly recommended! Very responsive and
            detail-oriented.&rdquo;
          </p>

          <div className="flex items-center gap-4 mt-4 border-t border-gray-100 dark:border-gray-700 pt-6">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-purple-50 dark:ring-purple-900/20">
              <img
                src={Client3}
                alt="Michael Lee"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 dark:text-white">
                Michael Lee
              </h4>
              <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                Project Manager
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientFeedback;
