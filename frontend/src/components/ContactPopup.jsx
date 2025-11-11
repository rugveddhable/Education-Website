import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactPopup = ({ isOpen = false, onClose = () => {} }) => {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setShowPopup(true);
    } else {
      const timer = setTimeout(() => setShowPopup(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_91nw5dq",    // Replace with your EmailJS service ID
        "template_ns82haa",   // Replace with your EmailJS template ID
        formRef.current,
        "hciTQV_z2fvpoug5m"     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setShowPopup(false);
          onClose();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.log(error.text);
        }
      );
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="relative bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 
                      rounded-3xl shadow-2xl w-[90%] md:w-[500px] p-8 md:p-10 text-white
                      animate-[fadeIn_0.5s_ease]">
        {/* Close Button */}
        <button
          onClick={() => {
            setShowPopup(false);
            onClose();
          }}
          className="absolute top-4 right-6 text-white text-2xl font-bold hover:scale-110 transition"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-center drop-shadow-lg">Contact Us</h2>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="bg-white/40 placeholder-white text-white rounded-full px-6 py-3 text-lg focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-white/40 placeholder-white text-white rounded-full px-6 py-3 text-lg focus:outline-none"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile No"
            required
            className="bg-white/40 placeholder-white text-white rounded-full px-6 py-3 text-lg focus:outline-none"
          />
          <input
            type="text"
            name="source"
            placeholder="How did you hear about us"
            className="bg-white/40 placeholder-white text-white rounded-full px-6 py-3 text-lg focus:outline-none"
          />
          <button
            type="submit"
            className="mt-4 bg-white text-purple-700 hover:bg-purple-100 transition 
                       rounded-full py-3 text-lg font-semibold shadow-md w-1/2 mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
