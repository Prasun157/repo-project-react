import UserCard from "./components/UserCard";

function App() {
  const user = {
    name: "Prasun",
    age: 23,
    location: "India",
    profession: "Frontend Developer"
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Profile</h1>
      <UserCard user={user} />
    </div>
  );
}

export default App;
