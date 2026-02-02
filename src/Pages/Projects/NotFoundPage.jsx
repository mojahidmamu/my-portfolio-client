// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { MoveLeft, Home } from "lucide-react";

// const NotFoundPage = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background transition-colors duration-300 relative overflow-hidden">
//       {/* Background Blurs */}
//       <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

//       <div className="z-10 flex flex-col items-center">
//         {/* Animated 404 Text */}
//         <h1 className="text-[120px] md:text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-200 animate-in fade-in zoom-in duration-700">
//           404
//         </h1>

//         <div className="mt-4 space-y-2">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//             Oops! Page Not Found
//           </h2>
//           <p className="text-muted-foreground max-w-lg mx-auto text-lg">
//             The link you followed might be broken, or the page may have been
//             removed. Don&apos;t worry, let&apos;s get you back on track.
//           </p>
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
//           {/* Go Back Home */}
//           <button
//             onClick={() => navigate("/")}
//             className="flex items-center gap-2 justify-center rounded-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 shadow-lg shadow-purple-500/20 text-lg"
//           >
//             <Home className="w-4 h-4" />
//             Go Back Home
//           </button>

//           {/* Previous Page */}
//           <button
//             onClick={() => window.history.back()}
//             className="flex items-center gap-2 justify-center rounded-full px-8 py-3 border-2 border-purple-200 dark:border-purple-800 text-lg hover:bg-purple-50 dark:hover:bg-purple-900 transition"
//           >
//             <MoveLeft className="w-4 h-4" />
//             Previous Page
//           </button>
//         </div>
//       </div>

//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
//     </section>
//   );
// };

// export default NotFoundPage;
