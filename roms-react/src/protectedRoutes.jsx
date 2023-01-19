import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoutes = ({ currentUser ,children }) => {
  const navigate = useNavigate()
  console.log('desde protectedRoutes', currentUser)
  if (!currentUser) {
    navigate('/login');
    return
 }
  useEffect(() => {
  navigate('/')
  }, [] )

  return children;
};
