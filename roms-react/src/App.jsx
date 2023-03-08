import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import { ConsolesProvider } from "./context/ConsolesContext";
import { GamesProvider } from "./context/GamesContext";
import "./style.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ConsolesProvider>
          <GamesProvider>
            <AnimatedRoutes />
          </GamesProvider>
        </ConsolesProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
