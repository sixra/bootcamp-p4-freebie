import axios from "axios";

//////// API FOR ADS ////////

const urlAds = "https://ecommerce-reviews.herokuapp.com/api/reviews";

export const fetchAds = () => axios.get(urlAds);
