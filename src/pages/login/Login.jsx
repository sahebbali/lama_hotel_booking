import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Log in to book your next stay</p>

        <input
          type="text"
          placeholder="Enter your username"
          id="username"
          onChange={handleChange}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          onChange={handleChange}
          className="login-input"
        />

        <button
          disabled={loading}
          onClick={handleClick}
          className="login-button"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <span className="login-error">{error.message}</span>}

        <p className="login-footer">
          Don’t have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
