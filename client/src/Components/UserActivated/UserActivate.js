import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { activateUser } from "../../Api/activate/user/hash.js";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import "./UserActivate.scss";
import error from "./images/error.gif";
import success from "./images/success.gif";

const UserActivate = () => {
  const { id } = useParams();
  const [state, setState] = useState({ message: "pending..." });

  useEffect(() => {
    async function fetchData() {
      const result = await activateUser(id);
      setState({ message: result.message });
    }
    fetchData();
  }, [id]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth");
  };

  if (state.message === "Validation Done!") {
    return (
      <section className="userActivationSection">
        <div className="successContainer">
          <div className="successBox">
            <img className="successIcon" src={success} alt="" />
            <div className="successMessage">
              <h1 className="successAlert">YAY!</h1>
              <p>You have successfully been Verified, you can now sign in!</p>
            </div>
            <button onClick={handleClick} className="successButtonBox">
              Sign in
            </button>
          </div>
        </div>
      </section>
    );
  } else if (state.message === "Cannot Validate an User!") {
    return (
      <section className="userActivationSection">
        <div className="errorContainer">
          <div className="errorBox">
            <img className="errorIcon" src={error} alt="" />
            <div className="errorMessage">
              <h1 className="errorAlert">OOPS!</h1>
              <p>Something went wrong, and we could not Verify you!</p>
            </div>
            <button onClick={handleClick} className="errorButtonBox">
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="userActivationSection">
        <div className="loadingOutcome">
          <LoadingSpinner />
        </div>
      </section>
    );
  }
};

export default UserActivate;
