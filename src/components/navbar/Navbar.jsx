import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo/logo.jpg"; // ✅ add your logo

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        {/* ✅ Logo */}
        <Link to="/" className="navLogo">
          <img src={logo} alt="LamaBooking" className="logoImg" />
          {/* <span className="logoText">LamaBooking</span> */}
        </Link>

        {/* ✅ Links / Buttons */}
        <div className="navItems">
          {user ? (
            <>
              <span className="welcomeText">Hi, {user.username}</span>
              <button onClick={handleLogout} className="navButton logoutBtn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="navButton">Register</button>
              </Link>
              <Link to="/login">
                <button className="navButton loginBtn">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
