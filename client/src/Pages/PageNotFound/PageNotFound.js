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
            <br />
            PAGE NOT FOUND
            <br />
            <br />
            Go back to{" "}
            <Link className="pageNotFoundGlitchLink" to="/">
              Home{" "}
            </Link>
            Page
          </h2>
        </div>
      </div>
      <div className="pageNotFoundGameContainer">
        <Link to="/" className="navLogo">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
