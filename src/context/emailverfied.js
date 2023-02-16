import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from './context';
import { Navigate } from 'react-router-dom';


    const EmailVervied = ({ children }) => {
        const { users,verfied,paid } = UseAuth();
    
     let daw = false
     


        if (users.EmailVervied == false) {
          return (
            <div>
                verify your account
            </div>
          );
        }
    
        return children
      };

export default EmailVervied;
