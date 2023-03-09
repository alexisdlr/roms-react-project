import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import useAuth from "../hooks/useAuth";

function ProtectedRoutes() {
  const { auth, cargando } = useAuth()

  if (cargando) return <Loader />
  return (
    <>
      <Navbar />
      {auth?._id || auth?.sub ? <Outlet /> : <Navigate to="/login" /> }
      <Footer />
    </>
  );
}

export default ProtectedRoutes;
