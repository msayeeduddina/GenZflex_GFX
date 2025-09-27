import React, { useState } from "react";
import DropdownDemoStyles from "./DropdownDemo.style";
import { BsGrid } from "react-icons/bs";

const BuyDropdown = () => {
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
          <a href="/">Home</a>
        </li>
      </ul>
    </DropdownDemoStyles>
  );
};

export default BuyDropdown;
