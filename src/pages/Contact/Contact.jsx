import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="max-w-4xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          Have any questions or need support? Reach out to us, and we'll be happy to assist you.
        </p>
        <div className="text-left">
          <p className="text-gray-700 text-lg mb-2"><strong>Email:</strong> support@greatlearning.com</p>
          <p className="text-gray-700 text-lg mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="text-gray-700 text-lg mb-2"><strong>Address:</strong> 123 Learning St, Knowledge City, 56789</p>
        </div>
        <form className="mt-6">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg mb-4 text-black" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-lg mb-4 text-black" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded-lg mb-4 text-black" rows="4"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </div>
    );
};

export default Contact;