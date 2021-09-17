import axios from "axios";

//////// API FOR ADS ////////

const urlAds = "http://localhost:5000/api/items";

export const fetchAds = () => axios.get(urlAds);
