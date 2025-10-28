import React from "react";
import { motion } from "framer-motion";
import { Laptop2, Users, ClipboardList } from "lucide-react";
import studentImg from "../assets/student.png"; // change path as needed

const ToolsForStudents = () => {
  return (
    <section className="relative bg-gray-50 py-28 px-6 md:px-20 overflow-hidden">
      {/* Decorative dotted grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern
              id="gridDots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#CBD5E1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridDots)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-20">
        {/* ---------- Left Content ---------- */}
        <div className="flex-1 z-0">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-snug mb-6">
            <span className="text-indigo-600">Tools</span> For Students
          </h2>

          <p className="text-2xl text-gray-700 leading-relaxed max-w-xl">
            CTA offers a dynamic set of learning tools designed to enhance your
            study experience. Students can access real-time assignments,
            collaborate on projects, and submit their work seamlessly during
            class — all in one integrated platform.
          </p>
        </div>

        {/* ---------- Right Image and Animated Elements ---------- */}
        <div className="relative flex-1 flex justify-center items-center z-10">
          {/* Blue circle background */}
          <div className="absolute w-80 h-80 bg-indigo-500 rounded-full -z-50 -top-5"></div>

          {/* Floating icons */}
          <motion.div
            className="absolute -top-10 left-10 bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl transition-all"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Laptop2 className="text-indigo-600 w-8 h-8 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 -left-14 bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl transition-all"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Users className="text-purple-600 w-8 h-8 hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.6)] transition-all" />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-10 bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl transition-all"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <ClipboardList className="text-pink-500 w-8 h-8 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all" />
          </motion.div>

          {/* Student image */}
          <img
            src={studentImg}
            alt="Student using learning tools"
            className="rounded-3xl w-full max-w-sm md:max-w-md shadow-xl"
          />
        </div>
      </div>

      {/* Floating background circles */}
      <motion.div
        className="absolute bottom-10 left-10 w-10 h-10 bg-sky-400 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute top-10 right-20 w-6 h-6 bg-green-400 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-4 h-4 bg-pink-400 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      />
    </section>
  );
};

export default ToolsForStudents;
