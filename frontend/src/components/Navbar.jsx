import React, { useState, useEffect } from "react";
import { FaSearch, FaExclamationTriangle } from "react-icons/fa";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useContactPopup } from "../App";
import logo from "../assets/mylogo.png";

const Navbar = () => {
  const { openPopup } = useContactPopup();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Comprehensive search data for global search
  const searchableContent = [
    // Courses - Updated with correct IDs from CourseDetailPage
    { type: "course", id: "artificial-intelligence-ai", title: "Artificial Intelligence (AI)", description: "Learn ML, Deep Learning & real-world AI projects", section: "courses", keywords: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning"] },
    { type: "course", id: "data-science--machine-learning", title: "Data Science & Machine Learning", description: "Data analysis, ML algorithms, model deployment", section: "courses", keywords: ["data science", "analytics", "python", "statistics", "pandas", "numpy", "machine learning"] },
    { type: "course", id: "flutter-framework-mastery", title: "Flutter Framework Mastery", description: "Build cross-platform mobile apps with Flutter", section: "courses", keywords: ["flutter", "mobile", "app development", "dart", "android", "ios"] },
    { type: "course", id: "python-for-developers", title: "Python for Developers", description: "Core Python, OOP, Automation & scripting", section: "courses", keywords: ["python", "programming", "coding", "development", "backend", "oop", "automation"] },
    { type: "course", id: "react-js-mastery", title: "React JS Mastery", description: "Deep dive into React ecosystem and patterns", section: "courses", keywords: ["react", "javascript", "frontend", "web development", "jsx", "hooks"] },
    { type: "course", id: "full-stack-web-development", title: "Full Stack Web Development", description: "Build modern web apps with React, Node & Databases", section: "courses", keywords: ["web development", "html", "css", "javascript", "fullstack", "frontend", "backend", "react", "node"] },
    { type: "course", id: "selenium-for-testers", title: "Selenium for Testers", description: "Master web automation testing using Selenium", section: "courses", keywords: ["selenium", "testing", "automation", "qa", "test automation"] },
    
    // Sections
    { type: "section", id: "home", title: "Home", description: "Welcome to CTA - Your Career Transformation Academy", section: "home", keywords: ["home", "welcome", "cta", "career transformation"] },
    { type: "section", id: "aboutcta", title: "About CTA", description: "Learn about our mission and vision", section: "aboutcta", keywords: ["about", "mission", "vision", "company", "cta"] },
    { type: "section", id: "learnwithcta", title: "Learn With CTA", description: "Discover our learning methodology", section: "learnwithcta", keywords: ["learn", "methodology", "teaching", "education"] },
    { type: "section", id: "explorecoursessection", title: "Explore Courses", description: "Browse all available courses", section: "explorecoursessection", keywords: ["courses", "explore", "browse", "programs"] },
    { type: "page", id: "career-placement", title: "Career & Placement", description: "Career guidance and placement support", section: "career", keywords: ["career", "placement", "job", "hiring", "employment"] }
  ];

  // Global search functionality
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = searchableContent.filter(item => {
      const searchLower = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
      );
    });

    setSearchResults(results.slice(0, 5)); // Limit to 5 results
    setShowSearchResults(true);
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    performSearch(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      selectSearchResult(searchResults[0]);
    }
  };

  const selectSearchResult = (result) => {
    setShowSearchResults(false);
    setSearchTerm("");

    if (result.type === "course") {
      navigate(`/course/${result.id}`);
    } else if (result.type === "page") {
      navigate(`/${result.id}`);
    } else {
      // Navigate to section
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(result.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);
      } else {
        const element = document.getElementById(result.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  // Hide search results when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSearchResults(false);
    };

    if (showSearchResults) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showSearchResults]);

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-blue-950/95 backdrop-blur-md text-white 
                 px-6 py-2 rounded-3xl shadow-lg w-[100%] md:w-[95%] flex flex-col items-center transition-all"
    >
      {/* Top Row — Main Navbar */}
      <div className="flex items-center justify-between w-full">
        {/* Left Section - Logo + Search */}
        <div className="flex items-center gap-4">
          <RouterLink to="/">
            <img src={logo} alt="CTA Logo" className="w-12 h-12 object-contain cursor-pointer hover:opacity-80 transition" />
          </RouterLink>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchInput}
                onFocus={() => searchTerm && setShowSearchResults(true)}
                placeholder="Search (Courses, Sections, Info...)"
                className="bg-white/20 pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none 
                           placeholder-gray-300 text-white w-48 sm:w-60 md:w-72 focus:bg-white/30 transition-all"
              />
              <button type="submit" className="absolute left-3 top-2.5">
                <FaSearch className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </button>
            </form>
            
            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-80 overflow-y-auto z-50">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => selectSearchResult(result)}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        result.type === 'course' ? 'bg-blue-100 text-blue-800' :
                        result.type === 'page' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {result.type === 'course' ? 'Course' : 
                         result.type === 'page' ? 'Page' : 'Section'}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium text-sm">{result.title}</p>
                        <p className="text-gray-600 text-xs mt-1">{result.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* No Results Message */}
            {showSearchResults && searchResults.length === 0 && searchTerm && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="px-4 py-3 text-center text-gray-500 text-sm">
                  No results found for "{searchTerm}"
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Middle - Nav Links */}
        <ul className="hidden md:flex items-center gap-20 font-medium">
          <li>
            <RouterLink
              to="/"
              smooth={true}
              duration={600}
              offset={-100}
              className="hover:text-yellow-300 cursor-pointer transition"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('aboutcta')}
              className="hover:text-yellow-300 cursor-pointer transition"
            >
              About CTA
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('learnwithcta')}
              className="hover:text-yellow-300 cursor-pointer transition"
            >
              LWC
            </button>
          </li>
          <li>
            <RouterLink
              to="/career-placement"
              className="hover:text-yellow-300 cursor-pointer transition"
            >
              Career & Placement
            </RouterLink>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('explorecoursessection')}
              className="hover:text-yellow-300 cursor-pointer transition"
            >
              Explore Courses
            </button>
          </li>
          <li>
            <button
              onClick={openPopup}
              className="hover:text-yellow-300 cursor-pointer transition pr-16"
            >
              Contact Us
            </button>
          </li>
        </ul>

        
      </div>

      {/* Integrated Maintenance Notice */}
      <div className="mt-1 w-full text-center bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 
                      rounded-b-2xl py-1 text-xs md:text-sm font-medium animate-pulse shadow-inner">
        <div className="flex justify-center items-center gap-2 px-4">
          <FaExclamationTriangle className="text-yellow-300 text-sm" />
          <span className="text-white">
            This website is currently <b>under maintenance</b>. Some features may not work properly.  
            For enquiries, contact us at{" "}
            <a
              href="tel:+917066600893"
              className="underline text-yellow-200 hover:text-yellow-100 transition"
            >
              +91 7066600893
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
