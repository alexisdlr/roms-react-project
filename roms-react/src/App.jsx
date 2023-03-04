import { BrowserRouter, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import SingleConsoleGame from "./pages/singleconsolegame/SingleConsoleGames";
import ConsolesPage from "./pages/consoles/ConsolesPage";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Games = lazy(() => import("./pages/games/Games"));
const Admin = lazy(() => import('./pages/admin/Admin'));

import "./style.scss";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import { ConsolesProvider } from "./context/ConsolesContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ConsolesProvider>
          <Routes>
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
                path="admin"
                element={
                  <Suspense fallback={<Loader />}>
                    <Admin />
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
              path="register"
              element={
                <Suspense fallback={<Loader />}>
                  <Register />
                </Suspense>
              }
            />
          </Routes>
        </ConsolesProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
