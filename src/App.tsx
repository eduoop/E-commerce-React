import { AppRoutes } from "./routes/app.routes";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <AppRoutes />
      <Outlet />
    </>
  );
}

export default App;
