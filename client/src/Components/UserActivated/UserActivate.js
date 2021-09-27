import React, { useEffect, useState } from "react";
import "./UserActivate.scss";
import { activateUser } from "../../Api/activate/user/hash.js";
import error from "./images/error.gif"
import success from "./images/success.gif"

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
  if (state.message === "Validation Done!") {
    return (
      <div className="successContainer">
        <div className="successBox">
            <img className="successIcon" src={success} alt="" />
            <div className="successMessage">
              <h1 className="successAlert">YAY!</h1>
              <p>You have successfully been Verified, you can now sign in!</p>
            </div>
            <button class="successButtonBox">
              Sign in
            </button>
        </div>
      </div>
    );
  } else if (state.message === "Cannot Validate an User!") {
    return (
      <div className="errorContainer">
        <div className="errorBox">
            <img className="errorIcon" src={error} alt="" />
            <div className="errorMessage">
              <h1 className="errorAlert">OOPS!</h1>
              <p>Something went wrong, and we could not Verify you!</p>
            </div>
            <button class="errorButtonBox">
              try again
            </button>
        </div>
      </div>
    );
  } else {
    return (
    <h1>Pending...</h1>
    );
  }
};

export default UserActivate;