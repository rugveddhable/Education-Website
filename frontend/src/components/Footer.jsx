export default function Footer() {
  return (
    <footer className="bg-[#262866] text-white py-16 px-[10%]">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Section - Explore */}
        <div>
          <h2 className="text-xl font-semibold mb-8">
            Explore top skills and certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-gray-200">

            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">In-demand Careers</h3>
              <ul className="space-y-2">
                <li>Full Stack Web Developer</li>
                <li>Data Scientist</li>
                <li>Full Stack Web Developer</li>
                <li>Cloud Engineer</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Web Development</h3>
              <ul className="space-y-2">
                <li>Web Development</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Angular</li>
                <li>Java</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Data Science</h3>
              <ul className="space-y-2">
                <li>Data Science</li>
                <li>Python</li>
                <li>Machine Learning</li>
                <li>ChatGPT</li>
                <li>Deep Learning</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Communication</h3>
              <ul className="space-y-2">
                <li>Communication Skills</li>
                <li>Presentation Skills</li>
                <li>Public Speaking</li>
                <li>Writing</li>
                <li>PowerPoint</li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Business Analytics & Intelligence</h3>
              <ul className="space-y-2">
                <li>Microsoft Excel</li>
                <li>SQL</li>
                <li>Microsoft Power BI</li>
                <li>Data Analysis</li>
                <li>Business Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-200 border-t border-gray-600 pt-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Certifications by Skill</h3>
            <ul className="space-y-2">
              <li>Cybersecurity Certification</li>
              <li>Cloud Certification</li>
              <li>Data Analytics Certification</li>
              <li>HR Management Certification</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Discover CTA</h3>
            <ul className="space-y-2">
              <li>Teach on CTA</li>
              <li>Plans and Pricing</li>
              <li>Help and Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal & Accessibility</h3>
            <ul className="space-y-2">
              <li>Accessibility Statement</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
