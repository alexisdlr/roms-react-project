import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import SingleConsoleGame from "../pages/singleconsolegame/SingleConsoleGames";
import ConsolesPage from "../pages/consoles/ConsolesPage";
import ProtectedRoutes from "../layouts/ProtectedRoutes";
import Loader from "./Loader/Loader";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/register/Register"));
const Games = lazy(() => import("../pages/games/Games"));
const ConfirmAccount = lazy(() =>
  import("../pages/confirmAccount/ConfirmAccount")
);
const Profile = lazy(() => import("../pages/profile/Profile"));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="perfil"
            element={
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="juegos/:id"
            element={
              <Suspense fallback={<Loader />}>
                <SingleConsoleGame />
              </Suspense>
            }
          />
          <Route
            path="consolas"
            element={
              <Suspense fallback={<Loader />}>
                <ConsolesPage />
              </Suspense>
            }
          />
          <Route
            path="juegos"
            element={
              <Suspense fallback={<Loader />}>
                <Games />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="confirmar/:token"
          element={
            <Suspense fallback={<Loader />}>
              <ConfirmAccount />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<Loader />}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
