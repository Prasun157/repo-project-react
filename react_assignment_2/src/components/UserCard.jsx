import UserDetails from "./UserDetails";

function UserCard({ user }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      width: "300px",
      marginTop: "10px"
    }}>
      <h2>{user.name}</h2>
      <UserDetails age={user.age} location={user.location} profession={user.profession} />
    </div>
  );
}

export default UserCard;
