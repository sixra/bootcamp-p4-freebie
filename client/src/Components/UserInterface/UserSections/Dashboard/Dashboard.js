import React from "react";
import UserNavBar from "../../UserNavBar/UserNavBar";
import PathBanner from "../../../PathBanner/PathBanner";
import "../../UserInterface.scss"

const Dashboard = () => {

  return (
    <>
    <PathBanner/>
    <section className="userInterface">
      <UserNavBar/>
        <main className="userSections">
          DASHBOARD
        </main>
    </section>
    </>
  );
};

export default Dashboard;
