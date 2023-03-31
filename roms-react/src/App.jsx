import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import { ConsolesProvider } from "./context/ConsolesContext";
import { GamesProvider } from "./context/GamesContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
