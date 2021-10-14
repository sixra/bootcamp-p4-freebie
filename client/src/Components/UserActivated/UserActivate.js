import React, { useEffect, useState } from "react";
import "./UserActivate.scss";
import { activateUser } from "../../Api/activate/user/hash.js";
import error from "./images/error.gif";
import success from "./images/success.gif";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const UserActivate = (props) => {
  const [state, setState] = useState({ message: "pending..." });
  useEffect(() => {
    async function fetchData() {
      const result = await activateUser(props.match.params.id);
      console.log(result);
      setState({ message: result.message });
    }
    fetchData();
  }, [props.match.params.id]);
  console.log(props.match.params.id);

  const history = useHistory();
  const handleClick = () => {
    history.push("/auth");
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
            <button onClick={handleClick} class="successButtonBox">
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
            <button onClick={handleClick} class="errorButtonBox">
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
