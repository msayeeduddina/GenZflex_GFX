import styled from "styled-components";

import BackgroundImg from "../../../assets/images/background.jpg";
import aboutback from '../../../assets/images/back.webp'
import navButton from '../../../assets/images/navButton.svg'
import topBrown from '../../../assets/images/topBrown.svg'
import tokenBACK from '../../../assets/images/collabBox.svg'
import greenBoard from '../../../assets/images/greenSign.svg'
import woodTable from '../../../assets/images/woodTable.svg'
import cell from '../../../assets/images/cell.svg'
import iconBorder from '../../../assets/images/iconBorder.svg'
import Brownbtn from '../../../assets/images/brownButton.svg'
import greenBorder from '../../../assets/images/greenBorder.svg'
import bg from '../../../assets/images/bg.webp'
import inputborder from '../../../assets/images/inputBorder.svg' 
import nftback from '../../../assets/images/nft-back.jpg'

const BannerWrapper = styled.section`
  background-image: url(${BackgroundImg});
  background-position: center center;
    background-size: 127%;
    height: auto;
    padding: 170px 0 0px 0;
    position: relative;
    z-index: 0;
    background-attachment: fixed;

  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #33733f96;
  }
  
  .text{
    font-style: italic;
    font-size: 20px;
    color: rgb(252, 239, 222);
    line-height: 30px;
    width: 100%;
  }
  .banner-title {
    font-weight: 700;
    font-size: 60px;
    line-height: 80px;
    font-family: "Bebas Neue", cursive;
    color:rgb(252, 239, 222);
}
.subtitle{
  font-size: 18px;
    color: #e8e8e8;
}
  }
  .inner-box{
    background: red;
    border-radius: 10px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 10px;
    margin-top: 10px;
    color:rgb(252, 239, 222);
    font-size:19px;
    }
    .inner-span{
      font-size:22px;
      color:white;
    }
    .main-btn{
      display: flex;
      justify-content: space-around;
    }
    .wrap-btn{
      font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    text-transform: uppercase;
    color: #198754;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.3s;
    padding: 12px;
    min-width: 45%;
    
    }
  .head-line{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${greenBoard});
    background-size: contain;
    width: 61%;
  }
  .banner-p{
    font-weight: 500;
    font-size: 30px;
  }
  .lines{
    line-height: 22px;
  }
  .news{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .news-form{
    display: flex;
    flex-direction: row;
    background-image: url(${inputborder});
    background-size: cover;
    margin-top: 15px;
    width: 100%;
  }
  .news-input{
    width: 55%;
    border: none;
    background: transparent;
    padding-left: 10px;
  }
  .news-btn{
    padding: 5px 0px;;
    color: rgb(252, 239, 222);
    font-weight: bold;
    white-space: nowrap;
    transition: all 0.2s ease-in-out 0s;
    font-size: 16px;
    background: transparent;
    border-width: 10px;
    border-style: solid;
    border-color: initial;
    border-image: url(${Brownbtn}) 12 fill / 1 / 0 stretch;
    width: 40%;
    text-align: center;

    &:hover{
      cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out 0s;
    box-shadow: rgba(0, 0, 0, 0.6) -10px 10px 0px -4px;
    }
  }
  .banner-one{
    width:75%;
    margin-left: 12%;
  }
  .about-page{
    background-image: url(${aboutback});
    background-attachment: fixed;
    background-size: cover;
    backdrop-filter: blur(20px);
  }
  .Tokenomics{
    display: flex;
    
  }
  .token-detail{
    background-image: url(${tokenBACK});
    background-size: cover;
  }
  .roadmap{
    background-image: url(${woodTable});
    background-size: cover;
    background-position: bottom;
    margin-top:10%;
    margin-bottom:10%;
  }
  .road{
    background-image: url(${greenBoard});
    background-size: cover;
    width: 70%;
    padding: 25px;
  }
  .road-f{
    background-image: url(${greenBoard});
    background-size: cover;
    width: 70%;
    padding: 5px;
  }
  .road-inner{
    background-image: url(${cell});
    background-size: cover;
    text-align: center;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 350px;
    padding: 15px;
    border-width: 5px;
  }
  .airdrop-ban{
    width:100%;
    max-width: 100%;
    margin-left: auto;
    position: relative;
  }
  .banban{
    font-weight: 700;
    font-size: 60px;
    line-height: 80px;
    font-family: "Bebas Neue", cursive;
    color:rgb(252, 239, 222);

  }
  .ban{
    font-weight: 700;
    font-size: 60px;
    line-height: 80px;
    font-family: "Bebas Neue", cursive;
    color:rgb(252, 239, 222);
  }
  .audit-wrap{
    display: flex;
  justify-content: center;
  }
  .audit-inner{
    background-image: url(${tokenBACK});
    background-size: cover;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 25px;
    margin-top: 10%;
    border-width: 5px;
  }
  .audit-li{
    font-size: 16px;
    color: rgb(0, 0, 0);
    padding: 15px;
  }
  .audit-img{
    max-width: 100%;
    height: auto;
  }
  .feat{
    background: linear-gradient(rgb(3 51 29 / 97%) 40%, rgb(4 75 43 / 86%) 100%);
    background-size: cover;
    margin-top:0%;
    display: flex;
    flex-direction: column;
    width: 100%;
    
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    padding: 24px;
  }
  .react-multi-carousel-list{
    align-items: center;
    display: flex;
    overflow: hidden;
    position: relative;
    padding-bottom: 30px;
    margin-bottom: 45px;
    margin-top:20px;
    justify-content: center;
  }
  .react-multi-carousel-track{
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }
  
  .item{
    display: flex;
    max-width: 400px;
    height: 120px;
    padding: 10px;
    align-items: center;
    background: transparent;
    background-size: cover;
    background-image: url(${tokenBACK});
    margin: auto 1rem;
    cursor: pointer;

  }
  .comin-soon{
    display: flex;
    max-width: 400px;
    height: 300px;
    padding: 10px;
    align-items: center;
    background-size: cover;
    background-image: linear-gradient(rgb(0 0 0 / 61%), rgb(0 0 0 / 65%)),url(${nftback});
    margin: auto 1rem;
    cursor: pointer;
    border-radius: 15px;
    border: 5px solid #81451e;
    box-shadow: #198754 -10px 10px 0px -4px;

    &:hover{
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.6) -10px 10px 0px -4px;
    }
  }
  .top-border{
    position: relative;
  }
  .img-feat{
    width: 100%;
    max-width: 250px;
    height: auto;
  }
  .Stages{
    background: linear-gradient(rgb(3 51 29 / 97%) 40%, rgb(4 75 43 / 86%) 100%);
    background-size: cover;
    margin-top:10%;
    
  }
  .Stages-inner{
    background-image: url(${tokenBACK});
    background-size: cover;
    text-align: center;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 350px;
    padding: 25px;
    margin-top: 10%;
    border-width: 5px;
  }
  .Stages-p{
    font-size: 20px;
    color: rgb(8, 7, 12);
    font-weight: bold;
    text-align: left;
  }

  .stage-main{
    display: flex;
    justify-content: center;
  }
  .sub-stage{
    font-size: 20px;
    color: rgb(112, 112, 112);
    font-weight: 400;
    margin-bottom: 10px;
    text-align: left;
  }
  .Price{
    color:#707070;
    list-style: square;
    margin: 0px;
    padding-left: 20px;
    text-align: left;
  }
  .price-li{
    font-size: 17px;
    color: #707070;
    padding: 5px 0px;
  }
  .price-btn{
    padding: 5px 10px;
    color: rgb(252, 239, 222);
    font-weight: bold;
    white-space: nowrap;
    transition: all 0.2s ease-in-out 0s;
    font-size: 16px;
    text-align: center;
    margin-top: 25px;
    background: transparent;
    border-width: 10px;
    border-style: solid;
    border-color: initial;
    border-image: url(${Brownbtn}) 10 fill / 1 / 0 stretch;

    &:hover{
      cursor: pointer;
      transform: scale(1.05);
      transition: all 0.2s ease-in-out 0s;
      box-shadow: rgba(0, 0, 0, 0.6) -10px 10px 0px -4px;
      border-image: url(${greenBorder}) 12 fill / 1 / 0 stretch;
    }
  }
  .faq-card{
    border-bottom: 3px solid #ffffff4a;
  }
  .bnb-btn{
    width: 100%;
    padding: 9px 16px;
    border: 2px solid #ffffff1a;
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
  }
  .contact{
    overflow: hidden;
    background: url(${bg});
    backdrop-filter: blur(10px);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
  .whitepaper-btn1{
    width: fit-content;
    background:url(${navButton});
    background-repeat: no-repeat;
    border-radius: 0;
    background-size:cover;
    border: 0;
    padding: 14px 49px;
    font-family: ${({ theme }) => theme.fonts.outfit};
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    text-transform: uppercase;
    color: rgb(129, 69, 30);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-style: outset;
    transition: all 0.2s ease-in-out 0s;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all 0.2s ease-in-out 0s;
      box-shadow: rgba(0, 0, 0, 0.6) -10px 10px 0px -4px;
    }
  }
  .token-point{
    display: flex;
    gap: 15px;
    width: 100%;
    flex-direction: column;
  }
  .token-in{
    display: flex;
    flex-direction: row;
  }
  .token-de{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }
  .mergtwo{
    position: relative;
    top: -158px;
    width: 51%;
  }
  .tokenss{
   
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 24px;
  }
  .token-per{
    font-size: 20px;
    color: rgb(252, 239, 222);
    display: flex;
  }
  .token-con{
    font-size: 16px;
    color: rgb(252, 239, 222);
    font-weight: 300;
  }
  .token-board{
    margin-bottom: 15px;
    grid-area: col2 / col2 / col2 / col2;
    width: 100%;
  }
  .chart{
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  .token-new{
    display: grid;
    width: 100%;
    grid-auto-columns: 1.3fr 1fr;
    -webkit-box-align: center;
    align-items: center;
    background: linear-gradient(rgb(3, 51, 29) 40%, rgb(4, 75, 43) 100%);

  }
  .tokenU{
    display: flex;
    flex-direction: column;
   
  }
  .tokendetail{
    display: flex;
    flex-flow: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    border-bottom: 1px solid rgb(112, 112, 112);
    overflow-wrap: break-word;
    width: 100%;
  }
  .tokenP{
    flex: 0.4 1 0%;
    font-size: 16px;
    padding: 10px;
    color: rgb(112, 112, 112);
  }
  .line{
    width: 1px;
    height: auto;
    border-right: 1px solid rgb(112, 112, 112);
  }
  .merg-token{
    display:flex;
    width:100%;
  }
  .final-merg{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  .tokenD{
    display: flex;
    flex: 1 1 0%;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
  }
  .tokenM{
    flex: 1 1 0%;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    word-break: normal;
    color:#08070C;
  }
  .mapsub{
    color:#81451e;
    font-weight: 600;
  }
  .faq-ban{
    background-image: url(${woodTable});
    background-size: cover;
    padding: 30px;
  }
  .number{
    font-size: 40px;
    
    font-weight: 600;
    color: #bcc977;
    background-image: url(${greenBoard});
    background-size: cover;
    display:flow;
    font-family: Poppins,sans-serif;
  }
  .token-ban{
    width: 61% !important;
    margin: auto;
    background-image: url(${greenBoard});
    background-size: cover;
  }
  .social-icon{
    color: rgb(129, 69, 30);
    font-weight: bold;
    white-space: nowrap;
    transition: all 0.2s ease-in-out 0s;
    font-size: 16px;
    background: transparent;
    border-width: 5px;
    border-style: solid;
    border-color: initial;
    border-image: url(${iconBorder}) 12 fill / 1 / 0 stretch;
    aspect-ratio: 1 / 1;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 5px;
    margin-right:20px;
  }
  .social-icon:hover  {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out 0s;
    box-shadow: rgba(0, 0, 0, 0.6) -10px 10px 0px -4px;
  }
  .social-img{
    width: 100%;
    max-width: 50px;
    min-width: 10px;
  }
  .auth-section{
    margin: 0% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .auth-container-1{
    padding: 20px;
    margin-right: 30px;
  }
  .auth-container-2{
    min-width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .auth-container-2 form{
    width: 143%;
    padding: 7px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 0 10px 25px rgb(0 0 0 / 5%), 0 20px 48px rgb(0 0 0 / 5%), 0 1px 4px rgb(0 0 0 /10%);
  }
  
  .auth-container-2 form label input{
    padding: 7px 14px;
    width: calc( 100% - 30px );
    font-size: 1rem;
    border: 1px solid #198754!important;
    background: #b1c5b4a3;
    border-radius: 5px;
    color: #f8f9fa!important;

}

.auth-container-2 form textarea{
  padding: 7px 14px;
  width: calc( 100% - 30px );
  font-size: 1rem;
  border: 1px solid #198754!important;
  background: #b1c5b4a3;
  border-radius: 5px;
  color: #f8f9fa!important;

}

.auth-container-2 form label:nth-child(1) h4,
.auth-container-2 form label:nth-child(2) h4,
.auth-container-2 form label:nth-child(3) h4{
    margin-bottom: 5px;
    margin-top: 10px;
    font-size:17px;
}

.auth-container-2 form label:nth-child(4) h4{
    display: flex;

}

.auth-container-2 form label:nth-child(4) input{
    width: 15%;
    margin:13px 0px ;
}
.single-info-box{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: none;
    margin-bottom: 17px
}
.info-icon{
  padding:0px 25px 0px 0px;
}
  .gittu-banner-list {
    li {
      font-family: ${({ theme }) => theme.fonts.body};
      font-weight: 500;
      font-size: 18px;
      line-height: 40px;
      color: ${({ theme }) => theme.colors.white}cc;
    }
  }

  .gittu-banner-right {
    width: 512px;
    max-width: 100%;
    margin-left: auto;
    position: relative;
    
    .overlay {
      position: absolute;
      z-index: 9;
      top: -65px;
      left: -65px;
      img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
      }
    }
    .token{
      width: 700px;
    max-width: 100%;
    margin-left: auto;
    position: relative;
    }
    .Tokenomics-card{
      background: linear-gradient(rgb(3 51 29 / 97%) 40%, rgb(4 75 43 / 86%) 100%);

    }
    .presale-live-btn {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.bgPresaleBtn};
      backdrop-filter: blur(10px);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        width: 100px !important;
        height: 100px !important;
        animation: rotateImg 15s infinite linear;
      }
      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 24px;
          color: ${({ theme }) => theme.colors.white};
          transition: 0.3s;
        }
      }

      &:hover {
        .icon svg {
          color: ${({ theme }) => theme.colors.white};
          transform: rotate(-45deg);
        }
      }
    }
    
    @keyframes rotateImg {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .whitepaper-btn {
    width: fit-content;
    background:url(${navButton});
    background-repeat: no-repeat;
    border-radius: 0;
    border: 0;
    padding: 14px 30px;
    font-family: ${({ theme }) => theme.fonts.outfit};
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    text-transform: uppercase;
    color: rgb(129, 69, 30);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-style: outset;
    transition: all 0.2s ease-in-out 0s;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all 0.2s ease-in-out 0s;
      box-shadow: rgba(0, 0, 0, 0.6) -10px 10px 0px -4px;
    }
    
  }

  .gittu-banner-card {
    width: 100%;
    position: relative;
    overflow: hidden;

    .gittu-banner-card-inner {
      // background: ${({ theme }) => theme.colors.white}1a;
      // backdrop-filter: blur(5px);
      border-radius: 20px;
      padding: 20px 40px 40px 40px;
      transform-style: preserve-3d;
      transition: transform 0.6s;
      transform: rotateY(0deg);

      .card-content {
        transform: rotateY(0deg);
        
      }
    }

    &.flip {
      .gittu-banner-card-inner {
        transform: rotateY(180deg);

        .card-content {
          transform: rotateY(180deg);
        }
      }
    }
    .faq-card{
      background-image: url(${cell});
    background-size: cover;
    background-position: center;
    }
    // .tokendetail{
    //   width:75%;
    // }
    .bg-shape-img {
      position: absolute;
      z-index: -1;
      top: 0;
      &.img-1 {
        left: 0;
      }
      &.img-2 {
        right: 0;
      }
    }
    .wallet{
      display:flex;
      justify-content: space-around;
    }
    .presale-stage-title {
      // margin-left: 40px;
      margin-bottom: 25px;
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.white};
      background-image: url(${topBrown});
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 90px;
      padding: 26px 34px 18px 30px;
    }

    .presale-raised {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
    }
  }

  .token-info-list {
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      padding-bottom: 11px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.white}1a;
    }

    li p {
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .presale-back-btn {
    padding-left: 60px;
    margin-bottom: 23px;
    border: 0;
    background: transparent;
    color: #198754;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .presale-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    .presale-item-inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    
    h6 {
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
    }

    input {
      width: 100%;
      padding: 16px;
      background: #65886a;
      border: 2px solid ${({ theme }) => theme.colors.white}1a;
      border-radius: 10px;
      font-weight: 600;
      font-size: 18px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      &:focus {
        outline: none;
      }
    }
  }

  .gittu-banner-slider {
    // position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    // margin-top:-48px;
  }

  @media screen and (max-width: 1199px) {
    .banner-title {
      font-size: 50px;
      line-height: 70px;
    }

    .gittu-banner-left {
      h2 {
        font-size: 50px;
        line-height: 70px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding: 158px 0 170px 0;

    .gittu-banner-left {
      margin-bottom: 120px;
    }

    .gittu-banner-right {
      margin-left: 0px;
      padding-left: 65px;

      .overlay {
        left: 0px;
      }
    }
    
  }

  @media screen and (max-width: 575px) {
    .gittu-banner-right {
      padding-left: 0px;
      .overlay {
        top: -45px;
        img {
          width: 90px;
          height: 90px;
        }
      }
      
      .presale-live-btn {
        width: 90px;
        height: 90px;
        padding: 10px;
      }
    }
    .auth-container-2 form {
      width: 105%;
      padding: 7px;
  }
  .banban {
    font-weight: 600;
    font-size: 27px;
    line-height: inherit;
}
.banner-p {
  font-weight: 600;
  font-size: 22px;
  margin-top: 6px;
}
    .ban{
      font-weight: 600;
    font-size: 30px;
    line-height: inherit;
    font-family: "Bebas Neue",cursive;
    }
    .audit-wrap{
      display: flex;
    flex-direction: column;
    }
    .text{
      line-height: 30px;
      width: 100%;
    }
    .audit-inner{
    
      display: flex;
      flex-direction: column;
      width: 100%;
      border-image: url(${tokenBACK}) 3 fill / 1 / 0 stretch;
      background-repeat: no-repeat;
      background-size: contain;
      padding: 10px;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      transition: all 0.2s ease-in-out 0s;
      cursor: pointer;
    }
    .audit-li{
      font-size: 12px;
      color: rgb(0, 0, 0);
      padding: 15px;
    }
    .audit-img{
      max-width: 40%;
      height: auto;
    }
    .react-multi-carousel-track{
      display: flex;
      flex-direction: column;
      
    }
    .react-multi-carousel-item{
      margin-bottom: 20px;
    }
    .react-multi-carousel-list{
      align-items: center;
      display: flex;
      position: relative;
      padding-bottom: 0px;
      margin-bottom: 0px;
      margin-top:0px;
      justify-content: center;
    }
    .banner-title{
      font-size: 36px !important;
    line-height: 56px !important;
    }
    .res-audit{
      padding: 0px 14px !important;
    }
    .responsive{
      font-size: 13px !important;
      line-height: 17px !important;
    }
    .feat{
      margin-top: 0%;
    }
    .inner-box{
      padding: 5px 5px;
      font-size: 13px;
    text-align: center;
      }
    .final-merg {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .mergtwo{
      position: inherit;
      width: 100%;
    }
    .token-con, {
      font-size: 13px;
    }
    .token-per{
      font-size: 15px;
    }
    .head-responsive{
      font-size: 15px;
      margin-top:10px;
    }
    .mapsub{
      font-size: 13px !important;
      line-height: 17px !important;
    }
    .main{
      padding: 107px 0 0px 0;
    }
    .tag-copy{
      font-size: 13px;
    }
    .Stages-inner{
      background-image: url(${tokenBACK});
      background-size: cover;
      text-align: center;
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      max-width: 350px;
      border-width: 5px;
    }
    .res-stage{
      padding:0px !important;
    } 
    .air-res{
      padding:4px 0px !important;
    }
    .faq-card{
      padding:0px !important;
    }
    .main-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .Stages-p{
      font-size: 16px;
      color: rgb(8, 7, 12);
      font-weight: bold;
      text-align: left;
    }
    .head-line{
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: url(${greenBoard});
      background-size: contain;
      width: 100%;
    }
    .banner-one{
      width:100%;
      margin-left: 0%;
    }
    .presale-item {
      flex-wrap: wrap;
      gap: 15px;
    }
    .token-ban{
      width: 100% !important;
      margin: auto;
      background-image: url(${greenBoard});
      background-size: cover;
    }
    .tokenss {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
  }
    .road{
      background-image: url(${greenBoard});
      background-size: cover;
      width: 100%;
      padding: 25px;
    }
    .road-f{
      background-image: url(${greenBoard});
      background-size: cover;
      width: 100%;
      padding: 5px;
    }
    .air{
      background-image: url(${greenBoard});
      background-size: contain;
    }
    .airdrop-ban{
      width:100%;
      max-width: 100%;
      margin-left: auto;
      position: relative;
    }
    .number {
      font-size: 28px;
    }
    .wallet{
      display:flex;
      flex-direction: column;
    }
    .gittu-banner-card {
      padding: 3px 0px;
      .gittu-banner-card-inner {
        padding: 0px 0px 0px;
      }
      
    }
    
    .auth-section{
    margin: 0% auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 20px;
    }
    .auth-container-1{
      padding: 20px;
      margin-right: 30px;
    }
    .auth-container-2{
      min-width: 20%;
     
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .auth-container-2 form label input {
      padding: 7px 14px;
      width: calc( 100% - 0px );
      font-size: 1rem;
      border: 1px solid #198754!important;
      background: #b1c5b4a3;
      border-radius: 5px;
      color: #f8f9fa!important;
    }
    .auth-container-2 form textarea {
      padding: 7px 14px;
      width: calc( 100% - 0px );
      font-size: 1rem;
      border: 1px solid #198754!important;
      background: #b1c5b4a3;
      border-radius: 5px;
      color: #f8f9fa!important;
    }
  }

  @media screen and (max-width: 480px) {
    .banner-title {
      font-size: 36px;
      line-height: 50px;
    }

    .gittu-banner-left {
      h2 {
        font-size: 36px;
        line-height: 50px;
      }
      h5 {
        font-size: 16px;
      }
    }
  }
  .doCGma::before {
    z-index: -1;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #33733fd6;
}
`;

export default BannerWrapper;
