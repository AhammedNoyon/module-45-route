import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, username, email, phone, website } = user;
  const { userId } = useParams();
  console.log(userId);
  return (
    <div>
      <h3>name: {name}</h3>
      <p>
        <small>UserId: {username}</small>
      </p>
      <p>email: {email}</p>
      <p>
        <small>Phone: {phone}</small>
      </p>
      <p>
        <small>visit Us: {website}</small>
      </p>
      <Link to="/Users">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default UserDetails;
