import React from "react";
import UserNavBar from "../../UserNavBar/UserNavBar";
import "../../UserInterface.scss";

const MyAds = () => {
  return (
    <section className="userSection">
      <div className="userInterface">
        <UserNavBar />
        <main className="userSections">
        <h2>My Favorites</h2>
          <div className="titleUnderline"></div>
        </main>
      </div>
    </section>
  );
};

export default MyAds;
