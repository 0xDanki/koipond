/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.19",
  networks: {
   "mantle-testnet": {
       url: "https://rpc.ankr.com/mantle_testnet",
     accounts: [process.env.PRIVATE_KEY], // Uses the private key from the .env file
   }
 }
};