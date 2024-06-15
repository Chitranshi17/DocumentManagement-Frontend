import useAuthStatus from "../hooks/useAuthStatus";
import { Navigate, Outlet } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const PrivateRoutes = () => {
  const { isLoggedIn, checkStatus } = useAuthStatus();

  if (checkStatus) {
    return <LoadingPage />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
