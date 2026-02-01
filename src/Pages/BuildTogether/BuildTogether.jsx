import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, Loader2 } from "lucide-react";

const BuildTogether = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Oops! Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      alert(`🎉 Welcome aboard, ${email} ! Check your inbox for updates.`);
      setStatus("success");
    }, 1000);
  };

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

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mx-auto my-20">
        {status === "success" ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-3 p-8 bg-green-500/5 border border-green-500/20 rounded-3xl w-full"
          >
            <CheckCircle className="text-green-500 w-12 h-12" />
            <h3 className="font-bold text-xl text-green-600 dark:text-green-400">
              You're officially on the list!
            </h3>
            <button
              onClick={() => {
                setEmail("");
                setStatus("idle");
              }}
              className="text-sm underline text-slate-400"
            >
              Subscribe another email
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="flex-1 px-6 py-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-2 ring-purple-500 transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70 shadow-lg shadow-purple-600/20"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Send size={20} />
              )}
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BuildTogether;
