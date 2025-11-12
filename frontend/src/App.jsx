import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetailPage from "./components/CourseDetailPage";
import ScrollToTop from "./components/ScrollToTop";
 
function App() {
  return (
    <>
    <ScrollToTop />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseName" element={<CourseDetailPage />} />
      </Routes>
    </Router>
    </>
  );
}
 
export default App;