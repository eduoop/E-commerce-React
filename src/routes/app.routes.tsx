import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        >
        </Route>
      </Routes>
    </Router>
  );
};
