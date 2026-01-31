import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileDropdown.css"; // only if this file exists

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
const name = user?.name || "User";


  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", fontWeight: 500 }}
      >
        👤 {name} ▼
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "130%",
            width: "220px",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <div style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
            <div style={{ fontSize: "12px", color: "#777" }}>Hello,</div>
            <strong>{name}</strong>
          </div>

          <MenuItem label="Profile" onClick={() => navigate("/profile")} />
          <MenuItem label="Settings" />
          <MenuItem label="Logout" danger onClick={logout} />
        </div>
      )}
    </div>
  );
}

function MenuItem({ label, onClick, danger }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "12px",
        cursor: "pointer",
        color: danger ? "red" : "#333",
      }}
    >
      {label}
    </div>
  );
}
