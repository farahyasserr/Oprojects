import React, { Component } from 'react';
import { ResponsiveEmbed, Image } from 'react-bootstrap';

export default class Reviews extends Component {
    render() {
        return (
            <div className="articles">
                <p className="p6">Customer Reviews</p>
                <p className="p7">A newborn baby can feel small and fragile. Learn how to care for your newborn <br/>and find out what</p>
                <div className="gradientbararticles"></div>
                <div className="articlesflex">
                    <div className="reviewseach">
                        <div className="articlespdiv">
                            <p className="articlesp1">Jon L. Clarkson</p>
                            <p className="articlesp2">a day ago</p>
                            <div className="star-ratings-css-full" title=".1000"></div>
                            <p className="reviewsp3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor.</p>
                        </div>
                    </div>

                    <div className="reviewseach">
                        <div className="articlespdiv">
                            <p className="articlesp1">Todd Jefferies</p>
                            <p className="articlesp2">10 days ago</p>
                            <div className="star-ratings-css-empty" title=".1000"></div>
                            <p className="reviewsp3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor.</p>

                        </div>

                    </div>

                    <div className="reviewseach">
                        <div className="articlespdiv">

                            <p className="articlesp1">Jackie Parker</p>
                            <p className="articlesp2">a month ago</p>
                            <div className="star-ratings-css-half" title=".1000"></div>
                            <p className="reviewsp3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor.</p>


                        </div>
                    </div>


                </div>
            </div>


        )
    }
}