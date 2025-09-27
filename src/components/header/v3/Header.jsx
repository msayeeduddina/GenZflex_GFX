import HeaderWrapper from "./Header.style";
import BuyMobileMenu from "../mobileMenu/BuyMobileMenu";

import Logo from "../../../assets/images/white-logo.png";
import Telegram from "../../../assets/images/icons/telegram.svg";
import Twitter from "../../../assets/images/icons/twitter-X.png";
import { HiMenuAlt3 } from "react-icons/hi";

import { useState } from "react";
import BuyDropdown from '../dropdownDemo/BuyDropdown'

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  
  return (
    <>
      <HeaderWrapper className="header-section">
        <div className="container">
          <div className="gittu-header-content">
            <div className="gittu-header-left">
              <a className="gittu-header-logo" href="/">
                <img src={Logo} alt="Logo" />
              </a>

              <BuyDropdown />
            </div>
            <div className="gittu-header-right">
              <div className="gittu-header-menu-toggle">
                <button className="menu-toggler" onClick={handleMobileMenu}>
                  <HiMenuAlt3 />
                </button>
              </div>
              <div className="gittu-header-right-menu">
                <ul className="social-links">
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
                    <a
                      href="https://twitter.com/pepeloveinubsc?t=Jj-FFT989jdR-2GH7pUosw&s=08"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Twitter} alt="icon" />
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>
      {isMobileMenu && <BuyMobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
