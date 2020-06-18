import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logo from "../assets/Logo.png";
import logo2 from "../assets/How to Take Care of Newborn Baby.png";



export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="ulnav">
          <li className="navbar-itemm"><button className="signin">Sign In</button></li>
            <li className="navbar-itemm"><a href="pricing">Pricing</a></li>
            <li className="navbar-itemm"><a href="service">Service</a></li>
            <li className="navbar-itemm"><a href="about">About</a></li>
            <li className="navbar-itemm"><a className="active" href="home">Home</a></li>
            <div className="logodiv">
            <li className="navlogoitem"><a href="https://oprojects.herokuapp.com"><img src={logo} className="navlogo" alt="WeCare Logo" /></a></li>
            </div>
          </ul>
        </nav>

      </div>
    )
  }
}