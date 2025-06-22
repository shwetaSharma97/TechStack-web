import Image from "next/image";

export default function Home() {
  return (
<>

   {/* Hero Section  */}
  <section className="bg-blue-700 text-white text-center py-16 px-4 backgroundheadimg">
    <h1 className="text-4xl font-bold mb-4">MEAN & MERN Full-Stack Training</h1>
    <p className="text-xl mb-6">Job-Ready in 6 Months—Live Classes • 1:1 Mentorship • AI-Powered Learning</p>
    <a href="#contact" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-blue-100">Join Now</a>
  </section>

   {/* Why Us  */}
  <section className="py-12 px-4 bg-gray-100">
    <h2 className="text-2xl font-bold text-center mb-8">🚀 Why Choose Us</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded shadow text-center">
        <h3 className="font-semibold text-lg">Industry Experts Mentor</h3>
        <p>Learn from working professionals with 10+ years of experience.</p>
      </div>
      <div className="bg-white p-6 rounded shadow text-center">
        <h3 className="font-semibold text-lg">Placement Support</h3>
        <p>Mock Interviews, Resume Reviews & Career Coaching.</p>
      </div>
      <div className="bg-white p-6 rounded shadow text-center">
        <h3 className="font-semibold text-lg">Real-Time Projects</h3>
        <p>Work on projects like Chat App, E‑commerce, Blog Clone.</p>
      </div>
    </div>
  </section>

   {/* Course Bundles  */}
  <section className="py-12 px-4">
    <h2 className="text-2xl font-bold text-center mb-8">📘 Our Courses</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border rounded p-6 shadow">
        <h3 className="font-bold text-xl mb-2">MEAN Stack Training</h3>
        <p>MongoDB, Express.js, Angular, Node.js—Complete Hands-on Training</p>
      </div>
      <div className="border rounded p-6 shadow">
        <h3 className="font-bold text-xl mb-2">MERN Full-Stack Zero to Hired</h3>
        <p>Learn React, Node, Express & MongoDB with Job Prep</p>
      </div>
    </div>
  </section>

   {/* Live Training & Support  */}
  <section className="py-12 px-4 bg-blue-50">
    <h2 className="text-2xl font-bold text-center mb-8">🧑‍🏫 Live Training & Support</h2>
    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div>
        <h4 className="font-semibold text-lg">Daily Zoom Sessions</h4>
        <p>Mon–Sat: Interactive Classes</p>
      </div>
      <div>
        <h4 className="font-semibold text-lg">1:1 Mentorship</h4>
        <p>Dedicated mentor & career coach</p>
      </div>
      <div>
        <h4 className="font-semibold text-lg">WhatsApp / Email Support</h4>
        <p>Instant help with queries</p>
      </div>
    </div>
  </section>

   {/* Project Portfolio  */}
  <section className="py-12 px-4">
    <h2 className="text-2xl font-bold text-center mb-8">🛠 Project Portfolio Highlights</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="border rounded overflow-hidden shadow">
        <img src="https://via.placeholder.com/300x150" alt="Chat App" className="w-full" />
        <div className="p-4">Chat App with Socket.io</div>
      </div>
      <div className="border rounded overflow-hidden shadow">
        <img src="https://via.placeholder.com/300x150" alt="E-commerce" className="w-full" />
        <div className="p-4">Full-Stack E‑commerce Website</div>
      </div>
      <div className="border rounded overflow-hidden shadow">
        <img src="https://via.placeholder.com/300x150" alt="Blog Clone" className="w-full" />
        <div className="p-4">Medium Blog Clone with Auth</div>
      </div>
    </div>
  </section>

  {/* Testimonials  */}
  <section className="py-12 px-4 bg-gray-50">
    <h2 className="text-2xl font-bold text-center mb-8">👥 What Our Students Say</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded shadow">
        <p>"Thanks to the mentorship and daily classes, I cracked my first full-stack role!"</p>
        <p className="mt-2 font-semibold">– Priya S., Software Engineer</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <p>"Real-time project support made a huge difference. I built a full MERN app!"</p>
        <p className="mt-2 font-semibold">– Raj M., Developer Intern</p>
      </div>
    </div>
  </section>

  {/* Free Courses  */}
  <section className="py-12 px-4">
    <h2 className="text-2xl font-bold text-center mb-8">🎁 Free Starter Courses</h2>
    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div className="p-6 border rounded shadow">
        <h4 className="font-bold">HTML + CSS Crash</h4>
        <p>Free forever</p>
      </div>
      <div className="p-6 border rounded shadow">
        <h4 className="font-bold">JS Real-world Project</h4>
        <p>Hands-on mini course</p>
      </div>
      <div className="p-6 border rounded shadow">
        <h4 className="font-bold">Intro to MERN</h4>
        <p>Basics with real app</p>
      </div>
    </div>
  </section>

   {/* Contact  */}
  <section id="contact" className="py-12 px-4 bg-blue-100">
    <h2 className="text-2xl font-bold text-center mb-8">📞 Contact Us</h2>
    <div className="max-w-3xl mx-auto">
      <form className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Message</label>
          <textarea className="w-full p-2 border rounded" rows={5}></textarea>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded">Submit</button>
      </form>
      <div className="text-center mt-6">
        <p>📞 Mon to Sat 10 to 6</p>
        <p>✉️ Email: shwetasharmaengg@gmail.com</p>
        <p>📍 B-102, Tech Park, Hyderabad, India</p>
      </div>
    </div>
  </section>

   {/* Footer  */}
  <footer className="bg-gray-800 text-white py-6 px-4 text-center">
    <div className="mb-2">
      <a href="#" className="mx-2 underline">About</a>
      <a href="#" className="mx-2 underline">Contact</a>
      <a href="#" className="mx-2 underline">Privacy</a>
      <a href="#" className="mx-2 underline">Terms</a>
      <a href="#" className="mx-2 underline">Refund</a>
    </div>
    <p>© 2025 KnowledgeGate LLP. All Rights Reserved.</p>
  </footer>

</>

  );
}
