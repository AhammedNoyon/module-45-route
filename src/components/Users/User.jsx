import "./user.css";
import { Link, useNavigate, useParams } from "react-router-dom";
const User = ({ user }) => {
  // console.log(user);
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/user/${id}`);
  };
  const {
    id,
    name,
    email,
    address: { street },
  } = user;

  return (
    <div className="user-container ">
      <h3>name: {name}</h3>
      <p>
        <small>email: {email}</small>
      </p>
      <p>
        <small>address: {street}</small>
      </p>
      <Link to={`/user/${id}`}>Show details</Link>
      <button onClick={handleDetails} className="details-btn">
        details by click
      </button>
    </div>
  );
};

export default User;
