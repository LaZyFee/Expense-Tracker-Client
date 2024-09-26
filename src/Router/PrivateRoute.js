import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Authentication/auth';

const PrivateRoute = () => {
    const { isAuthenticated, isCheckingAuth, checkAuth } = useAuth();

    // Call checkAuth on component mount to ensure user is authenticated
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // If authentication is still being checked, show loading indicator
    if (isCheckingAuth) {
        return <div>Loading...</div>;
    }

    // If not authenticated, redirect to the login page
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
