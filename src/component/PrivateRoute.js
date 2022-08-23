import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children}) => {
  const isAuthenticated = localStorage.getItem('token');

  if (Boolean(isAuthenticated) ) {
    return children
  }
    
  return <Navigate to="/login" />
}