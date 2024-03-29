const logger    = require("../logger");
const deploy    = require("./deploy.js");
const { ethers, upgrades } = require("hardhat");

async function main() {
    tokens = deploy.new_token_list();
    const accounts = await ethers.provider.listAccounts();
    owner = accounts[0];

    for (let i = 0; i < tokens.length; i++) {
        let address = tokens[i]["address"];
        logger.table(tokens[i], "deploy:" + tokens[i].symbol)
        if (tokens[i].create == undefined || tokens[i].create) {
            let decimals    = tokens[i].decimals == undefined || tokens[i].decimals <= 0 ? 18 : tokens[i].decimals;
            let dp          = await deploy.deploy(tokens[i].name, tokens[i].symbol, decimals);
            address         = dp.address;
        }
    
        if (tokens[i].mint == undefined || tokens[i].mint > 0) {
            let dp          = await deploy.get_contract(address);
            let decimals    = Math.pow(10, await dp.decimals());
            let amount_str  = tokens[i].mint == undefined ? decimals.toString() + 1000000 : (tokens[i].mint).toString() + decimals.toString();
            let amount      = ethers.BigNumber.from(amount_str);
            
            logger.info("current totalSupply: " + (await dp.totalSupply()).toString());
            logger.info("mint " + tokens[i].symbol + " amount = " + amount + " to " + owner);
            await dp.mint(owner, amount);
            logger.info("new totalSupply: " + (await dp.totalSupply()).toString());
        }
    }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
