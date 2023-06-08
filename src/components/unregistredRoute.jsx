import { useAuth } from "../context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const UnRegistredRoute = () => {
  const { user } = useAuth();
  const { session } = useAuth();
  const location = useLocation();
  // console.log(user);

  if (user) {
    return <Outlet />
  } else {
    return <Navigate to={"/"} replace state={{ path: location.pathname }} />
  }


};

export default UnRegistredRoute;




// return user && user.user_metadata.name ? (
//   <Outlet />
// ) : (
//   <Navigate to={"/login"} replace state={{ path: location.pathname }} />
// );