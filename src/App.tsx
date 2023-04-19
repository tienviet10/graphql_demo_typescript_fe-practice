import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import usersService from "./services/usersService";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const usersPage = await usersService
      .getAllUsers(
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJleHAiOjE2ODI0MzYzOTl9.oW1D-39uSB2BLMtJZQQhwyPWH8KgiTJHRhUY76incNo"
      )
      .catch((err) => {
        console.log("Error: ", err);
      });
    const loginPage = await usersService.login("v@gmail.com", "password");
    if (usersPage) setUsers(usersPage.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
