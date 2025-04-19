import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import url from "../../url";

const CourseEnroll = () => {
const course = useLoaderData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    paymentMethod: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle enrollment logic here (e.g., submit form data to the backend)
    alert("Enrollment successful!");
    formData.courseId = course._id;
    console.log(formData)

    fetch(`${url}/enroll`,{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>{
      window.location.replace(data.url);
      console.log(data)
    })
  };

  return (
    <div className=" text-black min-h-screen flex flex-col items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Enroll in {course.title}</h1>
        <div className="flex flex-col md:flex-row justify-center items-center mb-6">
          <div className="md:w-1/2">
            <img
              src={course.file}
              alt={course.title}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-3 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Details</h2>
            <p className="text-lg text-gray-700 mb-4">{course.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-blue-600 font-semibold text-lg">${course.price}</span>
              <span className="text-gray-600">Duration: {course.duration} hours</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="my-10">
          <div>
            <label htmlFor="name" className="text-lg font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mb-4"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-lg  font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mb-4"
              required
            />
          </div>

          <div>
            <label htmlFor="paymentMethod" className="text-lg font-semibold text-gray-700">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mb-4"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="onlineBanking">Online Banking</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I agree to the Terms and Conditions
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseEnroll;
