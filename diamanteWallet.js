// server/diamanteWallet.js

const Web3 = require('web3');
const config = require('./utils/config');

const web3 = new Web3(new Web3.providers.HttpProvider(config.DIAMANTE_RPC_URL));

// Create Diamante wallet
const diamanteWallet = web3.eth.accounts.privateKeyToAccount(config.DIAMANTE_PRIVATE_KEY);

module.exports = {
  web3,
  diamanteWallet,
};

