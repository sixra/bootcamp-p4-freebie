import { Link } from "react-router-dom";
import "./PageNotFound.scss";
import logo from "./freebie-logo.png";

function PageNotFound() {
  return (
    <div className="pageNotFoundContainer">
      <div className="pageNotFoundTitleContainer">
        <div>
          <h2 className="pageNotFoundGlitchTitle">
            404
            <br />
            PAGE NOT FOUND
            <br />
            Go back to
            <Link className="pageNotFoundGlitchLink" to="/">
              Home
            </Link>
            Page
            <br />
          </h2>
        </div>
      </div>
      <div className="pageNotFoundGameContainer">
        <Link to="/" className="navLogo">
          <img src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
