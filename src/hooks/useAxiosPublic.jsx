import axios from 'axios';

// Create a custom hook for Axios public API requests
const useAxiosPublic = () => {
    // Get token from localStorage, sessionStorage, or cookies (depending on where you store it)
    const token = localStorage.getItem('authToken');  // Replace with your token storage method

    const axiosInstance = axios.create({
        baseURL: 'https://great-learning-server-atiars-projects-57624e75.vercel.app', // replace with your actual API base URL
        headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '', // Add the token to Authorization header if available
        },
    });

    return axiosInstance;
};

export default useAxiosPublic;
