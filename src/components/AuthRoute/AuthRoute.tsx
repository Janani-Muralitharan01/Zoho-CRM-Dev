import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthRoute = () => (
  <div>{!localStorage.getItem("token") ? <Navigate to="/" /> : <Outlet />}</div>
);

export default AuthRoute;
