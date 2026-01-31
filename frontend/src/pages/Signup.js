import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch(`${API}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        phone
      })
    });

    const data = await res.json();

    if (data.success) navigate("/login");
    else alert(data.message);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-bg"></div>

      <form onSubmit={handleSignup} className="glass fade-in">

        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">
          Join and save smarter today 🚀
        </p>

        <input
          className="auth-input"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="auth-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <input
          className="auth-input"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button className="primary-btn">
          Sign up
        </button>

        <Link to="/login" className="auth-link">
          Already have an account? Login
        </Link>

      </form>
    </div>
  );
}
