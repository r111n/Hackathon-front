import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Application from "./pages/company/Application";
// import { useUserStore } from "./store/UserStore";
import Applicants from "./pages/company/Applicants";
import Login from "./pages/auth/Login";
import Home from "./pages/company/Home";
import Jobs from "./pages/company/Jobs";
import Interviews from "./pages/company/Interviews";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()


function App() {
  // const { user } = useUserStore();
  return (
    <>
      <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/application" element={<Application />}>
                <Route path="" element={<Home />} />
                <Route path="applicants" element={<Applicants />} />
                <Route path="jobs" element={<Jobs />} />
                <Route path="interviews" element={<Interviews />} />
              </Route>
            </Routes>
          </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
