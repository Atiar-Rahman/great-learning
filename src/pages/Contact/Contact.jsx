import React from 'react';
import url from '../../url';
import Swal from 'sweetalert2';

const Contact = () => {

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const text = form.text.value;

    const contactInfo = { name, email, text }

    // console.log(contactInfo)
    fetch(`${url}/contactinfo`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(contactInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfull send Message and wait email info!",
            icon: "success",
            draggable: true
          });
        }
      })
  }

  return (
    <div className=" min-h-screen flex flex-col items-center p-6">
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
        <form className="mt-6" onSubmit={handleSubmit}>
          <input name='name' type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg mb-4 text-black" />
          <input name='email' type="email" placeholder="Your Email" className="w-full p-2 border rounded-lg mb-4 text-black" />
          <textarea name='text' placeholder="Your Message" className="w-full p-2 border rounded-lg mb-4 text-black" rows="4"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;