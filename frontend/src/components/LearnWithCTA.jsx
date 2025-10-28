import React from "react";
import classroomImg from "../assets/classroom.png"; // your image path

const LearnWithCTA = () => {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-50 py-32 px-8 md:px-28 flex flex-col md:flex-row items-center justify-between gap-20 rounded-[2rem] shadow-lg">
      {/* Left Text Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10">
          Everything You Can Learn in a Physical Classroom,
          <br />
          You Can Learn Online with{" "}
          <span className="text-indigo-600">CTA</span>
        </h2>

        <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl">
          Career Tech Academy brings the classroom to your screen — offering
          <span className="font-semibold"> live interactive sessions</span>,
          <span className="font-semibold"> project-based learning</span>, and
          <span className="font-semibold"> personalized mentorship</span>.
          Learn, collaborate, and grow with expert instructors in a fully
          online, cloud-powered environment designed to make you
          <span className="text-indigo-600 font-semibold"> industry-ready</span>.
        </p>

        <a
          href="/learn-more"
          className="inline-flex items-center gap-3 text-2xl font-semibold text-white bg-indigo-600 px-10 py-4 rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          Learn More <span className="text-3xl">→</span>
        </a>
      </div>

      {/* Right Image Section */}
      <div className="relative flex-1 flex justify-center">
        {/* Decorative Background Shape */}
        <div className="absolute top-10 right-10 w-[95%] h-[95%] bg-indigo-300 rounded-[3rem] -z-10 blur-md opacity-60"></div>

        <img
          src={classroomImg}
          alt="CTA classroom"
          className="rounded-[3rem] w-full max-w-xl shadow-2xl border-4 border-white"
        />
      </div>
    </section>
  );
};

export default LearnWithCTA;
