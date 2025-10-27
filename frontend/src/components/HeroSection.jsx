import React from "react";
import heroImage from "../assets/Person-image.png"; // using existing image

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-indigo-600 to-indigo-500 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <span className="bg-white/20 px-4 py-1 rounded-full text-sm tracking-wide font-medium inline-block">
            Career Transformation Academy
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empowering Careers <br /> 
            Through <span className="text-yellow-300">Real-World Learning</span>
          </h1>

          <p className="text-lg text-gray-100 max-w-md mx-auto md:mx-0">
            Learn practical skills & gain experience through real-world projects.
            Build your portfolio and get industry-ready faster than ever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-yellow-400 text-indigo-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Student learning"
            className="w-[320px] md:w-[420px] lg:w-[500px] drop-shadow-xl"
          />
        </div>
      </div>

      {/* Background Curve */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-[50%]"></div>
    </section>
  );
};

export default HeroSection;
