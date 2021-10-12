import React from "react";
import UserNavBar from "../../UserNavBar/UserNavBar";
import "../../UserInterface.scss";

const Dashboard = () => {
  return (
    <section className="userSection">
      <div className="userInterface">
        <UserNavBar />
        <main className="userSections">DASHBOARD</main>
      </div>
    </section>
  );
};

export default Dashboard;
