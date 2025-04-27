import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname}  to={"/auth/login"}  />;
};

export default PrivateRoutes;
