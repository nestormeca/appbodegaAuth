import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContex";

import "./signin.css";

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
    <body className="text-center">
      <main className="form-signin">
        <form>
          <img
            className="mb-4"
            src="http://www.bailac.cl/wp-content/uploads/2013/05/logo.png"
          />
          <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>

          {/* <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Correo Electrónico</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Contraseña</label>
          </div> */}

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
        </form>
        <button
          className="w-100 btn btn-lg btn-primary"
          onClick={handleGoogleSignin}
        >
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </main>
    </body>

    // <div className="container">
    //   <section className="vh-100 gradient-custom">
    //     <div className="container py-2 h-50">
    //       <div className="row d-flex justify-content-center align-items-center h-100">
    //         <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    //           <div className="card text-dark" style={{ borderRadius: 2 }}>
    //             <div
    //               className="card-body p-5 text-center"
    //               // style={{
    //               //   backgroundImage: `url(
    //               //     "http://www.bailac.cl/wp-content/uploads/2013/07/1992-b.jpg")`,
    //               // }}
    //             >
    //               <div className="mb-md-5 mt-md-4 pb-5">
    //                 <h2 className="fw-bold mb-2">Ingresa a Bodega</h2>
    //                 <button
    //                   className="btn btn-outline-dark btn-lg px-5"
    //                   onClick={handleGoogleSignin}
    //                 >
    //                   Login
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Login;
