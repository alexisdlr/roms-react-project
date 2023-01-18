import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./style.scss";

import { useContext, lazy, Suspense } from "react";
import { AuthContext } from "./context/AuthContext";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Game = lazy(() => import("./pages/game/Game"));


function App() {
  const { currentUser } = useContext(AuthContext);

  const Layout = () => {
    return (
      <div className={'Layout'}>
        <Outlet />
      </div>
    );
  };
  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <Navbar />
          <Layout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />} >
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/game/:name",
          element: (
            <Suspense fallback={<Loader />} >

              <Game />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loader />} >

          <Login />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense fallback={<Loader />}>
          <Register />

        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
