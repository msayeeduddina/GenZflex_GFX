import styled from "styled-components";

import ChevronDownIcon from "../../assets/images/icons/chevron-down.svg";

const DropdownWrapper = styled.div`
  position: relative;

  .dropdown-toggle {
    border: 0;
    width: 100%;
    padding: 9px 16px;
    background: #65886a;
    border: 2px solid ${({ theme }) => theme.colors.white}1a;
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    gap: 14px;

    &::after {
      position: absolute;
      top: auto;
      right: 16px;
      content: url(${ChevronDownIcon});
      border: 0;
    }

    img {
      width: 34px;
      height: 34px;
      border-radius: 50%;
    }
  }

  .dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.bgHeader};
    border: 2px solid ${({ theme }) => theme.colors.white}1a;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    overflow: hidden;

    li button {
      width: 100%;
      border: 0;
      padding: 10px;
      background-color: transparent;
      display: flex;
      align-items: center;
      gap: 14px;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.white}1a;
      }
    }
  }
`;

export default DropdownWrapper;
