import React from "react";
import { Route, Switch } from "react-router-dom";
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App(props) {
  rreturn (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/actors" component={Actors} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/movies" component={Movies} />
      </div>
      {/*{code here}*/}
    </Router>
  );
};

export default App;
