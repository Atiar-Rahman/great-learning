// hooks/useAxiosPublic.js
import axios from 'axios';

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: 'http://localhost:3000',  // Backend URL
    withCredentials: true,  // Important for cookie-based auth
  });

  return axiosPublic;
};

export default useAxiosPublic;
