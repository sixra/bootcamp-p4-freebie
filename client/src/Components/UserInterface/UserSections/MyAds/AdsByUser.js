import React from "react";
import "./AdsByUser.scss";
import { useDispatch } from "react-redux";
import { deleteAdPostedByUser } from "../../../../Redux/Actions/AdsAction";
import { BsEye } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const AdsByUser = ({ adInfo }) => {
  const dispatch = useDispatch();
  const { image, _id, title, category } = adInfo;

  return (
    <div className="adsByUserContainer">
      <ul className="adsByUserList">
        <li className="listItemImageContainer">
          <img
            className="listItemImage"
            src={image}
            width="120px"
            alt="ad-img"
          />
        </li>
        <div className="adsByUserInfoContainer">
          <ul className="listItemSubContainer">
            <li className="listItemTitle">{title}</li>
            <li className="listItemCategory">{category}</li>
          </ul>
          <div className="adsByUserBtnContainer">
            <button>
              <BsEye size={25} />
              <span>view</span> 
            </button>
            <button>
              <AiOutlineEdit size={25} />
              <span>edit</span>
            </button>
            <button onClick={() => dispatch(deleteAdPostedByUser(_id))}>
              <AiOutlineDelete size={25} />
              <span>delete</span>
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default AdsByUser;
