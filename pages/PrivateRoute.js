import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
// import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children,}) => {
  
// by using rest operator taking all values 
  // console.log(children)
  // console.log(rest) 
  const {user} = useAuth0()
  // by using spread operator spreading all values 
 if(!user){
     return <Navigate to ="/" />
 }
 return children;
};
export default PrivateRoute;

// ...rest is rest operator, trying to grab all children that passed through Private Route 
