import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SuccessSection from './components/SuccessSection';
import CareerManagement from './components/CareerManagement';
import AboutCTA from './components/AboutCTA';
import LearnWithCTA from './components/LearnWithCTA';
import Features from './components/Features';
import ToolsForStudents from './components/ToolsForStudents';
import ScoreboardSection from './components/ScoreboardSection';
import OneOnOneSection from './components/OneOnOneSection';
import ExploreCoursesSection from './components/ExploreCoursesSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';


function App() {
  return (
    <div className="App">
      <Navbar />
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
      <ContactPopup />

    </div>
  );
}

export default App;
