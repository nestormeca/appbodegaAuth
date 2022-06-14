import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContex";

const Login = () => {
  const [error, setError] = useState();
  const { loginWithGoogle } = useAuth();

  const navigate = useNavigate();

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
      <section className="vh-100 gradient-custom">
        <div className="container py-2 h-50">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card text-dark" style={{ borderRadius: 2 }}>
                <div
                  className="card-body p-5 text-center"
                  style={{
                    backgroundImage: `url(
                      "http://www.bailac.cl/wp-content/uploads/2013/07/1992-b.jpg")`,
                  }}
                >
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2">Ingresa a Bodega</h2>
                    <button
                      className="btn btn-outline-dark btn-lg px-5"
                      onClick={handleGoogleSignin}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
