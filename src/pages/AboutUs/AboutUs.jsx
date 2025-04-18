import React from 'react';

const AboutUs = () => {
    return (
        <div className=" min-h-screen flex flex-col items-center p-6">
      <div className="max-w-4xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to <span className="font-semibold">Great Learning</span>, your trusted online learning platform. We are committed to providing high-quality education to students, professionals, and lifelong learners worldwide.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our platform offers a diverse range of courses in technology, business, arts, and more. With expert instructors and interactive learning experiences, we empower individuals to upskill and achieve their goals.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          We believe in a flexible and personalized learning experience. Our platform provides self-paced courses, live sessions, and hands-on projects to ensure practical understanding and real-world application.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our mission is to bridge the skill gap and make education accessible to everyone. We partner with industry leaders and universities to bring top-quality content and certifications that add value to your career.
        </p>
        <p className="text-gray-700 text-lg">
          Join us today and take the next step in your learning journey!
        </p>
      </div>
    </div>
    );
};

export default AboutUs;