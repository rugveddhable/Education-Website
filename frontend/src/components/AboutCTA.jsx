import React from "react";
import { useContactPopup } from "../App";
import instructorImage from "../assets/instructor.png"; // add your image
import studentImage from "../assets/students.png"; // add your image

const AboutCTA = () => {
  const { openPopup } = useContactPopup();
  return (
    <section className="bg-gray-50 py-24 text-center">
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-extrabold mb-16 text-gray-900">
        What is <span className="text-indigo-600">CTA</span> ?
      </h2>

      {/* Subtitle */}
      <p className="text-xl text-gray-700 max-w-6xl mx-auto mb-16 leading-relaxed">
        Career Tech Academy is a modern online learning platform that helps
        students gain real-world tech skills, mentorship, and job placements.
        From admissions to career growth, CTA connects learning with employment
        — all in one smart, easy-to-use platform.
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Instructors Card */}
        <div className="relative w-full max-w-sm mx-auto md:max-w-none md:w-[560px] h-[300px] sm:h-[350px] md:h-[400px] rounded-3xl overflow-hidden group">
          <img
            src={instructorImage}
            alt="For Instructors"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">FOR INSTRUCTORS</h3>
            <button
              onClick={openPopup}
              className="border-2 border-white text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-lg font-medium hover:bg-white hover:text-indigo-700 transition cursor-pointer text-center"
            >
              Start a class today
            </button>
          </div>
        </div>

        {/* Students Card */}
        <div className="relative w-full max-w-sm mx-auto md:max-w-none md:w-[560px] h-[300px] sm:h-[350px] md:h-[400px] rounded-3xl overflow-hidden group">
          <img
            src={studentImage}
            alt="For Students"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">FOR STUDENTS</h3>
            <button
              onClick={openPopup}
              className="bg-sky-400 hover:bg-sky-300 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-lg font-medium transition cursor-pointer text-center"
            >
              Start a class today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
