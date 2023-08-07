import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useStoreManager from '../Hooks/useStoreManager';
import Loader from '../components/Loader/Loader';

const StoreManagerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isStoreManager, isStoreManagerLoading] = useStoreManager()
    const location = useLocation();

    if (loading || isStoreManagerLoading) {
        return <Loader />
    }
    if (user && isStoreManager) {
        return children;
    }

    return <Navigate to='/signIn' state={{ from: location }} replace></Navigate>
};

export default StoreManagerRoute;