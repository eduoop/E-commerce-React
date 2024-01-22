import { AppRoutes } from "./routes/app.routes";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRoutes />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
