import React from "react";
import { motion } from "framer-motion";
import discussionImg from "../assets/one-on-one.png"; // your uploaded image path

const OneOnOneSection = () => {
  return (
    <section className="py-28 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-20 bg-white relative overflow-hidden">
      {/* Left Image */}
      <div className="flex-1 flex justify-center relative">
        <motion.img
          src={discussionImg}
          alt="One-on-One Discussion"
          className="w-full max-w-2xl md:max-w-3xl rounded-3xl shadow-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        {/* Decorative gradient circle */}
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-tr from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl" />
      </div>

      {/* Right Text */}
      <div className="flex-1">
        <h2 className="text-5xl md:text-6xl font-bold leading-snug text-gray-900 mb-6">
          <span className="text-indigo-600">One-on-One</span>{" "}
          <span className="text-purple-500">Discussions</span>
        </h2>

        <p className="text-2xl text-gray-700 leading-relaxed mb-8">
          Get personalized mentorship through CTA’s one-on-one discussion
          feature. Connect with instructors, clarify doubts instantly, and
          receive tailored feedback to strengthen your learning path. Every
          student gets focused attention to ensure maximum understanding and
          real-world readiness.
        </p>

        <button className="text-lg font-semibold px-8 py-3 rounded-full border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition">
          See more features
        </button>
      </div>
    </section>
  );
};

export default OneOnOneSection;
