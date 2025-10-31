import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Import course images
import aiCourse from "../assets/ai-course.jpeg";
import webCourse from "../assets/web-course.jpeg";
import pythonCourse from "../assets/python-course.jpeg";
import dataCourse from "../assets/data-course.jpeg";
import flutterCourse from "../assets/flutter-course.jpeg";
import reactCourse from "../assets/react-course.jpeg";
import testingCourse from "../assets/testing-course.jpeg";

const ExploreCoursesSection = () => {
  const categories = [
    "Web Development",
    "Software Development",
    "Artificial Intelligence (AI)",
    "Software Testing",
    "Python Programming",
    "Flutter Development",
    "Data Scientist",
    "React JS",
  ];

  const courseGroups = [
    {
      title: "Most Trending Courses",
      courses: [
        { name: "Full Stack Web Development", img: webCourse },
        { name: "Artificial Intelligence (AI)", img: aiCourse },
      ],
    },
    {
      title: "Top Artificial Intelligence (AI) Courses",
      courses: [
        { name: "AI Fundamentals", img: aiCourse },
        { name: "Data Science & Machine Learning", img: dataCourse },
      ],
    },
    {
      title: "Top Courses in Web Development and JavaScript",
      courses: [
        { name: "React JS Mastery", img: reactCourse },
        { name: "Python for Developers", img: pythonCourse },
      ],
    },
    {
      title: "Other Courses",
      courses: [
        { name: "Flutter Framework Mastery", img: flutterCourse },
        { name: "Selenium for Testers", img: testingCourse },
      ],
    },
  ];

  return (
    <section className="py-32">
      {/* Main Gradient Container */}
      <div className="mx-[5%] bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-50 rounded-3xl shadow-xl px-12 md:px-20 py-20 min-h-[1500px]">
        
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

          {/* Tags */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
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
              {/* Title + See All */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">{group.title}</h3>
                <button className="text-purple-600 text-sm font-medium flex items-center gap-1 hover:underline">
                  See All <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Course Image Cards */}
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
                      <h3 className="text-white text-lg font-semibold mb-2">
                        {course.name}
                      </h3>
                      <button className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition">
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
