import { useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserProvider";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="container">
      <Navbar />
      {setUser ? <p>En linea</p> : <p>Fuera de Linea</p>}
      Login
    </div>
  );
};

export default Login;
