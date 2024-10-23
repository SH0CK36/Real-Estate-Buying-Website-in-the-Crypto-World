import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: "WqmXAYaITdQVHtUNjUCpqW8arcUmzScN",  // Use the API key you got from Alchemy
  network: Network.ETH_MAINNET,  // Specify the network, e.g., ETH_MAINNET
};

const alchemy = new Alchemy(settings);

// Example: Fetch NFTs owned by an Ethereum address
alchemy.nft.getNftsForOwner("vitalik.eth").then(console.log).catch(console.error);