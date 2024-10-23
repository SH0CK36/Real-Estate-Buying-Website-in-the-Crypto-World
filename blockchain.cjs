const Web3 = require('web3');
const web3 = new Web3(process.env.BLOCKCHAIN_RPC_URL);
const contractABI = require('./YourContractABI.json'); // Replace with your contract ABI
const contractAddress = process.env.BLOCKCHAIN_CONTRACT_ADDRESS;

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to store a property on the blockchain
async function storeProperty(property) {
  const accounts = await web3.eth.getAccounts(); // Get the available accounts
  await contract.methods.storeProperty(property).send({ from: accounts[0] });
}

// Function to update a property on the blockchain
async function updateProperty(property) {
  const accounts = await web3.eth.getAccounts(); // Get the available accounts
  await contract.methods.updateProperty(property.propertyId, property).send({ from: accounts[0] });
}

module.exports = {
  storeProperty,
  updateProperty,
};
