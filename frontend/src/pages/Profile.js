export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <h2>Please login</h2>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Profile</h1>

      <p className="mt-4"><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
    </div>
  );
}
