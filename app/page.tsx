import React from 'react';
import './globals.css';
import {
  CodeXml,
  Laptop2,
  Smartphone,
  Paintbrush
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Laptop2 size={40} className="mx-auto text-primary" />,
      title: 'Web Applications',
    },
    {
      icon: <CodeXml size={40} className="mx-auto text-primary" />,
      title: 'Software Development',
      description: 'Transform your ideas into powerful software solutions tailored to your business needs.',
    },

    {
      icon: <Smartphone size={40} className="mx-auto text-primary" />,
      title: 'App Development',
      description: 'Build engaging mobile applications that bring your business closer to your customers.',
    },
    {
      icon: <Paintbrush size={40} className="mx-auto text-primary" />,
      title: 'UI/UX Design',
      description: 'Craft visually appealing user interfaces and seamless user experiences that delight your users.',
    },
    // {
    //   icon: <Megaphone size={40} className="mx-auto text-primary" />,
    //   title: 'Software Training',
    //   description: 'Boost your online presence and reach your target audience with our comprehensive digital marketing strategies.',
    // }
  ];

  const courses = [
    {
      icon: '/html_icon.png', // Example icon for HTML/CSS
      title: 'HTML/CSS',
    },
    {
      icon: '/js_icon.png', // Example icon for JavaScript
      title: 'JavaScript',
    },
    {
      icon: '/angular_icon.png', // Example icon for Angular
      title: 'Angular',
    },
    {
      icon: '/react_icon.png', // Example icon for React
      title: 'React',
    },
    {
      icon: '/node_icon.png', // Example icon for Node.js
      title: 'Node.js',
    },
    // {
    //   icon: <Database size={40} className="mx-auto text-primary" />, // Example icon for MongoDB
    //   title: 'MongoDB',
    // },
    {
      icon: '/express_icon.png', // Example icon for Express.js
      title: 'Express.js',
    },
    {
      icon: '/mean_icon.png', // Example icon for MEAN
      title: 'MEAN Stack',
    },
    {
      icon: '/mern_icon.png', // Example icon for MERN
      title: 'MERN Stack',
    },
  ];
  const whyChooseUs = [
    {
      icon: <Laptop2 size={40} className="mx-auto text-primary" />,
      title: 'Software applications Development',
      desc: 'Customer Satisfaction, develop and maintain software applications with reasonable cost and time.',
    },
    {
      icon: <CodeXml size={40} className="mx-auto text-primary" />,
      title: 'Industry Experts Mentor',
      desc: 'Learn from working professionals with 10+ years of experience.',
    },
    {
      icon: <Smartphone size={40} className="mx-auto text-primary" />,
      title: 'Placement Support',
      desc: 'Mock Interviews, Resume Reviews & Career Coaching.',
    },
    {
      icon: <Paintbrush size={40} className="mx-auto text-primary" />,
      title: 'Real-Time Projects',
      desc: 'Work on projects like Chat App, E‑commerce, Blog Clone.',
    }
  ];
  return (
    <>
      {/* Hero Section  */}
      <div>
        <div className="bg-blue-700 py-6 px-4 hero-header">
          <div className="max-w-7xl mx-auto mb-10 flex flex-col lg:flex-row items-center gap-10">

            {/* Left Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-white text-2xl sm:text-2xl font-bold mb-6 animate-slideInDown">
                Welcome to Techstack Solution Software Development & Training
              </h1>
              {/* <p className="mb-6 text-white text-base sm:text-lg animate-slideInDown">
                Job-Ready in 6 Months Live Classes • 1:1 Mentorship • AI-Powered Learning
              </p> */}
              <p className="text-white text-base sm:text-lg mb-6 animate-slideInDown">
                Our innovative software solutions are designed to empower your enterprise, streamline
                processes, and drive growth. Let's embark on a journey of digital transformation together!
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                {/* <a
                  href="/"
                  data-discover="true"
                  className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-100 animate-slideInLeft"
                >
                  About Us
                </a> */}
                <span >
                  <a
                    href="mailto:techstackcontack@gmail.com"
                    className="flex text-white font-semibold py-3 px-6 rounded-full shadow-md animate-slideInLeft"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                    </svg> techstackcontack@gmail.com </a>
                </span>
              </div>
            </div>

            {/* Right Video Content */}
            <div className="w-full lg:w-1/2 text-center">
              <video
                className="w-full max-w-md mx-auto rounded-xl animate-zoomIn"
                src="/techvideo.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
      {/* Our Services */}
      <div> <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h3 className="text-secondary text-lg font-semibold mb-2 relative inline-block before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-secondary before:rounded-full">
              Our Services
            </h3>
            {/* <h1 className="text-2xl md:text-2xl font-bold text-gray-800">What Solutions We Provide</h1> */}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item flex flex-col text-center p-4 rounded-xl shadow-md animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
                <div className="mb-4 text-4xl service-icon">
                  {service.icon}
                </div>
                <h5 className="text-lg font-semibold mb-3 serviceTitle">{service.title}</h5>
                {/* <p className="text-gray-600 mb-6">{service.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Our Courses */}
      <div> <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h3 className="text-secondary text-lg font-semibold mb-2 relative inline-block before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-secondary before:rounded-full">
              Our Courses
            </h3>
          </div>

          {/* Service Cards Grid */}
          <div className="flex gap-6 flex-wrap justify-center justify-items-center">
            {courses.map((course, index) => (
              <div>
                <div
                  key={index} className="course-item flex flex-col justify-center align-items-center text-center p-4 rounded-full shadow-md animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
                  <img src={course.icon} alt={course.title} />
                </div>
                <h5 className="text-lg font-semibold mb-3 serviceTitle">{course.title}</h5>
              </div>


            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Contact us */}
      <div
        className="w-full py-12 px-4"
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="text-white">
              <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75l1.13 4.52a1 1 0 0 1-.29 1L8.21 12.21a16 16 0 0 0 6.59 6.59l1.94-1.94a1 1 0 0 1 1-.29l4.52 1.13a1 1 0 0 1 .75 1V21z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <span className="text-white text-2xl md:text-3xl font-semibold">
              Get Free Consultancy About Your Project
            </span>
          </div>
          <span>
            <a
              href="mailto:techstackcontack@gmail.com"
              className="flex items-center gap-2  text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
              </svg>
              techstackcontack@gmail.com
            </a>
          </span>
        </div>
      </div>

      {/* Why Us  */}
      <div> <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h3 className="text-secondary text-lg font-semibold mb-2 relative inline-block before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-secondary before:rounded-full">
              Why Choose Us
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="flex gap-3 flex-wrap">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-start gap-2 mb-1 w-full max-w-md">
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#6366F1]">
                      <span className="text-white">{item.icon}</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold chooseTitle mb-1">{item.title}</h5>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex justify-center p-4">
              <img src={'/workplace.gif'} alt="Workplace" className="max-w-xs w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Course Bundles  */}


      {/* Live Training & Support  */}


      {/* Testimonials  */}



      {/* Footer  */}
      <footer className="text-white py-6 px-4 text-center" style={{ backgroundColor: '#7939e8' }}>
        <p>© 2025 TechStack LLP. All Rights Reserved.</p>
      </footer>
    </>

  );
}
