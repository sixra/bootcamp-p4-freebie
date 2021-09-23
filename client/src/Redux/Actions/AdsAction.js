import * as api from "../../Api/Api";
import { adsType } from "../ActionTypes";

export const getAds = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAds();
    dispatch({ type: adsType.FETCH_ADS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
