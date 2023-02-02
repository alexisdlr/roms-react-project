import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import useAuth from "../hooks/useAuth";

function ProtectedRoutes() {
  const { auth, cargando } = useAuth()

  if (cargando) return '...Cargando'
  console.log(auth);
  return (
    <>
      <Navbar />
      {auth?.id || auth?.sub ? <Outlet /> : <Navigate to="/login" /> }
    </>
  );
}

export default ProtectedRoutes;
