import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center mx-[15%] my-24 p-16 bg-white rounded-3xl shadow-lg relative overflow-hidden min-h-[700px]">
      
      {/* Decorative Shapes */}
      <div className="absolute top-12 right-16 w-36 h-36 border-[10px] border-cyan-400 rounded-full opacity-50" />
      <div className="absolute bottom-8 left-12 w-20 h-20 border-[10px] border-indigo-500 rounded-full opacity-60" />
      <div className="absolute top-24 left-1/3 w-0 h-0 border-l-[50px] border-r-[50px] border-b-[75px] border-transparent border-b-cyan-200 rotate-[-30deg] opacity-60" />
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-red-400 rounded-full opacity-50" />

      {/* Left Side - Text */}
      <div className="flex-1 z-10 text-gray-700 space-y-8">
        <p className="text-sm uppercase tracking-widest text-indigo-400 font-semibold">Testimonial</p>
        <h2 className="text-4xl font-bold text-gray-900">
          What They Say <span className="text-indigo-500">?</span>
        </h2>
        <p className="leading-relaxed text-lg">
          CTA has received hundreds of positive reviews from learners and professionals across the country.
        </p>
        <p className="leading-relaxed text-lg">
          Many students have transformed their careers through our hands-on training, mentorship, and placement support.
        </p>
        <p className="leading-relaxed text-lg">
          What about you? Share your learning experience with us today.
        </p>
      </div>

      {/* Right Side - Image Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="relative flex-1 mt-12 md:mt-0 flex justify-center items-center z-10"
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
            alt="Student"
            className="rounded-3xl shadow-xl w-96 h-[480px] object-cover"
          />

          {/* Testimonial Box */}
          <div className="absolute bottom-[-40px] left-[-30px] bg-white p-6 rounded-2xl shadow-xl w-80">
            <p className="text-sm text-gray-600 leading-snug">
              CTA completely changed how I learn. The mentors were always available, and the one-on-one sessions helped me understand real-world projects better. I landed my first internship within 3 months.
            </p>
            <div className="flex mt-3 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#facc15" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right arrow button */}
      <button className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full text-indigo-500 hover:scale-110 transition">
        →
      </button>
    </section>
  );
}
