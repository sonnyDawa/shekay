import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from './context';
import { Navigate } from 'react-router-dom';


    const ProtectedRoutes = ({ children }) => {
        const { users,verfied,paid } = UseAuth();
    
     let daw = false
     


        if (!users) {
          return <Navigate to="/signin" />;
        }
    
        return children
      };

export default ProtectedRoutes;
