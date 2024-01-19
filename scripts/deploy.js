const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const stabilitypool = await ethers.deployContract("StabilityPool");
  console.log("StabilityPool address:", await stabilitypool.getAddress());

  const trovemanager = await ethers.deployContract("TroveManager");
  console.log("TroveManager address:", await trovemanager.getAddress());

  const activepool = await ethers.deployContract("ActivePool");
  console.log("ActivePool address:", await activepool.getAddress());

  const borroweroperations = await ethers.deployContract("BorrowerOperations");
  console.log("BorrowerOperations address:", await borroweroperations.getAddress());

  const defaultpool = await ethers.deployContract("DefaultPool");
  console.log("DefaultPool address:", await defaultpool.getAddress());

  const sortedtroves = await ethers.deployContract("SortedTroves");
  console.log("SortedTroves address:", await sortedtroves.getAddress());

  const pricefeed = await ethers.deployContract("PriceFeed");
  console.log("PriceFeed address:", await pricefeed.getAddress());

  const unipool = await ethers.deployContract("Unipool");
  console.log("Unipool address:", await unipool.getAddress());

  const nameregistry = await ethers.deployContract("NameRegistry");
  console.log("NameRegistry address:", await nameregistry.getAddress());

  const lqtyStaking = await ethers.deployContract("LQTYStaking");
  console.log("LQTYStaking address:", await lqtyStaking.getAddress());

  const lockupContractFactory = await ethers.deployContract("LockupContractFactory");
  console.log("LockupContractFactory address:", await lockupContractFactory.getAddress());

  const communityIssuance = await ethers.deployContract("CommunityIssuance");
  console.log("CommunityIssuance address:", await communityIssuance.getAddress());

  // _TROVEMANAGERADDRESS,_STABILITYPOOLADDRESS,_BORROWEROPERATIONSADDRESS
  const lusdToken = await ethers.deployContract("LUSDToken", [trovemanager, stabilitypool, borroweroperations]);
  console.log("LUSDToken address:", await lusdToken.getAddress());


  const BOUNTYADDRESS = "0xF06016D822943C42e3Cb7FC3a6A3B1889C1045f8"; // https://etherscan.io/address/0xF06016D822943C42e3Cb7FC3a6A3B1889C1045f8#code
  const MULTISIGADDRESS = "0xb8a9faDA75c6d891fB77a7988Ff9BaD9e485Ca1C"; //https://etherscan.io/address/0xb8a9faDA75c6d891fB77a7988Ff9BaD9e485Ca1C#code
  const lqtyToken = await ethers.deployContract("LQTYToken", [communityIssuance, lqtyStaking, lockupContractFactory
    , BOUNTYADDRESS, unipool, MULTISIGADDRESS]);
  console.log("LQTYToken address:", await lqtyToken.getAddress());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
