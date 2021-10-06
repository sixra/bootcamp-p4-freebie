import React from "react";
import UserNavBar from "../../UserNavBar/UserNavBar";
import PathBanner from "../../../PathBanner/PathBanner";
import "../../UserInterface.scss"

const MyAds = () => {
  return (
    <>
    <PathBanner/>
    <section className="userInterface">
      <UserNavBar/>
        <main className="userSections">
          My Ads
        </main>
    </section>
    </>
  );
};

export default MyAds;
