import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="login-wrapper">
      {/* 🌄 Animated Background */}
      <div className="login-bg"></div>

      {/* 💎 Center Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <form onSubmit={handleLogin} className="login-card">

          <h2>
            Welcome Back <span>👋</span>
          </h2>
          <p>Login to continue</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          <Link to="/signup">
            Don't have an account? Sign up
          </Link>

        </form>
      </div>
    </div>
  );
}
