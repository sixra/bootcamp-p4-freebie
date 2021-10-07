import React from "react";
import UserNavBar from "../../UserNavBar/UserNavBar";
import PathBanner from "../../../PathBanner/PathBanner";
import "../../UserInterface.scss"
import { useSelector } from "react-redux";
import AdsByUser from "./AdsByUser";

const MyAds = () => {

  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user.result._id
  const ads = useSelector((state) => state.allAds.ads);
  const adsByUser = useSelector((state) => state.allAds.creator)

  return (
    <>
    <PathBanner/>
    <section className="userInterface">
      <UserNavBar/>
        <main className="userSections">
          {adsByUser.indexOf(userId) === -1 ? <div>{adsByUser
                  .map((adInfo) => (
                    <AdsByUser
                      key={adInfo._id}
                      adInfo={adInfo}
                    />
                  ))}</div> : <div> no match</div>}
        </main>
    </section>
    </>
  );
};

export default MyAds;
