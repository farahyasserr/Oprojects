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
        <nav className="navbar navbar-expand-lg navbar-light navvv">
          <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="143" height="54" alt="WeCare Logo" />
          </a>
          {/* <Link to="/" className="navbar-brand">Mern stack app</Link> */}

          <ul className="navbar-nav nav-justified ml-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="nav-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="nav-link">Service</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Create" className="nav-link">Pricing</Link>
            </li>
          </ul>

          <Form inline>
            {/* <Button variant="outline-secondary">Sign in</Button> */}
            <Button variant="secondary">Sign in</Button>

          </Form>
        </nav>

      </div>
    )
  }
}