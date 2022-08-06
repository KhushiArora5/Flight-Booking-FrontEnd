import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slide.css';
import delhi from "./delhi.jpg";
import chennai from "./chennai.jpg";
import hyderabad from "./hyderbad.jpg";
import jaipur from "./jaipur.jpg";
import jk from "./jk.jpg";
import kolkata from "./kolkata.jpg";
import lucknow from "./lucknow.jpg";
import mumbai from "./mumbai.jpg";
import pune from "./pune.jpg";

function Show() {
    const images = [
        {delhi},{chennai},{hyderabad},{jaipur},{jk},{kolkata},{lucknow},{mumbai},{pune}
    ];

    return (
        <Slide autoplay="false">
            <div className="each-slide-effect">
                <div className="d">
                    <span>Delhi</span>
                </div>
            </div>
            <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Delhi</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};

export default Show;