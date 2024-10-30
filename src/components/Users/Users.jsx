import { useLoaderData } from "react-router-dom";
import "./user.css";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="">
      <h3>Total Users:{users.length}</h3>
      <div className="users-container">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
