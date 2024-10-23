const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const path = require('path');

module.exports = {
  contracts_build_directory: path.join(__dirname, "build/contracts"), // Ensure this path is correct
  networks: {
    development: {
      provider: () => {
        if (process.env.PRIVATE_KEY) {
          return new HDWalletProvider(
            process.env.PRIVATE_KEY,
            process.env.NETWORK_URL
          );
        } else if (process.env.MNEMONIC) {
          return new HDWalletProvider(
            process.env.MNEMONIC,
            process.env.NETWORK_URL
          );
        } else {
          throw new Error('Private key or mnemonic not provided.');
        }
      },
      network_id: '*',
      gas: 6721975,
      gasPrice: 20000000000
    }
  },
  compilers: {
    solc: {
      version: "0.8.18",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};

