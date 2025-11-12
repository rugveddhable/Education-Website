import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
 
// ✅ Import all course images (same as CourseDetailPage)
import AICourse from "../assets/coursesimg/ai.jpg";
import DataScience from "../assets/coursesimg/Data Scientist.jpg";
import FlutterDev from "../assets/coursesimg/Flutter Development.jpg";
import PythonCourse from "../assets/coursesimg/Python Programming.jpeg";
import ReactCourse from "../assets/coursesimg/React JS.jpg";
import WebDev from "../assets/coursesimg/web dev.jpg";
// import TestingCourse from "../assets/testing-course.jpeg";
import SeleniumCourse from "../assets/coursesimg/seleniumm.jpg";
 
 
const ExploreCoursesSection = () => {
  const navigate = useNavigate();
 
  // Image mapping (same as CourseDetailPage)
  const COURSE_IMAGES = {
    "full-stack-web-development": WebDev,
    "artificial-intelligence-ai": AICourse,
    "data-science--machine-learning": DataScience,
    "react-js-mastery": ReactCourse,
    "python-for-developers": PythonCourse,
    "flutter-framework-mastery": FlutterDev,
    "selenium-for-testers": SeleniumCourse,
  };
 
  // Course categories (tags)
  const categories = [
    "Web Development",
    "Software Development",
    "Artificial Intelligence (AI)",
    "Software Testing",
    "Python Programming",
    "Flutter Development",
    "Data Scientist",
    "React JS",
    "selenium testers"
  ];
 
  const categoryToCourseSlug = {
    "web-development": "full-stack-web-development",
    "software-development": "full-stack-web-development",
    "artificial-intelligence-ai": "artificial-intelligence-ai",
    "software-testing": "selenium-for-testers",
    "python-programming": "python-for-developers",
    "flutter-development": "flutter-framework-mastery",
    "data-scientist": "data-science--machine-learning",
    "react-js": "react-js-mastery",
    "selenium-testers":"selenium-for-testers",
  };
 
  //  Course groups with proper images
  const courseGroups = [
    {
      title: "Most Trending Courses",
      courses: [
        {
          name: "Full Stack Web Development",
          slug: "full-stack-web-development",
          img: COURSE_IMAGES["full-stack-web-development"],
        },
        {
          name: "Artificial Intelligence (AI)",
          slug: "artificial-intelligence-ai",
          img: COURSE_IMAGES["artificial-intelligence-ai"],
        },
      ],
    },
    {
      title: "Top Artificial Intelligence (AI) Courses",
      courses: [
        {
          name: "AI Fundamentals",
          slug: "artificial-intelligence-ai",
          img: COURSE_IMAGES["artificial-intelligence-ai"],
        },
        {
          name: "Data Science & Machine Learning",
          slug: "data-science--machine-learning",
          img: COURSE_IMAGES["data-science--machine-learning"],
        },
      ],
    },
    {
      title: "Top Courses in Web Development and JavaScript",
      courses: [
        {
          name: "React JS Mastery",
          slug: "react-js-mastery",
          img: COURSE_IMAGES["react-js-mastery"],
        },
        {
          name: "Python for Developers",
          slug: "python-for-developers",
          img: COURSE_IMAGES["python-for-developers"],
        },
      ],
    },
    {
      title: "Other Courses",
      courses: [
        {
          name: "Flutter Framework Mastery",
          slug: "flutter-framework-mastery",
          img: COURSE_IMAGES["flutter-framework-mastery"],
        },
       {
          name: "Selenium for Testers",
          img: SeleniumCourse,
          slug: "selenium-for-testers",
        },
      ],
    },
  ];
 
  return (
    <section className="py-32">
      {/* Main Gradient Container */}
      <div className="mx-[5%] bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-50 rounded-3xl shadow-xl px-12 md:px-20 py-20">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
            Explore Courses <ArrowRight className="text-purple-600 w-6 h-6" />
          </h2>
          <p className="text-gray-700 mt-3 font-semibold">
            Courses to get you started
          </p>
          <p className="text-gray-600 mb-8">
            Explore courses from experienced, real-world experts.
          </p>
 
          {/* Category Tags */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  const slug =
                    categoryToCourseSlug[
                      cat
                        .toLowerCase()
                        .replace(/[()&]/g, "")
                        .replace(/\s+/g, "-")
                    ];
                  if (slug) navigate(`/course/${slug}`);
                }}
                className="px-5 py-2 text-sm border border-indigo-400 text-gray-800 rounded-full bg-white/70 hover:bg-indigo-100 transition-all cursor-pointer"
              >
                {cat}
              </motion.span>
            ))}
          </div>
        </div>
 
        {/* Course Sections */}
        <div className="flex flex-col gap-20">
          {courseGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Section Title */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {group.title}
                </h3>
                <button className="text-purple-600 text-sm font-medium flex items-center gap-1 hover:underline">
                  See All <ArrowRight className="w-4 h-4" />
                </button>
              </div>
 
              {/* Course Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {group.courses.map((course, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="relative h-80 rounded-2xl overflow-hidden shadow-md group"
                  >
                    <img
                      src={course.img}
                      alt={course.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-white text-lg font-semibold mb-2 text-center">
                        {course.name}
                      </h3>
                      <button
                        onClick={() => {
                          window.scrollTo(0, 0);
                          navigate(
                            `/course/${course.slug
                              .toLowerCase()
                              .replace(/[()&]/g, "")
                              .replace(/\s+/g, "-")}`
                          );
                        }}
                        className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition"
                      >
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default ExploreCoursesSection;