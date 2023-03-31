import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import useAuth from "../hooks/useAuth";

function ProtectedRoutes() {
  const { auth, cargando } = useAuth()

  return (
    <>
      <Navbar />
       <Outlet />
      <Footer />
    </>
  );
}

export default ProtectedRoutes;
