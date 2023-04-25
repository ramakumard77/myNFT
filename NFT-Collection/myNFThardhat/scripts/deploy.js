const { ethers } = require("hardhat");
// require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  //const whitelistContract = "0xfb7C48F12Df1E37d7bf7985b3519D5281e6e2481";
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  //const metadataURL = "https://nft-collection-sneh1999.vercel.app/api/";
  const metadataURL = METADATA_URL;
  
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // Wait for it to finish deploying
  await deployedCryptoDevsContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });