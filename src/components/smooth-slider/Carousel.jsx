import React from "react";
import { Carousel } from "react-responsive-carousel";
import SmoothSliderWrapper from "./SmoothSlider.style";
import feat from '../../assets/images/feature1.webp'
import crypto from '../../assets/images/feature6.webp'
import coint from '../../assets/images/feature9.svg'
import b2c from '../../assets/images/feature5.webp'

export default () => (
    <SmoothSliderWrapper>
        <center><Carousel infiniteLoop autoPlay>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={feat} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={crypto} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={b2c} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={coint} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            
        </Carousel></center>
    </SmoothSliderWrapper>
);
