import React from "react";
import featureImg from "../assets/feature-ui.png";
import { Monitor, Users, BarChart3 } from "lucide-react"; // icons

const Features = () => {
  return (
    <section className="bg-white py-28 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-20">
      {/* Left Image Section */}
      <div className="flex-1 relative flex justify-center">
        {/* Decorative shapes */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-200 rounded-full opacity-70 blur-md"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-[14px] border-sky-400 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 -right-6 w-12 h-12 bg-pink-300 rounded-full"></div>

        {/* Image */}
        <img
          src={featureImg}
          alt="Classroom Interface"
          className="rounded-3xl w-full max-w-xl shadow-xl border border-gray-100"
        />
      </div>

      {/* Right Text Section */}
      <div className="flex-1 space-y-8">
        <div>
          <h3 className="text-6xl font-extrabold text-gray-900 mb-3">
            Our <span className="text-indigo-600">Features</span>
          </h3>
          <p className="text-lg text-gray-600">
            This very extraordinary feature can make learning activities more efficient.
          </p>
        </div>

        <h2 className="text-4xl font-regular text-gray-900 leading-tight">
          A <span className="text-indigo-600">user interface</span>
          <br /> designed for the classroom
        </h2>

        <div className="space-y-6">
          <FeaturePoint
            icon={<Monitor size={28} />}
            text="Instructors stay in focus with a dedicated Teaching Space — ensuring smooth delivery without distractions."
          />
          <FeaturePoint
            icon={<Users size={28} />}
            text="Mentors and guest speakers are highlighted at the front for clear interaction and engagement."
          />
          <FeaturePoint
            icon={<BarChart3 size={28} />}
            text="Teachers can easily see all students and class data at one time."
          />
        </div>
      </div>
    </section>
  );
};

const FeaturePoint = ({ icon, text }) => (
  <div className="flex items-start gap-4">
    <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl shadow-sm">
      {icon}
    </div>
    <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
  </div>
);

export default Features;
