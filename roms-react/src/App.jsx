import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import { ConsolesProvider } from "./context/ConsolesContext";
import { GamesProvider } from "./context/GamesContext";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ConsolesProvider>
          <GamesProvider>
            <ToastContainer theme="dark" />
            <AnimatedRoutes />
          </GamesProvider>
        </ConsolesProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
