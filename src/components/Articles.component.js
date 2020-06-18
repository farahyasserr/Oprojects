import React, { Component } from 'react';
import { ResponsiveEmbed, Image } from 'react-bootstrap';
import img1 from "../assets/10.png";
import img2 from "../assets/11.png";
import img3 from "../assets/12.png";
import bk from "../assets/background.png";


export default class Articles extends Component {
    render() {
        return (
            <div className="articles">
                <p className="p6">BabyCare Articles</p>
                <p className="p7">A newborn baby can feel small and fragile. Learn how to care for your newborn <br/>and find out what</p>
                <div className="gradientbararticles"></div>
                <div className="articlesflex">

                    <div className="articleseach">
                        <img src={img1} width="300" height="200" alt="WeCare Logo" />
                        <div className="articlespdiv">
                            <p className="articlesp1">Congratulations! You've got a new member of your family.</p>
                            <p className="articlesp2">By Olivia - May 28, 2019</p>
                            <p className="articlesp3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor.</p>
                        </div>
                    </div>

                    <div className="articleseach">
                        <img src={img2} width="300" height="200" alt="WeCare Logo" />
                        <div className="articlespdiv">
                            <p className="articlesp1">Changing diapers frequently is an important aspect</p>
                            <p className="articlesp2">By Olivia - May 28, 2019</p>
                            <p className="articlesp3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor.</p>

                        </div>

                    </div>

                    <div className="articleseach">
                        <img src={img3} width="300" height="200" alt="WeCare Logo" />
                        <div className="articlespdiv">

                            <p className="articlesp1">Here’s How You Can Get Your Kids to Eat Whole Grains</p>
                            <p className="articlesp2">By Olivia - May 28, 2019</p>
                            <p className="articlesp3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor.</p>


                        </div>
                    </div>


                </div>
                <div><button className="allposts">All Posts</button></div>
            </div>

        )
    }
}