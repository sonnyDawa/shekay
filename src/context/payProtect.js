import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from './context';
import { Navigate } from 'react-router-dom';


    const Protected = ({ children }) => {
        const { users,verfied,paid } = UseAuth();
    
    //  let paid = true
     


        if (paid) {
          return <Navigate to="/account" />;
        }
    
        return children
      };

export default Protected;
