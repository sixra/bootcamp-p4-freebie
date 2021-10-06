import React from "react";
import UserNavBar from "../../UserNavBar/UserNavBar";
import PathBanner from "../../../PathBanner/PathBanner";
import "../../UserInterface.scss";

const MyAds = () => {
  return (
    <>
      <PathBanner />
      <section className="userInterface">
        <UserNavBar />
        <main className="userSections">My Favorites</main>
      </section>
    </>
  );
};

export default MyAds;
