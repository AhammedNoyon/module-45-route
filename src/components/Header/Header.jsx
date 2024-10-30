import { Link } from "react-router-dom";

const Header = () => {
  const container = {
    display: "flex",
    gap: "10px",
  };
  return (
    <div>
      <h3>NavBar</h3>
      <nav style={container}>
        <Link to="/">Home</Link>
        <Link to="/Users">Users</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
