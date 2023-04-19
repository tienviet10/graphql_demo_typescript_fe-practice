import { useEffect, useState } from "react";
import { Button } from "antd";
import usersService from "../services/usersService";
const Home = () => {
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
    <>
      <Button type="primary">Hello</Button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
