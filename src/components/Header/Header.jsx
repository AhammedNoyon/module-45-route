import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  const container = {
    display: "flex",
    gap: "10px",
    alignItem: "center",
  };
  return (
    <div>
      <h3>NavBar</h3>
      <nav style={container}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Users">Users</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Header;
