// src/components/VideoUpload.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import axiosInstance from '../components/axiosInstance'; // Use custom instance

const VideoUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [video, setVideo] = useState('');

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size < 500 * 1024) {
      alert("Please upload a video larger than 500KB.");
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'first_time_cloudinary');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dmtdihivi/video/upload',
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percent);
          }
        }
      );

      const videoUrl = response.data.secure_url;
      setVideo(videoUrl);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const form = e.target;
    const courseSelect = form.courseSelect.value;

    if (!video || !courseSelect) {
      Swal.fire("Please select a course and upload a video first.");
      return;
    }

    const courseVideo = { courseSelect, video };

    try {
      const response = await axiosInstance.post('/video', courseVideo);

      if (response.data.insertedId) {
        Swal.fire({
          title: "Video uploaded successfully!",
          icon: "success"
        });
        setVideo('');
      }
    } catch (error) {
      console.error('Error uploading video to backend:', error);
      Swal.fire({
        title: "Upload failed!",
        text: error.response?.data?.message || "Server error",
        icon: "error"
      });
    }
  };

  return (
    <div className="p-4 border rounded-md my-10">
      <label className="block font-bold mb-2">Upload Video:</label>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />

      {uploading && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-200"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{uploadProgress}% uploaded</p>
        </div>
      )}

      <form className='my-10' onSubmit={handleUpload}>
        <select defaultValue="select course" name='courseSelect' className="select select-accent w-full">
          <option disabled={true}>select Course</option>
          <option>Cyber Security</option>
          <option>Web Development</option>
          <option>Full Stack Web Development</option>
          <option>Python for Data Analysis</option>
          <option>Digital Marketing Masterclass</option>
          <option>Graphic Design Essentials</option>
        </select> <br />
        <input type="submit" className='btn btn-outline w-full my-2' value="Upload" />
      </form>
    </div>
  );
};

export default VideoUpload;
