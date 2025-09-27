//token contract abi json
import TokenContractAbi from "./GittuTokenAbi.json";

//token presale contract abi json
import PresaleContractAbi from "./GittuPresaleAbi.json";

//GUSDT abi json
import UsdtContractAbi from "./GittuUsdtAbi.json";

//token contract address
//Testnet
// const tokenContractAddress = "0x0127498f567818F315eD6Cd05c31D85a030afce0";

//Mainnet BSC
const tokenContractAddress = "0x215cbd4ebe5349680428401aCD5E3a270f882bD5";


//token presale contract address
//Testnet
// const presaleContractAddress = "0x77a592669C6eD45f883C5b8350A15fe91275450C";

//Mainnet BSC
//old
// const presaleContractAddress = "0x4191ED7cAF671D5229D388a7449CdD1c7ac59B8D";
//new
const presaleContractAddress = "0x8A84ca687cBF8DC0415966A4508C10E0fAD13C66";


//USDT contract address
//testnet USDT
// const usdtContractAddress = "0x325a4deFFd64C92CF627Dd72d118f1b8361c5691";
// mainnet usdt
const usdtContractAddress = "0x55d398326f99059ff775485246999027b3197955";



//payment with (eg. ETH, BNB, MATIC etc.)
export const payWith = "BNB";

//presale contrat address as spendar
export const presaleSpendar = presaleContractAddress;

//token contract configuration
export const tokenContractConfig = {
  address: tokenContractAddress,
  abi: TokenContractAbi,
};

//token name read
export const tokenNameCall = {
  ...tokenContractConfig,
  functionName: "name",
  watch: true,
};

//token symbol read
export const tokenSymbolCall = {
  ...tokenContractConfig,
  functionName: "symbol",
  watch: true,
};

//token Presale contract configuration
export const presaleContractConfig = {
  address: presaleContractAddress,
  abi: PresaleContractAbi,
};

//presale token amount read
export const presaleTokenAmountCall = {
  ...presaleContractConfig,
  functionName: "presaleTokenAmount",
  watch: true,
};

//token total sold read
export const totalSoldCall = {
  ...presaleContractConfig,
  functionName: "totalSold",
  watch: true,
};

//maximum stage read
export const maxStageCall = {
  ...presaleContractConfig,
  functionName: "maxStage",
  watch: true,
};

//current stage id read
export const currentStageIdCall = {
  ...presaleContractConfig,
  functionName: "getCurrentStageIdActive",
  watch: true,
};

//stage info read
export const currentStageInfoCall = {
  ...presaleContractConfig,
  functionName: "stages",
  watch: true,
};

//soft cap read
export const softCapCall = {
  ...presaleContractConfig,
  functionName: "softCap",
  watch: true,
};

//hard cap read
export const hardCapCall = {
  ...presaleContractConfig,
  functionName: "hardCap",
  watch: true,
};

//total fund read
export const totalFundCall = {
  ...presaleContractConfig,
  functionName: "totalFund",
  watch: true,
};

//buy token write
export const buyTokenCall = {
  ...presaleContractConfig,
  functionName: "buyToken",
  watch: true,
};

//buy token with usdt write
export const buyTokenWithUsdtCall = {
  ...presaleContractConfig,
  functionName: "buyTokenWithUsdt",
  watch: true,
};

//USDT contract configuration
export const usdtContractConfig = {
  address: usdtContractAddress,
  abi: UsdtContractAbi,
};

//approve write
export const usdtApproveCall = {
  ...usdtContractConfig,
  functionName: "approve",
  watch: true,
};

//ETH to USD exchange rate
export const GetUSDExchangeRate = async () => {
  var requestOptions = { method: "GET", redirect: "follow" };
  return fetch(
    "https://api.coinbase.com/v2/exchange-rates?currency=BNB",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result.data.rates.USD;
    })
    .catch((error) => {
      return "error", error;
    });
};

//USDT to USD exchange rate
export const GetUSDTExchangeRate = async () => {
  var requestOptions = { method: "GET", redirect: "follow" };
  return fetch(
    "https://api.coinbase.com/v2/exchange-rates?currency=USDT",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result.data.rates.USD;
    })
    .catch((error) => {
      return "error", error;
    });
};

//PEPE INU Token Sold From Contract
export const Getpepecontractsold = async () => {
  var requestOptions = { method: "GET", redirect: "follow" };
  return fetch(
    "https://tronweb.companywebsite.in/pepetokensold",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result.formattedResult;
    })
    .catch((error) => {
      return "error", error;
    });
};
