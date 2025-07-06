function UserDetails({ age, location, profession }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Profession:</strong> {profession}</p>
    </div>
  );
}

export default UserDetails;
