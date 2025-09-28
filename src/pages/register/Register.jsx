import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
    img: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // 🔹 Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  // 🔹 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/auth/register", user); // API endpoint
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="register-card">
        <h1 className="register-title">Create an Account</h1>
        <p className="register-subtitle">
          Join us to book your next hotel stay
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            required
            className="register-input"
          />

          <input
            type="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
            className="register-input"
          />

          <input
            type="text"
            id="country"
            placeholder="Country"
            value={user.country}
            onChange={handleChange}
            required
            className="register-input"
          />

          <input
            type="text"
            id="city"
            placeholder="City"
            value={user.city}
            onChange={handleChange}
            required
            className="register-input"
          />

          <input
            type="text"
            id="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
            required
            className="register-input"
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
            className="register-input"
          />

          <input
            type="text"
            id="img"
            placeholder="Profile Image URL (optional)"
            value={user.img}
            onChange={handleChange}
            className="register-input"
          />

          <button type="submit" disabled={loading} className="register-button">
            {loading ? "Registering..." : "Register"}
          </button>

          {error && <span className="register-error">{error}</span>}
        </form>

        <p className="register-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
