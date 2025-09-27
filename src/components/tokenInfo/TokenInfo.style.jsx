import styled from "styled-components";

const TokenInfoWrapper = styled.ul`
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
    border-bottom: 1px solid #81451e;
  }
  .token{
    font-weight: 600;
    font-size: 18px;
  }
  .tokeninfo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 11px;
    border-bottom: 1px solid #81451e;
  }
  .autop{
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;
    color: #81451e;
  }
  li p {
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    color: #81451e;
  }

  @media screen and (max-width: 575px) {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      padding-bottom: 11px;
      flex-direction: column;
    }
    .autop{
      font-weight: 600;
      font-size: 10px;
      line-height: 16px;
      color: #81451e;
    }
    .tokeninfo{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0;
    }
    .tokenP{
      font-size: 13px;
    }
    .token{
      font-size: 13px;
    }
    .token-detail-res{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0;
    }
`;

export default TokenInfoWrapper;
