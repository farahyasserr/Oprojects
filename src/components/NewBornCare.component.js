import React, { Component } from 'react';
import { ResponsiveEmbed, Image } from 'react-bootstrap';
import img1 from "../assets/Group 3.png";
import img2 from "../assets/Ellipse 4.png";
import img3 from "../assets/Ellipse 3.png";
import bk from "../assets/background.png";


export default class NewBornCare extends Component {
    render() {
        return (
            <div className="newborncare">
                <p className="p6">Newborn Care</p>
                <p className="p7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus,<br/>rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue.</p>
                <div className="gradientbararticles"></div>

                <div className="images2">
                    <div className="cont">
                    <img src={img1} width="250" height="150" alt="WeCare Logo" />
                    <p className="p9">Clothing</p>
                    <p className="p10">Lorem ipsum dolor sit amet</p>
                    <div className="gradientbarcare"></div>
                    </div>
                    
                    <div className="cont">
                    <img src={img2} width="250" height="150" alt="WeCare Logo" />
                    <p className="p9">Feeding</p>
                    <p className="p10">Lorem ipsum dolor sit amet</p>
                    </div>
                    
                    <div className="cont">
                    <img src={img3} width="250" height="150"  alt="WeCare Logo" />
                    <p className="p9">Bedtime</p>
                    <p className="p10">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>

        )
    }
}