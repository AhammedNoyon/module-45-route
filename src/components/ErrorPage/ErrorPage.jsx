import { useNavigate, useRouteError } from "react-router-dom";
import "../Users/user.css";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate(`/`);
  };
  return (
    <div>
      <h3>Oops</h3>
      <p>
        <strong>{error.status}</strong>
      </p>
      <p>
        <i>{error.statusText}</i>
      </p>
      <p>
        {error.status && (
          <div>
            <h3>Sorry, this page is found</h3>
            <p>please back to home and switch the right page</p>
            <button className="details-btn" onClick={handleHome}>
              Home
            </button>
          </div>
        )}
      </p>
    </div>
  );
};

export default ErrorPage;
