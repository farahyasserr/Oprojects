import React, { Component } from 'react';
import { ResponsiveEmbed, Image } from 'react-bootstrap';
import img1 from "../assets/4.png";
import img2 from "../assets/5.png";


export default class BabyCarrier extends Component {
    render() {
        return (
            <div className="carriercontainer">

                <div className="carrier">
                    <img src={img2} className="carrierimage2" alt="WeCare Logo" />
                    <img src={img1} className="carrierimage" alt="WeCare Logo" />
                </div>

                <div className="textcarrier">
                    <p className="p11">Baby Carrier One Air</p>
                    <p className="p12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus,<br />rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue.</p>
                    <p className="p13">Price <strong>$219.99</strong></p>
                    <button className="learnmorebutton">View Details&nbsp;
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