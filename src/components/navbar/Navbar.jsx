import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const handelLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user"); // ✅ Clear storage
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Register</button>
            </Link>
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
        {user && (
          <div className="navItems">
            <span className="navButton">{user.username}</span>

            <button onClick={handelLogout} className="navButton">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
