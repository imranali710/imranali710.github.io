import React from 'react';

function SMSPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            School Management System (SMS)
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            An all-encompassing platform engineered to streamline administrative, academic, and communication operations with finesse.
          </p>
          
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Key Features & User Roles
          </h2>

          <div className="space-y-16">
            {/* Admin Portal */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Admin Portal</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Dashboard:</strong> Comprehensive overview of key metrics including enrollment, fees, and attendance.</li>
                <li><strong>User Management:</strong> Full control over profiles for students, teachers, staff, and parents.</li>
                <li><strong>Role & Permission Control:</strong> Fine-grained access management for improved security.</li>
                <li><strong>Academic Scheduling:</strong> Configure academic sessions, terms, holidays and generate timetables.</li>
                <li><strong>Fee & Payroll Management:</strong> Integrated invoicing, payment tracking and salary processing.</li>
                <li><strong>Exam & Reporting Management:</strong> Schedule, grade, and publish exam results with detailed reporting.</li>
                <li><strong>Real-Time Analytics:</strong> Interactive dashboards delivering live insights into institutional performance.</li>
              </ul>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            {/* Teacher Portal */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Teacher Portal</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Dashboard:</strong> Immediate access to class schedules, tasks, and updates.</li>
                <li><strong>Attendance & Grade Entry:</strong> Streamlined tools for marking attendance and entering grades.</li>
                <li><strong>Resource & Assignment Management:</strong> Effortlessly create, distribute, and review assignments.</li>
                <li><strong>LMS Integration:</strong> Seamless connection with popular Learning Management Systems.</li>
                <li><strong>Collaborative Tools:</strong> In-platform messaging and resource sharing to enhance classroom interaction.</li>
              </ul>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            {/* Staff Portal */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Staff Portal (Admin/Support)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Admissions & Fee Collection:</strong> Manage inquiries, admissions, and financial transactions seamlessly.</li>
                <li><strong>Certificate & Document Management:</strong> Automatically generate and manage official documents.</li>
                <li><strong>Front Desk & Inventory:</strong> Efficient oversight of visitors, appointments, and asset tracking.</li>
                <li><strong>Automated Reporting:</strong> Generate customized reports tailored to operational needs.</li>
              </ul>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            {/* Parent Portal */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Parent Portal</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Child Profile & Attendance:</strong> Monitor academic progress and daily attendance with clarity.</li>
                <li><strong>Fee & Timetable Access:</strong> Quickly view fee statements and daily schedules.</li>
                <li><strong>Communication:</strong> Real-time messaging and notifications directly from educators.</li>
                <li><strong>Multilingual Support:</strong> Fully accessible in multiple languages to suit diverse communities.</li>
              </ul>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            {/* Student Portal */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Student Portal</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Personal Dashboard:</strong> Customized overview with schedule, assignments, and notifications.</li>
                <li><strong>Academic Records:</strong> Access grades, exam results, and attendance history.</li>
                <li><strong>Resource Center:</strong> Download study materials and submit assignments online.</li>
                <li><strong>Collaborative Learning:</strong> Engage in group discussions and real-time projects.</li>
                <li><strong>Secure Access:</strong> State-of-the-art security ensuring complete data privacy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Advanced Features for Modern Institutions
          </h2>
          <div className="space-y-8 text-gray-700 text-lg">
            <p>
              <strong>Real-Time Analytics & Reporting:</strong> Leverage live data streams and interactive dashboards to drive informed decisions.
            </p>
            <p>
              <strong>Integrated Cloud Backup:</strong> Ensure continuous data integrity with automated cloud backups and disaster recovery systems.
            </p>
            <p>
              <strong>Seamless LMS & API Integration:</strong> Connect effortlessly with existing systems and third-party tools for a unified ecosystem.
            </p>
            <p>
              <strong>Enhanced Security:</strong> Benefit from multi-factor authentication, encryption protocols, and continuous security audits.
            </p>
            <p>
              <strong>Multilingual & Accessibility Support:</strong> Cater to a global community with built-in language support and adherence to accessibility standards.
            </p>
            <p>
              <strong>Modular Architecture:</strong> Future-proof your institution with a flexible design that allows for easy feature expansion and custom module additions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
          <div className="space-y-6 text-gray-700">
            <blockquote className="italic text-lg">
              "This system transformed our school's operations. Its minimal design, real-time analytics, and seamless integrations have set new standards for educational excellence."
            </blockquote>
            <p className="font-semibold text-gray-800">- Director, Prestigious Academy</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-200 py-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="mb-2">© 2025 School Management System. All Rights Reserved.</p>
          <p className="text-sm">
            A minimalistic, secure, and advanced platform designed for modern educational institutions.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SMSPage;
