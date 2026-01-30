import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
  return (
    <div
      style={{
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee",
      }}
    >
      <h2 style={{ margin: 0 }}>PricePilot</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <span style={{ cursor: "pointer" }}>Help</span>
        <ProfileDropdown />
      </div>
    </div>
  );
}
