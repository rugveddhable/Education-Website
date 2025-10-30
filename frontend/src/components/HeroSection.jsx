import React from "react";
import heroImage from "../assets/Person-image.png";
import "../styles/HeroSection.css"; // ensure path is correct

const HeroSection = () => {
  return (
    <section className="relative hero-bg text-white overflow-hidden">
      {/* ===== HERO CONTENT ===== */}
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10 relative z-30">
        {/* === LEFT TEXT === */}
        <div className="flex-1 text-center md:text-left space-y-6 z-40">
          <span className="bg-white/20 px-4 py-1 rounded-full text-sm tracking-wide font-medium inline-block">
            Career Tech Academy
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Empowering Careers <br />
            Through <span className="text-yellow-300">Real-World Learning</span>
          </h1>

          <p className="text-lg text-gray-100 max-w-md mx-auto md:mx-0">
            Build job-ready skills with expert-led training, hands-on projects,
            and dedicated placement support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-yellow-400 text-indigo-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
              Get Started
            </button>
            <button className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition">
              Explore Courses
            </button>
          </div>
        </div>

        {/* === RIGHT IMAGE & FLOATING CARDS === */}
        <div className="flex-1 flex justify-center md:justify-end relative z-40">
          <img
            src={heroImage}
            alt="Student learning"
            className="w-[340px] md:w-[420px] lg:w-[480px] relative z-40"
          />

          {/* Congratulations Card */}
          <div className="absolute top-5 right-0 bg-white text-gray-900 rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3 w-[250px] z-50">
            <div className="bg-orange-100 p-2 rounded-lg">
              <span className="text-orange-500 text-lg">✉️</span>
            </div>
            <div>
              <p className="font-semibold text-sm">Congratulations</p>
              <p className="text-xs text-gray-500">Your admission completed</p>
            </div>
          </div>

          {/* Assisted Students Card */}
          <div className="absolute top-[40%] left-[-40px] bg-white text-gray-900 rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3 w-[230px] z-50">
            <div className="bg-blue-100 p-2 rounded-lg">
              <span className="text-blue-500 text-lg">📘</span>
            </div>
            <div>
              <p className="font-semibold text-sm">250+</p>
              <p className="text-xs text-gray-500">Assisted Students</p>
            </div>
          </div>

          {/* User Experience Card */}
          <div className="absolute bottom-0 left-[30px] bg-white text-gray-900 rounded-2xl px-6 py-5 shadow-2xl flex flex-col items-start w-[270px] z-50">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-green-400 rounded-full"></span>
              <p className="font-semibold text-sm">User Experience</p>
            </div>
            <p className="text-xs text-gray-500">Today at 12.00 PM</p>
            <button className="mt-3 bg-blue-500 text-white text-xs px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM CURVE (INWARD SHAPE + SYMMETRIC COLOR) ===== */}
      <div className="bottom-curve"></div>
    </section>
  );
};

export default HeroSection;
