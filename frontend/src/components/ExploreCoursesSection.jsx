import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    "Most Trending Courses",
    "Top Artificial Intelligence (AI) Courses",
    "Top Courses in Web Development and JavaScript",
  ];

  return (
    <section className="py-32"> {/* Increased vertical padding */}
      {/* Main Gradient Container */}
      <div className="mx-[5%] bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-50 rounded-3xl shadow-xl px-12 md:px-20 py-20 min-h-[1500px]"> {/* Increased padding & shadow */}
        
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
        <div className="flex flex-col gap-20"> {/* More gap between sections */}
          {courseGroups.map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Title + See All */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <button className="text-purple-600 text-sm font-medium flex items-center gap-1 hover:underline">
                  See All <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Placeholder Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[1, 2].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -6 }}
                    className="h-72 bg-white rounded-2xl shadow-md border border-gray-100 transition-all"
                  />
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
