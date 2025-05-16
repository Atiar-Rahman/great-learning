import axios from 'axios';

const useAxiosPublic = () => {
    const axiosInstance = axios.create({
        baseURL: 'https://great-learning-server-atiars-projects-57624e75.vercel.app', // Your API base URL
        // baseURL: 'http://localhost:3000', // Your API base URL
        withCredentials: true, // 👈 Ensures cookies are sent with each request
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return axiosInstance;
};

export default useAxiosPublic;
