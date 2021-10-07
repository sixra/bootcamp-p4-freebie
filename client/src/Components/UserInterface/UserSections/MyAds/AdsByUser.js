import React from "react";
import "./AdsByUser.scss"

const AdsByUser = ({ adInfo }) => {

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
         <li>{title}</li>
         <li className="listItemCategory">{category}</li>
      </ul>
      <div>
        <button>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default AdsByUser;