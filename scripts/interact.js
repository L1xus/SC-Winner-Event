const { ethers } = require("hardhat");

async function main() {
    const contract = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
    const interactContract = await ethers.getContractFactory("Interact");
    console.log("Deploying Contract...");
    const deployContract = await interactContract.deploy();
    await deployContract.waitForDeployment();
    console.log(`Deployed Contract to : ${deployContract.target}`);
    
    await deployContract.interact(contract);



}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});