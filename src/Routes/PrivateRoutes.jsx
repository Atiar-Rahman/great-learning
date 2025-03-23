import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to='/auth/login' state={location?.pathname} replace></Navigate>
};

export default PrivateRoutes;
