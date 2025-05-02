import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // Create an axios instance
  const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000', // Your API's base URL
    withCredentials: true,  // Send cookies with every request (necessary for HttpOnly cookies)
  });

  // Set up the request interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      // No need to add token to headers manually since the HttpOnly cookie will be sent automatically
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Set up the response interceptor to handle 401 or 403 errors
  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        // If the user is unauthorized or forbidden, log out the user

        // Call the logOut function from useAuth
        await logOut();

        // Optionally, remove cookies manually (if your backend doesn't invalidate them automatically)
        // For HttpOnly cookies, this will not work as the cookies are managed by the browser
        // However, if your backend offers a logout endpoint, you can call it to invalidate the token
        // await axios.post('/logout'); // Uncomment if your backend has a logout endpoint

        // Redirect to the login page
        navigate('/auth/login');
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
