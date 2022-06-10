import { useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserProvider";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const { loginWithGoogle } = useAuth();

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <Navbar />
      {setUser ? <p>En linea</p> : <p>Fuera de Linea</p>}

      <div className="container">
        <button onClick={handleGoogleSignin}>Google Login</button>
      </div>
    </div>
  );
};

export default Login;
