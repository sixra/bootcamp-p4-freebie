import React, { useEffect, useState } from "react";

import { activateUser } from "../Api/activate/user/hash.js";

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
    return <div>You have been succesfuly activated. You can login now!</div>;
  } else if (state.message === "Cannot Validate an User!") {
    return <h1 style={{ color: "red" }}>Cannot Validate a User!</h1>;
  } else {
    return <h1>Pending...</h1>;
  }
};

export default UserActivate;
