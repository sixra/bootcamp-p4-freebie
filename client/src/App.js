import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./Pages/Categories/Categories";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Navigation from "./Components/Navigation/Navigation";
import GoogleMap from "./Components/GoogleMap/GoogleMap";
import ItemsList from "./Components/ItemsList/ItemsList";

import { getItemsData, getPlacesData } from "./Api/Api";
import store from "./Redux/Store";
import { loadUser } from "./Redux/Actions/Auth";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/ScrollUp/ScrollUp";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  // console.log("This is ", bounds.sw);
  // console.log("This is ", bounds.ne);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // useEffect(() => {
  //   console.log(coordinates, bounds);
  //   // getPlacesData(bounds.ne, bounds.sw).then((data) => {
  //   getPlacesData().then((data) => {
  //     console.log("This is our fetch result from map api:", data);

  //     setPlaces(data);
  //   });
  // }, [coordinates, bounds]);

  useEffect(() => {
    getItemsData().then((data) => {
      console.log("This is our fetch result from db api:", data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <main>
          <Navigation />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/contact" exact component={Contact} />
            {/* <Route path="/map" exact component={GoogleMap} /> */}
            <Route path="/itemslist">
              <ItemsList places={places} />{" "}
            </Route>
            <Route path="/map">
              <GoogleMap
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
              />
            </Route>
          </Switch>
          <ScrollUp />
          <Footer />
        </main>
      </Router>
    </div>
  );
};

export default App;
