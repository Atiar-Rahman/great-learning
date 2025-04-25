import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';



const VideoGallery = () => {
  const { user } = useAuth();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserVideos = async (email) => {
    if (!email) return;

    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:3000/videos?email=${email}`);
      setVideos(res.data);
    } catch (err) {
      console.error('Failed to fetch videos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch when user is available
  useEffect(() => {
    if (user?.email) {
      fetchUserVideos(user.email);
    }
  }, [user]);

  return (
    <div className="max-w-lg mx-auto p-6">
      {loading && <p className="text-gray-600">Loading...</p>}

      {!loading && videos.length === 0 && (
        <p className="text-gray-500">No videos found for {user?.email}</p>
      )}

      {videos.length > 0 && (
        <div className="space-y-4">
          {videos.map((v, i) => (
            <video key={i} controls src={v.videoUrl} className="w-full rounded shadow" />
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
