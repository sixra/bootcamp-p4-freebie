import axios from "axios";

const API = axios.create({ baseURL: "/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchAds = () => API.get("api/items");
export const fetchAd = (id) => API.get(`api/items/${id}`);
export const postAd = (newAd) => API.post("api/items", newAd);
export const deleteAd = (_id) => API.delete(`api/items/${_id}`);
export const updateAd = (_id, updateItem) =>
  API.patch(`api/items/${_id}`, updateItem);

export const signIn = (formData) => API.post("api/user/signin", formData);
export const signUp = (formData) => API.post("api/user/signup", formData);

export const updateUser = (user) => API.patch("api/user/update", user);
