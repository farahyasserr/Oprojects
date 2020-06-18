import React, { Component } from 'react';
import { ResponsiveEmbed, Image } from 'react-bootstrap';
import { StyleSheet, View, Text, TouchableOpacity} from 'react';
import logo from "../assets/WeCare.png";

export default class LastComponent extends Component {
    render() {
        return (
            <div className="lastcomponent">
                <div className="lastcomponentflex">
                    <div className="lastcomponenteach">
                        <p className="lastcomponentp1">About Us</p>
                        <div>
                        <button className="lastcomponentbutton">Privacy and policy</button>
                        <button className="lastcomponentbutton">Our Customer</button>
                        <button className="lastcomponentbutton">Blog Post</button>
                        <button className="lastcomponentbutton">Help & Support</button>
                        </div>
                    </div>
                    <div className="lastcomponenteach">
                        <p className="lastcomponentp1">Community</p>
                        <button className="lastcomponentbutton">About us</button>
                        <button className="lastcomponentbutton">Our clients</button>
                        <button className="lastcomponentbutton">Legal notic</button>

                    </div>
                    <div className="lastcomponenteach">
                        <p className="lastcomponentp1">Help & Advice</p>
                        <button className="lastcomponentbutton">Help Center</button>
                        <button className="lastcomponentbutton">Contact Support</button>
                        <button className="lastcomponentbutton">Instructions</button>
                        <button className="lastcomponentbutton">Some Question</button>

                    </div>
                    <div className="lastcomponentright">
                        <div className="star-ratings-css-full" title=".1000"></div>
                        <p className="lastcomponentp2">10,000 Trust people The full-stack design team <br/> who focuses on digital products whatever they are.</p>
                        <button className="socialmediabutton"> <i class="fab fa-facebook-f"></i></button>
                        <button className="socialmediabutton"> <i class="fab fa-facebook-f"></i></button>
                        <button className="socialmediabutton"> <i class="fab fa-facebook-f"></i></button>
                        <button className="socialmediabutton"> <i class="fab fa-facebook-f"></i></button>

                    </div>
                </div>
                <img src={logo} className="lastlogo" alt="WeCare Logo" />
                <div className="gradientbarlast"></div>
                <p className="lastp">Designed by @uiexpert - 2019</p>
            </div>

        )
    }
}