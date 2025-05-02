import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import url from '../url';
import axios from 'axios';

const VideoGallery = () => {
  const { user } = useAuth();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserVideos = async (email) => {
    if (!email) return;

    setLoading(true);
    try {
      // const res = await fetch(`${url}/videos?email=${email}`);
      // const data = await res.json();
      // console.log(data);
      // setVideos(data); // ✅ Update videos state

      axios.get(`${url}/videos?email=${email}`,{withCredentials:true})
      .then(res=>{
        setVideos(res.data)
      })
    } catch (err) {
      console.error('Failed to fetch videos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchUserVideos(user.email);
    }
  }, [user]);

  // Group videos by course
  const groupVideosByCourse = () => {
    return videos.reduce((acc, video) => {
      const course = video.courseSelect;  // Assuming this field contains course name
      if (!acc[course]) {
        acc[course] = [];
      }
      acc[course].push(video);
      return acc;
    }, {});
  };

  const groupedVideos = groupVideosByCourse();

  const handleFullscreen = (videoElement) => {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
      videoElement.msRequestFullscreen();
    }
  };

  return (
    <div className="w[500px] md:w-[700px] lg:w-[1000px] mx-auto p-6 border">
      {loading && <p className="text-gray-600">Loading...</p>}

      {!loading && videos.length === 0 && (
        <p className="text-gray-500">No videos found for {user?.email}</p>
      )}

      {Object.keys(groupedVideos).length > 0 && (
        <div className="space-y-8">
          {Object.keys(groupedVideos).map((courseName, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-xl font-semibold">{courseName}</h3>
              <div className="space-y-4">
                {groupedVideos[courseName].map((video, index) => (
                  <div key={index} className="relative">
                    <video
                      controls
                      src={video.video}
                      className="w-full rounded shadow"
                      id={`video-${index}`}
                    />
                    <button
                      onClick={() => handleFullscreen(document.getElementById(`video-${index}`))}
                      className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-md opacity-75 hover:opacity-100 transition-opacity"
                    >
                      Fullscreen
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
