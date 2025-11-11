import React, { useState, useEffect, useRef } from "react";
import googleLogo from "../assets/google.png";
import tcsLogo from "../assets/tcs.png";
import cognizantLogo from "../assets/cognizant.png";
import infosysLogo from "../assets/infosys.png";

const CounterAnimation = ({ target, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let start = 0;
          const increment = target / 100;
          const duration = 1500; // 2 seconds
          const stepTime = duration / 100;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.7 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={elementRef}>
      <h3 className="text-7xl font-bold text-blue-600">
        {count}{suffix}
      </h3>
      <p className="text-xl text-gray-600 mt-3">{label}</p>
    </div>
  );
};

const SuccessSection = () => {
  return (
    <section className="bg-white py-24 text-center">
      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-16 text-gray-900">Our Success</h2>

      {/* Stats with Animated Counters */}
      <div className="flex flex-wrap justify-center gap-20 mb-16">
        <CounterAnimation target={100} suffix="+" label="Students" />
        <CounterAnimation target={85} suffix="%" label="Total Success" />
        <CounterAnimation target={50} suffix="+" label="Courses" />
        <CounterAnimation target={17} suffix="+" label="Years of Experience" />
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
