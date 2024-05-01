require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    cantoTestnet: {
      url: 'https://canto-testnet.plexnode.wtf',
      chainId: 7701,
      gasPrice: 20000000000, // 20 Gwei
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  defaultNetwork: 'cantoTestnet'
};
