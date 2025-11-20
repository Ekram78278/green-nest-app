import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/Spinner';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location= useLocation();

    if(loading){
        return <Spinner></Spinner>
    } 
    if (user && user?.email){
        return(children);
    } return <Navigate state={location.pathname} to={'/login'}></Navigate>

   
};

export default PrivateRoute;