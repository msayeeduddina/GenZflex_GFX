import React from "react";
import { Carousel } from "react-responsive-carousel";
import SmoothNFT from "./SmoothNFT";
import NFT from '../../assets/images/nft-03.png'
import nfttwo from '../../assets/images/nft-02.png'
import nftthree from '../../assets/images/nft-two.png'
import NFT5 from '../../assets/images/nft5.png'

export default () => (
    <SmoothNFT>
        <center><Carousel infiniteLoop autoPlay>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="comin-soon">
                            <img src={NFT} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="comin-soon">
                            <img src={nfttwo} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="comin-soon">
                            <img src={nftthree} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="react-multi-carousel-list">
                <div className="react-multi-carousel-track hello">
                    <div className="react-multi-carousel-item hellotwo " data-index="0" aria-hidden="true">
                        <div className="comin-soon">
                            <img src={NFT5} className="img-feat" />
                        </div>
                    </div>
                </div>
            </div>
            
        </Carousel></center>
    </SmoothNFT>
);
