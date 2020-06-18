import React, { Component } from 'react';
import { ResponsiveEmbed, Image } from 'react-bootstrap';
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import bk from "../assets/background.png";


export default class BestDeals extends Component {
    render() {
        return (
            <div className="bestdeals">
                <p className="p6">Best Deals</p>
                <p className="p7">A newborn baby can feel small and fragile. Learn how to care for your newborn<br />and find out what</p>
                <div className="gradientbararticles"></div>
                <div className="images">
                    <div className="bestdealseach">
                        <img src={img1} width="200" height="300" className="img1" alt="WeCare Logo" />
                        <p className="pbestdeals">Mee Mee Baby Stroller</p>
                        <button className="bestdealsbutton">Add to Cart</button>
                    </div>

                    <div className="bestdealseach">
                        <img src={img2} width="200" height="300" className="img1" alt="WeCare Logo" />
                        <p className="pbestdeals">Hooded Blanket Cum</p>
                        <button className="bestdealsbutton">Add to Cart</button>
                    </div>

                    <div className="bestdealseach">
                        <img src={img3} width="200" height="300" className="img1" alt="WeCare Logo" />
                        <p className="pbestdeals">Gentle Baby Bath</p>
                        <button className="bestdealsbutton">Add to Cart</button>
                    </div>
                </div>
            </div>

        )
    }
}