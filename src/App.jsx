import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./Route";
import "simplebar-react/dist/simplebar.min.css";
import "../public/assets/css/style.css";
import "./scss/style.scss";
import "./scss/responsive.scss";
import Loader from "./Components/Loader";

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <BrowserRouter basename="/">
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
