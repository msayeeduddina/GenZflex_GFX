import React from "react";
import { Carousel } from "react-responsive-carousel";
import SmoothSliderWrapper from "./SmoothSlider.style";
import bit from '../../assets/images/bit.png'
import pancake from '../../assets/images/pancakeswap.png'
import poocoin from '../../assets/images/poocoin.png'
import bitmart from '../../assets/images/bitmart.png'
import polo from '../../assets/images/poloniex.png'
import hitbtc from '../../assets/images/hitbtc.png'
import mexc from '../../assets/images/mexc.webp'
import cryptocom from '../../assets/images/Cryptocom.png'
import lbank from '../../assets/images/Lbank.png'
import kucoin from '../../assets/images/kucoin.png'
import cointiger from '../../assets/images/cointiger.png'
import gateio from '../../assets/images/gateio.png'

export default () => (
    <SmoothSliderWrapper className="slide-res">
        <center><Carousel infiniteLoop autoPlay>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={pancake} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={poocoin} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={bit} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={bitmart} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={polo} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={hitbtc} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={mexc} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={cryptocom} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={cointiger} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={lbank} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={kucoin} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="item">
                            <img src={gateio} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
        </Carousel></center>
    </SmoothSliderWrapper>
);
