import React from "react";

const CareerManagement = () => {
  return (
    <section className="bg-gray-50 py-24 text-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
        All-In-One{" "}
        <span className="text-indigo-600">Career Management</span> Platform
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
        Career Tech Academy combines every tool students and educators need to
        learn, teach, and grow — all in one powerful platform.
      </p>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-xs hover:shadow-2xl transition">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-500 rounded-full"></div>
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Online Admission & Billing
          </h3>
          <p className="text-gray-600">
            Manage applications and billing seamlessly for a smooth admission
            process.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-xs hover:shadow-2xl transition">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-indigo-500 rounded-full"></div>
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Class Scheduling & Attendance
          </h3>
          <p className="text-gray-600">
            Organize your class schedule and track attendance across multiple
            courses.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-xs hover:shadow-2xl transition">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-500 rounded-full"></div>
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Contact Admission & Support
          </h3>
          <p className="text-gray-600">
            Easily reach out for assistance with admission, billing, and academy
            support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerManagement;
