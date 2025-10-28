import React from "react";
import { motion } from "framer-motion";
import scoreboardImg from "../assets/scoreboard.png"; // make sure this is correct

const ScoreboardSection = () => {
  return (
    <section className="bg-gray-50 py-28 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-20 relative overflow-hidden">
      {/* Left Image Side */}
      <div className="flex-1 flex justify-center relative">
        <motion.img
          src={scoreboardImg}
          alt="GradeBook"
          className="w-full max-w-2xl md:max-w-3xl rounded-3xl shadow-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        {/* Decorative circles */}
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 bg-indigo-400/30 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-8 h-8 bg-blue-400/30 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>

      {/* Right Text Side */}
      <div className="flex-1">
        <h2 className="text-5xl md:text-6xl font-bold leading-snug text-gray-900 mb-6">
          <span className="text-indigo-600">Scoreboard</span> — Track Your{" "}
          <span className="text-indigo-600">Growth</span> in Real Time
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed">
          Stay motivated with CTA’s interactive scoreboard that showcases your
          learning progress, project performance, and assessment results. Earn
          points, climb the leaderboard, and celebrate milestones as you master
          new skills — turning learning into an exciting, competitive journey.
        </p>
      </div>
    </section>
  );
};

export default ScoreboardSection;
