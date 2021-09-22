import axios from "axios";

//========================> Dont touch ! This is just temporary <================//
// const URLrapid =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// export const getPlacesData = async (sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(URLrapid, {
//       params: {
//         bl_latitude: sw.lat,
//         tr_latitude: ne.lat,
//         bl_longitude: sw.lng,
//         tr_longitude: ne.lng,
//       },
//       headers: {
//         "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//         "x-rapidapi-key": "c82b03e113mshc25547e263cf173p16f138jsn875ac347498b",
//       },
//     });
//     return data;
//   } catch (error) {
//     console.log({ error: "This is fetch error" });
//   }
// };

const URL = "http://localhost:4000/api/items";

export const getItemsData = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log({ error: "This is fetch error" });
  }
};

//////// API FOR ADS ////////

const urlAds = "http://localhost:4000/api/items";

export const fetchAds = () => axios.get(urlAds);
