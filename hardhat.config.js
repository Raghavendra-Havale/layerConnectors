require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter");
require("solidity-coverage");


const url=process.env.ARBITRUM_RPC_URL;
const wallet=process.env.PRIVATE_KEY;
const coinKey=process.env.COINMARKETCAP_API_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    arbitrum: {
      url: url,
      accounts: [wallet],
      chainId: 42161,
      maxFeePerGas:100000000
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      chainId:31337,
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 180
      }
    }
  },
  etherscan: {
    apiKey: process.env.ARBISCAN_API_KEY,
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: coinKey,
    token: "MATIC",

  }
};
