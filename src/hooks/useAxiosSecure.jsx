import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const axiosSecure = axios.create({
    baseURL: 'https://great-learning-server-atiars-projects-57624e75.vercel.app',
    withCredentials: true, // ✅ Ensure cookies are sent automatically
  });

  // Request interceptor — NO token manually attached
  axiosSecure.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  );

  // Response interceptor for handling 401 and 403 errors
  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error.response?.status;

      if (status === 401) {
        await logOut();
        navigate('/auth/login');
      } else if (status === 403) {
        navigate('/unauthorized'); // Ensure this route exists in your frontend
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
