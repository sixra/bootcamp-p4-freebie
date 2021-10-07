import React, {useEffect} from "react";
import { filterPostedByUser } from '../../../../Redux/Actions/AdsAction'
import { useDispatch, useSelector } from 'react-redux'


const AdsByUser = ({ adInfo }) => {

  const ads = useSelector((state) => state.allAds.ads)
  const adsByUser = useSelector((state) => state.allAds.creator)
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user.result._id

  const byUser = ads
  .map((e) => {
    return e.creator
  })

  const {
    _id,
    title,
    creator
  } = adInfo;

  useEffect(() => {
    dispatch(filterPostedByUser(ads, userId))  }, [dispatch]); 

  return (
      <ul>


          {adsByUser.map((e) => (
          <li>{title}</li>
        ))}

      </ul>
  );
};

export default AdsByUser;