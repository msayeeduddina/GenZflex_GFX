import DropdownWrapper from "./Dropdown.style";
import { useState } from "react";

import EthIcon from "../../assets/images/token/bnb.png";
import UsdtIcon from "../../assets/images/token/usdt.png";
import { payWith } from "../../contracts/config";

const Dropdown = ({ payId, setPayId }) => {
  const dropdownList = [
    {
      id: "1",
      icon: EthIcon,
      title: payWith,
    },
  ];

  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [listId, setListId] = useState("1");
  const [titleText, setTitleText] = useState(payWith);
  const [selectedImg, setSelectedImg] = useState(EthIcon);

  const dropdownHandle = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleDropdownData = (item) => {
    setPayId(item.id);
    setListId(item.id);
    setTitleText(item.title);
    setSelectedImg(item.icon);
    setIsDropdownActive(false);
  };

  return (
    <DropdownWrapper>
      <button className="dropdown-toggle" onClick={dropdownHandle}>
        <img src={selectedImg} alt="icon" />
        <span>{titleText}</span>
      </button>
      {isDropdownActive && (
        <ul className="dropdown-list" onClick={dropdownHandle}>
          {dropdownList.map((item, i) => (
            <li key={i}>
              <button onClick={() => handleDropdownData(item)}>
                <img src={item.icon} alt="icon" />
                <span>{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
