import MobileMenuWrapper from "./MobileMenu.style";
import Logo from "../../../assets/images/white-logo.png";
import Telegram from "../../../assets/images/icons/telegram.svg";
import Twitter from "../../../assets/images/icons/twitter-X.png";
import { AiOutlineClose } from "react-icons/ai";
import ConnectWalletButton from "../../button/ConnectWalletButton";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";

const MobileMenu = ({ mobileMenuHandle }) => {
  return (
    <MobileMenuWrapper>
      <div className="gittu-mobile-menu-content">
        <div className="mobile-menu-top">
          <a className="mobile-logo" href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <button className="mobile-menu-close" onClick={mobileMenuHandle}>
            <AiOutlineClose />
          </button>
        </div>

        <ul className="mobile-menu-list ">
          <li>
          <a href="#about" >About</a>
          </li>
          <li>
          <a href="#Tokenomics">Tokenomics</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>
        <ul className="mobile-social-links mb-15">
          <li>
            <a
              href="https://t.me/pepeloveinubsc"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Telegram} alt="icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/pepeloveinubsc?t=Jj-FFT989jdR-2GH7pUosw&s=08" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="icon" />
            </a>
          </li>
        </ul>

        <div className="d-flex justify-content-center">
          <ConnectWalletButton />
        </div>
      </div>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
