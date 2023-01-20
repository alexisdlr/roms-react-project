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
import SingleConsoleGame from "./pages/singleconsolegame/SingleConsoleGames";
import ConsolesPage from "./pages/consoles/ConsolesPage";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Games = lazy(() => import("./pages/games/Games"));


function App() {
  const { currentUser } = useContext(AuthContext);


  const Layout = () => {
    return (
      <div className={'Layout'}>
        <Outlet />
      </div>
    );
  };
  const ProtectedRoutes = ({ currentUser , children }) => {
    console.log(!currentUser);
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes currentUser={currentUser}>
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
          path: "/juegos/:id",
          element: (
            <Suspense fallback={<Loader />} >
              <SingleConsoleGame />
            </Suspense>
          ),
        },
        {
          path: "/consolas",
          element: (
            <Suspense fallback={<Loader />} >
              <ConsolesPage />
            </Suspense>
          ),
        },
        {
          path: "/juegos",
          element: (
            <Suspense fallback={<Loader />} >
              <Games />
            </Suspense>
          ),
        }
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
