import React from "react";
import TokenInfoWrapper from "./TokenInfo.style";
import { useAccount, useContractRead } from "wagmi";
import { Link } from "react-router-dom";
import {
  payWith,
  currentStageIdCall,
  currentStageInfoCall,
  maxStageCall,
  tokenNameCall,
  tokenSymbolCall,
} from "../../contracts/config";
import { useEffect } from "react";
import { useState } from "react";
import { formatEther } from "viem";

const TokenDetails = () => {
  const [tokenName, setTokenName] = useState("PEPELOVEINU");
  const [tokenSymbol, setTokenSymbol] = useState("PLINU");
  const [maxStage, setMaxStage] = useState(0);
  const [currentStage, setCurrentStage] = useState(1);
  const [currentPrice, setCurrentPrice] = useState("0.001 BNB");
  const [nextStage, setNextStage] = useState(0);
  const [nextPrice, setNextPrice] = useState("0.002 BNB");
  const [tokensupply] = useState("420,000,000,000,000");
  const [tokenstandand] = useState("Binance smart chain")
  // const [tokenscontact] = useState("0x215cbd4ebe5349680428401acd5e3a270f882bd5")

  const { isConnected } = useAccount();
  const { data: tokenNameData } = useContractRead({ ...tokenNameCall });
  const { data: tokenSymbolData } = useContractRead({ ...tokenSymbolCall });
  const { data: maxStageData } = useContractRead({ ...maxStageCall });
  const { data: currentStageIdData } = useContractRead({
    ...currentStageIdCall,
  });
  const { data: currentStageInfoData } = useContractRead({
    ...currentStageInfoCall,
    args: [currentStageIdData],
  });
  const { data: nextStageInfoData } = useContractRead({
    ...currentStageInfoCall,
    args: [nextStage],
  });

  useEffect(() => {
    if (isConnected) {
      if (tokenNameData) {
        setTokenName(tokenNameData);
      }

      if (tokenSymbolData) {
        setTokenSymbol(tokenSymbolData);
      }

      if (maxStageData) {
        setMaxStage(maxStageData.toString());
      }

      if (currentStageIdData) {
        setCurrentStage(currentStageIdData.toString());

        let tmp = parseInt(currentStageIdData);
        setNextStage(tmp + 1);

        if (maxStage < tmp + 1) {
          setNextStage(tmp);
        }
      }

      if (currentStageInfoData) {
        let tmp = formatEther(currentStageInfoData[2]);
        setCurrentPrice(tmp + " " + payWith);
      }

      if (nextStageInfoData) {
        let tmp = formatEther(nextStageInfoData[2]);
        setNextPrice(tmp + " " + payWith);
      }
    }
  }, [
    isConnected,
    tokenNameData,
    tokenSymbolData,
    maxStageData,
    currentStageIdData,
    currentStageInfoData,
    nextStageInfoData,
    maxStage,
  ]);

  return (
    <TokenInfoWrapper>
      <li className="token-detail-res"><p className="token">Token Symbol</p><p className="token">{tokenSymbol}</p></li>
      <li className="token-detail-res"><p className="token">Token Name</p><p className="token">{tokenName}</p></li>
      <li className="token-detail-res">
        <p className="token">Supply</p>
        <p className="token">{tokensupply}</p>
      </li>
      <li className="token-detail-res">
        <p className="token">Blockchain <br /> Network</p>
        <p className="token">{tokenstandand}</p>
      </li>
      <li className="token-detail-res">
        <p className="token">Contract Address</p>
        <Link to='https://bscscan.com/token/0x215cbd4ebe5349680428401acd5e3a270f882bd5#code' target="_post"><p className="autop">0x215cbd4ebe5349680<br />428401acd5e3a270f882bd5</p></Link>
      </li>
    </TokenInfoWrapper>
  );
};

export default TokenDetails;
