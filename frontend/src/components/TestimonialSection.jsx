import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
      text: "I am so thankful to the team for complete coordination for my placement as a Software Tester. Completed the commitment within 2 months. I struggled a lot to find the perfect job but found the solution here.",
      name: "Swati Chavan",
      role: "Frontend Developer at TCS"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
      text: "One of the best institutes I have ever enrolled in, I have gone through the Front-End Develpment course, also provided me a great exposure for testing as well, from dummy projects to real world projects and live project! I found everything that an MNC could give me.",
      name: "Nitin More", 
      role: "Full Stack Developer at Infosys"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
      text: "To be honest, Career Tech Academy is the best platform to build up the basics of the softwares and the skills. Trainers helped me and my batchmates to perform the practicals in person.",
      name: "Anita Jadhav",
      role: "React Developer at Wipro"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-center mx-[5%] sm:mx-[8%] md:mx-[15%] my-12 md:my-24 p-6 sm:p-10 md:p-16 bg-white rounded-3xl shadow-lg relative overflow-hidden min-h-[500px] md:min-h-[700px]">
      
      {/* Decorative Shapes */}
      <div className="absolute top-12 right-16 w-36 h-36 border-[10px] border-cyan-400 rounded-full opacity-50" />
      <div className="absolute bottom-8 left-12 w-20 h-20 border-[10px] border-indigo-500 rounded-full opacity-60" />
      <div className="absolute top-24 left-1/3 w-0 h-0 border-l-[50px] border-r-[50px] border-b-[75px] border-transparent border-b-cyan-200 rotate-[-30deg] opacity-60" />
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-red-400 rounded-full opacity-50" />

      {/* Left Side - Text */}
      <div className="flex-1 z-10 text-gray-700 space-y-4 md:space-y-8 text-center md:text-left">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-indigo-400 font-semibold">Testimonial</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          What They Say <span className="text-indigo-500">?</span>
        </h2>
        <p className="leading-relaxed text-sm sm:text-base md:text-lg">
          CTA has received hundreds of positive reviews from learners and professionals across the country.
        </p>
        <p className="leading-relaxed text-sm sm:text-base md:text-lg">
          Many students have transformed their careers through our hands-on training, mentorship, and placement support.
        </p>
        <p className="leading-relaxed text-sm sm:text-base md:text-lg">
          What about you? Share your learning experience with us today.
        </p>
      </div>

      {/* Right Side - Image Card with Carousel */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="relative flex-1 mt-8 md:mt-12 flex justify-center items-center z-10"
      >
        <div className="relative">
          <motion.img
            key={currentTestimonial}
            src={testimonials[currentTestimonial].image}
            alt="Student"
            className="rounded-3xl shadow-xl w-64 sm:w-80 md:w-96 h-[320px] sm:h-[400px] md:h-[480px] object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Testimonial Box */}
          <motion.div 
            key={`testimonial-${currentTestimonial}`}
            className="absolute bottom-[-30px] md:bottom-[-40px] left-[-20px] md:left-[-30px] bg-white p-4 md:p-6 rounded-2xl shadow-xl w-[280px] sm:w-[320px] md:w-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs sm:text-sm text-gray-600 leading-snug mb-2 md:mb-3">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div className="flex items-center mt-2 md:mt-3 mb-1 md:mb-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" fill="#facc15" />
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Carousel Navigation */}
      {/* <button 
        onClick={prevTestimonial}
        className="absolute left-[-10px] sm:left-0 md:left-10 top-[65%] md:top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 md:p-3 rounded-full text-indigo-500 hover:scale-110 transition z-20"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button> */}
      
      <button 
        onClick={nextTestimonial}
        className="absolute right-[-10px] sm:right-0 md:right-10 top-[65%] md:top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 md:p-3 rounded-full text-indigo-500 hover:scale-110 transition z-20"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentTestimonial ? 'bg-indigo-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
