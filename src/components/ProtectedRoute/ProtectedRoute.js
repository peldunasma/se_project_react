import { Redirect } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    // If user isn't logged in, return a Navigate component that sends the user to /login
    return <Redirect to="/login" replace />;
  }
    
  // Otherwise, render the protected route's child component.
  return children;
}

export default ProtectedRoute;