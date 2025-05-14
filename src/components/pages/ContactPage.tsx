import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I'm always open to new opportunities and collaborations. Reach out to me directly via phone or email!
          </p>
        </section>

        {/* Contact Information Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone</h2>
            <p className="text-gray-600">+91-9628720158</p>
          </div>
          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
            <p className="text-gray-600">
              <a href="mailto:imran710a@gmail.com" className="hover:text-blue-600 transition-colors">
                imran710a@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connect with Me</h2>
          <div className="flex justify-center space-x-6">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.35V9.743h3.414v1.557h.048c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.265 2.37 4.265 5.455v6.549zM5.337 8.186c-1.144 0-2.063-.93-2.063-2.077 0-1.147.919-2.078 2.063-2.078 1.145 0 2.064.931 2.064 2.078 0 1.147-.919 2.077-2.064 2.077zm1.777 12.266H3.56V9.743h3.554v10.709zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.467-2.381 1.235-3.221-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.649.241 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.453.066-2.944.404-4.07 1.53-1.126 1.126-1.464 2.617-1.53 4.07-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.066 1.453.404 2.944 1.53 4.07 1.126 1.126 2.617 1.464 4.07 1.53 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.453-.066 2.944-.404 4.07-1.53 1.126-1.126 1.464-2.617 1.53-4.07.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.066-1.453-.404-2.944-1.53-4.07-1.126-1.126-2.617-1.464-4.07-1.53-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;