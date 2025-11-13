// src/components/CourseDetailPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { useContactPopup } from "../App";
import Hero from "../assets/Hero.png";
 
//courseimg
import AICourse from "../assets/coursesimg/ai.jpg";
import DataScience from "../assets/coursesimg/Data Scientist.jpg";
import FlutterDev from "../assets/coursesimg/Flutter Development.jpg";
import PythonCourse from "../assets/coursesimg/Python Programming.jpeg";
import ReactCourse from "../assets/coursesimg/React JS.jpg";
import WebDev from "../assets/coursesimg/web dev.jpg";
import SeleniumCourse from "../assets/coursesimg/seleniumm.jpg";
 
// Dummy Reviews
const REVIEWS = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    rating: 5,
    comment:
      "This course was amazing! The explanations were clear and the projects were super helpful.",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Raj Patel",
    role: "Frontend Developer",
    rating: 4,
    comment:
      "Very informative and practical. The instructor covered real-world use cases perfectly.",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Aisha Khan",
    role: "Data Scientist",
    rating: 5,
    comment:
      "Loved the hands-on projects and assignments. Definitely boosted my confidence in this field.",
    img: "https://i.pravatar.cc/150?img=47",
  },
];
 
// Course Data
const COURSE_DATA = {
  "full-stack-web-development": {
    title: "Full Stack Web Development",
    subtitle: "Build modern web apps with React, Node & Databases",
    duration: "6 Months • Self-paced",
    price: "$199",
    hero: Hero,
    image: WebDev,
  },
  "artificial-intelligence-ai": {
    title: "Artificial Intelligence (AI)",
    subtitle: "Learn ML, Deep Learning & real-world AI projects",
    duration: "4 Months • Live",
    price: "$249",
    hero: Hero,
    image: AICourse,
  },
  "data-science--machine-learning": {
    title: "Data Science & Machine Learning",
    subtitle: "Data analysis, ML algorithms, model deployment",
    duration: "5 Months • Live",
    price: "$219",
    hero: Hero,
    image: DataScience,
  },
  "react-js-mastery": {
    title: "React JS Mastery",
    subtitle: "Deep dive into React ecosystem and patterns",
    duration: "3 Months • Self-paced",
    price: "$149",
    hero: Hero,
    image: ReactCourse,
  },
  "python-for-developers": {
    title: "Python for Developers",
    subtitle: "Core Python, OOP, Automation & scripting",
    duration: "1.5 Months • Self-paced",
    price: "$79",
    hero: Hero,
    image: PythonCourse,
  },
  "flutter-framework-mastery": {
    title: "Flutter Framework Mastery",
    subtitle: "Build cross-platform mobile apps with Flutter",
    duration: "3 Months • Live",
    price: "$179",
    hero: Hero,
    image: FlutterDev,
  },
   "selenium-for-testers": {
    title: "Selenium for Testers",
    subtitle: "Master web automation testing using Selenium",
    duration: "2 Months • Live",
    price: "$150",
    hero: Hero,
    image: SeleniumCourse,
  },
};
 
// Component
export default function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openPopup } = useContactPopup();
  const course = COURSE_DATA[id];
 
  if (!course) {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold">Course not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }
 
  return (
    <div className="pt-32 bg-[#f7f7fb] min-h-screen">
      <section className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Hero */}
        <img
          src={course.hero}
          alt="Course Hero"
          className="w-full h-[380px] object-cover"
        />
 
        <div className="p-8 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
            <p className="text-gray-600 mt-2">{course.subtitle}</p>
 

 
            {/* Course Overview */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800 text-lg">
                Course Overview
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                Learn with expert mentors and hands-on projects. Get
                industry-level skills and job-ready experience with real-world
                assignments and projects.
              </p>
            </div>
 
            {/* Review Section (Scrollable) */}
            <div className="mt-10">
              <h3 className="font-semibold text-gray-800 text-lg mb-3">
                Student Reviews
              </h3>
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {REVIEWS.map((rev, i) => (
                  <div
                    key={i}
                    className="min-w-[300px] bg-gray-50 p-5 rounded-2xl shadow-md border border-gray-100 flex flex-col"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={rev.img}
                        alt={rev.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">
                          {rev.name}
                        </p>
                        <p className="text-gray-500 text-xs">{rev.role}</p>
                      </div>
                    </div>
                    <div className="flex mt-2 text-yellow-500">
                      {Array.from({ length: rev.rating }).map((_, idx) => (
                        <Star key={idx} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                      {rev.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
 
          {/* Side Card */}
          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg w-full object-cover"
            />
 
            <button onClick={openPopup} className="mt-3 w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium text-white">
              Connect
            </button>
 
            <div className="mt-5">
              <h3 className="font-semibold text-gray-800 text-sm">
                This Course Includes
              </h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc ml-4">
                <li>Lifetime access</li>
                <li>Certificate of Completion</li>
                <li>Downloadable Resources</li>
                <li>Access on Mobile & Web</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}