import React, { useState } from "react";
import DropdownDemoStyles from "./DropdownDemo.style";
import { BsGrid } from "react-icons/bs";

const DropdownDemo = () => {
  const [isDropdownDemoActive, setIsDropdownDemoActive] = useState(false);
  const handleDropdownDemo = () => {
    setIsDropdownDemoActive(!isDropdownDemoActive);
  };

  return (
    <DropdownDemoStyles>
      <button className="demo-btn">
        <BsGrid />
      </button>
      <ul className="dropdown-demo-list">
        <li>
          <a href="#about" >About</a>
        </li>
        <li>
          <a href="#Tokenomics">Tokenomics</a>
        </li>
        <li>
          <a href="#roadmap">roadmap</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="/howtobuy">How To Buy</a>
        </li>
      </ul>
    </DropdownDemoStyles>
  );
};

export default DropdownDemo;
