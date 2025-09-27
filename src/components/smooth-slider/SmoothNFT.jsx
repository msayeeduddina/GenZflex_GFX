import styled from "styled-components";

const SmoothNFTWrapper = styled.div`
  width: 100%;
  padding: 27px 0;
  overflow: hidden;
  // background: ${({ theme }) => theme.colors.white}0d;
  backdrop-filter: blur(10px);

  .smooth-slider-container {
    width: calc(250px * 16);
    display: flex;
    align-items: center;
    gap: 0px;
    animation: smoothSlider 25s infinite linear;
  }

  .slider-item {
    width: 250px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // for carousel

  .carousel .slide img {
    width: 100%;
    vertical-align: top;
    border: 0;
  }
  .carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden;
    width: 37% !important;
}
.carousel .control-dots {
  position: absolute;
  bottom: 0;
  margin: 10px 0;
  padding: 0;
  text-align: center;
  width: 100%;
  z-index: 1;
  top: 317px;
}

.slide {
  min-width: 100% !important;
}



  @keyframes smoothSlider {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 8));
    }
  }
  @media screen and (max-width: 575px) {
  .carousel .control-dots {
    position: absolute;
    bottom: 0;
    margin: 10px 0;
    padding: 0;
    text-align: center;
    width: 100%;
    z-index: 1;
    top: 292px;
  }
  .carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden;
    width: 100% !important;
  }
  .slide {
    min-width: 100% !important;
  }
  .slide-res{
    padding: 0px 0px;
  }
}
`;

export default SmoothNFTWrapper;
