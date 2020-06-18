import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./components/Create.component";
import Edit from "./components/Edit.component";
import List from "./components/List.component";
import logo from "./logo.svg";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Navigation from "./components/Navigation.component";
import BestDeals from "./components/BestDeals.component";
import FirstComponent from "./components/FirstComponent.component";
import SignUp from './components/SignUp.component';
import NewBornCare from './components/NewBornCare.component';
import BabyCarrier from './components/BabyCarrier.component';
import Consultation from './components/Consultation.component';
import Articles from './components/Articles.component';
import Reviews from './components/Reviews.component';
import LastComponent from './components/LastComponent.component';


function App() {
  return (

    <Router>
      <body className="body">
        <div >
          <Navigation />

          <FirstComponent />
          <BestDeals />
          <NewBornCare />
          <BabyCarrier />
          <Articles />
          <Consultation />
          <Reviews />
          <SignUp />
          <LastComponent />
          <Route path="/" exact component={List} />
          <Route path="/edit:id" exact component={Edit} />
          <Route path="/Create" exact component={Create} />
        </div>
      </body>

    </Router>
  );
}

export default App;
