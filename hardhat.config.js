require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: process.env.GOERLI_ALCHEMY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY]
    },
  }
};