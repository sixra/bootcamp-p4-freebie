import axios from "axios";

export default async function activateUser(req, res) {
  const hash = req.query.hash;
  console.log(hash);

  if (!hash) {
    return res.status(401).json({ message: "Cannot Validate an User!" });
  }

  const response = await fetch(
    `http://localhost:5000/api/activate/user/${hash}`
  );
  console.log("This is response from api", response);
  if (response.status >= 400) {
    return res.status(401).json({ message: "Cannot Validate an User!" });
  } else {
    res.writeHead(307, { Location: "/users/activated" });
    res.end();
  }
}

// export const activateUser = async (req, res) => {
//   const hash = req.query.hash;
//   const URL = `http://localhost:5000/api/activate/user/${hash}`;

//   try {
//     const { data } = await axios.get(URL);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log({ error: "This is fetch error" });
//   }
// };

// const url = "http://localhost:5000/api/activate/user";

// export const activateUser = (hash) => axios.get(`${url}/${hash}`);
