import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../App.css';
import logo from "../assets/Welcome WeCare.png";

export default class SignUp extends Component {
    render() {
        return (
            <div className="signup">
                <div className="text">
                    <p className="p4">Sign up for our newsletter</p>
                    <p className="p5">Newborn Baby</p>
                </div>
                <div className="btndiv">  
                    <button className="getstarted">Get started&nbsp;
                <svg className="bi bi-arrow-right" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z" />
                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z" />
                        </svg>
                    </button>
                </div>
            </div>

        )
    }
}