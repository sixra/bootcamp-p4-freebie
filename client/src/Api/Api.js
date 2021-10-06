import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

//////// API FOR ADS ////////

export const fetchAds = () => API.get("api/items");
export const postAd = (newAd) => API.post("api/items", newAd);


//////// API FOR SIGN IN - SIGN UP ////////

export const signIn = (formData) => API.post('api/user/signin', formData);
export const signUp = (formData) => API.post('api/user/signup', formData);

//////// API FOR RESET PASSWORD ////////

// export async function resetPw (hash) {
//   const response = await fetch(
//     `http://localhost:4000/api/user/reset/${hash}}`
//   );
// }
