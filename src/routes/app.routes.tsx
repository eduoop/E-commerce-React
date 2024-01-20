import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart/Cart";

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
        <Route
          path="/cart"
          element={
              <Cart />
          }
        >
        </Route>
      </Routes>
    </Router>
  );
};
