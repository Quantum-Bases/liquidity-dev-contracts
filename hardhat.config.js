require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "0e7a3adb558a42fc83a09506c606a272";
const privateKey = "6caba9dd2c3c85a49ad7e5f27fcf6514b3418827875be775c165ee24141404d3";


module.exports = {
  solidity: "0.6.11",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [privateKey]
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 500,
    },
  },
};