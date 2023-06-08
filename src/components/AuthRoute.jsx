import { useAuth } from "../context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Dash_sidebar from './Dash_sidebar'

const AuthRoute = () => {
  const { user } = useAuth();
  const location = useLocation();
  // console.log(user);

  return user ? (
    <>
      <Dash_sidebar />
      <Outlet />
    </>
  ) : (
    <Navigate to={"/Login"} replace state={{ path: location.pathname }} />
  );
}
export default AuthRoute;




// return user && user.user_metadata.name ? (
//   <Outlet />
// ) : (
//   <Navigate to={"/login"} replace state={{ path: location.pathname }} />
// );