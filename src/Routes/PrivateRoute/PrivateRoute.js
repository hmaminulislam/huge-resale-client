import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    if(loader) {
        return <div>Loading...</div>;
    }
    if(user?.uid) {
        return children
    }
    
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;