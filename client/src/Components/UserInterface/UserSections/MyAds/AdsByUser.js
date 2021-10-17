import React from "react";
import "./AdsByUser.scss";
import { useDispatch } from "react-redux";
import { deleteAdPostedByUser } from "../../../../Redux/Actions/AdsAction";
import { BsEye } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const AdsByUser = ({ adInfo }) => {
  const dispatch = useDispatch();
  const { image, _id, title, category } = adInfo;

  return (
    <div className="adsByUserContainer">
      <ul className="adsByUserList">
        <li className="listItemImageContainer">
          <img
            className="listItemImage"
            src={image[0].base64}
            alt="ad-img"
          />
        </li>
        <div className="adsByUserInfoContainer">
          <ul className="listItemSubContainer">
            <li className="listItemTitle">{title}</li>
            <li className="listItemCategory">{category}</li>
          </ul>
          <div className="adsByUserBtnContainer">
            <Link to={`/ad/${_id}`}>
              <BsEye size={22} />
              <span>view</span>
            </Link>
            <Link to={"/user/post"}>
              <AiOutlineEdit size={22} />
              <span>edit</span>
            </Link>
            <button onClick={() => dispatch(deleteAdPostedByUser(_id))}>
              <AiOutlineDelete size={22} />
              <span>delete</span>
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default AdsByUser;
