require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://solitary-tiniest-night.ethereum-sepolia.discover.quiknode.pro/197ca8ecbdf07f6671e6be44b995538a4b9fc04f/",
      accounts: ['097aa3944d81034a836676e63d3c2bd7b9c1ada9887c8cb689c53367378bd8c6'],
    },
  },
};
