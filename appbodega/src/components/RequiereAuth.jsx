import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const RequiereAuth = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequiereAuth;
