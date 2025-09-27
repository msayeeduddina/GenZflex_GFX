import styled, { css } from "styled-components";
import brownButton from '../../assets/images/brownButton.svg'
import greenBorder from '../../assets/images/greenBorder.svg'
import brownBorder from '../../assets/images/brownBorder.svg'


const ButtonWrapper = styled.button`
  background-image: url(${brownButton});
  background-size: cover;
  backdrop-filter: blur(7.5px);
  border: 0;
  padding: 10px 55px;
  font-family: ${({ theme }) => theme.fonts.outfit};
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #198754;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out 0s;
    box-shadow: rgba(0, 0, 0, 0.6) -10px 10px 0px -4px;
    
  }

  ${({ large }) =>
    large &&
    css`
      padding: 17px;
      width: 45%;
      background-image: url(${greenBorder});
      color: #ffffff;
      transition: 0.3s;

      &:hover {
        cursor: pointer;
      transform: scale(1.05);
      transition: all 0.2s ease-in-out 0s;
      box-shadow: rgba(0, 0, 0, 0.6) -10px 10px 0px -4px;
      }
    `}

  ${({ variant }) =>
    variant === "green" &&
    css`
      padding: 17px;
      min-width: 245px;
      background:#1EE8B7b3;
      border-radius: 50px;
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      &:hover {
        background: ${({ theme }) => theme.colors.conicGradient};
      }
    `}

${({ variant }) =>
    variant === "gradient" &&
    css`
      padding: 17px;
      min-width: 270px;
      background: ${({ theme }) => theme.colors.linearGradient};
      border-radius: 50px;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      &:hover {
        background: ${({ theme }) => theme.colors.linearGradient};
      }
    `}

${({ variant }) =>
    variant === "gradient2" &&
    css`
      padding: 17px;
      min-width: 270px;
      background: ${({ theme }) => theme.colors.linearGradient2};
      border-radius: 50px;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      &:hover {
        background-image: url(${greenBorder}));
      }
    `}

${({ variant }) =>
    variant === "connect" &&
    css`
      padding: 12px;
      min-width: 45%;
      background-image: url(${brownButton});
      
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      &:hover {
        background-image: url(${greenBorder}));
      }

      .short-address {
        display: none;
      }
    `}
      
  @media screen and (max-width: 767px) {
    ${({ variant }) =>
      variant === "connect" &&
      css`
        padding: 10px 20px;
        min-width: 80%;
        span {
          display: none;
        }
        .short-address {
          display: block;
        }
        
      `}
      ${({ large }) =>
      large &&
      css`
        padding: 10px 20px;
        margin-top:10px;
        width: 100%;
        background-image: url(${greenBorder});
        color: #ffffff;
        transition: 0.3s;
  
        &:hover {
          cursor: pointer;
        transform: scale(1.05);
        transition: all 0.2s ease-in-out 0s;
        box-shadow: rgba(0, 0, 0, 0.6) -10px 10px 0px -4px;
        }
      `}
      
  }

  @media screen and (max-width: 575px) {
    ${({ variant }) =>
      variant === "green" &&
      css`
        min-width: unset;
        width: 100%;
      `}
  }
`;

export default ButtonWrapper;
