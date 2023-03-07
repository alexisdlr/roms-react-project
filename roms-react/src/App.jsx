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
const ConfirmAccount = lazy(() => import("./pages/confirmAccount/ConfirmAccount"))
const Profile = lazy(() => import("./pages/profile/Profile"))

import ProtectedRoutes from "./layouts/ProtectedRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import { ConsolesProvider } from "./context/ConsolesContext";
import "./style.scss";

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
                <Suspense fallback={<Loader />} >
                  <ConfirmAccount />
                </Suspense>}
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
