import React from "react";
import { BookOpen, Mail } from "lucide-react";
import { Link } from "react-scroll";
import { useContactPopup } from "../App";
import heroImage from "../assets/Person-image.png";
import "../styles/HeroSection.css"; // Ensure path is correct

const HeroSection = () => {
  const { openPopup } = useContactPopup();
  return (
    <section className="relative hero-bg text-white overflow-hidden">
      {/* ===== HERO CONTENT ===== */}
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-30">
        {/* === LEFT TEXT === */}
        <div className="flex-1 text-center md:text-left space-y-6 z-40">
          <span className="bg-white/20 px-4 py-1 rounded-full text-sm tracking-wide font-medium inline-block">
            Career Tech Academy
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight">
            Empowering Careers <br className="hidden sm:block" />
            Through{" "}
            <span className="text-yellow-300">Real-World Learning</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-100 max-w-md mx-auto md:mx-0">
            Build job-ready skills with expert-led training, hands-on projects,
            and dedicated placement support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={openPopup}
              className="bg-yellow-400 text-indigo-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              Get Started
            </button>
            <Link
              to="explorecoursessection"
              smooth={true}
              duration={600}
              offset={-100}
              className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition text-sm sm:text-base cursor-pointer text-center"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* === RIGHT IMAGE & FLOATING CARDS === */}
        <div className="flex-1 flex justify-center md:justify-end relative z-30 mt-10 md:mt-0">
          {/* Main Hero Image */}
          <img
            src={heroImage}
            alt="Student learning"
            className="w-56 sm:w-72 md:w-[310px] lg:w-[470px] relative z-40 transform md:scale-110 lg:scale-150 translate-y-6 sm:translate-y-28 md:-translate-x-10"
          />

          {/* Congratulations Card */}
          <div className="absolute top-2 sm:top-12 right-[-10px] sm:right-[-20px] md:right-[-30px] bg-white text-gray-900 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-2xl flex items-center gap-2 sm:gap-3 w-[200px] sm:w-[230px] md:w-[250px] z-50">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Mail className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs sm:text-sm">Congratulations</p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Your admission completed
              </p>
            </div>
          </div>

          {/* Assisted Students Card */}
          <div className="absolute top-[35%] left-[-20px] sm:left-[-30px] md:left-[-40px] bg-white text-gray-900 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-2xl flex items-center gap-2 sm:gap-3 w-[180px] sm:w-[210px] md:w-[230px] z-50">
            <div className="bg-blue-100 p-2 rounded-lg">
              <BookOpen className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs sm:text-sm">250+</p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Assisted Students
              </p>
            </div>
          </div>

          {/* User Experience Card */}
          <div className="absolute bottom-0 left-[10px] sm:left-[20px] md:left-[30px] bg-white text-gray-900 rounded-2xl px-4 sm:px-5 py-3 sm:py-5 shadow-2xl flex flex-col items-start w-[200px] sm:w-[230px] md:w-[270px] z-50">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 sm:h-3 sm:w-3 bg-green-400 rounded-full"></span>
              <p className="font-semibold text-xs sm:text-sm">
                User Experience Session!
              </p>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500">
              Today at 12.00 PM
            </p>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM CURVE ===== */}
      <div className="bottom-curve"></div>
    </section>
  );
};

export default HeroSection;
