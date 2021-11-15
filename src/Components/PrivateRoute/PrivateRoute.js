import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';



  
const PrivateRoute = ({children, ...rest}) => {
   const {user , isLoading}= useAuth()

   if(isLoading) {
       return (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <Spinner animation="border" variant="info" />
                </div>
       )
   }

    return (
        <div>
         
           <Route
            {...rest}
            
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
        
        </div>
    );
};

export default PrivateRoute;