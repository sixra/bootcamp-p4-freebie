import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Favorite = ({ singleAdInfo, FavoriteNumber, setFavoriteNumber }) => {
  const [Favorited, setFavorited] = useState(false);
  const userId = JSON.parse(localStorage.getItem("profile")).result._id;

  const variable = {
    userFrom: userId,
    itemId: singleAdInfo._id,
    itemTitle: singleAdInfo.title,
    itemImage: singleAdInfo.image[0].base64,
    itemCategory: singleAdInfo.category,
  };

  useEffect(() => {
    axios.post("/api/favorite/favoriteNumber", variable).then((response) => {
      if (response.data.success) {
        setFavoriteNumber(response.data.favoriteNumber);
      } else {
        alert("Failed to get favoriteNumber");
      }
    });

    axios.post("/api/favorite/favorited", variable).then((response) => {
      if (response.data.success) {
        setFavorited(response.data.favorited);
      } else {
        alert("Failed to get Favorite Info");
      }
    });
  }, []);

  const onClickFavorite = () => {
    if (Favorited) {
      axios
        .post("/api/favorite/removeFromFavorite", variable)
        .then((response) => {
          if (response.data.success) {
            setFavoriteNumber(FavoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert(" Failed to remove from favorite");
          }
        });
    } else {
      axios.post("/api/favorite/addToFavorite", variable).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(FavoriteNumber + 1);
          setFavorited(!Favorited);
        } else {
          alert(" Failed to add to Favirotes");
        }
      });
    }
  };

  return (
    <div className="favoriteContainer">
      <button onClick={onClickFavorite}>
        {Favorited ? (
          <>
            {" "}
            <AiFillHeart size="18" color="#E52951" /> <span>Favorite</span>
          </>
        ) : (
          <>
            {" "}
            <AiOutlineHeart size="18" color="#E52951" /> <span>Favorite</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Favorite;
