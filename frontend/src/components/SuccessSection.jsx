import React from "react";
import googleLogo from "../assets/google.png";
import tcsLogo from "../assets/tcs.png";
import cognizantLogo from "../assets/cognizant.png";
import infosysLogo from "../assets/infosys.png";

const SuccessSection = () => {
  return (
    <section className="bg-white py-24 text-center">
      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-16 text-gray-900">Our Success</h2>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-20 mb-16">
        <div>
          <h3 className="text-7xl font-bold text-blue-600">100+</h3>
          <p className="text-xl text-gray-600 mt-3">Students</p>
        </div>
        <div>
          <h3 className="text-7xl font-bold text-blue-600">85%</h3>
          <p className="text-xl text-gray-600 mt-3">Total Success</p>
        </div>
        <div>
          <h3 className="text-7xl font-bold text-blue-600">50+</h3>
          <p className="text-xl text-gray-600 mt-3">Courses</p>
        </div>
        <div>
          <h3 className="text-7xl font-bold text-blue-600">17+</h3>
          <p className="text-xl text-gray-600 mt-3">Years of Experience</p>
        </div>
      </div>

      {/* Trusted by */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-900 leading-snug">
          Trusted by Industry Leaders <br /> & Top Hiring Partners
        </h3>
        <p className="text-lg text-gray-600 mt-5 max-w-3xl mx-auto">
          Our learners get placed and collaborate with global companies shaping the future of tech.
        </p>
      </div>

      {/* Logos */}
      <div className="flex justify-center gap-16 flex-wrap opacity-90">
        <img src={googleLogo} alt="Google" className="h-14 md:h-16" />
        <img src={tcsLogo} alt="TCS" className="h-14 md:h-16" />
        <img src={cognizantLogo} alt="Cognizant" className="h-14 md:h-16" />
        <img src={infosysLogo} alt="Infosys" className="h-14 md:h-16" />
      </div>
    </section>
  );
};

export default SuccessSection;
