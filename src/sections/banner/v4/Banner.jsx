import BannerWrapper from "./Banner.style";

import DocumentIcon from "../../../assets/images/file.png";

import { HiArrowLeft } from "react-icons/hi2";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";

import Button from "../../../components/button/Button";
import SmoothSlider from "../../../components/smooth-slider/SmoothSlider";
import Progressbar from "../../../components/progressbar/Progressbar";
import Countdown from "../../../components/countdown/Countdown";
import Dropdown from "../../../components/dropdown/Dropdown";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Data from "../../../assets/data/bannarV1";
import TokenInfo from "../../../components/tokenInfo/TokenInfo";
import TokenDetails from "../../../components/tokenInfo/TokenDetails";
import ConnectWalletButton from "../../../components/button/ConnectWalletButton";
import image from '../../../assets/images/white-logo.png';
import telegram from '../../../assets/images/telegram.svg';
import twitter from '../../../assets/images/icons/twitter-XB.png';
import mainBorder from '../../../assets/images/mainBorde.svg'
import NFT from '../../../assets/images/nft-03.png'
import greenBoard from '../../../assets/images/greenSign.svg'
import green from '../../../assets/images/greenBox.svg'
import blue from '../../../assets/images/blueBox.svg'
import orange from '../../../assets/images/orangeBox.svg'
import red from '../../../assets/images/redBox.svg'
import sky from '../../../assets/images/skyblueBox.svg'
import audit1 from '../../../assets/images/audit1.webp'
import EthIcon from "../../../assets/images/token/usdt.png"
import bnb from "../../../assets/images/bnb.png"
import nftthree from '../../../assets/images/nft-two.png'
import Carousel from "../../../components/smooth-slider/Carousel";
import CarouselLaunch from '../../../components/smooth-slider/CarouselLaunch'
import piechart from '../../../assets/images/piechart.png'
import CarouselNFT from '../../../components/smooth-slider/CarouselNFT'

import {
    useAccount,
    useBalance,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
    useWatchPendingTransactions ,
} from "wagmi";
import {
    presaleSpendar,
    GetUSDExchangeRate,
    GetUSDTExchangeRate,
    buyTokenCall,
    usdtApproveCall,
    currentStageIdCall,
    currentStageInfoCall,
    hardCapCall,
    payWith,
    Getpepecontractsold,
    presaleTokenAmountCall,
    softCapCall,
    tokenSymbolCall,
    totalFundCall,
    totalSoldCall,
} from "../../../contracts/config";
import { formatEther, parseEther } from "viem";
import "react-responsive-carousel/lib/styles/carousel.min.css";

var x = 0;

const Banner = () => {
    const [payId, setPayId] = useState("1");

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const [userBalance, setUserBalance] = useState("28.25 BNB");

    const [isBuyNow, setIsBuyNow] = useState(false);
    const [buyMessage, setbuyMessage] = useState('');
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

    useEffect(() => {
        Getpepecontractsold()
          .then((res) => {
            setpepetokenss(res);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      }, []);

    const [usdtAmount, setUsdtAmount] = useState(0);
    const [usdExRate, setUsdExRate] = useState(0);
    const [pepetokens, setpepetokens] = useState(0);
    const [pepetokenss, setpepetokenss] = useState(pepetokens);
    const [miscfunds, setmiscfunds] = useState(0);
    const [currentStage, setCurrentStage] = useState(1);
    const [currentBonus, setCurrentBonus] = useState("50");
    const [currentPrice, setCurrentPrice] = useState("0.001");
    const [paymentUsd, setPaymentUsd] = useState(0);
    const [currentUsdtPrice, setCurrentUsdtPrice] = useState("0.001");
    const [stageEnd, setStageEnd] = useState(1702146599);
    const [presaleToken, setPresaleToken] = useState(210000000000000);
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
    const [tokenPercent, setTokenPercent] = useState(0);

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

    const { config: usdtConfig } = usePrepareContractWrite({
        ...usdtApproveCall,
        
        args: [presaleSpendar, usdtAmount],
    });
    //console.log("data",data);
     
    x+=1;
     
     
    //   console.log("data1",data1);
     
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

            let tmp = formatEther(totalSoldData);
            setTokenSold(tmp.toString());

            if (currentStageIdData) {
                setCurrentStage(currentStageIdData.toString());
            }

            if (currentStageInfoData) {
                setCurrentBonus(currentStageInfoData[1].toString());

                let tmp = formatEther(currentStageInfoData[2]);
                setCurrentPrice(tmp);

                let tmp2 = formatEther(currentStageInfoData[3]);
                setCurrentUsdtPrice(tmp2);

                setStageEnd(currentStageInfoData[5].toString());
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

            let _tokenPercent = parseInt((originalraised * 100) / 840000);
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
        // isBuyNow,
        // isTwo,
        // isThree,
        // isFour,
        // isFive,
        // isSix,
        // isConnected,
        // balanceData,
        // tokenSymbolData,
        // presaleTokenAmountData,
        // totalSoldData,
        // currentStageIdData,
        // currentStageInfoData,
        // softCapData,
        // hardCapData,
        // totalFundData,
        // tokenSold,
        // presaleToken,
        usdExRate,
        paymentPrice
        // payId
    ]);

    const handlePaymentInput = (e) => {
        if (payId === "1") {
            let _inputValue = e.target.value;
            setPaymentAmount(_inputValue);
            setPaymentPrice(_inputValue);
      
            if (_inputValue >= currentPrice) {
              let _amount = parseInt(_inputValue / currentPrice);
              setBuyAmount(_amount);
      
              let _bonusAmount = parseInt((_amount * currentBonus) / 100);
              setBonusAmount(_bonusAmount);
      
              let _totalAmount = _amount + _bonusAmount;
              setTotalAmount(_totalAmount);
            }
          }
      
          if (payId === "2") {
            let _inputValue = e.target.value;
            setPaymentAmount(_inputValue);
            setPaymentPrice(_inputValue);
            setUsdtAmount(parseEther(_inputValue));

            if (_inputValue >= currentUsdtPrice) {
              let _amount = parseInt(_inputValue / currentUsdtPrice);
              setBuyAmount(_amount);
      
              let _bonusAmount = parseInt((_amount * currentBonus) / 100);
              setBonusAmount(_bonusAmount);
      
              let _totalAmount = _amount + _bonusAmount;
              setTotalAmount(_totalAmount);
            }
          }
    };

    const buyToken = () => {
        if (paymentAmount != "" && paymentAmount >= currentPrice) {
           // alert(currentPrice);
            write?.();
        }
    };

   

    const approveUsdt = () => {
        setbuyMessage("Please wait...");
        if (paymentAmount != "" && paymentAmount >= currentUsdtPrice) {
            usdtWrite?.();
        }
    };

    const newraised = (pepetokenss*0.000000015).toFixed(2);
    const bonus_tokens = (newraised*33.33333/100).toFixed(2);
    const originalraised = newraised-bonus_tokens+32532;
    // const originalraised = preoriginalraised + 12561;
    return (
        <BannerWrapper className="main">

            <div className="container " >
                <center>
                    <div className="head-line">
                        <h1 className="ban">{Data.title}</h1>
                        <h2 className="ban">{Data.titleExtra}</h2>

                    </div> <h4 style={{ fontWeight: "600", color: "#fcefde" }}>{Data.subtitle} <br /> {Data.sub2}</h4></center>
                <div className="row align-items-center mt-1">
                    <div className="col-lg-6">
                        <div className="gittu-banner-left">
                            <div className="gittu-banner-right">
                                <div className="gittu-banner-card">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" id="main">
                        <div className="gittu-banner-right">
                            <div className="gittu-banner-card">
                                <div className="gittu-banner-card-inner" style={{ backgroundImage: `url(${mainBorder})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", padding: "25px" }}>

                                    {isBuyNow ? (
                                        <div className="card-content">
                                            <button
                                                className="presale-back-btn"
                                                onClick={buyNowHandle}
                                            >
                                                <HiArrowLeft />
                                            </button>

                                            <div className="presale-item mb-20">
                                                <div className="presale-item-inner">
                                                    <h5 className="fw-600 text-uppercase " style={{ color: "#81451e" }}>
                                                        Balance: {userBalance}
                                                    </h5>
                                                </div>
                                                <div className="presale-item-inner">
                                                    <h5 className="fw-600 text-uppercase " style={{ color: "#81451e" }}>
                                                        Price: $0.000000015
                                                    </h5>
                                                </div>
                                            </div>

                                            <div className="presale-item mb-25">
                                                <div className="presale-item-inner">
                                                    <h6 style={{ color: "#81451e" }}>Select Token</h6>
                                                     <Dropdown payId={1} setPayId={setPayId} />
                                                </div>
                                                <div className="presale-item-inner">
                                                    <h6 style={{ color: "#81451e" }}>Amount</h6>
                                                    <input
                                                        type="number"
                                                        min={currentPrice}
                                                        step={currentPrice}
                                                        name=""
                                                        id=""
                                                        placeholder="0.5"
                                                        value={paymentAmount}
                                                        onChange={handlePaymentInput}
                                                    />
                                                </div>
                                            </div>

                                            <div className="presale-item mb-37">
                                                <div className="presale-item-inner">
                                                    <h6 style={{ color: "#81451e" }}>$ Amount</h6>
                                                    <input
                                                        type="text"
                                                        name=""
                                                        id=""
                                                        placeholder="0"
                                                        value={paymentUsd}
                                                        disabled
                                                    />
                                                </div>
                                                <div className="presale-item-inner">
                                                    <h6 style={{ color: "#81451e" }}>Get Amount ( {tokenSymbol} )</h6>
                                                    <input
                                                        type="text"
                                                        name=""
                                                        id=""
                                                        placeholder="0"
                                                        value={buyAmount}
                                                        disabled
                                                    />
                                                </div>
                                            </div>

                                            <ul className="token-info-list mb-35">
                                                <li>
                                                    <p style={{ color: "#81451e" }}>Bonus</p>
                                                    <p style={{ color: "#81451e" }}>{currentBonus}%</p>
                                                </li>
                                                <li>
                                                    <p style={{ color: "#81451e" }}>Total Amount</p>
                                                    <p style={{ color: "#81451e" }}>
                                                        {buyAmount} + {bonusAmount} Bonus
                                                    </p>
                                                </li>
                                            </ul>

                                            {/* <Button large onClick={buyToken}>
                                                Approve
                                            </Button> */}

                                            {payId === "1" && (
                                                <Button large onClick={buyToken}>
                                                    Buy With BNB
                                                </Button>
                                            )}

                                        </div>
                                    ) : (
                                        <div className="card-content">
                                            <p className="presale-stage-title text-uppercase text-center">
                                                Stage 1: {currentBonus}% Bonus!
                                            </p>
                                            <h5 className="fw-600  text-uppercase responsive" style={{ color: "#81451e" }}>
                                                1 USDT = 66,666,666.66 PLINU
                                            </h5>
                                            <h5 className="fw-500 responsive" style={{ color: "#81451e" }}>
                                                Price: $0.000000015
                                            </h5>
                                            <h5 className="responsive " style={{ color: "#81451e" }}>Stage 1 is Live</h5>
                                            <div className="mt-1 mb-17">
                                                <Countdown endDate={stageEnd} />
                                            </div>

                                            <div className="mb-15">
                                                <Progressbar done={1.49} />
                                            </div>

                                            <div className="presale-raised fw-500 ">
                                                <p className="fs-15 responsive" style={{ color: "#81451e" }}>USD Raised: ${originalraised}</p>
                                                <p className="fs-15 responsive" style={{ color: "#81451e" }}>Goal: $ 840,000</p>
                                            </div>
                                            <center>
                                                <div className="bnb-btn">

                                                    <div><img src={bnb} alt="" width="30" /></div>
                                                    <div style={{ color: "#81451e" }}><span>BNB</span> </div>
                                                </div>
                                            </center>

                                            <div className="mb-35">
                                                <TokenInfo />
                                            </div>


                                            <div className="wallet">
                                                <ConnectWalletButton />

                                                <Button large onClick={buyNowHandle}>
                                                    Buy {tokenSymbol} now
                                                </Button>

                                            </div>
                                            <div className="mt-2">
                                                <center><Button >
                                                    <Link onClick={scrollToTop} to="/howtobuy" style={{ color: "#198754" }}>How to Buy</Link>
                                                </Button></center>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="inner-box">
                                    <center><span className="inner-span">Bonus Coin</span><br /></center>
                                    Recive upto 50% free PLINU Coin when you buy early!
                                </div>
                                <div className="mt-10 main-btn" >
                                    <div className="wrap-btn">
                                        <a className="whitepaper-btn1" href={Whitepaper} target="_blank" rel="noreferrer">
                                            <img src={DocumentIcon} alt="icon" width="15" />Whitepaper
                                        </a>
                                    </div>
                                    <div className="wrap-btn">
                                        <a className="whitepaper-btn" style={{ backgroundSize: "cover" }} href="https://bscscan.com/token/0x215cbd4ebe5349680428401acd5e3a270f882bd5#code" target="_post" rel="noreferrer">
                                            BSCSCAN Verified
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURED  */}

            <div className="container-fluid feat p-2" id="roadmap" >
                <div className="gittu-bannert">
                    <div className="gittu-banner-card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <center>
                            <div className="">
                                <h1 className="banban">{Data.feat}</h1>
                            </div>
                        </center>
                    </div>
                </div>
                <Carousel />

                <div className="gittu-bannert">
                    <div className="gittu-banner-card res-audit" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <center>
                            <div className="">
                                <h1 className="banban">{Data.audit}</h1>
                            </div>
                        </center>
                    </div>
                </div>
                <center>
                    <div className="audit-wrap">
                        <div className="">
                            <div className="gittu-banner-right">
                                <div className="gittu-banner-card res-audit" >
                                    <div className="gittu-banner-card-inner">
                                        <Link to='https://www.cyberscope.io/cyberscan?address=0x215cbd4ebe5349680428401acd5e3a270f882bd5' target="_post">
                                            <div className="gittu-banner-left audit-inner">
                                                <div>
                                                    <img src={audit1} alt="" className="audit-img" />
                                                </div>
                                                <div className="audit-li">
                                                    Project fully security audited by Cyberscope. They provide contract security audits to boost investor confidence.
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>

            {/* FEATURED  END */}


            {/* about */}
            <div className="container-fluid  about-page " id="about">
                <div className="row align-items-center banner-one">
                    <div className="col-lg-6">
                        <div className="gittu-banner-right">
                            <div className="gittu-banner-card">
                                <img src={NFT} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="gittu-banner-left">
                            <h1 className="text banner-title ">{Data.about}</h1>
                            <h2 className="text text-white"></h2>
                            <h5 className="text mt-10 responsive">{Data.aboutsub}</h5>
                            <h3 className="text banner-p mt-15">{Data.aboutExtra}</h3>
                            <h5 className="text mt-15 mb-15 responsive">{Data.aboutsubtwo}</h5>

                        </div>
                    </div>

                </div>
            </div>
            {/* about end */}

            {/*  Tokenomics  */}
            <div className="container-fluid  token-new" id="Tokenomics">
                <div className="gittu-bannert">
                    <div className="gittu-banner-card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={image} alt="" width="100" />
                        <center>
                            <h1 className="banban">{Data.headline}</h1>
                            <h5 className="mt-15 responsive">{Data.subline}</h5>
                        </center>
                    </div>
                </div>
                <div className="tokenss">
                    <div className="final-merg">
                        <div className="merg-token">
                            <div className="token-point">
                                <div className="token-in">
                                    <img src={green} alt="" />
                                    <div className="token-de">
                                        <p className="token-per">50%</p>
                                        <p className="token-con">Pre-sales Distribution </p>
                                    </div>
                                </div>
                                <div className="token-in">
                                    <img src={blue} alt="" />
                                    <div className="token-de">
                                        <p className="token-per">30%</p>
                                        <p className="token-con">Token Burning</p>
                                    </div>
                                </div>
                                <div className="token-in">
                                    <img src={orange} alt="" />
                                    <div className="token-de">
                                        <p className="token-per">10%</p>
                                        <p className="token-con">Centralized Exchange (CEX) Listing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="token-point">
                                <div className="token-in">
                                    <img src={red} alt="" />
                                    <div className="token-de">
                                        <p className="token-per">5%</p>
                                        <p className="token-con">Community Reward & Airdrop</p>
                                    </div>
                                </div>
                                <div className="token-in">
                                    <img src={sky} alt="" />
                                    <div className="token-de">
                                        <p className="token-per">5%</p>
                                        <p className="token-con"> NFT Project</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="token-board">
                            <img src={piechart} alt="" className="chart" />
                        </div>

                    </div>
                    <div className="mergtwo">
                        <div className="row align-items-center token-detail">
                            <center>
                                <div className="">
                                    <div className=" token" style={{ marginLeft: "0px" }}>
                                        <div className="gittu-banner-card ">
                                            <div className="gittu-banner-card-inner" style={{ padding: "16px 20px 0px 20px" }}>
                                                <div className="card-content">
                                                    <h5 className="fw-600 text-uppercase" style={{ color: "#81451e" }}>
                                                        Token Info
                                                    </h5>
                                                    <br />
                                                    {/* <div className="presale-raised fw-500 mb-10">
                                                        <p className="responsive" style={{ color: "#81451e" }}>USDT & Raised: {tokenSold}</p>
                                                        <p className="responsive" style={{ color: "#81451e" }}>Goal: {presaleToken}</p>
                                                    </div> */}

                                                    <div className="mb-10">
                                                        <TokenDetails />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>

                </div>

            </div>
            {/*  Tokenomics  end */}


            {/*  ROADMAP  */}
            <div className="container roadmap" id="roadmap" >
                <div className="gittu-bannert">
                    <div className="gittu-banner-card res-audit" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <center>
                            <div className="road">
                                <h1 className="banban">{Data.roadmap}</h1>

                            </div>
                            <h5 className="responsive" style={{ color: "#fff" }}>{Data.roadmapsub}</h5>
                            <h5 className="responsive" style={{ color: "#fff" }}>{Data.mapsub2}</h5>
                        </center>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="gittu-banner-right">
                            <div className="gittu-banner-card">
                                <div className="gittu-banner-card-inner">
                                    <div className="gittu-banner-left road-inner">
                                        <center> <span className="number">Phase 1.</span>
                                            <h4 className="head-responsive" style={{ color: "#173a17", fontWeight: "600" }}>{Data.map}</h4></center>
                                        <h5 className="mt-15 mapsub">{Data.mapsub}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="gittu-banner-right">
                            <div className="gittu-banner-card">
                                <div className="gittu-banner-card-inner">
                                    <div className="gittu-banner-left road-inner">
                                        <center><span className="number">Phase 2.</span>
                                            <h4 className="head-responsive" style={{ color: "#173a17", fontWeight: "600" }}> {Data.map2}</h4></center>
                                        <h5 className="mt-15 mapsub">{Data.mapsub2}</h5><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="gittu-banner-right">
                            <div className="gittu-banner-card">
                                <div className="gittu-banner-card-inner">
                                    <div className="gittu-banner-left road-inner">
                                        <center><span className="number">Phase 3.</span>
                                            <h4 className="head-responsive mt-2" style={{ color: "#173a17", fontWeight: "600" }}>{Data.map3}</h4></center>
                                        <h5 className="mt-15 mapsub responsive">{Data.mapsub3}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  ROADMAP  end */}

            {/*  STAGES  */}
            <div className="container-fluid Stages p-2" id="roadmap" >
                <div className="gittu-bannert">
                    <div className="gittu-banner-card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <center>
                            <div className="">
                                <h1 className="banban">{Data.Stages}</h1>

                            </div>
                            <h5 className="responsive" style={{ color: "#fff" }}>{Data.roadmapsub}</h5>
                            <h5 className="responsive" style={{ color: "#fff" }}>{Data.mapsub2}</h5>
                        </center>
                    </div>
                </div>
                <div className="row align-items-center stage-main">
                    <div className="col-lg-3">
                        <div className="gittu-banner-right">
                            <div className="gittu-banner-card res-stage">
                                <div className="">
                                    <div className="gittu-banner-left Stages-inner">
                                        <span className="Stages-p">Stage 1</span>
                                        <span className="Stages-p">1 $ = 66,666,666.66 PLINU</span>
                                        <ul className="Price">
                                            <li className="price-li">Stage 1 Price: $0.000000015</li>
                                            <li className="price-li">10th Oct. - 9th Dec.</li>
                                        </ul>
                                        <button className="price-btn" >Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="gittu-banner-right">
                            <div className="gittu-banner-card res-stage">
                                <div className="">
                                    <div className="gittu-banner-left Stages-inner">
                                        <span className="Stages-p">Stage 2</span>
                                        <span className="Stages-p">1 $ = 33,333,333.33 PLINU</span>
                                        <ul className="Price">
                                            <li className="price-li">Stage 2 Price: $0.000000030 </li>
                                            <li className="price-li">10th Dec. - 9th Jan.</li>
                                        </ul>
                                        <button className="price-btn">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="gittu-banner-right">
                            <div className="gittu-banner-card res-stage">
                                <div className="">
                                    <div className="gittu-banner-left Stages-inner">
                                        <span className="Stages-p">Stage 3</span>
                                        <span className="Stages-p">1 $ = 22,222,222.22 PLINU</span>
                                        <ul className="Price">
                                            <li className="price-li">Stage 3 Price: $0.000000045</li>
                                            <li className="price-li">10th Jan. - 9th Feb.</li>
                                        </ul>
                                        <button className="price-btn">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  STAGES  end */}

            {/* launching  */}

            <div className="container-fluid feat " id="roadmap" >
                <div className="gittu-bannert">
                    <div className="gittu-banner-card res-stage" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <center>
                            <div className="">
                                <h1 className="banban mt-2">{Data.launch}</h1>
                            </div>
                        </center>
                    </div>
                </div>
                <CarouselLaunch />
            </div>

            {/* launching  END */}

            {/* Airdrop */}
            <div className="container-fluid p-2 about-page about-page" id="airdrop">
                <div className="row ">
                    <div className="col-lg-6">
                        <div className="row align-items-center banner-one">
                            <center>
                                <div className="">
                                    <div className="gittu-banner-card air-res" style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundImage: `url(${greenBoard})`, backgroundSize: "contain", }}>
                                        <center>
                                            <h1 className="banban">{Data.AirDrop}</h1>
                                        </center>
                                    </div><br />
                                    <div className="gittu-banner-left banner-one">
                                        <div className="card-content">
                                            <h3 className="banner-p">{Data.line5}</h3>
                                            <h5 className="mt-10 lines">{Data.line6}</h5>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="gittu-banner-left banner-one">
                            <h3 className="banban">{Data.airdrop}</h3>
                            <h2 className="text-white"></h2>
                            <h5 className="mt-10 lines">{Data.airsub}</h5><br />
                            <h3 className="banner-p">{Data.line1}</h3>
                            <h5 className="mt-10 lines">{Data.line2}</h5>

                            <h3 className="banner-p">{Data.line3}</h3>
                            <h5 className="mt-10 lines">{Data.line4}</h5>
                            <center><img src={nftthree} alt="" width="300" /></center>
                        </div>
                    </div>

                </div>
            </div>
            {/* Airdrop end */}

            {/* coming soon */}

            <div className="container-fluid feat" id="roadmap" >
                <div className="gittu-bannert">
                    <div className="gittu-banner-card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <center>
                            <div className="">
                                <h1 className="banban">{Data.coming}</h1>
                            </div>
                        </center>
                    </div>
                </div>
                <CarouselNFT />
            </div>

            {/* coming soon end */}

            {/* faq */}
            <div className="container mt-3" id="faq">
                <div className="gittu-bannert">
                    <div className="gittu-banner-card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={image} alt="" width="100" />
                        <center>
                            <h1 className="banban road-f">{Data.faq}</h1>
                            <h5 className="mt-15">{Data.faqsub}</h5>
                        </center>
                    </div>
                </div><br /><br />
                <div className="row align-items-center faq-ban p-3">
                    <div className="">
                        <div className="">
                            <div className="gittu-banner-card faq-card">
                                <div className="gittu-banner-card-inner design" style={{ padding: "0px 0px 3px 0px" }}>
                                    {isBuyNow ? (
                                        <div className="card-content" style={{ display: "flex", justifyContent: "space-between" }}>


                                            <div className="presale-item mb-21">
                                                <div className="presale-item-inner">
                                                    <h5 className="fw-600 text-dark text-uppercase responsive">{Data.faq1}</h5>
                                                    <h5 className="fw-500 text-white responsive">{Data.ans1}</h5>
                                                </div>
                                            </div>
                                            <button className="presale-back-btn design" onClick={buyNowHandle}>
                                                <HiArrowLeft />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="card-content">
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <h5 className="fw-600 text-white text-uppercase responsive">{Data.faq1}</h5>
                                                <button className="presale-back-btn" onClick={buyNowHandle}>
                                                    <HiArrowLeft />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="gittu-banner-card faq-card">
                                <div className="gittu-banner-card-inner" style={{ padding: "0px 0px 3px 0px" }}>
                                    {isTwo ? (
                                        <div className="card-content" style={{ display: "flex" }}>

                                            <div className="presale-item mb-20">
                                                <div className="presale-item-inner">
                                                    <h5 className="fw-600 text-dark text-uppercase responsive">{Data.faq2}</h5>
                                                    <h5 className="fw-500 text-white responsive">{Data.ans2}</h5>
                                                </div>
                                            </div>
                                            <button className="presale-back-btn" onClick={isTwoHandle}>
                                                <HiArrowLeft />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="card-content">
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <h5 className="fw-600 text-white text-uppercase responsive">{Data.faq2}</h5>
                                                <button className="presale-back-btn" onClick={isTwoHandle}>
                                                    <HiArrowLeft />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="gittu-banner-card faq-card">
                                <div className="gittu-banner-card-inner" style={{ padding: "0px 0px 3px 0px" }}>
                                    {isThree ? (
                                        <div className="card-content" style={{ display: "flex" }}>

                                            <div className="presale-item mb-20">
                                                <div className="presale-item-inner">
                                                    <h5 className="fw-600 text-dark text-uppercase responsive">{Data.faq3}</h5>
                                                    <h5 className="fw-500 text-white responsive">{Data.ans3}</h5>
                                                </div>
                                            </div>
                                            <button className="presale-back-btn" onClick={isThreeHandle}>
                                                <HiArrowLeft />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="card-content">
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <h5 className="fw-600 text-white text-uppercase responsive">{Data.faq3}</h5>
                                                <button className="presale-back-btn" onClick={isThreeHandle}>
                                                    <HiArrowLeft />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="gittu-banner-card faq-card">
                                <div className="gittu-banner-card-inner" style={{ padding: "0px 0px 3px 0px" }}>
                                    {isFour ? (
                                        <div className="card-content" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

                                            <div className="presale-item mb-20">
                                                <div className="presale-item-inner">
                                                    <h5 className="fw-600 text-dark text-uppercase responsive">{Data.faq4}</h5>
                                                    <h5 className="fw-500 text-white responsive">{Data.ans4}</h5>
                                                </div>
                                            </div>
                                            <button className="presale-back-btn" onClick={isFourHandle}>
                                                <HiArrowLeft />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="card-content">
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <h5 className="fw-600 text-white text-uppercase responsive">{Data.faq4}</h5>
                                                <button className="presale-back-btn" onClick={isFourHandle}>
                                                    <HiArrowLeft />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="gittu-banner-card faq-card">
                                <div className="gittu-banner-card-inner" style={{ padding: "0px 0px 3px 0px" }}>
                                    {isFive ? (
                                        <div className="card-content" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

                                            <div className="presale-item mb-20">
                                                <div className="presale-item-inner">
                                                    <h5 className="fw-600 text-dark text-uppercase responsive">{Data.faq5}</h5>
                                                    <h5 className="fw-500 text-white responsive">{Data.ans5}</h5>
                                                </div>
                                            </div>
                                            <button className="presale-back-btn" onClick={isFiveHandle}>
                                                <HiArrowLeft />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="card-content">
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <h5 className="fw-600 text-white text-uppercase responsive">{Data.faq5}</h5>
                                                <button className="presale-back-btn" onClick={isFiveHandle}>
                                                    <HiArrowLeft />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="gittu-banner-card faq-card">
                                <div className="gittu-banner-card-inner" style={{ padding: "0px 0px 3px 0px" }}>
                                    {isSix ? (
                                        <div className="card-content" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

                                            <div className="presale-item mb-20">
                                                <div className="presale-item-inner">
                                                    <h5 className="fw-600 text-dark text-uppercase responsive">{Data.faq6}</h5>
                                                    <h5 className="fw-500 text-white responsive">{Data.ans6}</h5>
                                                </div>
                                            </div>
                                            <button className="presale-back-btn" onClick={isSixHandle}>
                                                <HiArrowLeft />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="card-content">
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <h5 className="fw-600 text-white text-uppercase responsive">{Data.faq6}</h5>
                                                <button className="presale-back-btn" onClick={isSixHandle}>
                                                    <HiArrowLeft />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div><br /><br />
            {/* faq end*/}


            {/* contact */}
            <div className="container-fluid contact" id="contact">
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
                                                    <img src={twitter} alt="telegram" width="5" className="social-img" />
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
                    <div className="presale-item-inner p-3" style={{ borderTop: "1px solid rgb(252, 239, 222)" }}>
                        <center><h5 className="fw-500 text-white text-center "><a href="/" className="tag-copy">{Data.copyright}</a></h5></center>
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