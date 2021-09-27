import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./Redux/Store";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import Contact from "./Pages/Contact/Contact";
import AuthForm from "./Components/AuthForm/AuthForm";
import UserInterface from "./Components/UserInterface/UserInterface";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import Footer from "./Components/Footer/Footer";
import { loadUser } from "./Redux/Actions/AuthAction";
import UserActivate from "./Components/UserActivated/UserActivate.js"

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/auth" exact component={AuthForm} />
          <Route path="/user" exact component={UserInterface} />
          <Route
              path="/Api/activate/user/:id"
              exact
              component={UserActivate}
            />
        </Switch>
        <ScrollUp />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
