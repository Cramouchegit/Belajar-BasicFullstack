import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const endpoint = "http://localhost:3001/api/v1/users";
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      -<h1>TESTING</h1>
      {users?.data?.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.username}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
