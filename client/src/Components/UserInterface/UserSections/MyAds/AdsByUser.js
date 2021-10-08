import React from "react";
import "./AdsByUser.scss"
import { useDispatch } from "react-redux";
import { deleteAdPostedByUser } from "../../../../Redux/Actions/AdsAction";

const AdsByUser = ({ adInfo}) => {
  const dispatch = useDispatch()
  const {
    image,
    _id,
    title,
    category,
  } = adInfo;

  return (
    <div className="adsByUserContainer">
      <ul className="adsByUserList">
         <li className="listItemImageContainer">        
           <img className="listItemImage" src={image} width="150px" alt="ad-img" />
         </li>
         <li>{_id}</li>
         <li className="listItemCategory">{category}</li>
      </ul>
      <div>
        <button>View</button>
        <button>Edit</button>
        <button onClick={() => dispatch(deleteAdPostedByUser(_id))}>Delete</button>
      </div>
    </div>
  );
};

export default AdsByUser;