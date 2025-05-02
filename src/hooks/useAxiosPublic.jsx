// hooks/useAxiosPublic.js
import axios from 'axios';

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: 'https://great-learning-server-six.vercel.app',  // Backend URL
    withCredentials: true,  // Important for cookie-based auth
  });

  return axiosPublic;
};

export default useAxiosPublic;
