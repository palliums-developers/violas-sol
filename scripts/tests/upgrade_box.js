// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading Box...");
  const box = await upgrades.upgradeProxy("0x5FC8d32690cc91D4c39d9d3abcBD16989F875707", BoxV2);
  console.log("Box upgraded");
}

main();
