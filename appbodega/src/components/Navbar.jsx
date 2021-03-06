import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContex";
import Login from "../routes/Login";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img
          src="http://www.bailac.cl/wp-content/uploads/2013/05/logo.png"
          alt=""
          className="d-inline-block align-text-top"
        />
        <Link className="navbar-brand" to="/">
          Bodega
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li></li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Bodega
              </Link>
            </li>
            <li className="nav-item">
              {!user ? (
                <>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <Link className="btn" onClick={handleLogout} to="/login">
                    Logout
                  </Link>
                  {user.displayName}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
