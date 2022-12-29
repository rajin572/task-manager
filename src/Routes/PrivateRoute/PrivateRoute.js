import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <h3 className='text-center text-3xl'>Data Loading</h3>
    }
    if(!user){
        return <Navigate to='/signin' state={{from: location}} replace></Navigate>
    }
    return children
};

export default PrivateRoute;