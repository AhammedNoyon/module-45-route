import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h3>this is Home component</h3>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
