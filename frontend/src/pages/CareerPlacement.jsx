import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import {
  FaFileAlt,
  FaUserTie,
  FaBrain,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import capgemini from "../assets/capgemini.png";
import techmahindra from "../assets/techmahindra.png";
import amdocs from "../assets/amdocs.png";
import fujitsu from "../assets/fujitsu.png";
import hsbc from "../assets/hsbc.png";
import hcl from "../assets/hcl.png";
import wipro from "../assets/wipro.png";
import oracle from "../assets/oracle.png";
import accenture from "../assets/accenture.png";
import student from "../assets/Person-image.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/CareerPlacement.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Animated Stat Counter Component
const AnimatedStat = ({ value, label, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center animate-pulse">
      <h3 className="text-5xl font-extrabold text-purple-600">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-600 text-lg mt-2 font-medium">{label}</p>
    </div>
  );
};

const CareerPlacement = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  const faqs = [
    {
      q: "Do you provide 100% placement assistance?",
      a: "Yes! We provide full placement support through resume building, mock interviews, and direct company connections.",
    },
    {
      q: "Which companies do students get placed in?",
      a: "Students get placed in top 4 reputed companies through our dedicated placement support.",
    },
    {
      q: "Is this support available for all courses?",
      a: "Yes, placement assistance is available for all eligible learners enrolled in our career programs.",
    },
    {
      q: "Are the courses beginner-friendly?",
      a: "Absolutely! Our courses are designed for both beginners and experienced learners, with step-by-step guidance from experts.",
    },
    {
      q: "Do you provide certificates after course completion?",
      a: "Yes, upon successful completion of the course, you’ll receive an industry-recognized certificate from us.",
    },
  ];

  const logos = [
    capgemini,
    techmahindra,
    amdocs,
    fujitsu,
    hsbc,
    hcl,
    wipro,
    oracle,
    accenture,
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const features = [
    {
      icon: <FaFileAlt className="text-purple-600 text-4xl" />,
      title: "Resume Building",
      points: [
        "Polished ATS-friendly resume",
        "Personalized resume review",
        "Industry keyword optimization",
      ],
    },
    {
      icon: <FaUserTie className="text-purple-600 text-4xl" />,
      title: "Mock Interviews",
      points: [
        "1-on-1 mock interviews",
        "Technical round practice",
        "Real interview feedback",
      ],
    },
    {
      icon: <FaBrain className="text-purple-600 text-4xl" />,
      title: "Soft Training",
      points: [
        "Communication training",
        "Corporate etiquette",
        "Confidence building",
      ],
    },
    {
      icon: <FaRocket className="text-purple-600 text-4xl" />,
      title: "Job Alerts",
      points: [
        "Exclusive job access",
        "New openings weekly",
        "Referral opportunities",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section
        id="placement"
        className="placement-section bg-white pt-48 pb-28 overflow-hidden"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Career & Placement Assistance
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Get guided toward the right opportunity
          </p>
        </div>

        {/* Enlarged Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mb-20 px-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 h-[360px] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-start text-left"
            >
              <div className="flex items-center gap-4 mb-5">
                {feature.icon}
                <h3 className="font-bold text-2xl text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <ul className="space-y-3 text-base text-gray-600 ml-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Placement Banner - Enlarged */}
        <div className="relative flex justify-center items-center mt-8">
          <div className="bg-[#221C4B] text-white text-center py-20 px-12 md:px-28 rounded-3xl shadow-2xl w-[92%] md:w-[80%]">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              100% Placement Assistance
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-purple-100">
              Stop job hunting blindly. Get guided, get prepared, get hired.
              <br />
              <span className="font-semibold text-purple-300">
                Structured roadmap + Mentor guidance + Job referrals
              </span>
            </p>
            <button className="mt-4 bg-purple-500 hover:bg-purple-400 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg transition-all">
              I'm Ready to Get Hired
            </button>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="flex flex-wrap justify-center gap-24 mt-20 text-center">
          <AnimatedStat value={92} label="Placement Success" suffix="%" />
          <AnimatedStat value={40} label="Hiring Partners" suffix="+" />
          <AnimatedStat value={140} label="Students Placed" suffix="+" />
        </div>

        {/* Logo Carousel */}
        <div className="mt-20 w-[90%] mx-auto">
          <Slider {...sliderSettings}>
            {logos.map((logo, i) => (
              <div key={i} className="flex justify-center">
                <img
                  src={logo}
                  alt={`Company ${i + 1}`}
                  className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </Slider>
        </div>

          {/* Testimonial Section */}
          <div className="relative mt-28 w-[90%] md:w-[70%] mx-auto">
            {/* Floating Image (Above Card) */}
        <div className="absolute right-10 md:right-20 -top-24 md:-top-28 z-20 flex items-center justify-center">
          <div className="absolute w-64 md:w-72 h-64 md:h-72 bg-purple-100 rounded-full blur-2xl opacity-60"></div>
          <img
            src={student}
            alt="Ayush"
            className="relative w-64 md:w-72 h-auto object-contain drop-shadow-2xl pt-6"
          />
        </div>
            {/* Testimonial Card */}
            <div className="bg-[#F9F5FF] py-14 px-10 rounded-3xl shadow-sm border border-purple-100 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
              {/* Left Content */}
              <div className="flex-1 text-left pr-0 md:pr-24">
                <div className="flex items-center text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Ayush</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Frontend Developer{" "}
                  <span className="text-purple-600 font-medium">– TCS</span>
                </p>
                <p className="text-gray-700 italic leading-relaxed text-base max-w-xl">
                  “I joined with zero confidence in interviews. CTA’s mock interview
                  training completely changed my approach. I landed my first job in just
                  90 days.”
                </p>
              </div>
            </div>
          </div>
        {/* FAQ Section */}
        <div className="faq-section mt-20 px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="max-w-2xl mx-auto space-y-4 text-left">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border border-gray-200 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                  openIndex === i ? "bg-purple-50 shadow-md" : "bg-white"
                }`}
                onClick={() => toggleFAQ(i)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-900">{faq.q}</h4>
                  <span className="text-purple-600 text-xl font-bold">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === i ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CareerPlacement;
