import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroImage from "../../Components/Header/HeroImage";
import "./UserInterface.scss";

import UserNavBar from "./UserNavBar/UserNavBar";
import Dashboard from "./UserSections/Dashboard/Dashboard";
import PostAd from "./UserSections/PostAd/PostAd";
import MyAds from "./UserSections/MyAds/MyAds";
import MyFavorites from "./UserSections/MyFavorites/MyFavorites";

const UserInterface = () => {
  return (
    <section className="userInterface">
      <Router>
        <UserNavBar />
        <main className="userSections">
          <Switch>
            <Route path="/user/dashboard" exact component={Dashboard} />
            <Route path="/user/post" exact component={PostAd} />
            <Route path="/user/ads" exact component={MyAds} />
            <Route path="/user/favorite" exact component={MyFavorites} />
          </Switch>
        </main>
      </Router>
    </section>
  );
};

export default UserInterface;
