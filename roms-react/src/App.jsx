import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import { ConsolesProvider } from "./context/ConsolesContext";
import "./style.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ConsolesProvider>
         <AnimatedRoutes />
        </ConsolesProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
