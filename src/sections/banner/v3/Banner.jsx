import BannerWrapper from "./Banner.style";
import SmoothSlider from "../../../components/smooth-slider/SmoothSlider";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Data from "../../../assets/data/bannarV3";
import image from '../../../assets/images/white-logo.png';
import telegram from '../../../assets/images/telegram.svg';
import twitter from '../../../assets/images/icons/twitter-XB.png';
import wallet from '../../../assets/images/wallet.webp'
import pc from '../../../assets/images/pcIcon.svg'
import mobileIcon from '../../../assets/images/mobileIcon.svg'

import {
    useAccount,
    useBalance,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
} from "wagmi";
import {
    GetUSDExchangeRate,
    buyTokenCall,
    currentStageIdCall,
    currentStageInfoCall,
    hardCapCall,
    payWith,
    presaleTokenAmountCall,
    softCapCall,
    tokenSymbolCall,
    totalFundCall,
    totalSoldCall,
} from "../../../contracts/config";
import { formatEther, parseEther } from "viem";

const Banner = () => {
    const [userBalance, setUserBalance] = useState("28.25 BNB");

    const [isBuyNow, setIsBuyNow] = useState(false);
    const [isTwo, setIsTwo] = useState(false);
    const [isThree, setIsThree] = useState(false);
    const [isFour, setIsFour] = useState(false);
    const [isFive, setIsFive] = useState(false);
    const [isSix, setIsSix] = useState(false);

    const buyNowHandle = () => {
        setIsBuyNow(!isBuyNow);
    };
    const isTwoHandle = () => {
        setIsTwo(!isTwo);
    };
    const isThreeHandle = () => {
        setIsThree(!isThree);
    };
    const isFourHandle = () => {
        setIsFour(!isFour);
    };
    const isFiveHandle = () => {
        setIsFive(!isFive);
    };
    const isSixHandle = () => {
        setIsSix(!isSix);
    };

    const [usdExRate, setUsdExRate] = useState(0);
    const [paymentUsd, setPaymentUsd] = useState(0);
    const [currentStage, setCurrentStage] = useState(1);
    const [currentBonus, setCurrentBonus] = useState("20");
    const [currentPrice, setCurrentPrice] = useState("0.001");
    const [stageEnd, setStageEnd] = useState(1703916000);
    const [presaleToken, setPresaleToken] = useState(420000000000000);
    const [tokenSymbol, setTokenSymbol] = useState("PLINU");
    const [softCap, setSoftCap] = useState("10");
    const [hardCap, setHardCap] = useState("40");
    const [totalFund, setTotalFund] = useState("20");
    const [paymentPrice, setPaymentPrice] = useState(0);
    const [paymentAmount, setPaymentAmount] = useState(0);
    const [buyAmount, setBuyAmount] = useState(0);
    const [bonusAmount, setBonusAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [tokenSold, setTokenSold] = useState(0);
    const [tokenPercent, setTokenPercent] = useState(20);

    const { address: addressData, isConnected } = useAccount();
    const { data: balanceData } = useBalance({
        address: addressData,
    });
    const { data: tokenSymbolData } = useContractRead({ ...tokenSymbolCall });
    const { data: presaleTokenAmountData } = useContractRead({
        ...presaleTokenAmountCall,
    });
    const { data: totalSoldData } = useContractRead({ ...totalSoldCall });
    const { data: currentStageIdData } = useContractRead({
        ...currentStageIdCall,
    });
    const { data: currentStageInfoData } = useContractRead({
        ...currentStageInfoCall,
        args: [currentStageIdData],
    });
    const { data: softCapData } = useContractRead({ ...softCapCall });
    const { data: hardCapData } = useContractRead({ ...hardCapCall });
    const { data: totalFundData } = useContractRead({ ...totalFundCall });

    const { config } = usePrepareContractWrite({
        ...buyTokenCall,
        value: parseEther(paymentPrice.toString()),
        args: [buyAmount],
    });
    const { write } = useContractWrite(config);

    useEffect(() => {
        if (isBuyNow) {
            document.querySelector(".gittu-banner-card").classList.add("flip");
        }

        if (!isBuyNow) {
            document.querySelector(".gittu-banner-card").classList.remove("flip");
        }

        if (!isTwo) {
            document.querySelector(".gittu-banner-card").classList.remove("flip");
        }

        if (!isThree) {
            document.querySelector(".gittu-banner-card").classList.remove("flip");
        }

        if (!isFour) {
            document.querySelector(".gittu-banner-card").classList.remove("flip");
        }

        if (!isFive) {
            document.querySelector(".gittu-banner-card").classList.remove("flip");
        }

        if (!isSix) {
            document.querySelector(".gittu-banner-card").classList.remove("flip");
        }


        if (isConnected) {
            if (balanceData) {
                let tmp = parseFloat(balanceData?.formatted).toFixed(2);
                setUserBalance(`${tmp} ${balanceData?.symbol}`);
            }

            if (tokenSymbolData) {
                setTokenSymbol(tokenSymbolData);
            }

            if (presaleTokenAmountData) {
                let tmp = formatEther(presaleTokenAmountData);
                setPresaleToken(tmp);
            }

            if (totalSoldData) {
                let tmp = formatEther(totalSoldData);
                setTokenSold(tmp.toString());
            }

            if (currentStageIdData) {
                setCurrentStage(currentStageIdData.toString());
            }

            if (currentStageInfoData) {
                setCurrentBonus(currentStageInfoData[1].toString());

                let tmp = formatEther(currentStageInfoData[2]);
                setCurrentPrice(tmp);

                setStageEnd(currentStageInfoData[4].toString());
            }

            if (softCapData) {
                let tmp = formatEther(softCapData);
                setSoftCap(tmp.toString());
            }

            if (hardCapData) {
                let tmp = formatEther(hardCapData);
                setHardCap(tmp.toString());
            }

            if (totalFundData) {
                let tmp = formatEther(totalFundData);
                setTotalFund(tmp.toString());
            }

            let _tokenPercent = parseInt((tokenSold * 100) / presaleToken);
            setTokenPercent(_tokenPercent);
            if (_tokenPercent > 100) {
                setTokenPercent(100);
            }

            GetUSDExchangeRate().then((res) => {
                setUsdExRate(parseFloat(res));
            });

            let pay = parseFloat(usdExRate * paymentPrice).toFixed(2);
            setPaymentUsd(pay);
        }
    }, [
        isBuyNow,
        isTwo,
        isThree,
        isFour,
        isFive,
        isSix,
        isConnected,
        balanceData,
        tokenSymbolData,
        presaleTokenAmountData,
        totalSoldData,
        currentStageIdData,
        currentStageInfoData,
        softCapData,
        hardCapData,
        totalFundData,
        tokenSold,
        presaleToken,
        usdExRate,
        paymentPrice,
    ]);

    const handlePaymentInput = (e) => {
        let _inputValue = e.target.value;
        setPaymentAmount(_inputValue);

        if (_inputValue >= currentPrice) {
            let _amount = parseInt(_inputValue / currentPrice);
            setBuyAmount(_amount);

            let _bonusAmount = parseInt((_amount * currentBonus) / 100);
            setBonusAmount(_bonusAmount);

            let _totalAmount = _amount + _bonusAmount;
            setTotalAmount(_totalAmount);

            if (_inputValue != "" && _inputValue >= 0) {
                setPaymentPrice(_inputValue);
            }
        }
    };

    const buyToken = () => {
        if (paymentAmount != "" && paymentAmount >= currentPrice) {
            write?.();
        }
    };


    return (
        <BannerWrapper>

            {/*  ROADMAP  */}
            <div className="container-fluid roadmap" id="roadmap" >
                <div className="main-head">
                    <h1 className="banban-buy ">{Data.howtobuy}</h1>
                </div>
                <div className="gittu-bannert top-make">
                    <div className="gittu-banner-card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <center>
                            <h5 className="lines mt-3" style={{ color: "#fff" }}>{Data.roadmapsub}</h5>
                            <h5 className="lines" style={{ color: "#fff" }}>{Data.mapsub2}</h5>
                        </center>
                    </div>
                </div>

                <div className="gittu-bannert inner-buy ">
                    <center><h3 className="buy-head">stage 1</h3></center>
                    <div className="gittu-banner-card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <h5 className="lines buy-line">{Data.headline} <Link to='https://metamask.io/' target="_post" className="TAGA">install one here</Link>.</h5>
                    </div>
                    <div className="mt-5 stage-main">
                        <div className="div-buy">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <div className="gittu-banner-left buys-inner">
                                            <img src={pc} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gittu-banner-right">
                                <div className="gittu-banner-card">
                                    <div className="">
                                        <div className="gittu-banner-left">
                                        <h3 className="text-buy">{Data.sub}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div-buy">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <div className="gittu-banner-left buys-inner">
                                            <img src={mobileIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gittu-banner-right">
                                <div className="gittu-banner-card">
                                    <div className="">
                                        <div className="gittu-banner-left">
                                        <h3 className="text-buy">{Data.sub2}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gittu-bannert inner-buy mt-5">
                    <center><h3 className="buy-head">stage 2</h3></center>
                    <div className="gittu-banner-card meta-buy" >
                        <div className="gittu-banner-left ">
                            <img src={wallet} alt="" width="300"/>
                        </div> 
                        <div>
                            <h5 className="lines buy-line">{Data.stage2}</h5>
                        </div>   
                    </div>
                </div>
                <div className="gittu-bannert inner-buy mt-5">
                    <center><h3 className="buy-head">stage 3</h3></center>
                    <div className="gittu-banner-card" style={{display:"flex",justifyContent:"center", padding:"0px 0px"}}>
                        <h5 className="lines buy-line">{Data.stage3}</h5>
                    </div>
                    <div className="mt-5 stage-three">
                        <div className="threes">
                            <div className="gittu-banner-right">
                                <div className="gittu-banner-card">
                                    <div className="">
                                        <div className="gittu-banner-left">
                                            <h3 className="three-text">{Data.head1}</h3>
                                            <p className="text-three">{Data.sub3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="threes">
                            <div className="gittu-banner-right">
                                <div className="gittu-banner-card">
                                    <div className="">
                                        <div className="gittu-banner-left">
                                            <h3 className="three-text">{Data.head2}</h3>
                                            <p className="text-three">{Data.sub4}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/*  ROADMAP  end */}

            {/* contact */}
            <div className="container-fluid contact mt-5" id="contact">
                <div className="gittu-bannert">
                    <div className="gittu-banner-card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={image} alt="" width="600" />
                    </div>
                </div>
                <div className="row">
                    <section className='auth-section'>
                        <div className="col-lg-6">
                            <div className='auth-container-2'>
                                <center>
                                    <ul style={{ display: "flex" }}>
                                        <li >
                                            <div className="social-icon">
                                                <a href="https://t.me/pepeloveinubsc" target="_post">
                                                    <img src={telegram} alt="telegram" className="social-img" />
                                                </a>
                                            </div>
                                        </li>
                                        <li></li>
                                        <li >
                                            <div className="social-icon">
                                                <a href="https://twitter.com/pepeloveinubsc?t=Jj-FFT989jdR-2GH7pUosw&s=08" target="_post">
                                                    <img src={twitter} alt="telegram" className="social-img" />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </center>
                                <center>
                                <div className="news mt-3 mb-4">
                                <form className="news-form" action="">
                                            <input name="email" type="text" class="news-input" placeholder="Enter your Email" />
                                            <label className="news-btn" >Subscribe</label>
                                        </form>
                                </div>
                                </center>
                            </div>
                        </div>
                    </section>
                    <div className="presale-item-inner p-3" style={{ borderTop: "1px solid rgb(252, 239, 222)"}}>
                    <center><h5 className="fw-500 text-white text-center"><a href="/" className="tag-copy">{Data.copyright}</a></h5></center>
                    </div>
                </div>

            </div>
            {/* contact end */}
            <div className="gittu-banner-slider">
                <SmoothSlider /> 
            </div>
        </BannerWrapper>
    );
};

export default Banner;
