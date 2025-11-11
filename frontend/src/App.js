import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SuccessSection from "./components/SuccessSection";
import CareerManagement from "./components/CareerManagement";
import AboutCTA from "./components/AboutCTA";
import LearnWithCTA from "./components/LearnWithCTA";
import Features from "./components/Features";
import ToolsForStudents from "./components/ToolsForStudents";
import ScoreboardSection from "./components/ScoreboardSection";
import OneOnOneSection from "./components/OneOnOneSection";
import ExploreCoursesSection from "./components/ExploreCoursesSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import ContactPopup from "./components/ContactPopup";

// Pages
import CareerPlacement from "./pages/CareerPlacement";

// Create Context for Contact Popup
const ContactPopupContext = createContext();

export const useContactPopup = () => {
  const context = useContext(ContactPopupContext);
  if (!context) {
    throw new Error('useContactPopup must be used within ContactPopupProvider');
  }
  return context;
};

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <ContactPopupContext.Provider value={{ openPopup, closePopup }}>
      <Router>
        <div className="App">
          <Navbar />

          {/* Define Routes */}
          <Routes>
            {/* Main Home Page */}
            <Route
              path="/"
              element={
                <>
                  <section id="home"><Home /></section>
                  <SuccessSection />
                  <CareerManagement />
                  <section id="aboutcta"><AboutCTA /></section>
                  <section id="learnwithcta"><LearnWithCTA /></section>
                  <Features />
                  <section id="toolsforstudents"><ToolsForStudents /></section>
                  <ScoreboardSection />
                  <section id="oneononesection"><OneOnOneSection /></section>
                  <section id="explorecoursessection"><ExploreCoursesSection /></section>
                  <TestimonialSection />
                  <section id="footer"><Footer /></section>
                  <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
                </>
              }
            />

            {/* Career Placement Page */}
            <Route path="/career-placement" element={<CareerPlacement />} />
          </Routes>
        </div>
      </Router>
    </ContactPopupContext.Provider>
  );
}

export default App;
