import React, { Component } from 'react';
import { ResponsiveEmbed, Image } from 'react-bootstrap';
import img1 from "../assets/Group 1.png";


export default class Consultation extends Component {
    render() {
        return (
            <div className="consultation">
                <div className="consultationbackground">
                {/* <div className="gradientbarconsult"></div> */}
                    <div>
                        <p className="consultationtext">Since 2002, Baby Care Advice has assisted thousands of parents <br />
                worldwide solve minor and complex baby care problems by <br />
                our articles and consultations.
                </p>  

                        <p className="consultationtext2">Book a consultation now!</p>
                    </div>
                </div>
            </div>

        )
    }
}